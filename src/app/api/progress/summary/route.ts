import { NextRequest, NextResponse } from "next/server"
import { getUserFromToken } from "@/lib/getUserFromToken"

export async function GET(req: NextRequest) {
  try {
    const user = await getUserFromToken(req)

    if (!user) {
      return NextResponse.json(
        { error: "Benutzer nicht gefunden oder nicht authentifiziert" },
        { status: 401 }
      )
    }

    if (!user.progress) {
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
      // Korrigierte Round-Berechnung
      const round = Math.max(0, Math.min(p.nextRound ?? 0, 5))  // Ensure between 0 and 5

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

    // Korrigierte Berechnung für die 6 Boxen
    const normalizedRounds: number[] = Array(6).fill(0)
    for (const [key, value] of Object.entries(roundCounts)) {
      const round = parseInt(key)
      // Rounds 0-4 gehen in separate Boxen, Round 5+ geht in Box 5
      const index = Math.min(round, 5)
      normalizedRounds[index] += value
    }

    // Korrigierte Fortschrittsberechnung pro Thema
    const progressByTopic: Record<string, number> = {}
    let totalScore = 0
    let maxScore = 0
    let totalQuestions = 0

    for (const [topic, rounds] of Object.entries(topicRoundCounts)) {
      let topicScore = 0
      let topicMax = 0
      let topicQuestions = 0

      for (const [roundStr, count] of Object.entries(rounds)) {
        const round = parseInt(roundStr)
        // Korrigierte Gewichtung: Round 0 = 0 Punkte, Round 5 = 5 Punkte
        topicScore += count * round
        topicMax += count * 5
        topicQuestions += count
      }

      progressByTopic[topic] = topicMax === 0 ? 0 : Math.round((topicScore / topicMax) * 100)
      totalScore += topicScore
      maxScore += topicMax
      totalQuestions += topicQuestions
    }

    // Korrigierte Gesamtfortschrittsberechnung
    const overallProgress = maxScore === 0 ? 0 : Math.round((totalScore / maxScore) * 100)

    // Debug-Informationen
    console.log("Progress Debug:", {
      totalQuestions,
      totalScore,
      maxScore,
      overallProgress,
      roundCounts
    })

    return NextResponse.json({
      topics: groupedByTopic,
      rounds: normalizedRounds,
      progressByTopic,
      overallProgress,
      debug: {
        totalQuestions,
        totalScore,
        maxScore,
        roundCounts
      }
    })
  } catch (error) {
    console.error("Fehler:", error)
    return NextResponse.json({ error: "Interner Serverfehler" }, { status: 500 })
  }
}