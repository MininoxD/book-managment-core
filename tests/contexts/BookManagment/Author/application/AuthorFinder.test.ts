import { AuthorFinderRequest } from '../../../../../src/contexts/BookManagement/Author/application/AuthorFinder'
import { AuthorRepositoryMock } from '../__mock__/AuthorRepositoryMock'
import { AuthorMother } from '../domain/AuthorMother'

describe('AuthorFinder', () => {
  let authorFinder: AuthorFinderRequest
  let authorRepository: AuthorRepositoryMock

  beforeEach(() => {
    authorRepository = new AuthorRepositoryMock()
    authorFinder = new AuthorFinderRequest(authorRepository)
  })

  it('should find all authors', async () => {
    const authors = Array.from({ length: 5 }, () => AuthorMother.random())
    authorRepository.returnOnFindAll(authors)

    const authorsResponse = await authorFinder.run()

    expect(authorsResponse).toEqual(authors)
    authorRepository.assertFindAllHasBeenCalled()
  })
})
