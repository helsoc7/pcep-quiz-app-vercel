'use client'

import { useEffect, useState } from 'react'
import QuizFrage from '../quiz/[topic]/QuizFrage'
import { motion } from "framer-motion"
import { CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

type Frage = {
  id: string
  question: string
  answers: string[]
  correctIndexes: number[]
  explanation: string
  explanationWrong: string[]
  nextRound?: number
  language: string
}

export default function ExamPage() {
  const [fragen, setFragen] = useState<Frage[]>([])
  const [aktuelleFrage, setAktuelleFrage] = useState(0)
  const [answered, setAnswered] = useState<boolean[]>([])
  const [correctCount, setCorrectCount] = useState(0)
  const [answeredCount, setAnsweredCount] = useState(0)
  const [language, setLanguage] = useState<'de' | 'en'>('de')
  // const [showLanguageDialog, setShowLanguageDialog] = useState(false)
  const [manuallyFinished, setManuallyFinished] = useState(false)

  // Sprache beim Laden aus dem sessionStorage holen
  useEffect(() => {
    const savedLang = sessionStorage.getItem('exam-selected-language') as 'de' | 'en' | null
    if (savedLang) {
      setLanguage(savedLang)
    }
  }, [])

  // Fragen laden
  useEffect(() => {
    const fetchFragen = async () => {
      const res = await fetch(`/api/exam/questions?lang=${language}`)
      const raw: Frage[] = await res.json()

      const expanded = raw.flatMap((frage) => {
        const weight = Math.max(1, 5 - (frage.nextRound ?? 0))

        const parsedFrage: Frage = {
          ...frage,
          answers: Array.isArray(frage.answers) ? frage.answers : JSON.parse(frage.answers),
          explanationWrong: Array.isArray(frage.explanationWrong) ? frage.explanationWrong : JSON.parse(frage.explanationWrong),
        }

        return Array(weight).fill(parsedFrage)
      })

      let final = [...expanded]
      while (final.length < 40) {
        final = [...final, ...expanded]
      }

      const shuffled = final.sort(() => Math.random() - 0.5).slice(0, 40)
      setFragen(shuffled)
      setAnswered(new Array(shuffled.length).fill(false))
      setCorrectCount(0)
      setAnsweredCount(0)
      setAktuelleFrage(0)
      setManuallyFinished(false)
    }

    fetchFragen()
  }, [language])

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

  const handleJumpTo = (index: number) => {
    setAktuelleFrage(index)
  }

  // const handleLanguageConfirm = () => {
  //   const newLang = language === 'de' ? 'en' : 'de'
  //   sessionStorage.setItem('exam-selected-language', newLang)
  //   setLanguage(newLang)
  //   setShowLanguageDialog(false)
  // }
  
  const handleCancel = () => {
    // Immer den manuellen Beendigungsmodus aktivieren, wenn auf Beenden geklickt wird
    setManuallyFinished(true)
  }
  
  const isFinished = answeredCount === fragen.length || manuallyFinished
  if (fragen.length === 0) return (
    <div className="flex flex-col items-center justify-center h-[50vh] p-8">
      <div className="bg-card rounded-lg border border-border shadow-sm p-8 flex flex-col items-center space-y-4">
        <Loader2 className="h-10 w-10 text-primary animate-spin" />
        <p className="text-muted-foreground font-medium">
          {language === 'de' ? 'Fragen werden geladen...' : 'Loading questions...'}
        </p>
      </div>
    </div>
  )

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header-Bereich mit Sprachumschalter und Beenden-Button */}
      <div className="bg-card rounded-lg border border-border shadow-sm p-4 mb-6 flex items-center justify-between">
        <div className="flex items-center">
          <span className="mr-3 text-sm font-medium text-foreground">{language === 'de' ? 'Sprache:' : 'Language:'}</span>
          <div className="flex items-center rounded-md border border-input bg-background p-0.5">
            <button 
              onClick={() => { setLanguage('de'); sessionStorage.setItem('exam-selected-language', 'de'); }}
              className={`px-2.5 py-1.5 text-xs font-medium rounded-sm transition-colors ${language === 'de' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'}`}
            >
              DE
            </button>
            <button 
              onClick={() => { setLanguage('en'); sessionStorage.setItem('exam-selected-language', 'en'); }}
              className={`px-2.5 py-1.5 text-xs font-medium rounded-sm transition-colors ${language === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'}`}
            >
              EN
            </button>
          </div>
        </div>
        
        <Button 
          variant="outline" 
          size="sm"
          className="text-primary hover:bg-primary/10 hover:text-primary border-primary/20"
          onClick={handleCancel}
        >
          {language === 'de' ? 'Prüfung abgeben' : 'Submit exam'}
        </Button>
      </div>

      {/* Dialog wird nicht mehr benötigt, da wir direkte Buttons verwenden */}
      
      {isFinished ? (
        <div className="bg-white rounded-lg shadow-md p-8 mx-auto max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
          <CheckCircle className="mx-auto text-green-500 w-16 h-16" />
          <h2 className="text-2xl font-bold">
            {manuallyFinished 
              ? (language === 'de' ? 'Prüfung beendet!' : 'Exam ended!') 
              : (language === 'de' ? 'Fertig! 🎉' : 'Finished! 🎉')}
          </h2>
          <p className="text-gray-600">
            {manuallyFinished 
              ? (language === 'de' 
                  ? `Du hast ${answeredCount} von ${fragen.length} Fragen beantwortet.` 
                  : `You answered ${answeredCount} out of ${fragen.length} questions.`)
              : (language === 'de'
                  ? `Du hast alle ${fragen.length} Fragen beantwortet.`
                  : `You answered all ${fragen.length} questions.`)}
          </p>
          <div className="space-y-2 max-w-sm mx-auto">
            <p>
              <span className="font-medium">{language === 'de' ? 'Richtig:' : 'Correct:'}</span> {correctCount}
            </p>
            <p>
              <span className="font-medium">{language === 'de' ? 'Falsch:' : 'Wrong:'}</span> {answeredCount - correctCount}
            </p>
            <p>
              <span className="font-medium">{language === 'de' ? 'Trefferquote:' : 'Success rate:'}</span>{" "}
              {answeredCount > 0 ? ((correctCount / answeredCount) * 100).toFixed(1) : '0.0'}%
            </p>
            <Progress value={answeredCount > 0 ? (correctCount / answeredCount) * 100 : 0} />
          </div>
          <div className="flex space-x-4 justify-center">
            <Button onClick={() => {
              setAnswered(new Array(fragen.length).fill(false))
              setCorrectCount(0)
              setAnsweredCount(0)
              setAktuelleFrage(0)
              setManuallyFinished(false)
            }}>
              {language === 'de' ? 'Erneut versuchen' : 'Try again'}
            </Button>
            <Button variant="outline" onClick={() => window.location.href = '/'}>
              {language === 'de' ? 'Zur Startseite' : 'Home'}
            </Button>
          </div>
          </motion.div>
        </div>
      ) : (
        /* Quiz */
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
          onJumpTo={handleJumpTo}
          answered={answered}
          correctCount={correctCount}
          answeredCount={answeredCount}
        />
        </div>
      )}
    </div>
  )
}