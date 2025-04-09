import { Nullable } from '../../../../shared/Nullable'
import { Book } from '../../domain/Book'
import { BookRepository } from '../../domain/BookRepository'

export class BookFindById {
  constructor(private readonly bookRepository: BookRepository) {}

  async run(id: string): Promise<Nullable<Book>> {
    return await this.bookRepository.findById(id)
  }
}
