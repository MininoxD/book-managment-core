import { EditorialFinder } from '../../../../../src/contexts/BookManagement/Editorial/application/EditorialFinder'
import { EditorialRepositoryMock } from '../__mock__/EditorialRepositoryMock'
import { EditorialMother } from '../domain/EditorialMother'

describe('EditorialFinder', () => {
  let editorialFinder: EditorialFinder
  let editorialRepositoryMock: EditorialRepositoryMock

  beforeEach(() => {
    editorialRepositoryMock = new EditorialRepositoryMock()
    editorialFinder = new EditorialFinder(editorialRepositoryMock)
  })

  it('should return all editorials', async () => {
    const editorials = Array.from({ length: 3 }, () => EditorialMother.random())
    editorialRepositoryMock.returnOnFindAll(editorials)
    const result = await editorialFinder.run()
    expect(result).toEqual(editorials)
    editorialRepositoryMock.assertFindAllMethodCalled()
  })
})
