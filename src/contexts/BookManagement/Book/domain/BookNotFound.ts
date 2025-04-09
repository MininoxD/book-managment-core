export class BookNotFound extends Error {
  constructor(id: string) {
    super(`The book with id ${id} was not found`)
  }
}
