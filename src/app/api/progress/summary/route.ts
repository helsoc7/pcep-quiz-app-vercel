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
        select: {
          nextRound: true,
          question: {
            select: {
              topic: true,
              level: true
            }
          }
        }
      }
    }
  })

  if (!user) {
    return NextResponse.json({ error: "User nicht gefunden" }, { status: 404 })
  }

  // Gruppierung nach Topic + Difficulty
  const groupedByTopic: Record<string, { easy: number; medium: number; hard: number }> = {}

  // Gruppierung nach nextRound (gesamt + pro Topic)
  const roundCounts: Record<number, number> = {}
  const topicRoundCounts: Record<string, Record<number, number>> = {}

  for (const p of user.progress) {
    const topic = p.question.topic
    const level = p.question.level
    const round = p.nextRound ?? 0

    // Gruppierung nach Difficulty pro Topic
    if (!groupedByTopic[topic]) {
      groupedByTopic[topic] = { easy: 0, medium: 0, hard: 0 }
    }
    groupedByTopic[topic][level] += 1

    // Gesamt-Runden zählen
    roundCounts[round] = (roundCounts[round] || 0) + 1

    // Runden zählen pro Topic
    if (!topicRoundCounts[topic]) {
      topicRoundCounts[topic] = {}
    }
    topicRoundCounts[topic][round] = (topicRoundCounts[topic][round] || 0) + 1
  }

  // Normiertes Array für 6 Boxen (Box 0 bis 5+)
  const normalizedRounds: number[] = Array(6).fill(0)
  for (const [key, value] of Object.entries(roundCounts)) {
    const round = parseInt(key)
    const index = Math.min(round, 5)
    normalizedRounds[index] += value
  }

  // Fortschritt (Heuristik) pro Thema
  const progressByTopic: Record<string, number> = {}
  let totalScore = 0
  let maxScore = 0

  for (const [topic, rounds] of Object.entries(topicRoundCounts)) {
    let topicScore = 0
    let topicMax = 0

    for (const [roundStr, count] of Object.entries(rounds)) {
      const round = parseInt(roundStr)
      const weight = Math.min(round, 5)
      topicScore += count * weight
      topicMax += count * 5
    }

    progressByTopic[topic] = topicMax === 0 ? 0 : Math.round((topicScore / topicMax) * 100)
    totalScore += topicScore
    maxScore += topicMax
  }

  const overallProgress = maxScore === 0 ? 0 : Math.round((totalScore / maxScore) * 100)

  return NextResponse.json({
    topics: groupedByTopic,
    rounds: normalizedRounds,
    progressByTopic,
    overallProgress,
  })
}
