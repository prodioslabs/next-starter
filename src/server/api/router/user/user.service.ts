import { z } from 'zod'
import { Session } from 'next-auth'
import { getUserInput } from './user.input'
import { prisma } from '@/server/db'

export function getUser(input: z.infer<typeof getUserInput>) {
  return prisma.user.findUnique({
    where: {
      id: input.id,
    },
  })
}

export function getCurrentUser(session: Session) {
  return prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  })
}
