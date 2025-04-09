import { Book } from '../../../../../src/contexts/BookManagement/Book/domain/Book'
import { AuthorIdMother } from '../../Author/domain/AuthorIdMother'
import { EditorialIdMother } from '../../Editorial/domain/EditorialIdMother'
import { GenreIdMother } from '../../Genre/domain/GenreIdMother'
import { BookAvailableMother } from './BookAvailableMother'
import { BookIdMother } from './BookIdMother'
import { BookPhotoMother } from './BookPhotoMother'
import { BookPriceMother } from './BookPriceMother'
import { BookTitleMother } from './BookTitleMother'

export class BookMother {
  static random(): Book {
    const ArrBookPhotoMother = Array.from({ length: 3 }, () =>
      BookPhotoMother.random()
    )
    return new Book({
      id: BookIdMother.random(),
      title: BookTitleMother.random(),
      price: BookPriceMother.random(),
      available: BookAvailableMother.random(),
      photos: ArrBookPhotoMother,
      authorId: AuthorIdMother.random(),
      editorialId: EditorialIdMother.random(),
      genreId: GenreIdMother.random()
    })
  }
}
