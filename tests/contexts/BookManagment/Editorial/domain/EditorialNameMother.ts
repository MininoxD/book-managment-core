import { EditorialName } from '../../../../../src/contexts/BookManagement/Editorial/domain/EditorialName'
import { MotherCreator } from '../../../shared/domain/MotherCreator'

export class EditorialNameMother {
  static random(): EditorialName {
    return new EditorialName(MotherCreator.random().lorem.words(3))
  }
}
