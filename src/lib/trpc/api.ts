import { experimental_createTRPCNextAppDirServer as createTRPCNextAppDirServer } from '@trpc/next/app-dir/server'
import { experimental_nextHttpLink as nextHttpLink } from '@trpc/next/app-dir/links/nextHttp'
import SuperJSON from 'superjson'
import { loggerLink } from '@trpc/client'
import { getUrl } from '../utils'
import { AppRouter } from '@/server/api/router'

export const api = createTRPCNextAppDirServer<AppRouter>({
  config() {
    return {
      links: [
        loggerLink({
          enabled: (opts) => opts.direction === 'down' && opts.result instanceof Error,
        }),
        nextHttpLink({
          url: getUrl('/api/trpc'),
        }),
      ],
      transformer: SuperJSON,
    }
  },
})
