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

    // Fallback: Wenn kein Fortschritt, einfach 40 beliebige Fragen holen
    if (progress.length === 0) {
      console.log("progress ist leer")
      const allQuestions = await prisma.question.findMany({
        take: 40,
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
          language: lang
        }
      })

      const parsed = allQuestions.map(q => ({
        ...q,
        answers: Array.isArray(q.answers) ? q.answers : JSON.parse(q.answers),
        correctIndexes: Array.isArray(q.correctIndexes)
          ? q.correctIndexes.map(Number)
          : JSON.parse(q.correctIndexes ?? '[]').map(Number),
        explanationWrong: Array.isArray(q.explanationWrong)
          ? q.explanationWrong
          : JSON.parse(q.explanationWrong),
      }))

      return NextResponse.json(parsed)
    }

    // IDs aus dem Progress holen
    const questionIds = progress.map(p => p.questionId)

    const questions = await prisma.question.findMany({
      where: { id: { in: questionIds },
              language: lang },
      select: {
        id: true,
        question: true,
        answers: true,
        correctIndexes: true, 
        topic: true,
        explanation: true,
        explanationWrong: true,
      },
    })

    const parsedQuestions = questions.map(q => ({
      ...q,
      answers: Array.isArray(q.answers) ? q.answers : JSON.parse(q.answers),
      correctIndexes: Array.isArray(q.correctIndexes)
        ? q.correctIndexes.map(Number)
        : JSON.parse(q.correctIndexes ?? '[]').map(Number),
      explanationWrong: Array.isArray(q.explanationWrong)
        ? q.explanationWrong
        : JSON.parse(q.explanationWrong),
    }))

    // Map für schnellen Zugriff
    const questionMap = new Map(parsedQuestions.map(q => [q.id, q]))

    // Gewichtung nach nextRound
    const weightedPool = progress.flatMap(p => {
      const weight = Math.max(1, 5 - Math.min(p.nextRound ?? 0, 5))
      const question = questionMap.get(p.questionId)
      return question ? Array(weight).fill(question) : []
    })

    // Shuffle
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

    // console.log("Progress Count:", progress.length)
    // console.log("Pool Size:", weightedPool.length)
    // console.log("Selected:", selected.length)

    return NextResponse.json(selected)

  } catch (error) {
    console.error("Fehler:", error)
    return NextResponse.json({ error: "Interner Serverfehler" }, { status: 500 })
  }
}
