import { redirect } from 'next/navigation'
import { auth } from '@/server/auth'
import { UserType } from '@prisma/client'
import invariant from 'tiny-invariant'

export async function getUserSession() {
  const session = await auth()
  return session
}

export async function checkUserSession() {
  const session = await getUserSession()
  if (session) {
    redirect('/')
  }
}

export async function redirectInAccessibleUsers(
  accesibleUserTypes: UserType | UserType,
  redirectTo: string,
) {
  const session = await getUserSession()
  invariant(session, 'session not found')
  const isAccessibleUser = Array.isArray(accesibleUserTypes)
    ? accesibleUserTypes.includes(session?.user?.type)
    : accesibleUserTypes === session?.user?.type
  if (!isAccessibleUser) {
    redirect(redirectTo)
  }
}
