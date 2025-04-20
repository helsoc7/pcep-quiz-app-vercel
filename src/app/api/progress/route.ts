// src/app/api/progress/route.ts

import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Nicht eingeloggt" }, { status: 401 })
  }

  const { questionId, correct } = await req.json()
  console.log("✅ Frage beantwortet:", { questionId, correct })

  // User aus DB holen
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  })

  if (!user) {
    return NextResponse.json({ error: "User nicht gefunden" }, { status: 404 })
  }

  const existing = await prisma.userProgress.findUnique({
    where: {
      userId_questionId: {
        userId: user.id,
        questionId,
      },
    },
  })

  if (existing) {
    const nextRound = correct ? ((existing.nextRound ?? 0) + 1) : 0
    console.log("⬆️ Update nextRound:", existing.nextRound, "→", nextRound)

    await prisma.userProgress.update({
      where: { id: existing.id },
      data: {
        attempts: existing.attempts + 1,
        wrongAnswers: correct ? existing.wrongAnswers : existing.wrongAnswers + 1,
        lastSeen: new Date(),
        nextRound,
      },
    })
  } else {
    await prisma.userProgress.create({
      data: {
        userId: user.id,
        questionId,
        attempts: 1,
        wrongAnswers: correct ? 0 : 1,
        lastSeen: new Date(),
        nextRound: correct ? 1 : 0,
      },
    })
  }

  return NextResponse.json({ success: true })
}
