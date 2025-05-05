import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PrismaClient} from '@prisma/client';

type Difficulty = 'easy' | 'medium' | 'hard'

const prisma = new PrismaClient();
const logFile = './import.log';
fs.writeFileSync(logFile, ''); // Log zurücksetzen

const file = '/Users/helenhaveloh/workspace/projects/quiz-app/questions/english/04_test_en.md'; // dein Dateipfad
const markdown = fs.readFileSync(file, 'utf8');

// Spracheinstellung für diesen Import
const language = "en"; // Hier auf "en" setzen für Englisch

function log(message: string) {
  const timestamp = new Date().toISOString();
  const line = `[${timestamp}] ${message}\n`;
  fs.appendFileSync(logFile, line);
  console.log(line.trim());
}

// Funktion, um einzelne Fragen zu extrahieren
function parseQuestionBlocks(md: string): string[] {
  const parts = md.split(/^---$/gm).map((p) => p.trim());
  const result: string[] = [];
  for (let i = 0; i < parts.length - 1; i += 2) {
    const yaml = parts[i];
    const content = parts[i + 1];
    result.push(`---\n${yaml}\n---\n${content}`);
  }
  return result;
}

// Fragezeile extrahieren
function extractQuestionText(content: string): string {
  // Frage extrahieren
  const match = content.match(/### Question \d+:\s*([\s\S]*?)(?=\n- \[)/);
  if (!match) return 'Unbekannte Frage';

  let questionText = match[1].trim();

  // Codeblock suchen
  const codeBlocks = content.match(/```[\s\S]*?```/g);

  if (codeBlocks && codeBlocks.length > 0) {
    const code = codeBlocks[0].trim();
    // Nur anhängen, wenn nicht schon im Frage-Text enthalten
    if (!questionText.includes(code)) {
      questionText += `\n\n${code}`;
    }
  }

  return questionText;
}

// Antwortoptionen extrahieren
function extractAnswersAndCorrectIndex(content: string): { answers: string[]; correctIndexes: number[] } {
  const regex = /- \[( |x)] (.+)/g;
  const answers: string[] = [];
  const correctIndexes: number[] = []; // Array statt einzelner Wert
  let match;
  let index = 0;

  while ((match = regex.exec(content)) !== null) {
    answers.push(match[2].trim());
    if (match[1] === 'x') {
      correctIndexes.push(index); // Füge Index zum Array hinzu
    }
    index++;
  }

  if (correctIndexes.length === 0) {
    throw new Error('Keine korrekte Antwort gefunden.');
  }

  return { answers, correctIndexes }; // Gib Array zurück
}

function toEnumLevel(level: string): Difficulty {
  const l = level.toLowerCase();
  if (l === 'easy' || l === 'medium' || l === 'hard') return l as Difficulty;
  throw new Error(`Ungültiger Schwierigkeitsgrad: ${level}`);
}

async function main() {
  const blocks = parseQuestionBlocks(markdown);
  for (const block of blocks) {
    try {
      const { data, content } = matter(block);

      const question = extractQuestionText(content);
      const { answers, correctIndexes } = extractAnswersAndCorrectIndex(content);

      await prisma.question.create({
        data: {
          question,
          answers: JSON.stringify(answers),
          correctIndexes, 
          topic: data.topic,
          subtopic: data.subtopic,
          level: toEnumLevel(data.level),
          explanation: data.explanation,
          explanationWrong: JSON.stringify(data.explanationWrong),
          language, // Hier wird das Sprachfeld gesetzt
        },
      });

      log(`✅ Frage importiert (${language}): ${question}`);
    } catch (err: any) {
      log(`❌ Fehler beim Importieren:\n${err.message}`);
    }
  }

  await prisma.$disconnect();
}

main();