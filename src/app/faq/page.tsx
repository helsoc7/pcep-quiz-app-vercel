// src/app/faq/page.tsx
'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Häufig gestellte Fragen (FAQ)</h1>

      <Accordion type="multiple" className="space-y-4">
        <AccordionItem value="purpose">
          <AccordionTrigger>Wozu dient diese Anwendung?</AccordionTrigger>
          <AccordionContent>
            Diese Anwendung dient zur Vorbereitung auf die PCEP-Prüfung (Python Certified Entry-Level Programmer). 
            Sie hilft dir, den offiziellen Fragenkatalog zu üben, deinen Fortschritt zu tracken und mithilfe eines 
            intelligenten Karteikastensystems gezielt Wissenslücken zu schließen.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="catalog">
          <AccordionTrigger>Was ist der Fragenkatalog?</AccordionTrigger>
          <AccordionContent>
            Im Fragenkatalog kannst du ein Thema auswählen und bekommst nacheinander alle dazugehörigen Fragen angezeigt. 
            Nach der Beantwortung jeder Frage bekommst du eine Erklärung, warum die Antwort richtig oder falsch war.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="exam-mode">
          <AccordionTrigger>Was ist der Prüfungsmodus?</AccordionTrigger>
          <AccordionContent>
            Der Prüfungsmodus simuliert eine echte Prüfung. Es werden 40 Fragen zufällig ausgewählt, wobei solche Fragen, 
            die du in der Vergangenheit häufiger falsch beantwortet hast, mit höherer Wahrscheinlichkeit erscheinen. 
            So trainierst du besonders intensiv an deinen Schwächen.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="spaced-repetition">
          <AccordionTrigger>Was ist das Karteikastensystem und das Spaced Repetition?</AccordionTrigger>
          <AccordionContent>
            Das Karteikastensystem ist eine Lernmethode, bei der Fragen (Karten) in Fächer eingeordnet werden. 
            Richtig beantwortete Fragen wandern ein Fach weiter. Falsch beantwortete Fragen landen wieder im ersten Fach. 
            Das System hilft dir, dich auf schwierige Inhalte zu konzentrieren. 
            
            Im Dashboard kannst du deinen Fortschritt verfolgen: Du siehst, wie viele leichte, mittlere und schwere Fragen 
            pro Kategorie du bereits beantwortet hast und wie weit du im Karteikastensystem gekommen bist.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  )
}
