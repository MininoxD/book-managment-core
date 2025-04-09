import { Controller, Get, UseGuards } from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags
} from '@nestjs/swagger'
import { EditorialFinder } from '../../../../../contexts/BookManagement/Editorial/application/EditorialFinder'
import { AuthGuard } from '../../Auth/auth.guard'

@ApiBearerAuth()
@ApiTags('editorial')
@Controller('editorial')
export class EditorialGetController {
  constructor(private readonly editorialFinder: EditorialFinder) {}

  @UseGuards(AuthGuard)
  @Get()
  @ApiOperation({
    summary: 'Get all editorials',
    description: 'Get all editorials from the database'
  })
  @ApiResponse({
    status: 200,
    description: 'Editorials found'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error'
  })
  async getAllEditorials() {
    return (await this.editorialFinder.run()).map((editorial) =>
      editorial.toPrimitives()
    )
  }
}
