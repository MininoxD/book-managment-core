import { BookPrice } from '../../../../../src/contexts/BookManagement/Book/domain/BookPrice'
import { MotherCreator } from '../../../shared/domain/MotherCreator'

export class BookPriceMother {
  static random(): BookPrice {
    return new BookPrice(
      MotherCreator.random().number.float({
        min: 1,
        max: 1000,
        precision: 0.01
      })
    )
  }
}
