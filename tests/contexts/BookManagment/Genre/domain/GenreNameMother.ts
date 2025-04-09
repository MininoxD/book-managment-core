import { GenreName } from '../../../../../src/contexts/BookManagement/Genre/domain/GenreName'
import { MotherCreator } from '../../../shared/domain/MotherCreator'

export class GenreNameMother {
  static random(): GenreName {
    return new GenreName(MotherCreator.random().word.words(2))
  }
}
