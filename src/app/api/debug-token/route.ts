import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const token = await getToken({ req })

  console.log("JWT Token Inhalt:", token)

  if (!token) {
    return NextResponse.json({ error: "Kein Token gefunden" }, { status: 401 })
  }

  return NextResponse.json({
    userId: token.id,
    role: token.role,
  })
}
