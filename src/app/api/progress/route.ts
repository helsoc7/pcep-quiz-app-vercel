import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getUserFromToken } from "@/lib/getUserFromToken"
import { areSetsEqual } from "@/lib/array"

export async function POST(req: NextRequest) {
  try {
    const user = await getUserFromToken(req)

    if (!user) {
      return NextResponse.json({ error: "Nicht eingeloggt oder Token ungültig" }, { status: 401 })
    }

    const { questionId, selectedIndexes } = await req.json()
    if (!questionId || !Array.isArray(selectedIndexes)) {
      return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 })
    }

    console.log("✅ Frage beantwortet:", { questionId, selectedIndexes })

    // ➤ Frage + UserProgress in EINEM Query holen
    const [question, existingProgress] = await Promise.all([
      prisma.question.findUnique({
        where: { id: questionId },
        select: { correctIndexes: true },  // Nur das, was du brauchst
      }),
      prisma.userProgress.findUnique({
        where: {
          userId_questionId: {
            userId: user.id, // ❗ Session-Optimierung (siehe unten)
            questionId,
          },
        },
      }),
    ])

    if (!question) {
      return NextResponse.json({ error: "Frage nicht gefunden" }, { status: 404 })
    }

    const correctIndexes: number[] = Array.isArray(question.correctIndexes)
      ? question.correctIndexes
      : []

    const isCorrect = areSetsEqual(selectedIndexes, correctIndexes)

    console.log("🔍 Vergleich:", { correctIndexes, isCorrect })

    // ➤ UserProgress aktualisieren/erstellen
    if (existingProgress) {
      await prisma.userProgress.update({
        where: { id: existingProgress.id },
        data: {
          attempts: { increment: 1 },
          wrongAnswers: isCorrect ? existingProgress.wrongAnswers : { increment: 1 },
          lastSeen: new Date(),
          nextRound: isCorrect ? (existingProgress.nextRound ?? 0) + 1 : 0,
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

    return NextResponse.json({ success: true, correct: isCorrect })
  } catch (error) {
    console.error("❌ Fehler im /api/progress:", error)
    return NextResponse.json({ error: "Interner Serverfehler" }, { status: 500 })
  }
}
