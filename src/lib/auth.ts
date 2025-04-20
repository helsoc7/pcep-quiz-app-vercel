// src/app/api/auth/[...nextauth]/route.ts
import NextAuth, { AuthOptions, Session, User as NextAuthUser } from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import { PrismaClient } from "@prisma/client"
import type { AdapterUser } from "next-auth/adapters"

const prisma = new PrismaClient()

export const authOptions: AuthOptions = {
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
    async signIn({ user }: { user: NextAuthUser | AdapterUser }) {
      console.log("👉 [signIn] Benutzer-Objekt:", user)
  
      if (!user.email) {
        console.warn("⚠️ Kein user.email vorhanden – Zugriff verweigert")
        return false
      }
  
      try {
        await prisma.user.upsert({
          where: { email: user.email },
          update: {
            name: user.name ?? undefined,
          },
          create: {
            email: user.email,
            name: user.name ?? "",
          },
        })
  
        console.log(`✅ Benutzer erfolgreich gespeichert: ${user.email}`)
        return true
      } catch (err) {
        console.error("❌ Fehler beim Speichern des Users in der DB:", err)
        return false
      }
    },
    async session({ session }: { session: Session }) {
      console.log("📦 [session] Session-Start für:", session.user?.email)
    
      const dbUser = await prisma.user.findUnique({
        where: { email: session.user?.email ?? "" },
      })
    
      if (dbUser) {
        // @ts-expect-error – user.id ist in DefaultSession.User nicht enthalten
        session.user.id = dbUser.id
        console.log("✅ Benutzer-ID zur Session hinzugefügt:", dbUser.id)
      } else {
        console.warn("⚠️ Kein DB-User gefunden für:", session.user?.email)
      }
    
      return session
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
