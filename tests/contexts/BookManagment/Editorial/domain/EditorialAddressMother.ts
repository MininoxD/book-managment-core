import { EditorialAddress } from '../../../../../src/contexts/BookManagement/Editorial/domain/EditorialAddress'
import { MotherCreator } from '../../../shared/domain/MotherCreator'

export class EditorialAddressMother {
  static random(): EditorialAddress {
    return new EditorialAddress(MotherCreator.random().location.streetAddress())
  }
}
