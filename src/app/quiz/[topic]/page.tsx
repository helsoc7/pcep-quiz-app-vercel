'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import QuizFrage from './QuizFrage'

type Frage = {
  id: string
  question: string
  answers: string[]
  correctIndex: number
  explanation: string
  explanationWrong: string[]
}

export default function QuizPage() {
  const { topic } = useParams()
  const [fragen, setFragen] = useState<Frage[]>([])
  const [aktuelleFrage, setAktuelleFrage] = useState(0)
  const [answered, setAnswered] = useState<boolean[]>([])

  useEffect(() => {
    const fetchFragen = async () => {
      const res = await fetch(`/api/questions/${topic}`)
      const data = await res.json()
      setFragen(data)
      setAnswered(new Array(data.length).fill(false))
    }
    fetchFragen()
  }, [topic])

  if (fragen.length === 0) return <p className="p-4">Fragen werden geladen...</p>

  const aktuelle = fragen[aktuelleFrage]

  const handleNext = () => {
    setAnswered((prev) => {
        const updated = [...prev]
        updated[aktuelleFrage] = true
        return updated
      })
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
      />
    </div>
  )
}
