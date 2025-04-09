import { Editorial } from '../../../../../src/contexts/BookManagement/Editorial/domain/Editorial'
import { EditorialRepository } from '../../../../../src/contexts/BookManagement/Editorial/domain/EditorialRepository'
import { Nullable } from '../../../../../src/contexts/shared/Nullable'

export class EditorialRepositoryMock implements EditorialRepository {
  allEditorials: Array<Editorial> = []
  findAllMock: jest.Mock = jest.fn()
  findById(id: string): Promise<Nullable<Editorial>> {
    throw new Error('Method not implemented.')
  }
  async findAll(): Promise<Array<Editorial>> {
    this.findAllMock()
    return this.allEditorials
  }
  save(editorial: Editorial): Promise<void> {
    throw new Error('Method not imsplemented.')
  }
  update(editorial: Editorial): Promise<void> {
    throw new Error('Method not implemented.')
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }

  assertFindAllMethodCalled(): void {
    expect(this.findAllMock).toHaveBeenCalled()
  }

  returnOnFindAll(editorials: Array<Editorial>): void {
    this.allEditorials = editorials
  }
}
