import { getVariant } from "./variant"

export const getOperandValue = (operand: string) => {
  switch (true) {
    case /".*"/.test(operand):
      return operand.slice(1, operand.length - 1)
    case !isNaN(Number(operand)):
      return operand
    default:
      const varValue = getVariant(operand)
      if (!varValue) {
        throw new Error(`${operand}は未定義の変数です`)
      }
      return varValue
  }
}
