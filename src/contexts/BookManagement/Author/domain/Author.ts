import { AuthorBiography } from './AuthorBiography'
import { AuthorId } from './AuthorId'
import { AuthorName } from './AuthorName'

export class Author {
  readonly id: AuthorId
  readonly name: AuthorName
  readonly biography: AuthorBiography
  constructor({
    id,
    name,
    biography
  }: {
    id: AuthorId
    name: AuthorName
    biography: AuthorBiography
  }) {
    this.id = id
    this.name = name
    this.biography = biography
  }

  static fromPrimitives({
    id,
    name,
    biography
  }: {
    id: string
    name: string
    biography: string
  }) {
    return new Author({
      id: new AuthorId(id),
      name: new AuthorName(name),
      biography: new AuthorBiography(biography)
    })
  }

  toPrimitives() {
    return {
      id: this.id.value,
      name: this.name.value,
      biography: this.biography.value
    }
  }
}
