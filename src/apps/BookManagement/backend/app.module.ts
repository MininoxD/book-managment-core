import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthorModule } from './Author/author.module'
import { BookModule } from './Book/book.module'
import { EditorialModule } from './Editorial/editorial.module'
import { GenreModule } from './Genre/genre.module'
import { DatabaseModule } from './providers/database.module'
import { AuthModule } from './Auth/auth.module'
@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    AuthModule,
    AuthorModule,
    BookModule,
    EditorialModule,
    GenreModule
  ]
})
export class AppModule {}
