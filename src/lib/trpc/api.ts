import { experimental_createTRPCNextAppDirServer as createTRPCNextAppDirServer } from '@trpc/next/app-dir/server'
import { experimental_nextCacheLink as nextCacheLink } from '@trpc/next/app-dir/links/nextCache'
import SuperJSON from 'superjson'
import { loggerLink } from '@trpc/client'
import { AppRouter, appRouter } from '@/server/api/router'
import { createTRPCContext } from '@/server/api/context'

export const api = createTRPCNextAppDirServer<AppRouter>({
  config() {
    return {
      links: [
        loggerLink({
          enabled: (opts) => opts.direction === 'down' && opts.result instanceof Error,
        }),
        nextCacheLink({
          revalidate: 1,
          router: appRouter,
          createContext: createTRPCContext,
        }),
      ],
      transformer: SuperJSON,
    }
  },
})
