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

export async function POST(req: NextRequest) {
  try {
    const user = await getUserFromToken(req)
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    const data = await req.json()
    const { question, answers, correctIndexes, explanation, explanationWrong, topic, subtopic, level } = data

    // Validierung der Eingabedaten
    if (!question || !Array.isArray(answers) || !Array.isArray(correctIndexes) || !explanation) {
      return NextResponse.json(
        { error: "Unvollständige Daten" },
        { status: 400 }
      )
    }

    // Mindestens eine korrekte Antwort muss ausgewählt sein
    if (correctIndexes.length === 0) {
      return NextResponse.json(
        { error: "Mindestens eine korrekte Antwort muss ausgewählt sein" },
        { status: 400 }
      )
    }

    // Neue Frage erstellen mit besserer Fehlerbehandlung
    try {
      const newQuestion = await prisma.question.create({
        data: {
          question,
          answers: JSON.stringify(answers),
          correctIndexes,
          explanation,
          explanationWrong: JSON.stringify(explanationWrong || []),
          topic: topic || "",
          subtopic: subtopic || "",
          level: level || "medium",
        },
      })
      
      return NextResponse.json(newQuestion, { status: 201 })
    } catch (createError) {
      console.error("Detaillierter Fehler beim Erstellen:", createError)
      
      const errorMessage = createError instanceof Error 
        ? createError.message 
        : 'Unbekannter Fehler beim Erstellen in der Datenbank'
      
      return NextResponse.json(
        { error: `Fehler beim Erstellen in der Datenbank: ${errorMessage}` },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("Fehler beim Erstellen der Frage:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Interner Serverfehler" },
      { status: 500 }
    )
  }
}

export async function PUT(req: NextRequest) {
  try {
    const user = await getUserFromToken(req)
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    const data = await req.json()
    const { id, question, answers, correctIndexes, explanation, explanationWrong, topic, subtopic, level } = data

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
        subtopic,
        level,
      },
    })

    return NextResponse.json(updatedQuestion)
  } catch (error) {
    console.error("Fehler beim Aktualisieren der Frage:", error)
    return NextResponse.json({ error: "Interner Serverfehler" }, { status: 500 })
  }
}