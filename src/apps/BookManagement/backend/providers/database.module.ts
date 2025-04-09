import { Global, Module } from '@nestjs/common'
import { booksProviders, databaseProviders } from './database.providers'

@Global()
@Module({
  providers: [...databaseProviders, ...booksProviders],
  exports: [...databaseProviders, ...booksProviders]
})
export class DatabaseModule {}
