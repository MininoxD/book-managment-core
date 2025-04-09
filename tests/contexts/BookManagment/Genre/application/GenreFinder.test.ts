import { GenreFinder } from '../../../../../src/contexts/BookManagement/Genre/application/GenreFinder'
import { GenreRepositoryMock } from '../__mock__/GenreRepositoryMock'
import { GenreMother } from '../domain/GenreMother'

describe('GenreFinder', () => {
  let genreFinder: GenreFinder
  let genreRepositoryMock: GenreRepositoryMock

  beforeEach(() => {
    genreRepositoryMock = new GenreRepositoryMock()
    genreFinder = new GenreFinder(genreRepositoryMock)
  })

  it('should return all genres', async () => {
    const genres = Array.from({ length: 3 }, () => GenreMother.random())
    genreRepositoryMock.returnOnFindAll(genres)
    const result = await genreFinder.run()
    expect(result).toEqual(genres)
    genreRepositoryMock.assertFindAllMethodCalled()
  })
})
