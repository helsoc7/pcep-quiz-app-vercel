// src/lib/auth.ts
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { getServerSession } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { PrismaClient } from "@prisma/client"
import type { NextAuthOptions } from "next-auth"

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session: async ({ session, token }) => {
      session.user.id = token.sub!
      return session
    },
  },
}

export const getAuthSession = () => getServerSession(authOptions)
