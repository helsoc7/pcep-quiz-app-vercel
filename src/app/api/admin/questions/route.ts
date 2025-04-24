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
  
      console.log("Empfangene Daten:", { 
        question, 
        answers: Array.isArray(answers) ? `Array mit ${answers.length} Elementen` : typeof answers,
        correctIndexes: Array.isArray(correctIndexes) ? `Array mit ${correctIndexes.length} Elementen` : typeof correctIndexes,
        explanation,
        topic,
        subtopic,
        level
      });
  
      // Validierung der Eingabedaten
      if (!question || !Array.isArray(answers) || !Array.isArray(correctIndexes) || !explanation) {
        return NextResponse.json({ error: "Unvollständige Daten" }, { status: 400 })
      }
  
      // Stelle sicher, dass correctIndexes nur Zahlen enthält
      const numericCorrectIndexes = correctIndexes.map(index => Number(index));
  
      // Mindestens eine korrekte Antwort muss ausgewählt sein
      if (numericCorrectIndexes.length === 0) {
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
            answers: JSON.stringify(Array.isArray(answers) ? answers : []),
            correctIndexes: numericCorrectIndexes,
            explanation,
            explanationWrong: JSON.stringify(Array.isArray(explanationWrong) ? explanationWrong : []),
            topic: topic || "",
            subtopic: subtopic || "",
            level: level || "medium",
          },
        })
        
        return NextResponse.json(newQuestion, { status: 201 })
      } catch (createError) {
        console.error("Detaillierter Fehler beim Erstellen:", createError);
        return NextResponse.json(
          { error: `Fehler beim Erstellen in der Datenbank: ${createError.message}` },
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