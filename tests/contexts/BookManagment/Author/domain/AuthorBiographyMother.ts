import { AuthorBiography } from '../../../../../src/contexts/BookManagement/Author/domain/AuthorBiography'
import { MotherCreator } from '../../../shared/domain/MotherCreator'

export class AuthorBiographyMother {
  static create(value: string): AuthorBiography {
    return new AuthorBiography(value)
  }
  static random(): AuthorBiography {
    return this.create(MotherCreator.random().lorem.paragraphs())
  }
}
