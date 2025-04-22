import { NextResponse } from 'next/server'
import { prisma } from "@/lib/prisma"

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
