import { z } from 'zod'
import { BookCreatorRequestSchema } from './BookCreatorRequestSchema'

export const BookModifyRequestDataSchema = BookCreatorRequestSchema.omit({
  id: true
}).extend({
  available: z.boolean()
})

export const BookModifyRequestSchema = z.object({
  id: z.string(),
  data: BookModifyRequestDataSchema
})

export type BookModifyRequestSchemaType = z.infer<
  typeof BookModifyRequestSchema
>
