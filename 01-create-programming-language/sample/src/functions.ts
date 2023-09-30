import { getOperandValue } from "./getOperandValue"
import readline from "readline"
import { vars } from "./main"

export const callPrint = (operands: string[]) => {
  const text = operands.map((v) => getOperandValue(v)).join("")
  console.log(text)
}

export const callSet = (operands: string[]) => {
  if (operands.length !== 2) {
    throw new Error("引数の数は2個である必要があります")
  }
  vars.set(operands[0], operands[1])
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
  vars.set(key, result)
}

export const calculate = (
  type: "ADD" | "SUB" | "MUL" | "DIV",
  operands: string[]
) => {
  const key = operands[0]
  let base = Number(getOperandValue(key))
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
  vars.set(key, base.toString())
}
