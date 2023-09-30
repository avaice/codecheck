import { getOperandValue } from "./getOperandValue"
import { getVariant, setVariant } from "./variant"
import readline from "readline"

export const callPrint = (operands: string[]) => {
  const text = operands.map((v) => getOperandValue(v)).join("")
  console.log(text)
}

export const callSet = (operands: string[]) => {
  if (operands.length !== 2) {
    throw new Error("引数の数は2個である必要があります")
  }
  setVariant(operands[0], operands[1])
}

export const callInput = async (operands: string[]) => {
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

export const calculate = (
  type: "ADD" | "SUB" | "MUL" | "DIV",
  operands: string[]
) => {
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
