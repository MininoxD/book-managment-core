import { Genre } from '../domain/Genre'
import { GenreRepository } from '../domain/GenreRepository'

export class GenreFinder {
  constructor(private readonly genreRepository: GenreRepository) {}

  async run(): Promise<Array<Genre>> {
    return await this.genreRepository.findAll()
  }
}
