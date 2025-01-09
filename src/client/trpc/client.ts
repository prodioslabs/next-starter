import { createTRPCReact } from '@trpc/react-query'
import { AppRouter } from '@/server/api/router'

export const trpc = createTRPCReact<AppRouter>()
