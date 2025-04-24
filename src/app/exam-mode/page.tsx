'use client'

import { useEffect, useState } from 'react'
import QuizFrage from '../quiz/[topic]/QuizFrage'
import LanguageSwitcherDialog from '@/components/LanguageSwitcherDialog'
import { Switch } from '@/components/ui/switch'

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
  const [showLanguageDialog, setShowLanguageDialog] = useState(false)

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

  const handleLanguageConfirm = () => {
    const newLang = language === 'de' ? 'en' : 'de'
    sessionStorage.setItem('exam-selected-language', newLang)
    setLanguage(newLang)
    setShowLanguageDialog(false)
  }

  if (fragen.length === 0) return <p className="p-4">Fragen werden geladen...</p>

  return (
    <div className="p-6">
      {/* Sprachumschalter */}
      <div className="flex justify-center items-center mb-6">
        <div className="flex items-center space-x-4 bg-muted rounded-lg px-4 py-2 shadow-sm">
          <span className="text-sm font-medium text-gray-700">Sprache:</span>
          <span className="text-sm font-semibold">{language.toUpperCase()}</span>
          <div className="flex items-center space-x-2">
            <span className="text-xs">DE</span>
            <Switch checked={language === 'en'} onCheckedChange={() => setShowLanguageDialog(true)} />
            <span className="text-xs">EN</span>
          </div>
        </div>
      </div>

      {/* Dialog */}
      <LanguageSwitcherDialog
        open={showLanguageDialog}
        onClose={() => setShowLanguageDialog(false)}
        onConfirm={handleLanguageConfirm}
      />

      {/* Quiz */}
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
  )
}
