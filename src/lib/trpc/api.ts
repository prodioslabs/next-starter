import { experimental_createTRPCNextAppDirServer as createTRPCNextAppDirServer } from '@trpc/next/app-dir/server'
import { experimental_nextHttpLink as nextHttpLink } from '@trpc/next/app-dir/links/nextHttp'
import SuperJSON from 'superjson'
import { loggerLink } from '@trpc/client'
import { cookies } from 'next/headers'
import { AppRouter } from '@/server/api/router'
import { getUrl } from '../utils'

export const api = createTRPCNextAppDirServer<AppRouter>({
  config() {
    return {
      links: [
        loggerLink({
          enabled: (opts) => opts.direction === 'down' && opts.result instanceof Error,
        }),
        nextHttpLink({
          url: getUrl('/api/trpc'),
          batch: true,
          headers() {
            return {
              cookie: cookies().toString(),
              'x-trpc-source': 'rsc-invoke',
            }
          },
        }),
      ],
      transformer: SuperJSON,
    }
  },
})
