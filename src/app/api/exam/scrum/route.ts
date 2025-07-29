import { NextResponse, NextRequest } from "next/server"
import { prisma } from "@/lib/prisma"
import { getUserFromToken } from "@/lib/getUserFromToken"

export async function GET(req: NextRequest) {
  try {
    const user = await getUserFromToken(req)
    const lang = req.nextUrl.searchParams.get('lang') || 'de'

    if (!user) {
      return NextResponse.json({ error: "Nicht eingeloggt oder Token ungültig" }, { status: 401 })
    }

    const progress = user.progress

    // Nur Fragen mit topic "Print_Input" für die gewählte Sprache laden
    const allQuestions = await prisma.question.findMany({
      select: {
        id: true,
        question: true,
        answers: true,
        correctIndexes: true, 
        topic: true,
        explanation: true,
        explanationWrong: true,
      },
      where: {
        language: lang,
        topic: {
          contains: "scrum",
          mode: "insensitive"
        }
      }
    })

    console.log("Gefundene Fragen:", allQuestions.length, allQuestions)
const parsedQuestions = allQuestions.map(q => ({
  ...q,
  answers: Array.isArray(q.answers) ? q.answers : JSON.parse(q.answers),
  correctIndexes: Array.isArray(q.correctIndexes)
    ? q.correctIndexes.map(Number)
    : JSON.parse(q.correctIndexes ?? '[]').map(Number),
  explanationWrong: Array.isArray(q.explanationWrong)
    ? q.explanationWrong
    : JSON.parse(q.explanationWrong),
}))

    // Fallback: Wenn kein Fortschritt, einfach 40 beliebige Fragen holen
    if (progress.length === 0) {
      const shuffled = [...parsedQuestions].sort(() => Math.random() - 0.5)
      return NextResponse.json(shuffled.slice(0, 40))
    }

    // Map für den User-Progress erstellen
    const progressMap = new Map(progress.map(p => [p.questionId, p]))
    
    // Gewichteter Pool mit reduzierter Gewichtung
    const weightedPool = parsedQuestions.flatMap(q => {
      const userProgress = progressMap.get(q.id)
      const nextRound = userProgress ? (userProgress.nextRound ?? 0) : 0
      const weight = Math.max(1, 3 - Math.min(nextRound, 2))
      return Array(weight).fill(q)
    })

    // Shuffle und Auswahl
    const shuffled = [...weightedPool].sort(() => Math.random() - 0.5)
    const seen = new Set<string>()
    const selected: typeof parsedQuestions = []

    for (const q of shuffled) {
      if (!seen.has(q.id)) {
        selected.push(q)
        seen.add(q.id)
      }
      if (selected.length >= 40) break
    }

    return NextResponse.json(selected)

  } catch (error) {
    console.error("Fehler:", error)
    return NextResponse.json({ error: "Interner Serverfehler" }, { status: 500 })
  }
}