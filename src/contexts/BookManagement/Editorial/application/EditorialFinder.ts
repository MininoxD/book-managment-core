import { Editorial } from '../domain/Editorial'
import { EditorialRepository } from '../domain/EditorialRepository'

export class EditorialFinder {
  constructor(private readonly editorialRepository: EditorialRepository) {}

  async run(): Promise<Array<Editorial>> {
    return await this.editorialRepository.findAll()
  }
}
