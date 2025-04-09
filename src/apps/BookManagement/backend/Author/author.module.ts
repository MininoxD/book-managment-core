import { Module, Provider } from '@nestjs/common'
import { AuthorRepository } from '../../../../contexts/BookManagement/Author/domain/AuthorRepository'
import { AuthorRepositorySequelize } from '../../../../contexts/BookManagement/Author/infrastructure/AuthorRepositorySequelize'
import { AuthorFinder } from '../../../../contexts/BookManagement/Author/application/AuthorFinder'
import { AuthorGetController } from './controllers/AuthorGetController'

const AuthorFinderProvider: Provider = {
  provide: AuthorFinder,
  useFactory: (repository: AuthorRepository) => new AuthorFinder(repository),
  inject: [AuthorRepository]
}

@Module({
  controllers: [AuthorGetController],
  providers: [
    {
      provide: AuthorRepository,
      useClass: AuthorRepositorySequelize
    },
    AuthorFinderProvider
  ],
  exports: [AuthorRepository]
})
export class AuthorModule {}
