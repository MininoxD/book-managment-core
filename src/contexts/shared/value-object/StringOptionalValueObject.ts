export abstract class StringOptionalValueObject {
  readonly value: string | undefined | null

  constructor(value: string | undefined | null) {
    this.value = value
  }

  isNull(): boolean {
    return this.value === null || this.value === undefined
  }
}
