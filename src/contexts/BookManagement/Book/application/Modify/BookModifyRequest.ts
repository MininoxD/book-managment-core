import { BookCreatorRequest } from '../Create/BookCreatorRequest'

export type BookModifyRequestData = Omit<BookCreatorRequest, 'id'> & {
  available: boolean
}
export interface BookModifyRequest {
  id: string
  data: BookModifyRequestData
}
