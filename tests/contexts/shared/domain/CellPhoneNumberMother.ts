import { MotherCreator } from './MotherCreator'

export class CellPhoneNumberMother {
  static random(): string {
    return MotherCreator.random().phone.number('9########')
  }

  static invalidCellPhoneNumber(): string {
    return MotherCreator.random().phone.number('##-#####')
  }
}
