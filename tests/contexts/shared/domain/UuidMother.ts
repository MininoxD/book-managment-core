import { MotherCreator } from './MotherCreator'

export class UuidMother {
  static random(): string {
    return MotherCreator.random().string.uuid()
  }

  static invalid(): string {
    return MotherCreator.random().string.numeric()
  }
}
