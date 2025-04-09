import { Nullable } from '../../../shared/Nullable'
import { Editorial } from './Editorial'

export abstract class EditorialRepository {
  abstract findById(id: string): Promise<Nullable<Editorial>>
  abstract findAll(): Promise<Array<Editorial>>
  abstract save(editorial: Editorial): Promise<void>
  abstract update(editorial: Editorial): Promise<void>
  abstract delete(id: string): Promise<void>
}
