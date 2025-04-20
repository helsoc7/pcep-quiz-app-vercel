import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

const prisma = new PrismaClient()

export async function GET() {
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

  // 1. Gruppierung nach Topic + Difficulty
  const groupedByTopic: Record<string, { easy: number; medium: number; hard: number }> = {}

  // 2. Gruppierung nach nextRound (Spaced Repetition)
  const roundCounts: Record<number, number> = {}

  for (const p of user.progress) {
    const topic = p.question.topic
    const level = p.question.level
    const round = p.nextRound ?? 0

    // Initialisiere Topic-Objekt
    if (!groupedByTopic[topic]) {
      groupedByTopic[topic] = { easy: 0, medium: 0, hard: 0 }
    }

    groupedByTopic[topic][level] += 1

    // Runden zählen
    roundCounts[round] = (roundCounts[round] || 0) + 1
  }

  // 3. Normiertes Array für 6 Boxen (Box 0 bis 5+)
  const normalizedRounds: number[] = Array(6).fill(0)
  for (const [key, value] of Object.entries(roundCounts)) {
    const round = parseInt(key)
    const index = Math.min(round, 5) // alles ab Runde 5 wird in "Box 5+" gezählt
    normalizedRounds[index] += value
  }

  return NextResponse.json({
    topics: groupedByTopic,
    rounds: normalizedRounds,
  })
}
