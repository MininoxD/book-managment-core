import { z } from 'zod'

export const BookCreatorRequestSchema = z.object({
  id: z.string(),
  title: z.string(),
  price: z.number(),
  photos: z.array(z.string()),
  authorId: z.string(),
  editorialId: z.string(),
  genreId: z.string()
})

export type BookCreatorRequestSchemaType = z.infer<
  typeof BookCreatorRequestSchema
>
