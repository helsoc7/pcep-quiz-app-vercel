'use client'

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github.css"

type QuestionProps = {
  id: string
  question: string
  answers: string[]
  correctIndex: number
  explanation: string
  explanationWrong: string[]
  onNext?: () => void
  currentIndex?: number
  total?: number
  onJumpTo?: (index: number) => void
  answered?: boolean[]
}

export default function QuizFrage({
  id,
  question,
  answers,
  correctIndex,
  explanation,
  explanationWrong,
  onNext,
  currentIndex,
  total,
  onJumpTo,
  answered
}: QuestionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    setSelectedIndex(null)
    setSubmitted(false)
  }, [question])

  const handleSubmit = async () => {
    if (selectedIndex !== null) {
      setSubmitted(true)
    }

    // Fortschritt an Backend senden
    await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questionId: id,
          correct: selectedIndex === correctIndex,
        }),
      });
  }

  const isCorrect = selectedIndex === correctIndex

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

        {/* Frage */}
        <ReactMarkdown
          rehypePlugins={[rehypeHighlight]}
          components={{
            /* eslint-disable @typescript-eslint/no-unused-vars */
            h1: ({ node, ...props }) => <h1 className="text-2xl font-bold" {...props} />,
            h2: ({ node, ...props }) => <h2 className="text-xl font-semibold mt-4" {...props} />,
            pre: ({ node, ...props }) => <pre className="bg-gray-100 p-4 rounded overflow-auto" {...props} />,
            code: ({ node, ...props }) => <code className="text-sm" {...props} />,
            p: ({ node, ...props }) => <p className="mb-2" {...props} />,
          }}
        >
          {question}
        </ReactMarkdown>

        {/* Antworten */}
        <div className="space-y-2">
          {answers.map((answer, index) => {
            const isSelected = selectedIndex === index
            const isCorrectAnswer = index === correctIndex
            const isWrongAnswer = submitted && isSelected && !isCorrectAnswer

            return (
              <Button
                key={index}
                variant={isSelected ? "outline" : "ghost"}
                onClick={() => setSelectedIndex(index)}
                disabled={submitted}
                className={`w-full justify-start whitespace-normal break-words text-left ${
                  isCorrectAnswer && submitted
                    ? "ring-2 ring-green-500"
                    : isWrongAnswer
                    ? "ring-2 ring-red-500"
                    : ""
                }`}
              >
                <ReactMarkdown
                  rehypePlugins={[rehypeHighlight]}
                  components={{
                    p: ({ node, ...props }) => <p className="m-0" {...props} />,
                    code: ({ node, ...props }) => <code className="bg-muted px-1 rounded text-sm" {...props} />,
                    strong: ({ node, ...props }) => <strong className="font-semibold" {...props} />,
                  }}
                >
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
            disabled={selectedIndex === null}
          >
            Bestätigen
          </Button>
        )}

        {submitted && onNext && (
          <>
            <Alert variant={isCorrect ? "default" : "destructive"}>
              <AlertTitle>{isCorrect ? "✅ Richtig!" : "❌ Falsch!"}</AlertTitle>
              <AlertDescription className="mt-2 text-sm space-y-2">
                <p>{explanation}</p>

                {!isCorrect && selectedIndex !== null && explanationWrong[selectedIndex] && (
                  <div className="text-muted-foreground">
                    <p className="font-semibold mt-4">Warum war deine Antwort falsch?</p>
                    <p className="mt-1">{explanationWrong[selectedIndex]}</p>
                  </div>
                )}
              </AlertDescription>
            </Alert>

            <Button onClick={onNext} className="mt-4 w-full" variant="default">
              Nächste Frage
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  )
}
