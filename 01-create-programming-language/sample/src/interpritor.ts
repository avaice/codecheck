import { getVariant, setVariant } from "./variant"
import readline from "readline"

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

const getOperandValue = (operand: string) => {
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

const callPrint = (operands: string[]) => {
  const text = operands.map((v) => getOperandValue(v)).join("")
  console.log(text)
}

const callSet = (operands: string[]) => {
  if (operands.length !== 2) {
    throw new Error("引数の数は2個である必要があります")
  }
  setVariant(operands[0], operands[1])
}

const callInput = async (operands: string[]) => {
  const key = operands[0]
  const result = await new Promise<string>((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })
    rl.question("", (answer) => {
      resolve(answer)
      rl.close()
    })
  })
  setVariant(key, result)
}

const calculate = (type: "ADD" | "SUB" | "MUL" | "DIV", operands: string[]) => {
  const key = operands[0]
  let base = Number(getVariant(key))
  const nums = operands
    .slice(1, operands.length)
    .map((v) => Number(getOperandValue(v)))
  nums.forEach((v) => {
    switch (type) {
      case "ADD":
        base += v
        break
      case "SUB":
        base -= v
        break
      case "MUL":
        base *= v
        break
      case "DIV":
        base /= v
    }
  })
  setVariant(key, base.toString())
}
