import { Inject, Injectable } from '@nestjs/common'
import { Nullable } from '../../../shared/Nullable'
import { Genre } from '../domain/Genre'
import { GenreRepository } from '../domain/GenreRepository'
import { GenreModel } from './GenreModel'

@Injectable()
export class GenreRepositorySequelize implements GenreRepository {
  constructor(
    @Inject('GENRE_REPOSITORY')
    private genreRepository: typeof GenreModel
  ) {}
  async findById(id: string): Promise<Nullable<Genre>> {
    const genre = await this.genreRepository.findOne({
      where: {
        id: id
      }
    })

    if (!genre) return null
    return Genre.fromPrimitives({
      id: genre.id,
      name: genre.name,
      description: genre.description
    })
  }
  async findAll(): Promise<Array<Genre>> {
    const genres = await this.genreRepository.findAll()

    return genres.map((genre) =>
      Genre.fromPrimitives({
        id: genre.id,
        name: genre.name,
        description: genre.description
      })
    )
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
}
