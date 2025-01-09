import 'server-only'

import { createHydrationHelpers } from '@trpc/react-query/rsc'
import { cache } from 'react'
import { createTRPCContext } from './context'
import { appRouter } from './router'
import { makeQueryClient } from '@/client/trpc/query-client'
import { createCallerFactory } from './trpc'

export const getQueryClient = cache(makeQueryClient)
const caller = createCallerFactory(appRouter)(createTRPCContext)

export const { trpc, HydrateClient } = createHydrationHelpers<typeof appRouter>(caller, getQueryClient)
