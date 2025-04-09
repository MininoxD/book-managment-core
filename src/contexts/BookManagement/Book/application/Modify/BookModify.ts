import { AuthorNotFound } from '../../../Author/domain/AuthorNotFound'
import { AuthorRepository } from '../../../Author/domain/AuthorRepository'
import { EditorialNotFound } from '../../../Editorial/domain/EditorialNotFound'
import { EditorialRepository } from '../../../Editorial/domain/EditorialRepository'
import { GenreNotFound } from '../../../Genre/domain/GenreNotFound'
import { GenreRepository } from '../../../Genre/domain/GenreRepository'
import { Book } from '../../domain/Book'
import { BookAvailable } from '../../domain/BookAvailable'
import { BookNotFound } from '../../domain/BookNotFound'
import { BookPhoto } from '../../domain/BookPhoto'
import { BookPrice } from '../../domain/BookPrice'
import { BookRepository } from '../../domain/BookRepository'
import { BookTitle } from '../../domain/BookTitle'
import { BookModifyRequest } from './BookModifyRequest'

export class BookModify {
  constructor(
    private readonly bookRepository: BookRepository,
    private readonly authorRepository: AuthorRepository,
    private readonly editorialRepository: EditorialRepository,
    private readonly genreRepository: GenreRepository
  ) {}

  async run(request: BookModifyRequest): Promise<void> {
    const book = await this.bookRepository.findById(request.id)
    if (!book) throw new BookNotFound(request.id)

    const bookTitle = new BookTitle(request.data.title)
    const bookPrice = new BookPrice(request.data.price)
    const bookAvailable = new BookAvailable(request.data.available)
    const bookPhotos = request.data.photos.map((photo) => new BookPhoto(photo))

    const author = await this.authorRepository.findById(request.data.authorId)
    if (!author) throw new AuthorNotFound(request.data.authorId)

    const editorial = await this.editorialRepository.findById(
      request.data.editorialId
    )
    if (!editorial) throw new EditorialNotFound(request.data.editorialId)

    const genre = await this.genreRepository.findById(request.data.genreId)
    if (!genre) throw new GenreNotFound(request.data.genreId)

    const modifiedBook = new Book({
      id: book.id,
      title: bookTitle,
      price: bookPrice,
      available: bookAvailable,
      photos: bookPhotos,
      authorId: author.id,
      editorialId: editorial.id,
      genreId: genre.id
    })

    await this.bookRepository.update(modifiedBook)
  }
}
