import { Author } from '../../../../../src/contexts/BookManagement/Author/domain/Author'
import { AuthorRepository } from '../../../../../src/contexts/BookManagement/Author/domain/AuthorRepository'
import { Nullable } from '../../../../../src/contexts/shared/Nullable'

export class AuthorRepositoryMock implements AuthorRepository {
  authors: Array<Author> = []
  findAllMock: jest.Mock = jest.fn()

  findById(id: string): Promise<Nullable<Author>> {
    throw new Error('Method not implemented.')
  }
  async findAll(): Promise<Array<Author>> {
    this.findAllMock()
    return this.authors
  }
  save(author: Author): Promise<void> {
    throw new Error('Method not implemented.')
  }
  update(author: Author): Promise<void> {
    throw new Error('Method not implemented.')
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }

  assertFindAllHasBeenCalled(): void {
    expect(this.findAllMock).toHaveBeenCalled()
  }

  returnOnFindAll(authors: Array<Author>): void {
    this.authors = authors
  }
}
