import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Nicht eingeloggt" }, { status: 401 })
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: {
      progress: {
        include: {
          question: true,
        },
      },
    },
  })

  if (!user) {
    return NextResponse.json({ error: "User nicht gefunden" }, { status: 404 })
  }

  // Wenn User keine Progress-Daten hat -> alle Fragen aus DB
  if (user.progress.length === 0) {
    console.log("progress ist leer")
    const allQuestions = await prisma.question.findMany()
    return NextResponse.json(allQuestions.slice(0, 40)) // oder shuffle
  }

  // Gewichtete Auswahl: Je niedriger nextRound, desto häufiger
  const weighted = user.progress.map((p) => {
    const nextRound = p.nextRound ?? 0
    const weight = Math.max(1, 5 - Math.min(nextRound, 5)) // Box 0 = 5x, Box 5+ = 1x
    return { question: p.question, weight }
  })

  const pool = weighted.flatMap(({ question, weight }) =>
    Array(weight).fill(question)
  )

  const shuffled = [...pool].sort(() => Math.random() - 0.5)

  const seen = new Set<string>()
  const selected: typeof pool = []

  for (const q of shuffled) {
    if (!seen.has(q.id)) {
      selected.push(q)
      seen.add(q.id)
    }
    if (selected.length >= 40) break
  }

  // 👇 Ergänzen falls weniger als 40
  if (selected.length < 40) {
    const additional = await prisma.question.findMany({
      where: {
        id: {
          notIn: Array.from(seen),
        },
      },
      take: 40 - selected.length,
    })

    selected.push(...additional)
  }

  console.log("User Progress Count:", user.progress.length)
  console.log("Pool Size:", pool.length)
  console.log("Selected Questions:", selected.length)

  return NextResponse.json(selected)
}

