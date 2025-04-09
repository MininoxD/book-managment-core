import { Inject, Injectable } from '@nestjs/common'
import { Nullable } from '../../../shared/Nullable'
import { Author } from '../domain/Author'
import { AuthorRepository } from '../domain/AuthorRepository'
import { AuthorModel } from './AuthorModel'

@Injectable()
export class AuthorRepositorySequelize implements AuthorRepository {
  constructor(
    @Inject('AUTHOR_REPOSITORY')
    private authorRepository: typeof AuthorModel
  ) {}
  async findById(id: string): Promise<Nullable<Author>> {
    const author = await this.authorRepository.findOne({
      where: {
        id: id
      }
    })

    if (!author) return null
    return Author.fromPrimitives({
      id: author.id,
      name: author.name,
      biography: author.biography
    })
  }
  async findAll(): Promise<Array<Author>> {
    const authors = await this.authorRepository.findAll()

    return authors.map((author) =>
      Author.fromPrimitives({
        id: author.id,
        name: author.name,
        biography: author.biography
      })
    )
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
}
