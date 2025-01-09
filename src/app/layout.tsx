import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { SessionProvider } from 'next-auth/react'
import './globals.css'
import { getUserSession } from '@/lib/auth'
import { TRPCProvider } from '@/client/trpc/provider'
import { ThemeProvider } from './_components/theme-provider'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Next Starter',
  description: 'Next Starter made by Prodios Labs',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const user = await getUserSession()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <TRPCProvider>
          <SessionProvider session={user}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              {children}
            </ThemeProvider>
          </SessionProvider>
        </TRPCProvider>
      </body>
    </html>
  )
}
