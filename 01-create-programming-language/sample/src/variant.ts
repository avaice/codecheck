const variantMap = new Map<string, string>()
export const getVariant = (key: string) => {
  return variantMap.get(key)
}
export const setVariant = (key: string, value: string) => {
  variantMap.set(key, value)
}
