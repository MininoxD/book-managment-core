import { Module, Provider } from '@nestjs/common'
import { EditorialGetController } from './controllers/EditorialGetController'
import { EditorialRepository } from '../../../../contexts/BookManagement/Editorial/domain/EditorialRepository'
import { EditorialRepositorySequelize } from '../../../../contexts/BookManagement/Editorial/infrastructure/EditorialRepositorySequelize'
import { EditorialFinder } from '../../../../contexts/BookManagement/Editorial/application/EditorialFinder'

const EditorialFinderProvider: Provider = {
  provide: EditorialFinder,
  useFactory: (repository: EditorialRepository) =>
    new EditorialFinder(repository),
  inject: [EditorialRepository]
}
@Module({
  controllers: [EditorialGetController],
  providers: [
    {
      provide: EditorialRepository,
      useClass: EditorialRepositorySequelize
    },
    EditorialFinderProvider
  ],
  exports: [EditorialRepository]
})
export class EditorialModule {}
