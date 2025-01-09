import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import { type Provider } from 'next-auth/providers'
import { env } from '@/lib/env'
import { prisma } from './db'

const providers: Provider[] = []
if (env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET) {
  providers.push(
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  )
}

if (env.GITHUB_CLIENT_ID && env.GITHUB_CLIENT_SECRET) {
  providers.push(
    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
  )
}

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers,
  pages: {
    signIn: '/signin',
    signOut: '/signout',
  },
  adapter: PrismaAdapter(prisma),
})
