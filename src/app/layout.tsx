import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { getUserSession } from '@/lib/auth/utils'
import Provider from './_components/provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Next Starter Kit',
  description: 'Fullstack Next Starter Kit with NextAuth.js, Prisma, and Tailwind CSS',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getUserSession()

  return (
    <html lang="en" suppressHydrationWarning className={`${GeistMono.variable} ${GeistSans.variable}`}>
      <body suppressHydrationWarning>
        <Provider session={session}>{children}</Provider>
      </body>
    </html>
  )
}
