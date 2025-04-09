import { Author } from '../domain/Author'
import { AuthorRepository } from '../domain/AuthorRepository'

export class AuthorFinder {
  constructor(private readonly authorRepository: AuthorRepository) {}

  async run(): Promise<Array<Author>> {
    return await this.authorRepository.findAll()
  }
}
