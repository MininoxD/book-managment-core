import { Nullable } from '../../../shared/Nullable'
import { Author } from './Author'

export abstract class AuthorRepository {
  abstract findById(id: string): Promise<Nullable<Author>>
  abstract findAll(): Promise<Array<Author>>
  abstract save(author: Author): Promise<void>
  abstract update(author: Author): Promise<void>
  abstract delete(id: string): Promise<void>
}
