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
import { Checkbox } from "@/components/ui/checkbox"

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

  // Hilfsfunktion um \n in echte Umbrüche zu konvertieren
  const renderTextWithLinebreaks = (text: string) => {
    // Konvertiere \n zu echten Umbrüchen für die Anzeige
    const parts = text.split(/\\n/g)
    return parts.map((part, index) => (
      <span key={index}>
        {part}
        {index < parts.length - 1 && <br />}
      </span>
    ))
  }

  const toggleIndex = (index: number) => {
    setSelectedIndexes((prev) => {
      // Wenn nur eine Antwort erlaubt ist (Single-Choice)
      if (maxSelections === 1) {
        // Wenn die Antwort bereits ausgewählt ist, abwählen (leeres Array zurückgeben)
        if (prev.includes(index)) {
          return []
        }
        // Sonst die neue Antwort auswählen
        return [index]
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
  
    // Fortschritt async an Backend senden
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
  }

  return (
    <Card className="w-full max-w-2xl mx-auto space-y-6 p-6">
      <CardContent className="space-y-6">
        {/* Scrollbare Fortschrittsleiste mit Zahlen */}
        {typeof currentIndex === "number" && typeof total === "number" && (
          <div className="relative mb-4">
            <div className="flex justify-start items-center overflow-x-auto py-2 px-4 max-w-full">
              <div 
                className="flex gap-2 transition-transform"
                style={{
                  transform: `translateX(${Math.max(0, Math.min(total - 10, currentIndex - 5)) * -40}px)`,
                }}
              >
                {Array.from({ length: total }).map((_, index) => {
                  const isActive = index === currentIndex
                  const isDone = answered?.[index]

                  return (
                    <button
                      key={index}
                      className={`flex items-center justify-center w-8 h-8 rounded-full border transition hover:scale-110 flex-shrink-0
                        ${isActive 
                          ? "bg-primary text-white border-primary font-medium" 
                          : isDone 
                            ? "bg-gray-400 text-white border-gray-500" 
                            : "bg-muted text-gray-500 border-gray-200"}`}
                      onClick={() => onJumpTo?.(index)}
                      title={`Frage ${index + 1}`}
                    >
                      {index + 1}
                    </button>
                  )
                })}
              </div>
            </div>
            
            {/* Visueller Hinweis für Scroll */}
            {currentIndex < total - 10 && (
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            )}
            {currentIndex > 5 && (
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            )}
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

        {/* Antworten mit Textfeldern und Checkboxen */}
        <div className="space-y-3">
          {answers.map((answer, index) => {
            const isSelected = selectedIndexes.includes(index)
            const isCorrectAnswer = correctIndexes.includes(index)
            const isWrongAnswer = submitted && isSelected && !isCorrectAnswer
            const isDisabled = submitted || (!isSelected && selectedIndexes.length >= maxSelections && maxSelections > 1)

            return (
              <div 
                key={index}
                className={`flex items-start space-x-3 p-4 rounded-md border ${
                  submitted && isCorrectAnswer
                    ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                    : submitted && isWrongAnswer
                    ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                    : "border-border"
                }`}
              >
                <Checkbox
                  id={`answer-${index}`}
                  checked={isSelected}
                  onCheckedChange={() => !isDisabled && toggleIndex(index)}
                  disabled={isDisabled}
                  className="mt-1"
                />
                <label 
                  htmlFor={`answer-${index}`} 
                  className={`flex-1 cursor-pointer ${isDisabled ? 'cursor-not-allowed opacity-70' : ''}`}
                >
                  <div className="prose prose-sm max-w-none">
                    {/* Unterscheidung: Wenn die Antwort \n enthält, zeige HTML an, ansonsten Markdown */}
                    {answer.includes('\\n') ? (
                      <div className="font-mono text-sm">
                        {renderTextWithLinebreaks(answer)}
                      </div>
                    ) : (
                      <ReactMarkdown {...markdownOptions}>
                        {answer}
                      </ReactMarkdown>
                    )}
                  </div>
                </label>
              </div>
            )
          })}
        </div>

        {!submitted && (
          <Button
            className="w-full mt-4"
            onClick={handleSubmit}
            disabled={selectedIndexes.length === 0}
          >
            {maxSelections === 1 ? "Bestätigen" : "Bestätigen"}
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