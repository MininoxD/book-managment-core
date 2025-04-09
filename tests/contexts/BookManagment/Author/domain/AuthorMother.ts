import { Author } from '../../../../../src/contexts/BookManagement/Author/domain/Author'
import { AuthorBiographyMother } from './AuthorBiographyMother'
import { AuthorIdMother } from './AuthorIdMother'
import { AuthorNameMother } from './AuthorNameMother'

export class AuthorMother {
  static random(): Author {
    return new Author({
      id: AuthorIdMother.random(),
      name: AuthorNameMother.random(),
      biography: AuthorBiographyMother.random()
    })
  }
}
