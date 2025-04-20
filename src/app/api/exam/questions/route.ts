// app/api/exam/questions/route.ts
import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions)

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Nicht eingeloggt" }, { status: 401 })
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: {
      progress: {
        include: {
          question: true,
        },
      },
    },
  })

  if (!user) {
    return NextResponse.json({ error: "User nicht gefunden" }, { status: 404 })
  }

  // Gewichtete Auswahl: Je niedriger nextRound, desto höher die Wahrscheinlichkeit
  const weighted: { question: any; weight: number }[] = []

  for (const p of user.progress) {
    const nextRound = p.nextRound ?? 0
    const weight = Math.max(1, 5 - Math.min(nextRound, 5)) // Box 0 -> 5 Punkte, Box 5+ -> 1 Punkt
    weighted.push({ question: p.question, weight })
  }

  // Shuffle + Gewichtung: Mehrfache Einträge je Gewichtung
  const pool = weighted.flatMap((entry) => Array(entry.weight).fill(entry.question))
  const shuffled = pool.sort(() => Math.random() - 0.5)

  // Einzigartige Fragen in zufälliger Reihenfolge (limit 10 z.B.)
  const unique: Record<string, any> = {}
  const selected: any[] = []
  for (const q of shuffled) {
    if (!unique[q.id]) {
      selected.push(q)
      unique[q.id] = true
    }
    if (selected.length >= 10) break
  }

  return NextResponse.json(selected)
}
