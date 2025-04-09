import { Book } from '../../domain/Book'
import { BookRepository } from '../../domain/BookRepository'
import { BookSearchRequest } from './BookSearchRequest'

export class BookSearch {
  constructor(private readonly bookRepository: BookRepository) {}

  async run(request: BookSearchRequest): Promise<Array<Book>> {
    return await this.bookRepository.search(request)
  }
}
