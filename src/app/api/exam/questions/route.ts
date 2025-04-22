import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Nicht eingeloggt" }, { status: 401 })
  }

  // 1️⃣ User-ID laden (ohne Progress direkt)
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { id: true },
  })

  if (!user) {
    return NextResponse.json({ error: "User nicht gefunden" }, { status: 404 })
  }

  console.time("Progress laden")

  // 2️⃣ Nur Progress laden (mit questionId + nextRound)
  const progress = await prisma.userProgress.findMany({
    where: { userId: user.id },
    select: {
      questionId: true,
      nextRound: true,
    },
  })

  console.timeEnd("Progress laden")

  // 3️⃣ Wenn leer: Alle Fragen als Fallback
  if (progress.length === 0) {
    console.log("progress ist leer")
    const allQuestions = await prisma.question.findMany({
      take: 40,
    })
    return NextResponse.json(allQuestions)
  }

  // 4️⃣ Nur relevante Fragen laden
  const questionIds = progress.map(p => p.questionId)

  console.time("Fragen laden")
  const questions = await prisma.question.findMany({
    where: { id: { in: questionIds } },
    select: {
      id: true,
      question: true,
      answers: true,
      correctIndex: true,
      topic: true,
      explanation: true,
      explanationWrong: true,
    },
  })
  console.timeEnd("Fragen laden")

  // 5️⃣ Fragen map für schnellen Zugriff
  const questionMap = new Map(questions.map(q => [q.id, q]))

  // 6️⃣ Gewichtung: Fragen häufiger je nach nextRound
  const weightedPool = progress.flatMap(p => {
    const weight = Math.max(1, 5 - Math.min(p.nextRound ?? 0, 5))
    const question = questionMap.get(p.questionId)
    return question ? Array(weight).fill(question) : []
  })

  // 7️⃣ Shuffle & Auswahl
  const shuffled = [...weightedPool].sort(() => Math.random() - 0.5)
  const seen = new Set<string>()
  const selected: typeof questions = []

  for (const q of shuffled) {
    if (!seen.has(q.id)) {
      selected.push(q)
      seen.add(q.id)
    }
    if (selected.length >= 40) break
  }

  console.log("Progress Count:", progress.length)
  console.log("Pool Size:", weightedPool.length)
  console.log("Selected:", selected.length)

  return NextResponse.json(selected)
}
