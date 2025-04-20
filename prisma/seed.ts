// prisma/seed.ts

import { PrismaClient, Difficulty } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // 1. Dummy-User erstellen
  const user = await prisma.user.upsert({
    where: { email: "admin@pcep.dev" },
    update: {},
    create: {
      email: "admin@pcep.dev",
      name: "Admin User",
    },
  })

  // 2. Beispiel-Frage
  const question = await prisma.question.create({
    data: {
      question: "What is the result of 3 / 2 in Python 3?",
      answers: JSON.stringify(["1", "1.5", "2", "2.5"]),
      correctIndex: 1,
      topic: "Python Basics",
      subtopic: "Division",
      level: "easy",
      explanation: "Python 3 uses true division for `/`, so 3 / 2 = 1.5",
      explanationWrong: JSON.stringify([
        "`/` in Python 3 returns a float, not an integer.",
        "You may be thinking of integer division `//`, but that’s different.",
        "2 is the integer result in Python 2, not 3.",
      ]),
    },
  })

  // 3. Fortschritt für Dummy-User (Runde-basiert)
  await prisma.userProgress.create({
    data: {
      userId: user.id,
      questionId: question.id,
      attempts: 1,
      wrongAnswers: 1,
      lastSeen: new Date(),
      nextRound: 3, // 🔁 z. B. zur Wiederholung in Runde 3
    },
  })

  console.log("✅ Seeding erfolgreich abgeschlossen.")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
