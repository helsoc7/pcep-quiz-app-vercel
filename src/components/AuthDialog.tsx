"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"

export default function AuthDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>

      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Anmelden</DialogTitle>
          <DialogDescription>
            Wähle einen Login-Anbieter aus:
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4 mt-4">
          <Button onClick={() => signIn("github")} variant="secondary">
            Mit GitHub einloggen
          </Button>
          <Button onClick={() => signIn("google")} variant="secondary">
            Mit Google einloggen
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
