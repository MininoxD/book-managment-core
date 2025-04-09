import { BookId } from '../../../../../src/contexts/BookManagement/Book/domain/BookId'
import { UuidMother } from '../../../shared/domain/UuidMother'

export class BookIdMother {
  static random(): BookId {
    return new BookId(UuidMother.random())
  }
}
