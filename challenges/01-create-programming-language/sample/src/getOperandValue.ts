import { vars } from "./main"

export const getOperandValue = (operand: string) => {
  switch (true) {
    case /".*"/.test(operand):
      return operand.slice(1, operand.length - 1)
    case !isNaN(Number(operand)):
      return operand
    default:
      const varValue = vars.get(operand)
      if (!varValue) {
        throw new Error(`${operand}は未定義の変数です`)
      }
      return varValue
  }
}
