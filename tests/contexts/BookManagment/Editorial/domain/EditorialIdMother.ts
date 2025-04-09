import { EditorialId } from '../../../../../src/contexts/BookManagement/Editorial/domain/EditorialId'
import { UuidMother } from '../../../shared/domain/UuidMother'

export class EditorialIdMother {
  static random(): EditorialId {
    return new EditorialId(UuidMother.random())
  }
}
