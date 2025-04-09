import { GenreDescription } from './GenreDescription'
import { GenreId } from './GenreId'
import { GenreName } from './GenreName'

export class Genre {
  readonly id: GenreId
  readonly name: GenreName
  readonly description: GenreDescription

  constructor({
    id,
    name,
    description
  }: {
    id: GenreId
    name: GenreName
    description: GenreDescription
  }) {
    this.id = id
    this.name = name
    this.description = description
  }

  static fromPrimitives({
    id,
    name,
    description
  }: {
    id: string
    name: string
    description: string
  }): Genre {
    return new Genre({
      id: new GenreId(id),
      name: new GenreName(name),
      description: new GenreDescription(description)
    })
  }

  toPrimitives() {
    return {
      id: this.id.value,
      name: this.name.value,
      description: this.description.value
    }
  }
}
