import { BooleanValueObject } from '../../../shared/value-object/booleanValueObject'

export class BookAvailable extends BooleanValueObject {
  public static create(): BookAvailable {
    return new BookAvailable(true)
  }
}
