import { GenreId } from '../../../../../src/contexts/BookManagement/Genre/domain/GenreId'
import { UuidMother } from '../../../shared/domain/UuidMother'

export class GenreIdMother {
  static random(): GenreId {
    return new GenreId(UuidMother.random())
  }
}
