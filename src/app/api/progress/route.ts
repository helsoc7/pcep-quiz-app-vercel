import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getUserFromToken } from "@/lib/getUserFromToken"

export async function POST(req: NextRequest) {
  try {
    const user = await getUserFromToken(req)

    if (!user) {
      return NextResponse.json({ error: "Nicht eingeloggt oder Token ungültig" }, { status: 401 })
    }

    const { questionId, selectedIndexes, isCorrect } = await req.json()

    if (!questionId || !Array.isArray(selectedIndexes) || typeof isCorrect !== "boolean") {
      return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 })
    }

    console.log("Fortschritt speichern:", { questionId, selectedIndexes, isCorrect })

    const existingProgress = await prisma.userProgress.findUnique({
      where: {
        userId_questionId: {
          userId: user.id,
          questionId,
        },
      },
    })

    if (existingProgress) {
      // Wenn die Antwort richtig ist, erhöhe nextRound
      const newNextRound = isCorrect ? 
        Math.min((existingProgress.nextRound ?? 0) + 1, 5) :  // Cap at 5
        0
      
      await prisma.userProgress.update({
        where: { id: existingProgress.id },
        data: {
          attempts: { increment: 1 },
          wrongAnswers: isCorrect ? existingProgress.wrongAnswers : { increment: 1 },
          lastSeen: new Date(),
          nextRound: newNextRound,
        },
      })
    } else {
      await prisma.userProgress.create({
        data: {
          userId: user.id,
          questionId,
          attempts: 1,
          wrongAnswers: isCorrect ? 0 : 1,
          lastSeen: new Date(),
          nextRound: isCorrect ? 1 : 0,
        },
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Fehler im /api/progress:", error)
    return NextResponse.json({ error: "Interner Serverfehler" }, { status: 500 })
  }
}