import { AuthorId } from '../../../../../src/contexts/BookManagement/Author/domain/AuthorId'
import { UuidMother } from '../../../shared/domain/UuidMother'

export class AuthorIdMother {
  static create(value: string): AuthorId {
    return new AuthorId(value)
  }

  static random(): AuthorId {
    return this.create(UuidMother.random())
  }
}
