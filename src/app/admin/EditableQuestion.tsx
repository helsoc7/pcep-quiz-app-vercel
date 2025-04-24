import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { InfoIcon } from "lucide-react"

type Frage = {
  id: string
  question: string
  answers: string[]
  correctIndexes: number[]
  explanation: string
  explanationWrong: string[]
  topic?: string
  subtopic?: string
  level?: string
}

export default function EditableFrage({
  frage,
  onSave,
  allTopics = [], // Alle verfügbaren Topics
  allSubtopics = {}, // Alle verfügbaren Subtopics, gruppiert nach Topic
}: {
  frage: Frage
  onSave: (f: Frage) => void
  allTopics?: string[]
  allSubtopics?: Record<string, string[]>
}) {
  const [editedFrage, setEditedFrage] = useState<Frage>(frage)
  const [openIndexes, setOpenIndexes] = useState<number[]>([])
  const [filteredSubtopics, setFilteredSubtopics] = useState<string[]>([])
  const [customTopic, setCustomTopic] = useState<string>(frage.topic || "")
  const [customSubtopic, setCustomSubtopic] = useState<string>(frage.subtopic || "")
  
  // Schwierigkeitsgrade
  const difficultyLevels = [
    { value: 'easy', label: 'Leicht' },
    { value: 'medium', label: 'Mittel' },
    { value: 'hard', label: 'Schwer' }
  ]
  
  // Zusätzliche State-Variable, um die Bearbeitung der falschen Erklärungen zu verwalten
  // Wir behalten alle Erklärungen, auch für richtige Antworten
  const [explanations, setExplanations] = useState<{[key: number]: string}>({})

  useEffect(() => {
    // Initialisiere die Erklärungen für alle Antworten
    const initialExplanations: {[key: number]: string} = {}
    
    // Durchlaufe alle Antworten und setze Erklärungen für falsche Antworten
    frage.answers.forEach((_, index) => {
      // Für falsche Antworten
      if (!frage.correctIndexes.includes(index)) {
        // Finde den entsprechenden Eintrag in explanationWrong
        // Dafür zählen wir, wie viele falsche Antworten vor diesem Index liegen
        const wrongIndexBeforeThis = frage.answers
          .slice(0, index)
          .filter((_, i) => !frage.correctIndexes.includes(i)).length
        
        // Setze die Erklärung, falls vorhanden
        if (wrongIndexBeforeThis < frage.explanationWrong.length) {
          initialExplanations[index] = frage.explanationWrong[wrongIndexBeforeThis]
        } else {
          initialExplanations[index] = ""
        }
      } else {
        // Für richtige Antworten setzen wir einen leeren String
        initialExplanations[index] = ""
      }
    })
    
    setExplanations(initialExplanations)
    setEditedFrage(frage)
    setCustomTopic(frage.topic || "")
    setCustomSubtopic(frage.subtopic || "")
    
    // Setze die Subtopics basierend auf dem aktuellen Topic
    if (frage.topic && allSubtopics[frage.topic]) {
      setFilteredSubtopics(allSubtopics[frage.topic] || [])
    }
  }, [frage, allSubtopics])

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...editedFrage.answers]
    newAnswers[index] = value
    setEditedFrage({ ...editedFrage, answers: newAnswers })
  }

  const handleRemoveAnswer = (index: number) => {
    // Antwort entfernen
    const newAnswers = [...editedFrage.answers]
    newAnswers.splice(index, 1)
    
    // Korrekte Indexe anpassen
    const adjustedCorrectIndexes = editedFrage.correctIndexes
      .filter((i) => i !== index) // entfernte Antwort raus
      .map((i) => (i > index ? i - 1 : i)) // rest anpassen
    
    // Erstelle neue Erklärungen mit angepassten Indizes
    const newExplanations: {[key: number]: string} = {}
    Object.entries(explanations).forEach(([key, value]) => {
      const keyNum = parseInt(key)
      if (keyNum < index) {
        newExplanations[keyNum] = value
      } else if (keyNum > index) {
        newExplanations[keyNum - 1] = value
      }
      // Wenn keyNum === index, entfernen wir diese Erklärung
    })
    
    setExplanations(newExplanations)
    
    setEditedFrage({
      ...editedFrage,
      answers: newAnswers,
      correctIndexes: adjustedCorrectIndexes,
    })

    // Offene Erklärungen aktualisieren
    setOpenIndexes((prev) => 
      prev.filter((i) => i !== index)
          .map((i) => (i > index ? i - 1 : i))
    )
  }

  const handleAddAnswer = () => {
    // Neue Antwort hinzufügen
    const newIndex = editedFrage.answers.length
    setEditedFrage({
      ...editedFrage,
      answers: [...editedFrage.answers, ""],
    })
    
    // Leere Erklärung für die neue Antwort hinzufügen
    setExplanations({
      ...explanations,
      [newIndex]: ""
    })
  }

  const toggleCorrectIndex = (index: number) => {
    const current = editedFrage.correctIndexes
    const updated = current.includes(index)
      ? current.filter((i) => i !== index)
      : [...current, index]
    
    // Wir behalten die Erklärung unabhängig davon, ob die Antwort richtig oder falsch ist
    setEditedFrage({ ...editedFrage, correctIndexes: updated })
  }

  const handleExplanationChange = (index: number, value: string) => {
    setExplanations({
      ...explanations,
      [index]: value
    })
  }

  const toggleExplanationOpen = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  const handleTopicChange = (value: string) => {
    // Topic aktualisieren
    setCustomTopic(value)
    setEditedFrage({ 
      ...editedFrage,
      topic: value,
      // Wenn das Topic geändert wird, setzen wir das Subtopic zurück, da es möglicherweise nicht mehr passt
      subtopic: "" 
    })
    setCustomSubtopic("")
    
    // Subtopics filtern basierend auf dem ausgewählten Topic
    setFilteredSubtopics(allSubtopics[value] || [])
  }

  const handleSubtopicChange = (value: string) => {
    setCustomSubtopic(value)
    setEditedFrage({ ...editedFrage, subtopic: value })
  }

  const handleLevelChange = (value: string) => {
    setEditedFrage({ ...editedFrage, level: value })
  }

  const handleSave = () => {
    // Konvertiere die Erklärungen in ein Array für die Datenstruktur
    // Dabei müssen wir die richtige Reihenfolge der falschen Antworten beibehalten
    // und nur Erklärungen für falsche Antworten einbeziehen
    const explanationWrongArray: string[] = []
    
    // Iteriere über alle Antworten
    editedFrage.answers.forEach((_, index) => {
      // Nur für falsche Antworten
      if (!editedFrage.correctIndexes.includes(index)) {
        // Füge die entsprechende Erklärung hinzu
        explanationWrongArray.push(explanations[index] || "")
      }
      // Für richtige Antworten fügen wir nichts hinzu
    })
    
    const finalFrage = {
      ...editedFrage,
      explanationWrong: explanationWrongArray,
      // Benutze die Werte aus den Input-Feldern, falls kein vorhandener Wert ausgewählt wurde
      topic: editedFrage.topic || customTopic || "",
      subtopic: editedFrage.subtopic || customSubtopic || "",
      level: editedFrage.level || "medium"
    }
    
    onSave(finalFrage)
  }

  return (
    <Card className="w-full max-w-4xl mx-auto space-y-6 p-6">
      <CardContent className="space-y-6 max-h-[75vh] overflow-y-auto pr-2">
        {/* Fragetext */}
        <div>
          <label className="block text-sm font-medium mb-1">Fragetext (Markdown unterstützt)</label>
          <Textarea
            value={editedFrage.question}
            onChange={(e) => setEditedFrage({ ...editedFrage, question: e.target.value })}
            className="min-h-[80px]"
          />
        </div>

        {/* Topic, Subtopic und Level Auswahl */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Topic Auswahl */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Thema 
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className="h-4 w-4 ml-1 inline-block text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">Wähle ein existierendes Thema oder gib ein neues ein</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </label>
            {allTopics.length > 0 ? (
              <div className="space-y-2">
                <Select 
                  value={editedFrage.topic || undefined}
                  onValueChange={handleTopicChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Thema auswählen" />
                  </SelectTrigger>
                  <SelectContent>
                    {allTopics.map((topic) => (
                      <SelectItem key={topic} value={topic}>
                        {topic}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {!editedFrage.topic && (
                  <Input
                    value={customTopic}
                    onChange={(e) => handleTopicChange(e.target.value)}
                    placeholder="Oder neues Thema eingeben..."
                  />
                )}
              </div>
            ) : (
              <Input
                value={customTopic}
                onChange={(e) => handleTopicChange(e.target.value)}
                placeholder="z.B. Grundlagen, Funktionen, etc."
              />
            )}
          </div>
          
          {/* Subtopic Auswahl */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Unterthema
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className="h-4 w-4 ml-1 inline-block text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">Wähle ein existierendes Unterthema oder gib ein neues ein</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </label>
            {filteredSubtopics.length > 0 && (editedFrage.topic || customTopic) ? (
              <div className="space-y-2">
                <Select 
                  value={editedFrage.subtopic || undefined}
                  onValueChange={handleSubtopicChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Unterthema auswählen" />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredSubtopics.map((subtopic) => (
                      <SelectItem key={subtopic} value={subtopic}>
                        {subtopic}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {!editedFrage.subtopic && (
                  <Input
                    value={customSubtopic}
                    onChange={(e) => handleSubtopicChange(e.target.value)}
                    placeholder="Oder neues Unterthema eingeben..."
                  />
                )}
              </div>
            ) : (
              <Input
                value={customSubtopic}
                onChange={(e) => handleSubtopicChange(e.target.value)}
                placeholder="z.B. Datentypen, Module, etc."
                disabled={!(editedFrage.topic || customTopic)}
              />
            )}
          </div>
          
          {/* Schwierigkeitsgrad */}
          <div>
            <label className="block text-sm font-medium mb-1">Schwierigkeitsgrad</label>
            <Select 
              value={editedFrage.level || "medium"}
              onValueChange={handleLevelChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Schwierigkeitsgrad wählen" />
              </SelectTrigger>
              <SelectContent>
                {difficultyLevels.map((level) => (
                  <SelectItem key={level.value} value={level.value}>
                    {level.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Antworten */}
        <div>
          <label className="block text-sm font-medium mb-2">Antworten</label>
          {editedFrage.answers.map((answer, index) => {
            const isCorrect = editedFrage.correctIndexes.includes(index);
            return (
              <div key={index} className="space-y-1 mb-3 border-b pb-3">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    checked={isCorrect}
                    onCheckedChange={() => toggleCorrectIndex(index)}
                    id={`answer-${index}`}
                  />
                  <label htmlFor={`answer-${index}`} className="text-sm font-medium mr-2">
                    {isCorrect ? "Richtig" : "Falsch"}
                  </label>
                  <Input
                    value={answer}
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    className="flex-1"
                  />
                  <Button variant="destructive" size="sm" onClick={() => handleRemoveAnswer(index)}>
                    Entfernen
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleExplanationOpen(index)}
                  >
                    Erklärung {openIndexes.includes(index) ? "schließen" : "öffnen"}
                  </Button>
                </div>

                {/* Aufklappbare Erklärung */}
                {openIndexes.includes(index) && (
                  <div className="mt-2">
                    {isCorrect ? (
                      <>
                        <p className="text-sm text-muted-foreground mb-1">
                          Diese Antwort ist korrekt. Eventuelle Erklärung wird nicht angezeigt, 
                          aber beim Wechsel zu falsch wiederhergestellt.
                        </p>
                        <Textarea
                          value={explanations[index] || ""}
                          onChange={(e) => handleExplanationChange(index, e.target.value)}
                          placeholder="Erklärung (wird nur für falsche Antworten verwendet)"
                          className="min-h-[60px] w-full bg-gray-50"
                        />
                      </>
                    ) : (
                      <>
                        <label className="block text-sm text-muted-foreground mb-1">
                          Erklärung warum diese Antwort falsch ist:
                        </label>
                        <Textarea
                          value={explanations[index] || ""}
                          onChange={(e) => handleExplanationChange(index, e.target.value)}
                          placeholder="Erklärung warum diese Antwort falsch wäre"
                          className="min-h-[60px] w-full"
                        />
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
          <Button onClick={handleAddAnswer} variant="outline">
            Weitere Antwort hinzufügen
          </Button>
        </div>

        {/* Erklärung richtig */}
        <div>
          <label className="block text-sm font-medium mb-1">Erklärung (richtig)</label>
          <Textarea
            value={editedFrage.explanation}
            onChange={(e) => setEditedFrage({ ...editedFrage, explanation: e.target.value })}
            className="min-h-[80px]"
          />
        </div>

        {/* Debug-Information - kann später entfernt werden */}
        <div className="text-xs text-muted-foreground border-t pt-2">
          <p>Debugging (kann später entfernt werden):</p>
          <p>Antworten: [{editedFrage.answers.length}]</p>
          <p>Richtige Indizes: [{editedFrage.correctIndexes.join(", ")}]</p>
          <p>Topic: {editedFrage.topic || customTopic || "—"}</p>
          <p>Subtopic: {editedFrage.subtopic || customSubtopic || "—"}</p>
          <p>Level: {editedFrage.level || "medium"}</p>
        </div>

        {/* Speichern */}
        <div className="flex justify-end">
          <Button onClick={handleSave}>Speichern</Button>
        </div>

        {/* Vorschau */}
        <div className="pt-6 border-t">
          <p className="text-sm font-medium mb-2">Vorschau:</p>
          <div className="border rounded p-4 bg-slate-50">
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{editedFrage.question}</ReactMarkdown>
            <div className="mt-4">
              <p className="text-sm font-medium mb-2">Antworten:</p>
              <ul className="list-disc ml-6">
                {editedFrage.answers.map((a, i) => (
                  <li key={i} className={editedFrage.correctIndexes.includes(i) ? "text-green-600 font-medium" : ""}>
                    {a} {editedFrage.correctIndexes.includes(i) ? "(✓)" : ""}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}