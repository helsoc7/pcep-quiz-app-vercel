// Diese Komponente fügt einen "Neue Frage hinzufügen" Button zur AdminFragenPage hinzu

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Plus } from 'lucide-react'
import EditableFrage from './EditableQuestion'

// Eine leere Frage als Template für neue Fragen
const emptyQuestion = {
  id: '', // Bei neuen Fragen wird die ID vom Server generiert
  question: '',
  answers: ['', ''], // Starte mit zwei leeren Antwortfeldern
  correctIndexes: [], // Keine Antwort ist zu Beginn korrekt
  explanation: '',
  explanationWrong: [],
  topic: '',
  subtopic: '',
  level: 'medium'
}

type AddQuestionButtonProps = {
  onQuestionAdded: () => void, // Callback, um die Fragenliste nach dem Hinzufügen zu aktualisieren
  topics: string[], // Verfügbare Topics
  subtopics: Record<string, string[]> // Verfügbare Subtopics, gruppiert nach Topic
}

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

export default function AddQuestionButton({ 
  onQuestionAdded, 
  topics, 
  subtopics 
}: AddQuestionButtonProps) {
  const [open, setOpen] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const handleCreateQuestion = async (newQuestion: Frage) => {
    setIsSaving(true)
    
    try {
      // Entferne die leere ID, da sie vom Server generiert wird
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, ...questionData } = newQuestion
      
      // Validierung
      if (!questionData.question?.trim()) {
        throw new Error('Der Fragetext darf nicht leer sein')
      }
      
      if (questionData.answers.length < 2) {
        throw new Error('Es müssen mindestens zwei Antworten angegeben werden')
      }
      
      if (questionData.correctIndexes.length === 0) {
        throw new Error('Mindestens eine Antwort muss korrekt sein')
      }
      
      // Sende die neue Frage an den Server
      const response = await fetch('/api/admin/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...questionData,
          topic: questionData.topic || '',
          subtopic: questionData.subtopic || '',
          level: questionData.level || 'medium'
        }),
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Fehler beim Erstellen der Frage')
      }
      
      // Erfolgreich erstellt
      setOpen(false)
      onQuestionAdded() // Aktualisiere die Fragenliste
    } catch (error) {
      console.error('Fehler beim Erstellen der Frage:', error)
      alert(`Fehler beim Erstellen der Frage: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <>
      <Button onClick={() => setOpen(true)} className="ml-auto">
        <Plus className="mr-2 h-4 w-4" />
        Neue Frage hinzufügen
      </Button>
      
      <Dialog open={open} onOpenChange={(isOpen) => {
        if (!isSaving) setOpen(isOpen) // Verhindert das Schließen während des Speicherns
      }}>
        <DialogContent className="w-full max-h-[90vh] overflow-y-auto" style={{ maxWidth: "1000px" }}>
          <DialogHeader>
            <DialogTitle>Neue Frage erstellen</DialogTitle>
          </DialogHeader>
          
          <EditableFrage
            frage={emptyQuestion}
            onSave={handleCreateQuestion}
            allTopics={topics}
            allSubtopics={subtopics}
          />
        </DialogContent>
      </Dialog>
    </>
  )
}