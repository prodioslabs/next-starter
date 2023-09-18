import { z } from 'zod'

export const uuid = z.string().regex(/^[a-f\d]{24}$/i)
