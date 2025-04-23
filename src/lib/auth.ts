import { AuthOptions, Account, Profile, User } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { prisma } from "@/lib/prisma"
import type { AdapterUser } from "next-auth/adapters"
import type { JWT } from "next-auth/jwt"
import type { Session } from "next-auth"

interface ExtendedJWT extends JWT {
  id: string
  role?: string
}

interface ExtendedSession extends Session {
  user: {
    id: string
    email?: string | null
    name?: string | null
    image?: string | null
    role?: string
  }
}

interface AdapterUserWithRole extends AdapterUser {
  role: "USER" | "ADMIN"
}

export const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  callbacks: {
    signIn: async ({ user }) => {
      if (!user.email) return false

      const adminEmails = [
        "h.havelohh@gmail.com",
        "joel.hilberg@tn.techstarter.de",  // TODO: Auslagern
      ]

      const role = adminEmails.includes(user.email) ? "ADMIN" : "USER"  
      const dbUser = await prisma.user.upsert({
        where: { email: user.email },
        update: { name: user.name ?? undefined, role },
        create: { email: user.email, name: user.name ?? "", role },
      })
    

      user.id = dbUser.id
      ;(user as AdapterUserWithRole).role = dbUser.role
    
      return true
    },

    //JWT Callback (fügt user.id ins Token ein)
    async jwt({
      token,
      user,
    }: {
      token: JWT
      user?: User | AdapterUser | null
      account?: Account | null
      profile?: Profile | null
      trigger?: "signIn" | "signUp" | "update"
      isNewUser?: boolean
    }) {
      if (user && "id" in user) {
        token.id = user.id
        token.role = (user as AdapterUserWithRole).role 
  }
  return token
    },

    // Session Callback (fügt user.id ins session.user ein)
    async session({ session, token }: { session: Session; token: JWT }) {
      const extendedSession = session as ExtendedSession
  const extendedToken = token as ExtendedJWT & { role?: string }

  if (extendedToken.id) {
    extendedSession.user.id = extendedToken.id
  }
  if (extendedToken.role) {
    extendedSession.user.role = extendedToken.role
  }
  return extendedSession
    },
  },
}
