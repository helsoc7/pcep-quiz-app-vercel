import { getToken } from "next-auth/jwt"
import { prisma } from "./prisma"
import { NextRequest } from "next/server"

export async function getUserFromToken(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.JWT_SECRET })
    if (!token?.email) {
      console.warn("⚠️ Kein gültiger Token oder Email")
      return null
    }
  
    const user = await prisma.user.findUnique({
      where: { email: token.email },
      include: {
        progress: {
          select: {
            questionId: true,
            nextRound: true,
            question: { select: { topic: true, level: true } },
          },
        },
      },
    })
  
    if (!user) {
      console.warn("⚠️ Benutzer mit Token-E-Mail nicht in DB gefunden:", token.email)
    }
  
    return user
  }
  