import { NextResponse, NextRequest } from "next/server"
import { prisma } from "@/lib/prisma"
import { getUserFromToken } from "@/lib/getUserFromToken"

export async function GET(req: NextRequest) {
  try {
    const user = await getUserFromToken(req)
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    const questions = await prisma.question.findMany()

    return NextResponse.json(questions)
  } catch (error) {
    console.error("Fehler beim Laden der Fragen:", error)
    return NextResponse.json({ error: "Interner Serverfehler" }, { status: 500 })
  }
}

export async function PUT(req: NextRequest) {
  try {
    const user = await getUserFromToken(req)
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    const data = await req.json()
    const { id, question, answers, correctIndexes, explanation, explanationWrong, topic, level } = data

    if (!id || !question || !Array.isArray(answers) || !Array.isArray(correctIndexes)) {
      return NextResponse.json({ error: "Ungültige Daten" }, { status: 400 })
    }

    const updatedQuestion = await prisma.question.update({
      where: { id },
      data: {
        question,
        answers: JSON.stringify(answers),
        correctIndexes,
        explanation,
        explanationWrong: JSON.stringify(explanationWrong),
        topic,
        level,
      },
    })

    return NextResponse.json(updatedQuestion)
  } catch (error) {
    console.error("Fehler beim Aktualisieren der Frage:", error)
    return NextResponse.json({ error: "Interner Serverfehler" }, { status: 500 })
  }
}