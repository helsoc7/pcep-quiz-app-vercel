'use client'

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github.css"
import { Progress } from "@/components/ui/progress"
import { areSetsEqual } from "@/lib/array"

type QuestionProps = {
  id: string
  question: string
  answers: string[]
  correctIndexes: number[]
  explanation: string
  explanationWrong: string[]
  onNext?: (wasCorrect: boolean) => void
  currentIndex?: number
  total?: number
  onJumpTo?: (index: number) => void
  answered?: boolean[]
  correctCount?: number
  answeredCount?: number
}

export default function QuizFrage({
  id,
  question,
  answers,
  correctIndexes,
  explanation,
  explanationWrong,
  onNext,
  currentIndex,
  total,
  onJumpTo,
  answered,
  correctCount,
  answeredCount
}: QuestionProps) {
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  useEffect(() => {
    setSelectedIndexes([])
    setSubmitted(false)
    setIsCorrect(null)
  }, [question])

  const toggleIndex = (index: number) => {
    setSelectedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  const handleSubmit = async () => {
    if (selectedIndexes.length === 0) return
  
    const localIsCorrect = areSetsEqual(selectedIndexes, correctIndexes)
    setIsCorrect(localIsCorrect)
    setSubmitted(true)
  
    // 2. Fortschritt async an Backend senden (non-blocking)
    fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        questionId: id,
        selectedIndexes,
        isCorrect: localIsCorrect
      }),
    }).catch((err) => {
      console.error("Fehler beim Speichern des Fortschritts:", err)
    })
  }

  return (
    <Card className="w-full max-w-2xl mx-auto space-y-6 p-6">
      <CardContent className="space-y-6">
        {/* Fortschrittsleiste */}
        {typeof currentIndex === "number" && typeof total === "number" && (
          <div className="flex justify-center gap-0.5 mb-4">
            {Array.from({ length: total }).map((_, index) => {
              const isActive = index === currentIndex
              const isDone = answered?.[index]

              return (
                <button
                  key={index}
                  className={`w-6 h-6 rounded-full border transition hover:scale-105
                    ${isActive ? "bg-primary" :
                      isDone ? "bg-gray-300" : "bg-muted"}`}
                  onClick={() => onJumpTo?.(index)}
                  title={`Frage ${index + 1}`}
                />
              )
            })}
          </div>
        )}

        {/* Richtige Antworten Skala */}
        {typeof correctCount === "number" && typeof answeredCount === "number" && answeredCount > 0 && (
          <div className="mb-6">
            <p className="text-sm mb-1 text-muted-foreground">
              Richtige Antworten: {correctCount} von {answeredCount} ({Math.round((correctCount / answeredCount) * 100)}%)
            </p>
            <Progress value={(correctCount / answeredCount) * 100} />
          </div>
        )}

        {/* Frage anzeigen */}
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
          {question}
        </ReactMarkdown>

        {/* Antworten */}
        <div className="space-y-2">
          {answers.map((answer, index) => {
            const isSelected = selectedIndexes.includes(index)
            const isCorrectAnswer = correctIndexes.includes(index)
            const isWrongAnswer = submitted && isSelected && !isCorrectAnswer
            // console.log(isCorrectAnswer)
            // console.log(correctIndexes)

            return (
              <Button
                key={index}
                variant={isSelected ? "outline" : "ghost"}
                onClick={() => toggleIndex(index)}
                disabled={submitted}
                className={`w-full justify-start whitespace-normal break-words text-left ${
                  submitted && isCorrectAnswer
                    ? "ring-2 ring-green-500"
                    : submitted && isWrongAnswer
                    ? "ring-2 ring-red-500"
                    : ""
                }`}
              >
                <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                  {answer}
                </ReactMarkdown>
              </Button>
            )
          })}
        </div>

        {!submitted && (
          <Button
            className="w-full mt-4"
            onClick={handleSubmit}
            disabled={selectedIndexes.length === 0}
          >
            {correctIndexes.length > 1 ? "Bestätigen (Mehrfachantwort möglich)" : "Bestätigen"}
          </Button>
        )}

        {submitted && isCorrect !== null && onNext && (
          <>
            <Alert variant={isCorrect ? "default" : "destructive"}>
              <AlertTitle>{isCorrect ? "✅ Richtig!" : "❌ Falsch!"}</AlertTitle>
              <AlertDescription className="mt-2 text-sm space-y-2">
                <p>{explanation}</p>
                {!isCorrect && (
                  <div className="text-muted-foreground">
                    <p className="font-semibold mt-4">Warum war deine Antwort falsch?</p>
                    {selectedIndexes.map((sel, idx) => (
                      !correctIndexes.includes(sel) && explanationWrong[sel] ? (
                        <p key={idx} className="mt-1">{explanationWrong[sel]}</p>
                      ) : null
                    ))}
                  </div>
                )}
              </AlertDescription>
            </Alert>

            <Button
              onClick={() => onNext?.(isCorrect)}
              className="mt-4 w-full"
              variant="default"
            >
              Nächste Frage
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  )
}
