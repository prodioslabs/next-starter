import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  })

/**
 * This is a hack to prevent Prisma from being instantiated twice in development.
 */
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
