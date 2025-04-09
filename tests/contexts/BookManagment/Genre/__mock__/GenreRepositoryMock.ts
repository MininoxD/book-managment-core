import { Genre } from '../../../../../src/contexts/BookManagement/Genre/domain/Genre'
import { GenreRepository } from '../../../../../src/contexts/BookManagement/Genre/domain/GenreRepository'
import { Nullable } from '../../../../../src/contexts/shared/Nullable'

export class GenreRepositoryMock implements GenreRepository {
  allGenres: Array<Genre> = []

  findAllMock: jest.Mock = jest.fn()

  findById(id: string): Promise<Nullable<Genre>> {
    throw new Error('Method not implemented.')
  }
  async findAll(): Promise<Array<Genre>> {
    this.findAllMock()
    return this.allGenres
  }
  save(genre: Genre): Promise<void> {
    throw new Error('Method not implemented.')
  }
  update(genre: Genre): Promise<void> {
    throw new Error('Method not implemented.')
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }

  assertFindAllMethodCalled(): void {
    expect(this.findAllMock).toHaveBeenCalled()
  }

  returnOnFindAll(genres: Array<Genre>): void {
    this.allGenres = genres
  }
}
