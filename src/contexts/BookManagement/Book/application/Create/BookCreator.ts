import { AuthorNotFound } from '../../../Author/domain/AuthorNotFound'
import { AuthorRepository } from '../../../Author/domain/AuthorRepository'
import { EditorialNotFound } from '../../../Editorial/domain/EditorialNotFound'
import { EditorialRepository } from '../../../Editorial/domain/EditorialRepository'
import { GenreNotFound } from '../../../Genre/domain/GenreNotFound'
import { GenreRepository } from '../../../Genre/domain/GenreRepository'
import { Book } from '../../domain/Book'
import { BookAvailable } from '../../domain/BookAvailable'
import { BookId } from '../../domain/BookId'
import { BookPhoto } from '../../domain/BookPhoto'
import { BookPrice } from '../../domain/BookPrice'
import { BookRepository } from '../../domain/BookRepository'
import { BookTitle } from '../../domain/BookTitle'
import { BookCreatorRequest } from './BookCreatorRequest'

export class BookCreator {
  constructor(
    private readonly bookRepository: BookRepository,
    private readonly authorRepository: AuthorRepository,
    private readonly editorialRepository: EditorialRepository,
    private readonly genreRepository: GenreRepository
  ) {}

  async run(data: BookCreatorRequest): Promise<void> {
    const bookId = new BookId(data.id)
    const bookTitle = new BookTitle(data.title)
    const bookPrice = new BookPrice(data.price)
    const bookAvailable = BookAvailable.create()
    const bookPhotos = data.photos.map((photo) => new BookPhoto(photo))

    const author = await this.authorRepository.findById(data.authorId)
    if (!author) throw new AuthorNotFound(data.authorId)

    const editorial = await this.editorialRepository.findById(data.editorialId)
    if (!editorial) throw new EditorialNotFound(data.editorialId)

    const genre = await this.genreRepository.findById(data.genreId)
    if (!genre) throw new GenreNotFound(data.genreId)

    const book = new Book({
      id: bookId,
      title: bookTitle,
      price: bookPrice,
      available: bookAvailable,
      photos: bookPhotos,
      authorId: author.id,
      editorialId: editorial.id,
      genreId: genre.id
    })
    await this.bookRepository.save(book)
  }
}
