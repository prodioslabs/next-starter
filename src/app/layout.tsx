import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getUserSession } from '@/lib/auth/utils'
import Provider from './_components/provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Starter Kit',
  description: 'Fullstack Next Starter Kit with NextAuth.js, Prisma, and Tailwind CSS',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getUserSession()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Provider session={session}>{children}</Provider>
      </body>
    </html>
  )
}
