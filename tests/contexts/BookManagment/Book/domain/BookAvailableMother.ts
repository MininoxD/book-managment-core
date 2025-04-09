import { BookAvailable } from '../../../../../src/contexts/BookManagement/Book/domain/BookAvailable'
import { MotherCreator } from '../../../shared/domain/MotherCreator'

export class BookAvailableMother {
  static random(): BookAvailable {
    return new BookAvailable(MotherCreator.random().datatype.boolean())
  }
}
