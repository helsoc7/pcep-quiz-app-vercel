// src/app/api/questions/[topic]/route.ts
import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()
/* eslint-disable @typescript-eslint/no-explicit-any */
export async function GET(_req: NextRequest, context: any) {
  const topic = context.params.topic

  const questions = await prisma.question.findMany({
    where: { topic },
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
