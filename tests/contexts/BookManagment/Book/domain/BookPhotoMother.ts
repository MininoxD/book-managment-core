import { BookPhoto } from '../../../../../src/contexts/BookManagement/Book/domain/BookPhoto'
import { MotherCreator } from '../../../shared/domain/MotherCreator'

export class BookPhotoMother {
  static random(): BookPhoto {
    return new BookPhoto(MotherCreator.random().image.url())
  }
}
