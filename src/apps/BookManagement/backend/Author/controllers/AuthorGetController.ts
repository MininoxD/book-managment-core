import { Controller, Get, UseGuards } from '@nestjs/common'
import { AuthorFinder } from '../../../../../contexts/BookManagement/Author/application/AuthorFinder'
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags
} from '@nestjs/swagger'
import { AuthGuard } from '../../Auth/auth.guard'

@ApiBearerAuth()
@ApiTags('authors')
@Controller('authors')
export class AuthorGetController {
  constructor(private readonly authorFinder: AuthorFinder) {}

  @UseGuards(AuthGuard)
  @Get()
  @ApiOperation({
    summary: 'Get all authors',
    description: 'Get all authors from the database'
  })
  @ApiResponse({
    status: 200,
    description: 'Authors found'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error'
  })
  async getAllAuthors() {
    const authors = await this.authorFinder.run()
    return authors.map((author) => author.toPrimitives())
  }
}
