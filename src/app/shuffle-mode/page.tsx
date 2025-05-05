'use client'

import { useEffect, useState, useCallback } from 'react'
import QuizFrage from '../quiz/[topic]/QuizFrage'
import { Switch } from "@/components/ui/switch"
import LanguageSwitcherDialog from '@/components/LanguageSwitcherDialog'
import { Loader2, Shuffle } from "lucide-react"
import { Button } from "@/components/ui/button"

type Frage = {
  id: string
  question: string
  answers: string[]
  correctIndexes: number[]
  explanation: string
  explanationWrong: string[]
  topic: string
  language: string
}

type ShuffleProgress = {
  currentQuestion: number
  answered: boolean[]
  correctCount: number
  answeredCount: number
  language: string
  questionIds: string[]
}

export default function ShuffleModePage() {
  const [fragen, setFragen] = useState<Frage[]>([])
  const [questionPool, setQuestionPool] = useState<Frage[]>([])
  const [aktuelleFrage, setAktuelleFrage] = useState(0)
  const [answered, setAnswered] = useState<boolean[]>([])
  const [correctCount, setCorrectCount] = useState(0)
  const [answeredCount, setAnsweredCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [language, setLanguage] = useState<'de' | 'en'>('de')
  const [showLanguageDialog, setShowLanguageDialog] = useState(false)

  // Sprache aus SessionStorage laden
  useEffect(() => {
    const savedLang = sessionStorage.getItem('shuffle-selected-language') as 'de' | 'en' | null
    if (savedLang && savedLang !== language) {
      setLanguage(savedLang)
    }
  }, [language])

  const saveProgress = useCallback((currentQuestion: number, answeredState: boolean[], correct: number, answeredTotal: number, questionIds: string[]) => {
    const progressData: ShuffleProgress = {
      currentQuestion,
      answered: answeredState,
      correctCount: correct,
      answeredCount: answeredTotal,
      language,
      questionIds,
    }
    try {
      sessionStorage.setItem(`shuffle-progress-${language}`, JSON.stringify(progressData))
    } catch (error) {
      console.error("Fehler beim Speichern des Fortschritts:", error)
    }
  }, [language])

  const loadProgress = useCallback((): ShuffleProgress | null => {
    try {
      const savedProgress = sessionStorage.getItem(`shuffle-progress-${language}`)
      if (savedProgress) {
        return JSON.parse(savedProgress) as ShuffleProgress
      }
    } catch (error) {
      console.error("Fehler beim Laden des Fortschritts:", error)
    }
    return null
  }, [language])

  const shuffleQuestions = useCallback((questions: Frage[]) => {
    const shuffled = [...questions]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }, [])

  useEffect(() => {
    const fetchAllQuestions = async () => {
      setIsLoading(true)
      try {
        const topics = ["Grundlagen", "Datentypen", "Print_Input", "Schleifen", "Datenstrukturen", "Funktionen"]
        let allQuestions: Frage[] = []
        
        for (const topic of topics) {
          const res = await fetch(`/api/questions/${topic}?lang=${language}`)
          const data = await res.json()
          const parsedData = data.map((frage: Frage): Frage => ({
            ...frage,
            correctIndexes: Array.isArray(frage.correctIndexes)
              ? frage.correctIndexes
              : JSON.parse(frage.correctIndexes ?? '[]'),
            topic: topic
          }))
          allQuestions = [...allQuestions, ...parsedData]
        }
        
        setQuestionPool(allQuestions)

        const savedProgress = loadProgress()
        if (savedProgress && savedProgress.language === language && savedProgress.questionIds.length > 0) {
          // Wiederherstellung des Fortschritts
          const restoredQuestions = savedProgress.questionIds.map(id => 
            allQuestions.find(q => q.id === id)
          ).filter(Boolean) as Frage[]
          
          if (restoredQuestions.length === savedProgress.questionIds.length) {
            setFragen(restoredQuestions)
            setAktuelleFrage(savedProgress.currentQuestion)
            setAnswered(savedProgress.answered)
            setCorrectCount(savedProgress.correctCount)
            setAnsweredCount(savedProgress.answeredCount)
            console.log("Fortschritt wiederhergestellt:", savedProgress)
          } else {
            // Fortschritt inkonsistent, neue Fragen laden
            initializeNewSession(allQuestions)
          }
        } else {
          initializeNewSession(allQuestions)
        }
      } catch (error) {
        console.error("Fehler beim Laden der Fragen:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAllQuestions()
  }, [language, loadProgress, shuffleQuestions])

  const initializeNewSession = useCallback((allQuestions: Frage[]) => {
    const shuffledQuestions = shuffleQuestions(allQuestions)
    setFragen(shuffledQuestions)
    setAktuelleFrage(0)
    setAnswered(new Array(shuffledQuestions.length).fill(false))
    setCorrectCount(0)
    setAnsweredCount(0)
  }, [shuffleQuestions])

  useEffect(() => {
    if (fragen.length > 0 && !isLoading) {
      const questionIds = fragen.map(q => q.id)
      saveProgress(aktuelleFrage, answered, correctCount, answeredCount, questionIds)
    }
  }, [aktuelleFrage, answered, correctCount, answeredCount, fragen, isLoading, saveProgress])

  const handleLanguageChange = () => {
    const newLang = language === 'de' ? 'en' : 'de'
    sessionStorage.removeItem(`shuffle-progress-${language}`)
    sessionStorage.setItem('shuffle-selected-language', newLang)
    setLanguage(newLang)
    setShowLanguageDialog(false)
  }

  const handleReshuffleCurrent = () => {
    if (questionPool.length > 0) {
      const shuffledQuestions = shuffleQuestions(questionPool)
      setFragen(shuffledQuestions)
      setAktuelleFrage(0)
      setAnswered(new Array(shuffledQuestions.length).fill(false))
      setCorrectCount(0)
      setAnsweredCount(0)
      // Lösche den gespeicherten Fortschritt beim Reshuffle
      sessionStorage.removeItem(`shuffle-progress-${language}`)
    }
  }

  if (isLoading) return (
    <div className="flex flex-col items-center justify-center h-[50vh] p-8">
      <div className="bg-card rounded-lg border border-border shadow-sm p-8 flex flex-col items-center space-y-4">
        <Loader2 className="h-10 w-10 text-primary animate-spin" />
        <p className="text-muted-foreground font-medium">
          {language === 'de' ? 'Fragen werden geladen...' : 'Loading questions...'}
        </p>
      </div>
    </div>
  )
  
  if (fragen.length === 0) return (
    <div className="flex flex-col items-center justify-center h-[50vh] p-8">
      <div className="bg-card rounded-lg border border-border shadow-sm p-8 flex flex-col items-center space-y-4">
        <p className="text-muted-foreground font-medium">
          {language === 'de' ? 'Keine Fragen gefunden.' : 'No questions found.'}
        </p>
      </div>
    </div>
  )

  const aktuelle = fragen[aktuelleFrage]

  const handleNext = (wasCorrect: boolean) => {
    setAnswered((prev) => {
      const updated = [...prev]
      updated[aktuelleFrage] = true
      return updated
    })
    setAnsweredCount((prev) => prev + 1)
    if (wasCorrect) setCorrectCount((prev) => prev + 1)
    setAktuelleFrage((prev) => Math.min(prev + 1, fragen.length - 1))
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4 bg-muted rounded-lg px-4 py-2 shadow-sm">
          <span className="text-sm font-medium text-gray-700">Sprache:</span>
          <span className="text-sm font-semibold">{language.toUpperCase()}</span>
          <div className="flex items-center space-x-2">
            <span className="text-xs">DE</span>
            <Switch checked={language === 'en'} onCheckedChange={() => setShowLanguageDialog(true)} />
            <span className="text-xs">EN</span>
          </div>
        </div>

        <Button
          onClick={handleReshuffleCurrent}
          variant="outline"
          className="flex items-center gap-2"
        >
          <Shuffle className="h-4 w-4" />
          {language === 'de' ? 'Fragen mischen' : 'Reshuffle'}
        </Button>
      </div>

      <LanguageSwitcherDialog
        open={showLanguageDialog}
        onClose={() => setShowLanguageDialog(false)}
        onConfirm={handleLanguageChange}
      />

      <div className="bg-card rounded-lg border border-border shadow-sm p-6">
        <QuizFrage
          id={aktuelle.id}
          question={aktuelle.question}
          answers={aktuelle.answers}
          correctIndexes={aktuelle.correctIndexes}
          explanation={aktuelle.explanation}
          explanationWrong={aktuelle.explanationWrong}
          onNext={aktuelleFrage < fragen.length - 1 ? handleNext : undefined}
          currentIndex={aktuelleFrage}
          total={fragen.length}
          onJumpTo={setAktuelleFrage}
          answered={answered}
          correctCount={correctCount}
          answeredCount={answeredCount}
        />
      </div>
    </div>
  )
}