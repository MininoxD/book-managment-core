import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags
} from '@nestjs/swagger'
import { BookCreator } from '../../../../../contexts/BookManagement/Book/application/Create/BookCreator'
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
  UsePipes
} from '@nestjs/common'
import {
  BookCreatorRequestSchema,
  BookCreatorRequestSchemaType
} from '../schemas/BookCreatorRequestSchema'
import { ZodValidationPipe } from '../../validator/zodValidationPipe'
import { BookModify } from '../../../../../contexts/BookManagement/Book/application/Modify/BookModify'
import {
  BookModifyRequestSchema,
  BookModifyRequestSchemaType
} from '../schemas/BookModifyRequestSchema'
import { BookSearch } from '../../../../../contexts/BookManagement/Book/application/Search/BookSearch'
import { BookDelete } from '../../../../../contexts/BookManagement/Book/application/Delete/BookDelete'
import {
  BookDeleteIdSchema,
  BookDeleteIdSchemaType
} from '../schemas/BookDeleteRequestSchema'
import {
  BookSearchRequestSchema,
  BookSearchRequestSchemaType
} from '../schemas/BookSearchRequestSchema'
import { BookFindById } from '../../../../../contexts/BookManagement/Book/application/Search/BookFindById'
import { AuthGuard } from '../../Auth/auth.guard'
@ApiBearerAuth()
@ApiTags('books')
@Controller('books')
export class BookController {
  constructor(
    private readonly bookCreator: BookCreator,
    private readonly bookModify: BookModify,
    private readonly bookSearch: BookSearch,
    private readonly bookDelete: BookDelete,
    private readonly bookFindById: BookFindById
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  @ApiOperation({
    summary: 'Create a book',
    description: 'Create a book in the database'
  })
  @ApiResponse({
    status: 201,
    description: 'Book created'
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error'
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        id: { type: 'string', example: '123e4567-e89b-12d3-a456-426614174000' },
        title: { type: 'string', example: 'The Great Gatsby' },
        price: { type: 'number', example: 19.99 },
        photos: {
          type: 'array',
          items: { type: 'string' },
          example: ['photo1.jpg', 'photo2.jpg']
        },
        authorId: { type: 'string', example: 'author-123' },
        editorialId: { type: 'string', example: 'editorial-456' },
        genreId: { type: 'string', example: 'genre-789' }
      },
      required: [
        'id',
        'title',
        'price',
        'photos',
        'authorId',
        'editorialId',
        'genreId'
      ]
    }
  })
  @UsePipes(new ZodValidationPipe(BookCreatorRequestSchema))
  async creator(@Body() request: BookCreatorRequestSchemaType) {
    await this.bookCreator.run(request)
  }

  @UseGuards(AuthGuard)
  @Put()
  @ApiOperation({
    summary: 'Update a book',
    description: 'Update a book in the database'
  })
  @ApiResponse({
    status: 200,
    description: 'Book updated'
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error'
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        id: { type: 'string', example: '123e4567-e89b-12d3-a456-426614174000' },
        data: {
          type: 'object',
          properties: {
            title: { type: 'string', example: 'The Great Gatsby' },
            price: { type: 'number', example: 19.99 },
            photos: {
              type: 'array',
              items: { type: 'string' },
              example: ['photo1.jpg', 'photo2.jpg']
            },
            authorId: { type: 'string', example: 'author-123' },
            editorialId: { type: 'string', example: 'editorial-456' },
            genreId: { type: 'string', example: 'genre-789' },
            available: { type: 'boolean', example: true }
          },
          required: [
            'title',
            'price',
            'photos',
            'authorId',
            'editorialId',
            'genreId',
            'available'
          ]
        }
      },
      required: ['id', 'data']
    }
  })
  @UsePipes(new ZodValidationPipe(BookModifyRequestSchema))
  async update(@Body() request: BookModifyRequestSchemaType) {
    await this.bookModify.run(request)
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a book',
    description: 'Delete a book in the database'
  })
  @ApiResponse({
    status: 200,
    description: 'Book deleted'
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error'
  })
  @ApiParam({
    name: 'id',
    description: 'The ID of the book to delete',
    required: true,
    schema: {
      type: 'string',
      example: '123e4567-e89b-12d3-a456-426614174000'
    }
  })
  async delete(
    @Param('id', new ZodValidationPipe(BookDeleteIdSchema))
    id: BookDeleteIdSchemaType
  ) {
    await this.bookDelete.run(id)
  }

  @UseGuards(AuthGuard)
  @Get()
  @ApiOperation({
    summary: 'Search a book',
    description: 'Search a book in the database'
  })
  @ApiResponse({
    status: 200,
    description: 'Book found',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            example: '123e4567-e89b-12d3-a456-426614174000'
          },
          title: { type: 'string', example: 'The Great Gatsby' },
          price: { type: 'number', example: 19.99 },
          available: { type: 'boolean', example: true },
          photos: {
            type: 'array',
            items: { type: 'string' },
            example: ['photo1.jpg', 'photo2.jpg']
          },
          authorId: { type: 'string', example: 'author-123' },
          editorialId: { type: 'string', example: 'editorial-456' },
          genreId: { type: 'string', example: 'genre-789' }
        }
      }
    }
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error'
  })
  async search(
    @Query(new ZodValidationPipe(BookSearchRequestSchema))
    query: BookSearchRequestSchemaType
  ) {
    return (await this.bookSearch.run(query)).map((book) => book.toPrimitives())
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  @ApiOperation({
    summary: 'Get a book by ID',
    description: 'Get a book by ID from the database'
  })
  @ApiResponse({
    status: 200,
    description: 'Book found',
    schema: {
      type: 'object',
      properties: {
        id: { type: 'string', example: '123e4567-e89b-12d3-a456-426614174000' },
        title: { type: 'string', example: 'The Great Gatsby' },
        price: { type: 'number', example: 19.99 },
        available: { type: 'boolean', example: true },
        photos: {
          type: 'array',
          items: { type: 'string' },
          example: ['photo1.jpg', 'photo2.jpg']
        },
        authorId: { type: 'string', example: 'author-123' },
        editorialId: { type: 'string', example: 'editorial-456' },
        genreId: { type: 'string', example: 'genre-789' }
      }
    }
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request'
  })
  @ApiResponse({
    status: 404,
    description: 'Book not found'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error'
  })
  async getById(
    @Param('id', new ZodValidationPipe(BookDeleteIdSchema))
    id: BookDeleteIdSchemaType
  ) {
    const book = await this.bookFindById.run(id)
    if (!book) {
      throw new NotFoundException('Book not found')
    }
    return book.toPrimitives()
  }
}
