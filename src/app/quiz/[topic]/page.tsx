'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import QuizFrage from './QuizFrage'

type Frage = {
  id: string
  question: string
  answers: string[]
  correctIndexes: number[]   
  explanation: string
  explanationWrong: string[]
}

export default function QuizPage() {
  const { topic } = useParams()
  const [fragen, setFragen] = useState<Frage[]>([])
  const [aktuelleFrage, setAktuelleFrage] = useState(0)
  const [answered, setAnswered] = useState<boolean[]>([])
  const [correctCount, setCorrectCount] = useState(0)
  const [answeredCount, setAnsweredCount] = useState(0)

  useEffect(() => {
    const fetchFragen = async () => {
      const res = await fetch(`/api/questions/${topic}`)
      const data = await res.json()
      // Wenn correctIndexes als JSON-String kommt:
      const parsedData = data.map((frage: Frage): Frage => ({
        ...frage,
        correctIndexes: Array.isArray(frage.correctIndexes)
          ? frage.correctIndexes
          : JSON.parse(frage.correctIndexes ?? '[]'),
      }))
      console.log(parsedData)
      setFragen(parsedData)
      setAnswered(new Array(parsedData.length).fill(false))
      setCorrectCount(0)
      setAnsweredCount(0)
    }
    fetchFragen()
  }, [topic])

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
