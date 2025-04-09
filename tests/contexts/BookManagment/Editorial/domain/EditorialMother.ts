import { Editorial } from '../../../../../src/contexts/BookManagement/Editorial/domain/Editorial'
import { EditorialAddressMother } from './EditorialAddressMother'
import { EditorialIdMother } from './EditorialIdMother'
import { EditorialNameMother } from './EditorialNameMother'

export class EditorialMother {
  static random(): Editorial {
    return new Editorial({
      id: EditorialIdMother.random(),
      name: EditorialNameMother.random(),
      address: EditorialAddressMother.random()
    })
  }
}
