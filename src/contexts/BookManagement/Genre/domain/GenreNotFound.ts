export class GenreNotFound extends Error {
  constructor(id: string) {
    super(`The genre with id ${id} was not found`)
  }
}
