// app/page.tsx

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      {/* Logo + Frage */}
      <section className="flex flex-col items-center justify-center flex-1 text-center">
        <Image
          src="/quiz-logo.png"
          alt="Quiz Logo"
          width={120}
          height={120}
          className="mb-6"
        />
        <p className="italic text-gray-500 mb-8">
          "Bereit für die PCEP-Prüfung? Teste dein Wissen jetzt – im Spaced-Repetition-Modus!"
        </p>
      <Link href="/quiz">
        <Button>
          🚀 Quiz starten
        </Button>
      </Link>
      </section>

      {/* Footer */}
      <footer className="flex flex-col items-center justify-center space-y-2 text-sm text-gray-500 mb-6">
        <p>© 2025 PCEP Quiz App</p>
      </footer>
    </main>
  )
}
