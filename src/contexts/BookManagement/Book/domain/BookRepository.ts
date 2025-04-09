import { Nullable } from '../../../shared/Nullable'
import { Book } from './Book'

export abstract class BookRepository {
  abstract findById(id: string): Promise<Nullable<Book>>
  abstract searchByTitle(title: string): Promise<Array<Book>>
  abstract search({
    title
  }: {
    title?: string
    limit?: number
    offset?: number
  }): Promise<Array<Book>>
  abstract save(book: Book): Promise<void>
  abstract update(book: Book): Promise<void>
  abstract delete(id: string): Promise<void>
}
