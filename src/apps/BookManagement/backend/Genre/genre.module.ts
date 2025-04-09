import { Module, Provider } from '@nestjs/common'
import { GenreGetController } from './controllers/GenreGetController'
import { GenreRepositorySequelize } from '../../../../contexts/BookManagement/Genre/infrastructure/GenreRepositorySequelize'
import { GenreRepository } from '../../../../contexts/BookManagement/Genre/domain/GenreRepository'
import { GenreFinder } from '../../../../contexts/BookManagement/Genre/application/GenreFinder'

const GenreFinderProvider: Provider = {
  provide: GenreFinder,
  useFactory: (repository: GenreRepository) => new GenreFinder(repository),
  inject: [GenreRepository]
}
@Module({
  controllers: [GenreGetController],
  providers: [
    {
      provide: GenreRepository,
      useClass: GenreRepositorySequelize
    },
    GenreFinderProvider
  ],
  exports: [GenreRepository]
})
export class GenreModule {}
