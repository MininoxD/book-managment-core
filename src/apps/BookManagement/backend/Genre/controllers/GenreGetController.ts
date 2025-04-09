import { Controller, Get, UseGuards } from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags
} from '@nestjs/swagger'
import { GenreFinder } from '../../../../../contexts/BookManagement/Genre/application/GenreFinder'
import { AuthGuard } from '../../Auth/auth.guard'

@ApiBearerAuth()
@ApiTags('genres')
@Controller('genres')
export class GenreGetController {
  constructor(private readonly genreFinder: GenreFinder) {}

  @UseGuards(AuthGuard)
  @Get()
  @ApiOperation({
    summary: 'Get all genres',
    description: 'Get all genres from the database'
  })
  @ApiResponse({
    status: 200,
    description: 'Genres found'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error'
  })
  async getAllGenres() {
    return (await this.genreFinder.run()).map((genre) => genre.toPrimitives())
  }
}
