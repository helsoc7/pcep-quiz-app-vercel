'use client'

import { useEffect, useState, useCallback } from 'react'
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

type QuizProgress = {
  currentQuestion: number;
  answered: boolean[];
  correctCount: number;
  answeredCount: number;
  topic: string;
}

export default function QuizPage() {
  const { topic } = useParams() as { topic: string }
  const [fragen, setFragen] = useState<Frage[]>([])
  const [aktuelleFrage, setAktuelleFrage] = useState(0)
  const [answered, setAnswered] = useState<boolean[]>([])
  const [correctCount, setCorrectCount] = useState(0)
  const [answeredCount, setAnsweredCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  // Funktion zum Speichern des Fortschritts im SessionStorage
  // Mit useCallback, damit die Funktion nicht bei jedem Rendering neu erstellt wird
  const saveProgress = useCallback((currentQuestion: number, answeredState: boolean[], correct: number, answeredTotal: number) => {
    const progressData: QuizProgress = {
      currentQuestion,
      answered: answeredState,
      correctCount: correct,
      answeredCount: answeredTotal,
      topic: topic as string
    }
    
    try {
      sessionStorage.setItem(`quiz-progress-${topic}`, JSON.stringify(progressData))
    } catch (error) {
      console.error("Fehler beim Speichern des Fortschritts:", error)
    }
  }, [topic])

  // Funktion zum Laden des Fortschritts aus dem SessionStorage
  // Mit useCallback, damit die Funktion nicht bei jedem Rendering neu erstellt wird
  const loadProgress = useCallback((): QuizProgress | null => {
    try {
      const savedProgress = sessionStorage.getItem(`quiz-progress-${topic}`)
      if (savedProgress) {
        return JSON.parse(savedProgress) as QuizProgress
      }
    } catch (error) {
      console.error("Fehler beim Laden des Fortschritts:", error)
    }
    return null
  }, [topic])

  useEffect(() => {
    const fetchFragen = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`/api/questions/${topic}`)
        const data = await res.json()
        
        // Wenn correctIndexes als JSON-String kommt:
        const parsedData = data.map((frage: Frage): Frage => ({
          ...frage,
          correctIndexes: Array.isArray(frage.correctIndexes)
            ? frage.correctIndexes
            : JSON.parse(frage.correctIndexes ?? '[]'),
        }))
        
        setFragen(parsedData)
        
        // Versuche, gespeicherten Fortschritt zu laden
        const savedProgress = loadProgress()
        
        if (savedProgress && savedProgress.topic === topic && savedProgress.answered.length === parsedData.length) {
          // Fortschritt wiederherstellen
          setAktuelleFrage(savedProgress.currentQuestion)
          setAnswered(savedProgress.answered)
          setCorrectCount(savedProgress.correctCount)
          setAnsweredCount(savedProgress.answeredCount)
          console.log("Fortschritt wiederhergestellt:", savedProgress)
        } else {
          // Neuen Fortschritt initialisieren
          setAktuelleFrage(0)
          setAnswered(new Array(parsedData.length).fill(false))
          setCorrectCount(0)
          setAnsweredCount(0)
        }
      } catch (error) {
        console.error("Fehler beim Laden der Fragen:", error)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchFragen()
  }, [topic, loadProgress]) // loadProgress als Abhängigkeit hinzugefügt

  // Speichere Fortschritt bei Änderungen
  useEffect(() => {
    if (fragen.length > 0 && !isLoading) {
      saveProgress(aktuelleFrage, answered, correctCount, answeredCount)
    }
  }, [aktuelleFrage, answered, correctCount, answeredCount, fragen.length, isLoading, saveProgress]) // saveProgress als Abhängigkeit hinzugefügt

  if (isLoading) return <p className="p-4">Fragen werden geladen...</p>
  if (fragen.length === 0) return <p className="p-4">Keine Fragen für dieses Thema gefunden.</p>

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

  const handleReset = () => {
    // Fortschritt zurücksetzen
    const newAnswered = new Array(fragen.length).fill(false)
    setAktuelleFrage(0)
    setAnswered(newAnswered)
    setCorrectCount(0)
    setAnsweredCount(0)
    
    // Auch im SessionStorage zurücksetzen
    saveProgress(0, newAnswered, 0, 0)
  }

  const quizCompleted = answered.every(a => a)

  return (
    <div className="p-6">
      {quizCompleted && (
        <div className="max-w-2xl mx-auto mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <h2 className="text-lg font-bold text-green-800">Quiz abgeschlossen!</h2>
            <p className="text-green-700">
              Du hast {correctCount} von {answeredCount} Fragen richtig beantwortet 
              ({Math.round((correctCount / answeredCount) * 100)}%).
            </p>
          </div>
          <button 
            onClick={handleReset}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors mb-4"
          >
            Quiz zurücksetzen
          </button>
        </div>
      )}
      
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