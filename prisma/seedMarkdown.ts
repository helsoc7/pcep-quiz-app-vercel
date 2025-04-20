import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { fileURLToPath } from "url"
import { PrismaClient, Difficulty } from "@prisma/client"

const prisma = new PrismaClient()

// Workaround for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Lade die Markdown-Datei
const filePath = path.join(__dirname, "../questions/01_basics.md")
const rawContent = fs.readFileSync(filePath, "utf-8")

// Trenne Blocks nach Frontmatter-Trennzeichen
const rawBlocks = rawContent.split(/^---$/gm).map(b => b.trim()).filter(Boolean)

async function main() {
  for (let i = 0; i < rawBlocks.length; i += 2) {
    try {
      const frontmatterBlock = rawBlocks[i]
      const questionBlock = rawBlocks[i + 1]

      const { data: meta } = matter(`---\n${frontmatterBlock}\n---`)
      if (!meta || !meta.topic || !meta.subtopic || !meta.level || !meta.explanation || !meta.explanationWrong) {
        console.warn(`⚠️  Skipping: Missing frontmatter at block ${i}`)
        continue
      }

      const lines = questionBlock.trim().split("\n")
      const questionLine = lines.find(line => line.startsWith("###"))
      if (!questionLine) {
        console.warn(`⚠️  Skipping: No question line at block ${i}`)
        continue
      }

      const questionText = questionLine.replace(/^###\s*/, "").trim()
      const answers = lines.filter(line => line.startsWith("-")).map(line =>
        line.replace(/^- \[[ xX]\] /, "").trim()
      )

      const correctIndex = lines.findIndex(line => line.startsWith("- [x]") || line.startsWith("- [X]"))
      if (correctIndex === -1) {
        console.warn(`⚠️  Skipping: No correct answer marked at block ${i}`)
        continue
      }

      const data = {
        question: questionText,
        answers: JSON.stringify(answers),
        correctIndex,
        topic: meta.topic,
        subtopic: meta.subtopic,
        level: meta.level as Difficulty,
        explanation: meta.explanation,
        explanationWrong: JSON.stringify(meta.explanationWrong),
      }

      await prisma.question.create({ data })
      console.log(`✅ Gespeichert: ${questionText.slice(0, 60)}...`)
    } catch (err) {
      console.error(`❌ Fehler bei Block ${i}:`, err)
    }
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
