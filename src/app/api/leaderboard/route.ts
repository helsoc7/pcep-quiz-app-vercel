import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      where: {
        showInLeaderboard: true,  // Nur User mit Zustimmung
      },
      select: {
        id: true,
        name: true,
        email: true,
        progress: {
          select: {
            attempts: true,
            wrongAnswers: true,
          },
        },
      },
    })

    const leaderboard = users.map(user => {
      const totalAttempts = user.progress.reduce((sum, p) => sum + p.attempts, 0)
      const totalWrong = user.progress.reduce((sum, p) => sum + p.wrongAnswers, 0)
      const totalCorrect = totalAttempts - totalWrong
      const accuracy = totalAttempts > 0 ? (totalCorrect / totalAttempts) * 100 : 0

      return {
        id: user.id,
        name: user.name || user.email,
        totalCorrect,
        totalAttempts,
        accuracy: Math.round(accuracy * 10) / 10,
      }
    })

    leaderboard.sort((a, b) => 
      b.totalCorrect - a.totalCorrect || b.accuracy - a.accuracy
    )

    return NextResponse.json(leaderboard)
  } catch (error) {
    console.error("Fehler beim Laden des Leaderboards:", error)
    return NextResponse.json({ error: "Interner Serverfehler" }, { status: 500 })
  }
}
