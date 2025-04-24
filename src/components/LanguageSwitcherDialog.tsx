import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function LanguageSwitcherDialog({
  open,
  onClose,
  onConfirm,
}: {
  open: boolean
  onClose: () => void
  onConfirm: () => void
}) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Sprache wechseln?</DialogTitle>
          <DialogDescription>
            Dein aktueller Fortschritt wird gelöscht. Möchtest du wirklich wechseln?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-end space-x-2">
          <Button variant="ghost" onClick={onClose}>
            Abbrechen
          </Button>
          <Button variant="destructive" onClick={onConfirm}>
            Sprache wechseln
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
