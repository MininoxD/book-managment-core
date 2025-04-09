import { AuthorName } from '../../../../../src/contexts/BookManagement/Author/domain/AuthorName'
import { MotherCreator } from '../../../shared/domain/MotherCreator'

export class AuthorNameMother {
  static create(value: string): AuthorName {
    return new AuthorName(value)
  }

  static random(): AuthorName {
    return this.create(MotherCreator.random().person.fullName())
  }
}
