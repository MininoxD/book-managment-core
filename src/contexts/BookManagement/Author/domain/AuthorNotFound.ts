export class AuthorNotFound extends Error {
  constructor(id: string) {
    super(`The author with id ${id} was not found`)
  }
}
