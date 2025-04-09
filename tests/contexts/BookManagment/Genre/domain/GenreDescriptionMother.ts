import { GenreDescription } from '../../../../../src/contexts/BookManagement/Genre/domain/GenreDescription'
import { MotherCreator } from '../../../shared/domain/MotherCreator'

export class GenreDescriptionMother {
  static random(): GenreDescription {
    return new GenreDescription(MotherCreator.random().word.words(5))
  }
}
