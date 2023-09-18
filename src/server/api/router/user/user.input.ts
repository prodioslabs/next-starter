import { z } from 'zod'
import { uuid } from '@/lib/validation'

export const getUserInput = z.object({
  id: uuid,
})
