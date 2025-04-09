import { Inject, Injectable } from '@nestjs/common'
import { Nullable } from '../../../shared/Nullable'
import { Editorial } from '../domain/Editorial'
import { EditorialRepository } from '../domain/EditorialRepository'
import { EditorialModel } from './EditorialModel'

@Injectable()
export class EditorialRepositorySequelize implements EditorialRepository {
  constructor(
    @Inject('EDITORIAL_REPOSITORY')
    private editorialRepository: typeof EditorialModel
  ) {}
  async findById(id: string): Promise<Nullable<Editorial>> {
    const editorial = await this.editorialRepository.findOne({
      where: {
        id: id
      }
    })

    if (!editorial) return null
    return Editorial.fromPrimitives({
      id: editorial.id,
      name: editorial.name,
      address: editorial.address
    })
  }
  async findAll(): Promise<Array<Editorial>> {
    const editorials = await this.editorialRepository.findAll()

    return editorials.map((editorial) =>
      Editorial.fromPrimitives({
        id: editorial.id,
        name: editorial.name,
        address: editorial.address
      })
    )
  }

  save(editorial: Editorial): Promise<void> {
    throw new Error('Method not implemented.')
  }
  update(editorial: Editorial): Promise<void> {
    throw new Error('Method not implemented.')
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
