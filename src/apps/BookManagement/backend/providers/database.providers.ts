import { Sequelize } from 'sequelize-typescript'
import { AuthorModel } from '../../../../contexts/BookManagement/Author/infrastructure/AuthorModel'
import { BookModel } from '../../../../contexts/BookManagement/Book/infrastructure/BookModel'
import { EditorialModel } from '../../../../contexts/BookManagement/Editorial/infrastructure/EditorialModel'
import { GenreModel } from '../../../../contexts/BookManagement/Genre/infrastructure/GenreModel'
import { populateInitialData } from '../__mock__/populateInitialData'
import { UserModel } from '../Auth/UserModel'

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'admin',
        password: 'admin',
        database: 'cmpc_books'
      })
      sequelize.addModels([
        AuthorModel,
        BookModel,
        EditorialModel,
        GenreModel,
        UserModel
      ])
      await sequelize.sync({
        alter: true
      })
      /* await populateInitialData() */
      return sequelize
    }
  }
]

export const booksProviders = [
  {
    provide: 'BOOK_REPOSITORY',
    useValue: BookModel
  },
  {
    provide: 'AUTHOR_REPOSITORY',
    useValue: AuthorModel
  },
  {
    provide: 'EDITORIAL_REPOSITORY',
    useValue: EditorialModel
  },
  {
    provide: 'GENRE_REPOSITORY',
    useValue: GenreModel
  },
  {
    provide: 'USER_REPOSITORY',
    useValue: UserModel
  }
]
