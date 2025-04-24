'use client'

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import ReactMarkdown from "react-markdown"
import Markdown from 'react-markdown'
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github.css"
import { Progress } from "@/components/ui/progress"
import { areSetsEqual } from "@/lib/array"
import rehypeRaw from "rehype-raw"
import remarkBreaks from "remark-breaks"

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

  // Maximale Anzahl der erlaubten Antworten (basierend auf der Anzahl der korrekten Antworten)
  const maxSelections = correctIndexes.length

  useEffect(() => {
    setSelectedIndexes([])
    setSubmitted(false)
    setIsCorrect(null)
  }, [question])

  const toggleIndex = (index: number) => {
    setSelectedIndexes((prev) => {
      // Wenn nur eine Antwort erlaubt ist (Single-Choice)
      if (maxSelections === 1) {
        return [index] // Ersetze die vorherige Auswahl
      }
      
      // Wenn mehrere Antworten erlaubt sind (Multiple-Choice)
      if (prev.includes(index)) {
        // Abwählen einer bereits gewählten Antwort
        return prev.filter((i) => i !== index)
      } else {
        // Wenn wir das Maximum erreicht haben, kann nichts mehr hinzugefügt werden
        if (prev.length >= maxSelections) {
          return prev
        }
        // Hinzufügen einer neuen Auswahl
        return [...prev, index]
      }
    })
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

  // Markdown Rendering Optionen
  const markdownOptions = {
    rehypePlugins: [rehypeHighlight]
    // rehypePlugins: [rehypeHighlight, rehypeRaw],
    // remarkPlugins: [remarkBreaks]
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
        <div className="prose max-w-none">
          <ReactMarkdown {...markdownOptions}>
            {question}
          </ReactMarkdown>
        </div>

        {/* Anzeige der maximal möglichen Antworten */}
        <p className="text-sm text-muted-foreground">
          {maxSelections === 1 
            ? "Wähle eine Antwort aus" 
            : `Wähle maximal ${maxSelections} Antworten aus (${selectedIndexes.length}/${maxSelections} gewählt)`}
        </p>

        {/* Antworten */}
        <div className="space-y-2">
          {answers.map((answer, index) => {
            const isSelected = selectedIndexes.includes(index)
            const isCorrectAnswer = correctIndexes.includes(index)
            const isWrongAnswer = submitted && isSelected && !isCorrectAnswer
            const isDisabled = submitted || (!isSelected && selectedIndexes.length >= maxSelections)

            return (
              <Button
                key={index}
                variant={isSelected ? "outline" : "ghost"}
                onClick={() => toggleIndex(index)}
                disabled={isDisabled}
                className={`w-full justify-start whitespace-normal text-left ${
                  submitted && isCorrectAnswer
                    ? "ring-2 ring-green-500"
                    : submitted && isWrongAnswer
                    ? "ring-2 ring-red-500"
                    : ""
                }`}
              >
                <div className="w-full prose prose-sm max-w-none">
                  <Markdown>
                    {answer}
                  </Markdown>
                </div>
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
            {correctIndexes.length > 1 ? "Bestätigen" : "Bestätigen"}
          </Button>
        )}

        {submitted && isCorrect !== null && onNext && (
          <>
            <Alert variant={isCorrect ? "default" : "destructive"}>
              <AlertTitle>{isCorrect ? "✅ Richtig!" : "❌ Falsch!"}</AlertTitle>
              <AlertDescription className="mt-2 text-sm space-y-2">
                <div className="prose prose-sm max-w-none">
                  <ReactMarkdown {...markdownOptions}>
                    {explanation}
                  </ReactMarkdown>
                </div>
                {!isCorrect && (
                  <div className="text-muted-foreground">
                    <p className="font-semibold mt-4">Warum war deine Antwort falsch?</p>
                    {selectedIndexes.map((sel, idx) => (
                      !correctIndexes.includes(sel) && explanationWrong[sel] ? (
                        <div key={idx} className="mt-1 prose prose-sm max-w-none">
                          <ReactMarkdown {...markdownOptions}>
                            {explanationWrong[sel]}
                          </ReactMarkdown>
                        </div>
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