import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type NicknameDialogProps = {
  open: boolean
  onClose: () => void
  nickname: string
  onSave: (newNickname: string) => void
}

export default function NicknameDialog({ open, onClose, nickname, onSave }: NicknameDialogProps) {
  const [newNickname, setNewNickname] = useState(nickname)
  const [isSaving, setIsSaving] = useState(false)

  const handleSaveClick = async () => {
    setIsSaving(true)
    await onSave(newNickname)
    setIsSaving(false)
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nickname ändern</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            value={newNickname}
            onChange={(e) => setNewNickname(e.target.value)}
            placeholder="Dein neuer Nickname"
          />
        </div>
        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={onClose} disabled={isSaving}>
            Abbrechen
          </Button>
          <Button onClick={handleSaveClick} disabled={isSaving || !newNickname.trim()}>
            {isSaving ? "Speichern..." : "Speichern"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
