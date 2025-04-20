"use client"

import { signOut, useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import AuthDialog from "@/components/AuthDialog"

export default function AuthControl() {
  const { data: session, status } = useSession()

  if (status === "loading") return null // oder Spinner

  return session ? (
    <Button variant="ghost" onClick={() => signOut()}>
      Logout
    </Button>
  ) : (
    <AuthDialog />
  )
}