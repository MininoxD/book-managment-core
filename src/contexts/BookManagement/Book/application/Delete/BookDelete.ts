import { BookRepository } from '../../domain/BookRepository'

export class BookDelete {
  constructor(private readonly bookRepository: BookRepository) {}

  async run(id: string): Promise<void> {
    await this.bookRepository.delete(id)
  }
}
