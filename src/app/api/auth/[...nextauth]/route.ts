// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const authOptions = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    Google({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        // Benutzer in Prisma speichern (oder updaten)
        await prisma.user.upsert({
          where: { email: user.email! },
          update: {
            name: user.name ?? undefined,
          },
          create: {
            email: user.email!,
            name: user.name ?? "",
          },
        })
        return true
      } catch (err) {
        console.error("❌ Fehler beim Speichern des Users:", err)
        return false
      }
    },
    async session({ session }) {
      // Optional: User-ID hinzufügen (z. B. für /api/progress)
      const dbUser = await prisma.user.findUnique({
        where: { email: session.user?.email ?? "" },
      })

      if (dbUser) {
        session.user.id = dbUser.id
      }

      return session
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
