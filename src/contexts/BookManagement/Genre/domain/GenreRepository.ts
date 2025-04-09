import { Nullable } from '../../../shared/Nullable'
import { Genre } from './Genre'

export abstract class GenreRepository {
  abstract findById(id: string): Promise<Nullable<Genre>>
  abstract findAll(): Promise<Array<Genre>>
  abstract save(genre: Genre): Promise<void>
  abstract update(genre: Genre): Promise<void>
  abstract delete(id: string): Promise<void>
}
