import { EditorialAddress } from './EditorialAddress'
import { EditorialId } from './EditorialId'
import { EditorialName } from './EditorialName'

export class Editorial {
  readonly id: EditorialId
  readonly name: EditorialName
  readonly address: EditorialAddress

  constructor({
    id,
    name,
    address
  }: {
    id: EditorialId
    name: EditorialName
    address: EditorialAddress
  }) {
    this.id = id
    this.name = name
    this.address = address
  }

  static fromPrimitives({
    id,
    name,
    address
  }: {
    id: string
    name: string
    address: string
  }): Editorial {
    return new Editorial({
      id: new EditorialId(id),
      name: new EditorialName(name),
      address: new EditorialAddress(address)
    })
  }

  toPrimitives() {
    return {
      id: this.id.value,
      name: this.name.value,
      address: this.address.value
    }
  }
}
