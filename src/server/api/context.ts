import { Session } from 'next-auth'
import { getUserSession } from '@/lib/auth/utils'

export type CreateContextOptions = {
  session: Session | null
}

export async function createTRPCContext(): Promise<CreateContextOptions> {
  const session = await getUserSession()
  return {
    session,
  }
}
