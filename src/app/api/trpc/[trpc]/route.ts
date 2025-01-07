import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { createTRPCContext } from '@/server/api/context'
import { appRouter } from '@/server/api/router'

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: createTRPCContext,
  })

export { handler as GET, handler as POST }
