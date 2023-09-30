import { callPrint, callInput, calculate, callSet } from "./functions"

export const interpritor = async (src: string) => {
  const arrayedSrc = src.split("\n")
  for (let i = 0; i < arrayedSrc.length; i++) {
    const operator = arrayedSrc[i].split(" ", 1)[0]
    const operands = arrayedSrc[i].split(" ").slice(1)
    switch (operator) {
      case "PRINT":
        callPrint(operands)
        break
      case "SET":
        callSet(operands)
        break
      case "INPUT":
        await callInput(operands)
        break
      case "ADD":
      case "SUB":
      case "MUL":
      case "DIV":
        calculate(operator, operands)
        break
      case "":
        break
      default:
        throw new Error("未定義の命令です")
    }
  }
}
