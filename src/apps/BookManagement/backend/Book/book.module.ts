import { Module, Provider } from '@nestjs/common'
import { BookRepository } from '../../../../contexts/BookManagement/Book/domain/BookRepository'
import { BookRepositorySequelize } from '../../../../contexts/BookManagement/Book/infrastructure/BookRepositorySequelize'
import { BookCreator } from '../../../../contexts/BookManagement/Book/application/Create/BookCreator'
import { BookModify } from '../../../../contexts/BookManagement/Book/application/Modify/BookModify'
import { BookDelete } from '../../../../contexts/BookManagement/Book/application/Delete/BookDelete'
import { BookSearch } from '../../../../contexts/BookManagement/Book/application/Search/BookSearch'
import { AuthorModule } from '../Author/author.module'
import { EditorialModule } from '../Editorial/editorial.module'
import { GenreModule } from '../Genre/genre.module'
import { AuthorRepository } from '../../../../contexts/BookManagement/Author/domain/AuthorRepository'
import { EditorialRepository } from '../../../../contexts/BookManagement/Editorial/domain/EditorialRepository'
import { GenreRepository } from '../../../../contexts/BookManagement/Genre/domain/GenreRepository'
import { BookController } from './controllers/BookController'
import { BookFindById } from '../../../../contexts/BookManagement/Book/application/Search/BookFindById'

const BookCreatorProvider: Provider = {
  provide: BookCreator,
  useFactory: (
    bookRepository: BookRepository,
    authorRepository: AuthorRepository,
    editorialRepository: EditorialRepository,
    genreRepository: GenreRepository
  ) =>
    new BookCreator(
      bookRepository,
      authorRepository,
      editorialRepository,
      genreRepository
    ),
  inject: [
    BookRepository,
    AuthorRepository,
    EditorialRepository,
    GenreRepository
  ]
}

const BookModifyProvider: Provider = {
  provide: BookModify,
  useFactory: (
    bookRepository: BookRepository,
    authorRepository: AuthorRepository,
    editorialRepository: EditorialRepository,
    genreRepository: GenreRepository
  ) =>
    new BookModify(
      bookRepository,
      authorRepository,
      editorialRepository,
      genreRepository
    ),
  inject: [
    BookRepository,
    AuthorRepository,
    EditorialRepository,
    GenreRepository
  ]
}

const BookDeleteProvider: Provider = {
  provide: BookDelete,
  useFactory: (bookRepository: BookRepository) =>
    new BookDelete(bookRepository),
  inject: [BookRepository]
}

const BookSearchProvider: Provider = {
  provide: BookSearch,
  useFactory: (bookRepository: BookRepository) =>
    new BookSearch(bookRepository),
  inject: [BookRepository]
}

const BookFindByIdProvider: Provider = {
  provide: BookFindById,
  useFactory: (bookRepository: BookRepository) =>
    new BookFindById(bookRepository),
  inject: [BookRepository]
}

@Module({
  imports: [AuthorModule, EditorialModule, GenreModule],
  controllers: [BookController],
  providers: [
    {
      provide: BookRepository,
      useClass: BookRepositorySequelize
    },
    BookCreatorProvider,
    BookModifyProvider,
    BookDeleteProvider,
    BookSearchProvider,
    BookFindByIdProvider
  ]
})
export class BookModule {}
