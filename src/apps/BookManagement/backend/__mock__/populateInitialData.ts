import { AuthorMother } from '../../../../../tests/contexts/BookManagment/Author/domain/AuthorMother'
import { EditorialMother } from '../../../../../tests/contexts/BookManagment/Editorial/domain/EditorialMother'
import { GenreMother } from '../../../../../tests/contexts/BookManagment/Genre/domain/GenreMother'
import { AuthorModel } from '../../../../contexts/BookManagement/Author/infrastructure/AuthorModel'
import { EditorialModel } from '../../../../contexts/BookManagement/Editorial/infrastructure/EditorialModel'
import { GenreModel } from '../../../../contexts/BookManagement/Genre/infrastructure/GenreModel'
import { UserModel } from '../Auth/UserModel'

export async function populateInitialData() {
  const authors = Array.from({ length: 5 }, () => AuthorMother.random())

  const authorData = authors.map((author) => author.toPrimitives())
  await AuthorModel.bulkCreate(authorData, { ignoreDuplicates: true })

  const editorials = Array.from({ length: 5 }, () => EditorialMother.random())
  const editorialData = editorials.map((editorial) => editorial.toPrimitives())
  await EditorialModel.bulkCreate(editorialData, { ignoreDuplicates: true })

  const genres = Array.from({ length: 5 }, () => GenreMother.random())
  const genreData = genres.map((genre) => genre.toPrimitives())
  await GenreModel.bulkCreate(genreData, { ignoreDuplicates: true })

  await UserModel.findOrCreate({
    where: { username: 'admin' },
    defaults: {
      username: 'admin',
      password: 'admin'
    }
  })
}
