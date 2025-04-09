import { AuthorId } from '../../Author/domain/AuthorId'
import { EditorialId } from '../../Editorial/domain/EditorialId'
import { GenreId } from '../../Genre/domain/GenreId'
import { BookAvailable } from './BookAvailable'
import { BookId } from './BookId'
import { BookPhoto } from './BookPhoto'
import { BookPrice } from './BookPrice'
import { BookTitle } from './BookTitle'

export class Book {
  readonly id: BookId
  readonly title: BookTitle
  readonly price: BookPrice
  readonly available: BookAvailable
  readonly photos: Array<BookPhoto>
  readonly authorId: AuthorId
  readonly editorialId: EditorialId
  readonly genreId: GenreId

  constructor({
    id,
    title,
    price,
    available,
    photos,
    authorId,
    editorialId,
    genreId
  }: {
    id: BookId
    title: BookTitle
    price: BookPrice
    available: BookAvailable
    photos: Array<BookPhoto>
    authorId: AuthorId
    editorialId: EditorialId
    genreId: GenreId
  }) {
    this.id = id
    this.title = title
    this.price = price
    this.available = available
    this.photos = photos
    this.authorId = authorId
    this.editorialId = editorialId
    this.genreId = genreId
  }

  toPrimitives() {
    return {
      id: this.id.value,
      title: this.title.value,
      price: this.price.value,
      available: this.available.value,
      photos: this.photos.map((photo) => photo.value),
      authorId: this.authorId.value,
      editorialId: this.editorialId.value,
      genreId: this.genreId.value
    }
  }

  static fromPrimitives({
    id,
    title,
    price,
    available,
    photos,
    authorId,
    editorialId,
    genreId
  }: {
    id: string
    title: string
    price: number
    available: boolean
    photos: Array<string>
    authorId: string
    editorialId: string
    genreId: string
  }) {
    return new Book({
      id: new BookId(id),
      title: new BookTitle(title),
      price: new BookPrice(price),
      available: new BookAvailable(available),
      photos: photos.map((photo) => new BookPhoto(photo)),
      authorId: new AuthorId(authorId),
      editorialId: new EditorialId(editorialId),
      genreId: new GenreId(genreId)
    })
  }
}
