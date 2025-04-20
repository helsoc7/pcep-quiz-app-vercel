"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const kategorien = [
  { slug: "Grundlagen", titel: "Python Grundlagen", beschreibung: "Geschichte, Zen of Python, Interpreter, ..." },
  { slug: "Datentypen", titel: "Datentypen & Operatoren", beschreibung: "int, float, str, bool, +, - ..." },
  { slug: "print_input", titel: "Print, Input und If-Else", beschreibung: "print('Hallo'), input('Gib...'), if True: " },
  { slug: "loops", titel: "Schleifen", beschreibung: "for, while" },
  { slug: "datastructures", titel: "Datenstrukturen", beschreibung: "dict, list, set, tuple" },
  { slug: "module", titel: "Funktionen, Module und Ausnahmebehandlung", beschreibung: "import, from, as, pip ..." },
]

export default function QuizThemenPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {kategorien.map((kat) => (
        <Card key={kat.slug} className="flex flex-col justify-between">
          <CardHeader>
            <h2 className="text-lg font-semibold">{kat.titel}</h2>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">{kat.beschreibung}</p>
          </CardContent>
          <CardFooter>
            <Link href={`/quiz/${kat.slug}`} className="w-full" >
              <Button className="w-full">Quiz starten</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </main>
  )
}
