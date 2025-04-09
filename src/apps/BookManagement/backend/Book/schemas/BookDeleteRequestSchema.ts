import { z } from 'zod'

export const BookDeleteIdSchema = z.string()

export type BookDeleteIdSchemaType = z.infer<typeof BookDeleteIdSchema>
