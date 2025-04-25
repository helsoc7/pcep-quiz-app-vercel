import { getServerSession } from "next-auth"
import { prisma } from "@/lib/prisma"
import { authOptions } from "@/lib/auth"

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    return new Response(JSON.stringify({ error: "Nicht eingeloggt" }), { status: 401 })
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { showInLeaderboard: true }
  })

  return new Response(JSON.stringify({ showInLeaderboard: user?.showInLeaderboard ?? null }))
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  const { showInLeaderboard } = await req.json()

  if (!session?.user?.email) {
    return new Response(JSON.stringify({ error: "Nicht eingeloggt" }), { status: 401 })
  }

  await prisma.user.update({
    where: { email: session.user.email },
    data: { showInLeaderboard }
  })

  return new Response(JSON.stringify({ success: true }))
}
