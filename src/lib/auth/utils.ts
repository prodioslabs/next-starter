import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/server/auth'

export async function getUserSession() {
  return getServerSession(authOptions)
}

export async function checkUserSession() {
  const session = await getUserSession()
  if (!session) {
    redirect('/signin')
  }
}
