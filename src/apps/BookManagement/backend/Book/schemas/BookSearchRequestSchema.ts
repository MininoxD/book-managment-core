import { z } from 'zod'

export const BookSearchRequestSchema = z.object({
  title: z.string().optional(),
  limit: z.number().optional(),
  offset: z.number().optional()
})

export type BookSearchRequestSchemaType = z.infer<
  typeof BookSearchRequestSchema
>
