import { redirect } from 'next/navigation'
import { auth } from '@/server/auth'

export async function getUserSession() {
  const session = await auth()
  return session
}

export async function checkUserSession() {
  const session = await getUserSession()
  if (!session) {
    redirect('/signin')
  }
}
