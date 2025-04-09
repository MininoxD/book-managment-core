import { Inject, Injectable } from '@nestjs/common'
import { Nullable } from '../../../shared/Nullable'
import { Book } from '../domain/Book'
import { BookRepository } from '../domain/BookRepository'
import { BookModel } from './BookModel'
import { Op } from 'sequelize'

@Injectable()
export class BookRepositorySequelize implements BookRepository {
  constructor(
    @Inject('BOOK_REPOSITORY')
    private bookRepository: typeof BookModel
  ) {}

  async search({
    title,
    limit,
    offset
  }: {
    title?: string
    limit?: number
    offset?: number
  }): Promise<Array<Book>> {
    const whereCondition = title
      ? {
          title: {
            [Op.like]: `%${title}%`
          }
        }
      : {}

    const books = await this.bookRepository.findAll({
      where: whereCondition,
      limit: limit || undefined,
      offset: offset || undefined
    })

    return books.map((book) =>
      Book.fromPrimitives({
        id: book.id,
        title: book.title,
        editorialId: book.editorialId,
        genreId: book.genreId,
        authorId: book.authorId,
        price: book.price,
        available: book.available,
        photos: book.photos.map((photo) => photo)
      })
    )
  }

  async findById(id: string): Promise<Nullable<Book>> {
    const book = await this.bookRepository.findOne({
      where: {
        id: id
      }
    })

    if (!book) return null
    return Book.fromPrimitives({
      id: book.id,
      title: book.title,
      editorialId: book.editorialId,
      genreId: book.genreId,
      authorId: book.authorId,
      price: book.price,
      available: book.available,
      photos: book.photos.map((photo) => photo)
    })
  }
  async searchByTitle(title: string): Promise<Array<Book>> {
    const books = await this.bookRepository.findAll({
      where: {
        title: {
          [Op.like]: `%${title}%`
        }
      }
    })

    return books.map((book) =>
      Book.fromPrimitives({
        id: book.id,
        title: book.title,
        editorialId: book.editorialId,
        genreId: book.genreId,
        authorId: book.authorId,
        price: book.price,
        available: book.available,
        photos: book.photos.map((photo) => photo)
      })
    )
  }
  async save(book: Book): Promise<void> {
    await this.bookRepository.create({
      ...book.toPrimitives()
    })
  }
  async update(book: Book): Promise<void> {
    const { id, ...rest } = book.toPrimitives()
    console.log({
      ...rest
    })

    await this.bookRepository.update(
      {
        ...rest
      },
      {
        where: {
          id: book.id.value
        }
      }
    )
  }
  async delete(id: string): Promise<void> {
    await this.bookRepository.update(
      {
        isDeleted: true
      },
      {
        where: {
          id: id
        }
      }
    )
  }
}
