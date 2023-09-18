import { protectedProcedure, router } from '../../trpc'
import { getUserInput } from './user.input'
import { getCurrentUser, getUser } from './user.service'

export const userRouter = router({
  getUser: protectedProcedure.input(getUserInput).query(({ input }) => getUser(input)),
  getCurrentUser: protectedProcedure.query(({ ctx: { session } }) => getCurrentUser(session)),
})
