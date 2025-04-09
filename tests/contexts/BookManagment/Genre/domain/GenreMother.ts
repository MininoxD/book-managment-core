import { Genre } from '../../../../../src/contexts/BookManagement/Genre/domain/Genre'
import { GenreDescriptionMother } from './GenreDescriptionMother'
import { GenreIdMother } from './GenreIdMother'
import { GenreNameMother } from './GenreNameMother'

export class GenreMother {
  static random(): Genre {
    return new Genre({
      id: GenreIdMother.random(),
      name: GenreNameMother.random(),
      description: GenreDescriptionMother.random()
    })
  }
}
