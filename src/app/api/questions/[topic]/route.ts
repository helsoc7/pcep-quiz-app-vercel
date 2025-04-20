// src/app/api/questions/[topic]/route.ts
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { NextRequest } from 'next/server'

const prisma = new PrismaClient()

export async function GET(req: NextRequest, context: { params: { topic: string } }) {
  const topic = context.params.topic

  const questions = await prisma.question.findMany({
    where: { topic } // oder zufällig mit: orderBy: { createdAt: 'asc' }
  })

  return NextResponse.json(
    questions.map((q) => ({
      id: q.id,
      question: q.question,
      answers: JSON.parse(q.answers),
      correctIndex: q.correctIndex,
      explanation: q.explanation,
      explanationWrong: JSON.parse(q.explanationWrong),
    }))
  )
}
