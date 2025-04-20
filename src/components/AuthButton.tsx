"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"

export default function AuthButtons() {
  const { data: session } = useSession()
  if (session) {
    console.log("Eingeloggt als:", session.user?.name)
  }

  if (session) {
    return (
      <Button variant="outline" onClick={() => signOut()}>
        Logout
      </Button>
    )
  }

  return (
    <div className="flex space-x-2">
      <Button variant="outline" onClick={() => signIn("github")}>
        Mit GitHub einloggen
      </Button>
      <Button variant="outline" onClick={() => signIn("google")}>
        Mit Google einloggen
      </Button>
    </div>
  )
}