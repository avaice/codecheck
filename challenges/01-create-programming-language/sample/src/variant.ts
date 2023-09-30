export class Variant {
  private variantMap = new Map<string, string>()
  get(key: string) {
    return this.variantMap.get(key)
  }
  set(key: string, value: string) {
    this.variantMap.set(key, value)
  }
}
