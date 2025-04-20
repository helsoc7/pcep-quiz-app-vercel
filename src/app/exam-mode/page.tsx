'use client'

import { useEffect, useState } from 'react'
import QuizFrage from '../quiz/[topic]/QuizFrage'

type Frage = {
  id: string
  question: string
  answers: string[]
  correctIndex: number
  explanation: string
  explanationWrong: string[]
  nextRound?: number
}

export default function ExamPage() {
  const [fragen, setFragen] = useState<Frage[]>([])
  const [aktuelleFrage, setAktuelleFrage] = useState(0)
  const [answered, setAnswered] = useState<boolean[]>([])
  const [correctCount, setCorrectCount] = useState(0)
  const [answeredCount, setAnsweredCount] = useState(0)

  useEffect(() => {
    const fetchFragen = async () => {
      const res = await fetch('/api/exam/questions')
      const raw: Frage[] = await res.json()

      const expanded = raw.flatMap((frage) => {
        const weight = Math.max(1, 5 - (frage.nextRound ?? 0))

        const parsedFrage: Frage = {
          id: frage.id,
          question: frage.question,
          answers: Array.isArray(frage.answers) ? frage.answers : JSON.parse(frage.answers),
          correctIndex: frage.correctIndex,
          explanation: frage.explanation,
          explanationWrong: Array.isArray(frage.explanationWrong) ? frage.explanationWrong : JSON.parse(frage.explanationWrong),
          nextRound: frage.nextRound,
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
    }

    fetchFragen()
  }, [])

  if (fragen.length === 0) return <p className="p-4">Fragen werden geladen...</p>

  const aktuelle = fragen[aktuelleFrage]

  const handleNext = (wasCorrect: boolean) => {
    setAnswered((prev) => {
      const updated = [...prev]
      updated[aktuelleFrage] = true
      return updated
    })

    setAnsweredCount((prev) => prev + 1)

    if (wasCorrect) {
      setCorrectCount((prev) => prev + 1)
    }

    setAktuelleFrage((prev) => Math.min(prev + 1, fragen.length - 1))
  }

  const handleJumpTo = (index: number) => {
    setAktuelleFrage(index)
  }

  return (
    <div className="p-6">
      <QuizFrage
        id={aktuelle.id}
        question={aktuelle.question}
        answers={aktuelle.answers}
        correctIndex={aktuelle.correctIndex}
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