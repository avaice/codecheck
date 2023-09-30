import fs from "node:fs"
import { interpritor } from "./interpritor"
import { Variant } from "./variant"
const filePath = process.argv.slice(2)[0]
if (!fs.existsSync(filePath)) {
  throw new Error("指定されたファイルが見つかりません")
}

const src = fs.readFileSync(filePath, "utf8")

export const vars = new Variant()

await interpritor(src)

process.exit(0)
