import { trpc } from '@/client/trpc/client'
import invariant from 'tiny-invariant'

export function useCurrentUser() {
  const { data: user, status } = trpc.user.getCurrentUser.useQuery()

  if (status !== 'success') {
    return null
  }

  invariant(user, 'User data is unavailable.')

  return user
}
