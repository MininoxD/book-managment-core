export class EditorialNotFound extends Error {
  constructor(id: string) {
    super(`The editorial with id ${id} was not found`)
  }
}
