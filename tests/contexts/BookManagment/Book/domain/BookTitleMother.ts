import { BookTitle } from '../../../../../src/contexts/BookManagement/Book/domain/BookTitle'
import { MotherCreator } from '../../../shared/domain/MotherCreator'

export class BookTitleMother {
  static random(): BookTitle {
    return new BookTitle(MotherCreator.random().lorem.words(3))
  }
}
