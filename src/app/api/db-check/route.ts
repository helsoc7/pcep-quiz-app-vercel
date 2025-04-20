// src/app/api/db-check/route.ts
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    await prisma.$connect()
    return NextResponse.json({ status: 'ok', message: 'Verbindung erfolgreich' })
  } catch (err) {
    console.error('❌ DB-Verbindung fehlgeschlagen:', err)
    return NextResponse.json({ status: 'error', message: 'Verbindung fehlgeschlagen', error: String(err) }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
