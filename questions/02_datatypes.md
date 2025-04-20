---
# Python Datentypen Quiz mit Metadaten

---
topic: "Datentypen"
subtopic: "Grundlagen"
level: "easy"
explanation: "Literale sind feste Werte, die direkt im Quellcode stehen, wie z.B. Zahlen (42, 3.14) oder Zeichenketten ('text')."
explanationWrong:
  - "Variablen sind benannte Speicherplätze, die Werte enthalten können, nicht die Werte selbst."
  - "Funktionen sind Codeblöcke, die Operationen ausführen, nicht die Werte selbst."
  - "Typkonvertierungsmethoden wandeln Werte von einem Typ in einen anderen um, sind aber nicht die Werte selbst."
---
### Frage 1: Was sind Literale in Python?
- [ ] Variablen, die sich während der Programmausführung ändern können
- [x] Feste Werte, die direkt im Code erscheinen
- [ ] Funktionen, die Werte zurückgeben
- [ ] Methoden zur Typkonvertierung

---
topic: "Datentypen"
subtopic: "Variablen"
level: "easy"
explanation: "Gültige Variablennamen in Python können aus Buchstaben, Zahlen und Unterstrichen bestehen, dürfen aber nicht mit einer Zahl beginnen. Zudem dürfen keine reservierten Schlüsselwörter verwendet werden."
explanationWrong:
  - "2wert beginnt mit einer Zahl, was nicht erlaubt ist."
  - "class ist ein reserviertes Schlüsselwort in Python und kann nicht als Variablenname verwendet werden."
---
### Frage 2: Welche der folgenden sind gültige Variablennamen in Python?
- [x] benutzer_name
- [x] _alter
- [ ] 2wert
- [ ] class

---
topic: "Datentypen"
subtopic: "Konventionen"
level: "easy"
explanation: "Laut PEP 8, dem offiziellen Stilführer für Python-Code, sollten Variablennamen in snake_case geschrieben werden, also mit Kleinbuchstaben und Unterstrichen als Trennzeichen."
explanationWrong:
  - "CamelCase wird oft in anderen Sprachen verwendet, ist aber nicht die empfohlene Konvention für Python-Variablen."
  - "UPPERCASE wird in Python für Konstanten verwendet, nicht für normale Variablen."
  - "PascalCase wird in Python für Klassennamen verwendet, nicht für Variablen."
---
### Frage 3: Welche Namenskonvention wird laut PEP 8 für Variablen empfohlen?
- [ ] CamelCase (maxMustermann)
- [x] snake_case (max_mustermann)
- [ ] UPPERCASE (MAXMUSTERMANN)
- [ ] PascalCase (MaxMustermann)

---
topic: "Datentypen"
subtopic: "Variablen"
level: "easy"
explanation: "In Python sind Variablennamen case-sensitive und können Unterstriche enthalten. Sie können mit Buchstaben oder Unterstrichen beginnen, aber nicht mit Zahlen. Python-Schlüsselwörter können nicht als Variablennamen verwendet werden."
explanationWrong:
  - "Variablennamen können auch mit Unterstrichen beginnen, nicht nur mit Buchstaben."
  - "Reservierte Schlüsselwörter wie 'if', 'for', 'while' usw. können nicht als Variablennamen verwendet werden."
---
### Frage 4: Welche der folgenden Aussagen zu Variablen in Python sind korrekt?
- [x] Variablennamen sind case-sensitive
- [x] Variablennamen können Unterstriche enthalten
- [ ] Variablennamen müssen mit einem Buchstaben beginnen
- [ ] Python-Schlüsselwörter können als Variablennamen verwendet werden

---
topic: "Datentypen"
subtopic: "Grundlagen"
level: "medium"
explanation: "Variablen sind benannte Speicherplätze, die Werte aufnehmen und während der Programmausführung geändert werden können. Literale hingegen sind feste Werte, die direkt im Code stehen, wie z.B. 42 oder 'Hallo'."
explanationWrong:
  - "Literale können verschiedene Datentypen haben, nicht nur Zahlen."
  - "Beide werden zur Laufzeit verarbeitet, der Unterschied liegt nicht im Zeitpunkt der Erstellung."
  - "Es gibt einen klaren Unterschied zwischen Variablen und Literalen."
---
### Frage 5: Was ist der Unterschied zwischen Variablen und Literalen?
- [ ] Literale können nur Zahlen sein, Variablen können beliebige Werte enthalten
- [ ] Variablen werden zur Laufzeit erstellt, Literale zur Kompilierzeit
- [x] Variablen sind benannte Speicherplätze, Literale sind feste Werte im Code
- [ ] Es gibt keinen Unterschied, beide Begriffe beschreiben dasselbe

---
topic: "Datentypen"
subtopic: "Typkonvertierung"
level: "medium"
explanation: "Der Ausdruck konvertiert zuerst den String '3.14' in eine Gleitkommazahl 3.14 und dann diese in eine Ganzzahl 3. Bei der Konvertierung von float zu int wird in Python abgeschnitten, nicht gerundet."
explanationWrong:
  - "3.14 wäre das Ergebnis von float('3.14'), aber hier folgt noch int()."
  - "4 wäre das Ergebnis einer Rundung, aber int() schneidet die Nachkommastellen ab."
  - "Die Operation ist gültig und erzeugt keinen ValueError."
---
### Frage 6: Welcher Wert entsteht durch die folgende Operation? 

```python
int(float("3.14"))
```
- [x] 3
- [ ] 3.14
- [ ] 4
- [ ] Dies führt zu einem ValueError

---
topic: "Datentypen"
subtopic: "Typkonvertierung"
level: "medium"
explanation: "In Python kann ein String, der eine Ganzzahl darstellt, mit int() konvertiert werden. Der Wert 0, leere Strings und viele andere 'leere' Werte ergeben False bei Umwandlung in bool. str(True) gibt '1' nicht zurück, sondern den String 'True'."
explanationWrong:
  - "int('3.14') würde einen ValueError erzeugen, da es keine gültige Ganzzahl ist. Man müsste float('3.14') verwenden."
  - "str(True) ergibt 'True', nicht '1'."
---
### Frage 7: Welche der folgenden Aussagen zur Typkonvertierung in Python sind wahr?
- [x] `int("42")` konvertiert den String "42" in die Ganzzahl 42
- [x] `bool(0)` gibt False zurück
- [ ] `int("3.14")` konvertiert den String "3.14" in die Ganzzahl 3
- [ ] `str(True)` gibt "1" zurück

---
topic: "Datentypen"
subtopic: "Boolean"
level: "easy"
explanation: "In Python werden leere Strings als False interpretiert im booleschen Kontext. Daher gibt bool('') den Wert False zurück."
explanationWrong:
  - "True wäre falsch, da leere Strings als False ausgewertet werden."
  - "'' wäre einfach der leere String selbst, nicht die boolesche Interpretation."
  - "None wäre ein anderer Wert, nicht das Ergebnis von bool('')."
---
### Frage 8: Was ist das Ergebnis von `bool("")`?
- [x] False
- [ ] True
- [ ] ""
- [ ] None

---
topic: "Datentypen"
subtopic: "Boolean"
level: "medium"
explanation: "In Python werden bestimmte Werte im booleschen Kontext als False interpretiert: die Zahl 0, leere Sequenzen wie leere Strings (''), leere Listen ([]), None und False selbst."
explanationWrong:
  - "Der String 'False' ist nicht leer und wird daher als True interpretiert."
---
### Frage 9: Welche der folgenden Werte werden in einem booleschen Kontext als `False` interpretiert?
- [x] 0
- [x] ""
- [x] []
- [ ] "False"

---
topic: "Datentypen"
subtopic: "Typüberprüfung"
level: "medium"
explanation: "isinstance(variable, int) prüft, ob eine Variable vom Typ int ist oder von einer Unterklasse von int abstammt. Es ist die empfohlene Methode zur Typüberprüfung in Python."
explanationWrong:
  - "variable.type() ist keine gültige Python-Syntax."
  - "type(variable) == 'int' vergleicht mit einem String, nicht mit dem tatsächlichen Typ."
  - "isint() ist keine eingebaute Python-Funktion."
---
### Frage 10: Wie überprüft man in Python, ob eine Variable den Typ Integer hat?
- [ ] `variable.type() == int`
- [ ] `type(variable) == "int"`
- [x] `isinstance(variable, int)`
- [ ] `isint(variable)`

---
topic: "Datentypen"
subtopic: "Integer"
level: "medium"
explanation: "0b101010 ist eine binäre Ganzzahl-Literal, die den Dezimalwert 42 darstellt. Das Präfix 0b kennzeichnet in Python eine Binärzahl."
explanationWrong:
  - "101010 wäre der Wert, wenn 0b als normaler String interpretiert würde."
  - "12 ist nicht das Ergebnis der Umwandlung von 101010 von Binär nach Dezimal."
  - "Es ist eine gültige Python-Syntax, kein Fehler."
---
### Frage 11: Was ist das Ergebnis des Ausdrucks `0b101010`?
- [ ] 101010
- [ ] 12
- [x] 42
- [ ] Ein Syntaxfehler

---
topic: "Datentypen"
subtopic: "Integer"
level: "medium"
explanation: "Im Gegensatz zu vielen anderen Programmiersprachen hat Python keine feste Grenze für Integer-Werte. Sie können beliebig groß werden, begrenzt nur durch den verfügbaren Speicher."
explanationWrong:
  - "Python-Integer sind nicht auf 32 Bit begrenzt."
  - "Python-Integer sind nicht auf 64 Bit begrenzt."
  - "Python-Integer können sowohl positive als auch negative Werte speichern."
---
### Frage 12: Welche Aussage zum Wertebereich von Integer in Python ist korrekt?
- [ ] Integer sind auf 32 Bit (von -2^31 bis 2^31-1) begrenzt
- [ ] Integer sind auf 64 Bit (von -2^63 bis 2^63-1) begrenzt
- [x] Integer haben einen unbegrenzten Wertebereich
- [ ] Integer können nur positive Werte speichern

---
topic: "Datentypen"
subtopic: "Integer"
level: "easy"
explanation: "In Python können Unterstriche in numerischen Literalen verwendet werden, um die Lesbarkeit zu verbessern. Sie haben keinen Einfluss auf den Wert und werden bei der Auswertung ignoriert."
explanationWrong:
  - "1_000_000 als String wäre kein gültiger Integer."
  - "Es ist eine gültige Python-Syntax, kein Fehler."
  - "100000 wäre falsch, da 1_000_000 eine Million darstellt."
---
### Frage 13: Was ist der Wert von `1_000_000` in Python?
- [x] 1000000
- [ ] 1_000_000
- [ ] Ein Syntaxfehler
- [ ] 100000

---
topic: "Datentypen"
subtopic: "Float"
level: "medium"
explanation: "Aufgrund von Ungenauigkeiten bei der Darstellung von Dezimalzahlen im Binärsystem sind viele Dezimalzahlen in Gleitkommadarstellung nicht exakt darstellbar. Daher ist 0.1 + 0.2 in Python tatsächlich etwas größer als 0.3 (etwa 0.30000000000000004)."
explanationWrong:
  - "True wäre falsch, da der Vergleich aufgrund der Fließkomma-Ungenauigkeit nicht exakt ist."
  - "Es ist eine gültige Syntax, kein Fehler."
  - "Das Verhalten ist in allen Python-Versionen gleich."
---
### Frage 14: Was ist das Ergebnis des Ausdrucks `0.1 + 0.2 == 0.3` in Python?
- [ ] True
- [x] False
- [ ] Ein Syntaxfehler
- [ ] Hängt von der Python-Version ab

---
topic: "Datentypen"
subtopic: "Float"
level: "medium"
explanation: "In Python kann der Wert 'unendlich' durch float('inf') erzeugt werden. Dies ist nützlich für Algorithmen, die mit unbegrenzten Werten arbeiten müssen."
explanationWrong:
  - "infinity() ist keine eingebaute Python-Funktion."
  - "Integer.MAX_VALUE ist ein Konstrukt aus anderen Sprachen wie Java, nicht Python."
  - "math.infinity existiert nicht; im math-Modul gibt es math.inf."
---
### Frage 15: Welcher Code erzeugt den Wert "unendlich" in Python?
- [ ] infinity()
- [ ] Integer.MAX_VALUE
- [x] float('inf')
- [ ] math.infinity

---
topic: "Datentypen"
subtopic: "String"
level: "easy"
explanation: "In Python greift man mit eckigen Klammern und dem Index auf Zeichen in einem String zu. Die Indexierung beginnt bei 0, daher gibt text[0] das erste Zeichen zurück."
explanationWrong:
  - "text(0) ist keine gültige Python-Syntax für den Zugriff auf Zeichen."
  - "text.first() ist keine eingebaute Methode für Strings in Python."
  - "text.charAt(0) ist eine JavaScript-Methode, nicht Python."
---
### Frage 16: Wie greift man auf das erste Zeichen eines Strings `text` zu?
- [ ] text(0)
- [x] text[0]
- [ ] text.first()
- [ ] text.charAt(0)

---
topic: "Datentypen"
subtopic: "String"
level: "medium"
explanation: "Die Slicing-Notation [::-1] kehrt einen String um. Der erste Doppelpunkt steht für 'vom Anfang', der zweite für 'bis zum Ende', und -1 steht für 'in umgekehrter Reihenfolge'."
explanationWrong:
  - "Python würde den ursprünglichen String ausgeben."
  - "P wäre das erste Zeichen, nicht das Ergebnis des Slicing."
  - "nohtyP und nohtyP sind identisch - vermutlich ein Tippfehler in der Fragenstellung."
---
### Frage 17: Was gibt der folgende Code aus?

```python
print("Python"[::-1])
```
- [ ] Python
- [ ] P
- [ ] nohtyP
- [x] nohtyP

---
topic: "Datentypen"
subtopic: "String"
level: "easy"
explanation: "Die Methode lower() wird verwendet, um einen String in Kleinbuchstaben umzuwandeln. Sie gibt einen neuen String zurück, da Strings in Python unveränderlich sind."
explanationWrong:
  - "toLower() ist eine Methode in anderen Sprachen wie JavaScript, nicht Python."
  - "lowercase() ist keine eingebaute String-Methode in Python."
  - "small() ist keine eingebaute String-Methode in Python."
---
### Frage 18: Welche Methode verwendet man, um einen String in Kleinbuchstaben umzuwandeln?
- [ ] toLower()
- [ ] lowercase()
- [x] lower()
- [ ] small()

---
topic: "Datentypen"
subtopic: "String"
level: "medium"
explanation: "f-Strings (formatierte String-Literale) wurden in Python 3.6 eingeführt und sind die modernste und empfohlene Methode zur String-Formatierung. Sie sind lesbar, kompakt und effizient."
explanationWrong:
  - "%-Formatierung ist eine ältere Methode, die weniger lesbar ist."
  - "format()-Methode ist die Vorgängermethode zu f-Strings."
  - "template.substitute() ist eine weniger gebräuchliche Methode aus dem string-Modul."
---
### Frage 19: Welches ist die empfohlene Methode zur String-Formatierung in modernem Python?
- [ ] %-Formatierung
- [ ] format()-Methode
- [x] f-Strings
- [ ] template.substitute()

---
topic: "Datentypen"
subtopic: "String"
level: "easy"
explanation: "Die Funktion len() gibt die Anzahl der Zeichen in einem String zurück. 'Python' hat 6 Zeichen."
explanationWrong:
  - "5 wäre falsch, da 'Python' 6 Buchstaben hat."
  - "7 wäre falsch, da 'Python' 6 Buchstaben hat."
  - "len() funktioniert für Strings und gibt deren Länge zurück."
---
### Frage 20: Welches Ergebnis liefert `len("Python")`?
- [ ] 5
- [x] 6
- [ ] 7
- [ ] Ein Fehler, da len() nicht für Strings funktioniert

---
topic: "Datentypen"
subtopic: "String"
level: "easy"
explanation: "Mehrzeilige Strings können in Python mit dreifachen Anführungszeichen (''' oder \"\"\") erstellt werden. Diese erlauben Zeilenumbrüche direkt im String-Literal."
explanationWrong:
  - "\\n ermöglicht Zeilenumbrüche innerhalb eines normalen Strings, aber nicht direkt als mehrzeiliges Literal."
  - "Konkatenation kann verwendet werden, ist aber umständlicher als dreifache Anführungszeichen."
  - "Python unterstützt mehrzeilige Strings mit dreifachen Anführungszeichen."
---
### Frage 21: Welche Aussage zu mehrzeiligen Strings in Python ist korrekt?
- [ ] Mehrzeilige Strings können nur mit dem Escape-Zeichen \n erstellt werden
- [ ] Mehrzeilige Strings können nur mit der Konkatenation von Strings erstellt werden
- [x] Mehrzeilige Strings können mit dreifachen Anführungszeichen (''' oder """) erstellt werden
- [ ] Python unterstützt keine mehrzeiligen Strings

---
topic: "Datentypen"
subtopic: "String"
level: "medium"
explanation: "In Python bewirkt die Multiplikation eines Strings mit einer Zahl die Wiederholung des Strings. Daher ergibt 'abc' * 3 den String 'abcabcabc'."
explanationWrong:
  - "'abc3' wäre das Ergebnis einer Verkettung, nicht einer Multiplikation."
  - "Es tritt kein TypeError auf, da die Operation gültig ist."
  - "9 wäre das Ergebnis, wenn man die Länge des resultierenden Strings berechnen würde, nicht der String selbst."
---
### Frage 22: Was ist das Ergebnis von `"abc" * 3`?
- [x] "abcabcabc"
- [ ] "abc3"
- [ ] Ein TypeError
- [ ] 9

---
topic: "Datentypen"
subtopic: "String"
level: "easy"
explanation: "Die split()-Methode teilt einen String an den angegebenen Trennzeichen (standardmäßig Leerzeichen) und gibt eine Liste von Teilstrings zurück."
explanationWrong:
  - "divide() ist keine eingebaute String-Methode in Python."
  - "partition() teilt einen String nur beim ersten Vorkommen des Trennzeichens in drei Teile."
  - "tokenize() ist keine eingebaute String-Methode in Python."
---
### Frage 23: Welche Methode wird verwendet, um einen String in eine Liste von Teilstrings zu zerlegen?
- [ ] divide()
- [ ] partition()
- [x] split()
- [ ] tokenize()

---
topic: "Datentypen"
subtopic: "Operationen"
level: "medium"
explanation: "Der Operator // führt eine ganzzahlige Division durch, bei der das Ergebnis auf die nächste ganze Zahl abgerundet wird. 5 // 2 ergibt daher 2."
explanationWrong:
  - "2.5 wäre das Ergebnis der regulären Division mit dem /-Operator."
  - "3 wäre falsch, da bei ganzzahliger Division abgerundet wird, nicht aufgerundet."
  - "2.0 wäre das Ergebnis, wenn einer der Operanden ein Float wäre, aber hier sind beide Integer."
---
### Frage 24: Was ist der Wert von `5 // 2` in Python?
- [ ] 2.5
- [x] 2
- [ ] 3
- [ ] 2.0

---
topic: "Datentypen"
subtopic: "Operationen"
level: "easy"
explanation: "In Python wird der Operator ** für die Potenzierung verwendet. Zum Beispiel bedeutet 2**3 'zwei hoch drei' und ergibt 8."
explanationWrong:
  - "^ ist in Python der Operator für bitweises XOR, nicht für Potenzierung."
  - "*^ ist kein gültiger Operator in Python."
  - "pow() ist eine Funktion, kein Operator, obwohl sie für die Potenzierung verwendet werden kann."
---
### Frage 25: Welcher Operator wird für die Potenzierung in Python verwendet?
- [ ] ^
- [ ] *^
- [ ] pow()
- [x] **

---
topic: "Datentypen"
subtopic: "Operationen"
level: "easy"
explanation: "In Python gilt die übliche Operatorrangfolge: Multiplikation hat Vorrang vor Addition. Daher wird zuerst 3 * 4 = 12 berechnet und dann 2 + 12 = 14."
explanationWrong:
  - "20 wäre das Ergebnis, wenn alles von links nach rechts berechnet würde: (2 + 3) * 4."
  - "10 wäre ergebnislos, da es keine Operatorreihenfolge gibt, die dieses Ergebnis liefern würde."
  - "24 wäre das Ergebnis von 2 * 3 * 4, was nicht der gegebene Ausdruck ist."
---
### Frage 26: Was ist das Ergebnis von `2 + 3 * 4`?
- [ ] 20
- [x] 14
- [ ] 10
- [ ] 24

---
topic: "Datentypen"
subtopic: "Operationen"
level: "easy"
explanation: "Der Ausdruck x += 5 ist eine Kurzform für x = x + 5. Er addiert 5 zum aktuellen Wert von x und weist das Ergebnis wieder x zu."
explanationWrong:
  - "x = x * 5 wäre die Entsprechung für x *= 5, nicht x += 5."
  - "x = 5 würde den Wert von x einfach auf 5 setzen, ohne den vorherigen Wert zu berücksichtigen."
  - "x = 5 + x ist zwar mathematisch dasselbe wie x = x + 5, aber in Python nicht die übliche Schreibweise."
---
### Frage 27: Welcher Ausdruck ist äquivalent zu `x += 5`?
- [x] x = x + 5
- [ ] x = x * 5
- [ ] x = 5
- [ ] x = 5 + x

---
topic: "Datentypen"
subtopic: "Operationen"
level: "easy"
explanation: "Der Modulo-Operator % gibt den Rest einer Division zurück. 10 geteilt durch 3 ergibt 3 mit einem Rest von 1, daher ist 10 % 3 = 1."
explanationWrong:
  - "3 wäre der Quotient der ganzzahligen Division, nicht der Rest."
  - "3.33 wäre das ungefähre Ergebnis der regulären Division, nicht der Rest."
  - "0 wäre der Rest, wenn 10 ein Vielfaches von 3 wäre, was nicht der Fall ist."
---
### Frage 28: Was ist der Wert von `10 % 3`?
- [ ] 3
- [ ] 3.33
- [x] 1
- [ ] 0

---
topic: "Datentypen"
subtopic: "Operationen"
level: "medium"
explanation: "In Python gilt folgende Operatorrangfolge: Ausdrücke in Klammern werden zuerst ausgewertet, dann Potenzierung, dann Multiplikation/Division, dann Addition/Subtraktion und schließlich Zuweisungen."
explanationWrong:
  - "Zuweisungen haben die niedrigste Priorität, nicht die höchste."
  - "Klammern haben die höchste Priorität, nicht die mittlere."
  - "Die korrekte Reihenfolge ist anders."
---
### Frage 29: Wie lautet die korrekte Operatorrangfolge in Python (von höchster zu niedrigster Priorität)?
- [ ] Zuweisungen, arithmetische Operationen, Klammern
- [ ] Klammern, Zuweisungen, arithmetische Operationen
- [x] Klammern, Potenzierung, Multiplikation/Division, Addition/Subtraktion, Zuweisungen
- [ ] Addition/Subtraktion, Multiplikation/Division, Potenzierung, Klammern

---
topic: "Datentypen"
subtopic: "Boolean"
level: "medium"
explanation: "In Python können boolsche Werte True und False auch als Zahlen interpretiert werden, wobei True als 1 und False als 0 gilt. Daher ergibt True + True = 1 + 1 = 2."
explanationWrong:
  - "True wäre das Ergebnis einer logischen Operation, nicht einer arithmetischen Addition."
  - "1 wäre falsch, da True + True = 1 + 1 = 2."
  - "Es tritt kein TypeError auf, da die Operation gültig ist."
---
### Frage 30: Was ist das Ergebnis von `True + True` in Python?
- [ ] True
- [x] 2
- [ ] 1
- [ ] Ein TypeError

---
topic: "Datentypen"
subtopic: "Boolean"
level: "easy"
explanation: "Der Ausdruck prüft, ob 5 größer als 3 ist (wahr) UND ob 10 kleiner als 20 ist (wahr). Da beide Teilbedingungen wahr sind, ist das Gesamtergebnis True."
explanationWrong:
  - "False wäre nur dann das Ergebnis, wenn mindestens eine der Teilbedingungen falsch wäre."
  - "None ist kein mögliches Ergebnis dieser logischen Operation."
  - "Der Ausdruck ist syntaktisch korrekt und führt zu keinem Fehler."
---
### Frage 31: Was ist das Ergebnis von `5 > 3 and 10 < 20`?
- [x] True
- [ ] False
- [ ] None
- [ ] Ein Syntaxfehler

---
topic: "Datentypen"
subtopic: "Boolean"
level: "easy"
explanation: "Der not-Operator negiert einen booleschen Ausdruck. Da 5 > 7 falsch ist (5 ist nicht größer als 7), wird not (5 > 7) zu True."
explanationWrong:
  - "False wäre das Ergebnis, wenn 5 > 7 wahr wäre, was nicht der Fall ist."
  - "None ist kein mögliches Ergebnis dieser logischen Operation."
  - "Der Ausdruck ist syntaktisch korrekt und führt zu keinem Fehler."
---
### Frage 32: Was ist das Ergebnis von `not (5 > 7)`?
- [x] True
- [ ] False
- [ ] None
- [ ] Ein Syntaxfehler

---
topic: "Datentypen"
subtopic: "Boolean"
level: "medium"
explanation: "In Python können verkettete Vergleichsoperatoren wie 0 < 5 < 10 verwendet werden. Dies ist äquivalent zu (0 < 5) and (5 < 10), was wahr ist."
explanationWrong:
  - "False wäre das Ergebnis, wenn eine der Teilbedingungen falsch wäre."
  - "Der Ausdruck ist syntaktisch korrekt in Python und führt zu keinem Fehler."
  - "Das Verhalten ist in allen Python-Versionen gleich."
---
### Frage 33: Was ist das Ergebnis von `0 < 5 < 10` in Python?
- [x] True
- [ ] False
- [ ] Ein Syntaxfehler
- [ ] Hängt von der Python-Version ab

---
topic: "Datentypen"
subtopic: "Boolean"
level: "easy"
explanation: "In Python wird der logische ODER-Operator als Schlüsselwort 'or' geschrieben, nicht als || wie in vielen anderen Programmiersprachen."
explanationWrong:
  - "|| wird in Sprachen wie JavaScript oder C++ verwendet, nicht in Python."
  - "OR (in Großbuchstaben) ist nicht der korrekte Operator in Python."
  - "| ist der bitweise ODER-Operator in Python, nicht der logische."
---
### Frage 34: Welcher logische Operator wird für die ODER-Verknüpfung verwendet?
- [ ] ||
- [x] or
- [ ] OR
- [ ] |

---
topic: "Datentypen"
subtopic: "Boolean"
level: "medium"
explanation: "Kurzschlussauswertung (short-circuit evaluation) bedeutet, dass bei logischen Operatoren der zweite Operand nur ausgewertet wird, wenn der erste nicht ausreicht, um das Ergebnis zu bestimmen. Bei OR (a or b) wird b nur geprüft, wenn a falsch ist; bei AND (a and b) nur, wenn a wahr ist."
explanationWrong:
  - "Die Geschwindigkeit ist nicht das Hauptmerkmal der Kurzschlussauswertung."
  - "Die Priorität der Operatoren ist ein separates Konzept."
  - "Die Auswertung erfolgt standardmäßig von links nach rechts."
---
### Frage 35: Was bedeutet der Ausdruck "Kurzschlussauswertung" bei logischen Operatoren?
- [ ] Die Auswertung erfolgt besonders schnell
- [ ] Logische Operatoren haben eine höhere Priorität als andere Operatoren
- [x] Der zweite Operand wird nur ausgewertet, wenn der erste nicht ausreicht, um das Ergebnis zu bestimmen
- [ ] Die Auswertung erfolgt von rechts nach links

---
topic: "Datentypen"
subtopic: "Boolean"
level: "medium"
explanation: "Aufgrund der Kurzschlussauswertung wird bei 'True or print(\"Hallo\")' der zweite Teil (print) gar nicht ausgeführt, da True bereits ausreicht, um das Ergebnis des OR-Ausdrucks als True zu bestimmen."
explanationWrong:
  - "Hallo würde nur ausgegeben, wenn der erste Teil False wäre."
  - "Da der zweite Teil nicht ausgeführt wird, wird nur True zurückgegeben, nicht beides."
  - "Der Ausdruck ist syntaktisch korrekt."
---
### Frage 36: Was ist das Ergebnis von `True or print("Hallo")`?
- [x] True
- [ ] Hallo
- [ ] True und Hallo wird ausgegeben
- [ ] Ein Syntaxfehler

---
topic: "Datentypen"
subtopic: "Boolean"
level: "medium"
explanation: "In Python kann man Vergleichsoperatoren verketten. Sowohl 10 <= x <= 20 als auch x >= 10 and x <= 20 prüfen, ob x im Bereich von 10 bis 20 (inklusive) liegt."
explanationWrong:
  - "10 < x < 20 würde prüfen, ob x zwischen 10 und 20 liegt, aber ohne die Grenzen einzuschließen."
---
### Frage 37: Welche Operatorenkombination kann verwendet werden, um zu prüfen, ob x zwischen 10 und 20 liegt (einschließlich)?
- [ ] 10 < x < 20
- [x] 10 <= x <= 20
- [ ] x >= 10 and x <= 20
- [ ] Sowohl 10 <= x <= 20 als auch x >= 10 and x <= 20 sind korrekt

---
topic: "Datentypen"
subtopic: "Typkonvertierung"
level: "easy"
explanation: "Die Funktion int() schneidet bei Konvertierung von float zu int die Nachkommastellen ab, ohne zu runden. Daher wird 3.99 zu 3."
explanationWrong:
  - "4 wäre das Ergebnis, wenn int() aufrunden würde, was es nicht tut."
  - "3.0 wäre das Ergebnis einer Konvertierung zu float mit abgeschnittenen Nachkommastellen, nicht zu int."
  - "Die Operation ist gültig und erzeugt keinen ValueError."
---
### Frage 38: Was ist das Ergebnis von `int(3.99)` in Python?
- [x] 3
- [ ] 4
- [ ] 3.0
- [ ] Ein ValueError

---
topic: "Datentypen"
subtopic: "Typkonvertierung"
level: "medium"
explanation: "Die Funktion int() kann Strings mit ganzen Zahlen konvertieren, aber nicht Strings mit Dezimalzahlen. Für letztere muss man zuerst float() verwenden und dann ggf. int()."
explanationWrong:
  - "int('42') konvertiert den String '42' korrekt in die Ganzzahl 42."
  - "float('3.14') konvertiert den String '3.14' korrekt in die Fließkommazahl 3.14."
  - "bool('False') gibt True zurück, da jeder nicht-leere String als True ausgewertet wird."
---
### Frage 39: Welche der folgenden Anweisungen führt zu einem ValueError?
- [ ] `int("42")`
- [ ] `float("3.14")`
- [x] `int("3.14")`
- [ ] `bool("False")`

---
topic: "Datentypen"
subtopic: "Sets"
level: "medium"
explanation: "Die set()-Funktion erzeugt ein Set aus einer iterierbaren Sammlung und entfernt dabei automatisch Duplikate. Daher wird aus der Liste [1, 2, 2, 3, 3, 3] das Set {1, 2, 3}."
explanationWrong:
  - "Die ursprüngliche Liste würde Duplikate enthalten."
  - "Eine Liste ohne Duplikate würde eckige Klammern verwenden, nicht geschweifte."
  - "Die Operation ist gültig und erzeugt keinen TypeError."
---
### Frage 40: Was ist das Ergebnis von `set([1, 2, 2, 3, 3, 3])`?
- [ ] [1, 2, 2, 3, 3, 3]
- [ ] [1, 2, 3]
- [x] {1, 2, 3}
- [ ] Ein TypeError

---
topic: "Datentypen"
subtopic: "Typüberprüfung"
level: "easy"
explanation: "Die Funktion type() gibt den Datentyp eines Objekts zurück. Sie wird häufig zur Typüberprüfung und Debugging verwendet."
explanationWrong:
  - "typeof() ist eine JavaScript-Funktion, nicht Python."
  - "gettype() ist keine eingebaute Python-Funktion."
  - "datatype() ist keine eingebaute Python-Funktion."
---
### Frage 41: Welche Funktion gibt den Datentyp eines Objekts zurück?
- [x] type()
- [ ] typeof()
- [ ] gettype()
- [ ] datatype()

---
topic: "Datentypen"
subtopic: "Typüberprüfung"
level: "easy"
explanation: "In Python 3 gibt type() ein Klassen-Objekt zurück, das im Format <class 'type'> angezeigt wird. Für eine Ganzzahl wie 5 ist dies <class 'int'>."
explanationWrong:
  - "\"int\" wäre ein String, nicht das Ergebnis von type()."
  - "int ohne Anführungszeichen wäre die Klasse selbst, nicht das, was type() zurückgibt."
  - "integer ist keine gültige Typenbezeichnung in Python."
---
### Frage 42: Was ist das Ergebnis von `type(5)`?
- [ ] "int"
- [ ] int
- [x] <class 'int'>
- [ ] integer

---
topic: "Datentypen"
subtopic: "String"
level: "medium"
explanation: "Die Methode isdigit() prüft, ob ein String nur aus Ziffern besteht. Sie gibt True zurück, wenn alle Zeichen Ziffern sind, und False andernfalls."
explanationWrong:
  - "Die Methode zählt nicht die Anzahl der Ziffern."
  - "Sie gibt nicht den ersten numerischen Wert zurück."
  - "Sie gibt keine Liste aller Ziffern zurück."
---
### Frage 43: Was gibt die Methode `isdigit()` bei einem String zurück?
- [ ] Die Anzahl der Ziffern im String
- [x] True, wenn der String nur aus Ziffern besteht
- [ ] Den ersten numerischen Wert im String
- [ ] Eine Liste aller Ziffern im String

---
topic: "Datentypen"
subtopic: "String"
level: "medium"
explanation: "Strings in Python sind unveränderlich (immutable), was bedeutet, dass sie nach der Erstellung nicht mehr verändert werden können. Bei Operationen, die einen String zu ändern scheinen, wird tatsächlich ein neuer String erstellt."
explanationWrong:
  - "Strings können nach der Erstellung nicht verändert werden."
  - "Es gibt keine Längenbegrenzung für Strings in Python."
  - "Python-Strings können Unicode-Zeichen enthalten, nicht nur ASCII."
---
### Frage 44: Welche Eigenschaft haben alle Strings in Python?
- [ ] Sie können nach der Erstellung verändert werden
- [x] Sie sind unveränderlich (immutable)
- [ ] Sie haben eine maximale Länge von 255 Zeichen
- [ ] Sie können nur ASCII-Zeichen enthalten

---
topic: "Datentypen"
subtopic: "Operationen"
level: "medium"
explanation: "Der Operator == prüft auf Wertgleichheit (ob zwei Objekte den gleichen Wert haben), während is auf Identität prüft (ob es sich um dasselbe Objekt im Speicher handelt)."
explanationWrong:
  - "Es gibt einen deutlichen Unterschied zwischen den beiden Operatoren."
  - "is ist ein gültiger Python-Operator."
  - "Beide Operatoren funktionieren für alle Typen, nicht nur für bestimmte."
---
### Frage 45: Was ist der Unterschied zwischen `==` und `is` in Python?
- [ ] Es gibt keinen Unterschied, beide prüfen auf Gleichheit
- [ ] `==` prüft auf Gleichheit, `is` ist kein gültiger Python-Operator
- [x] `==` prüft auf Wertgleichheit, `is` prüft auf Identität (gleiches Objekt)
- [ ] `==` funktioniert nur für numerische Typen, `is` funktioniert für alle Typen

---
topic: "Datentypen"
subtopic: "String"
level: "medium"
explanation: "Ein Raw-String in Python wird mit dem Präfix r erstellt und interpretiert Escape-Sequenzen wie \\n nicht. Dies ist besonders nützlich für Pfade in Windows oder reguläre Ausdrücke."
explanationWrong:
  - "raw als Prefix existiert nicht in Python."
  - "Diese Option zeigt einen normalen String mit Escape-Sequenzen, nicht einen Raw-String."
  - "raw() ist keine eingebaute Python-Funktion."
---
### Frage 46: Welches ist ein gültiger Weg, einen Raw-String in Python zu definieren?
- [x] r"C:\Users\Name"
- [ ] raw"C:\Users\Name"
- [ ] "C:\\Users\\Name"
- [ ] raw("C:\Users\Name")

---
topic: "Datentypen"
subtopic: "String"
level: "medium"
explanation: "Da Strings in Python unveränderlich sind, führt der Versuch, ein einzelnes Zeichen in einem String zu ändern, zu einem TypeError. Man muss stattdessen einen neuen String erstellen."
explanationWrong:
  - "Jython würde nicht ausgegeben, da die Operation fehlschlägt."
  - "Python würde nicht ausgegeben, da die Operation fehlschlägt."
  - "Es ist kein IndexError, sondern ein TypeError wegen der Unveränderlichkeit."
---
### Frage 47: Was ist das Ergebnis der Ausführung des folgenden Codes?

```python
a = "Python"
a[0] = "J"
print(a)
```
- [ ] "Jython"
- [ ] "Python"
- [x] Ein TypeError, da Strings unveränderlich sind
- [ ] Ein IndexError

---
topic: "Datentypen"
subtopic: "Boolean"
level: "easy"
explanation: "In Python gibt es die speziellen booleschen Werte True und False, die mit Großbuchstaben beginnen. Sie sind keine Strings, sondern eigene Datentypen, die von der Klasse int erben."
explanationWrong:
  - "Python hat spezielle boolesche Datentypen, nämlich True und False."
  - "Boolesche Werte sind True und False, nicht 0 und 1 (obwohl sie als 0 und 1 interpretiert werden können)."
  - "True und False sind keine normalen Strings, sondern spezielle Schlüsselwörter."
---
### Frage 48: Welche Aussage zu booleschen Werten in Python ist korrekt?
- [ ] Python hat keine speziellen booleschen Datentypen
- [ ] Boolesche Werte werden durch 0 und 1 repräsentiert
- [x] True und False sind spezielle boolesche Werte mit Großbuchstaben
- [ ] True und False sind normale Strings

---
topic: "Datentypen"
subtopic: "String"
level: "medium"
explanation: "Die Slice-Notation [1:4] gibt einen Teilstring zurück, der die Zeichen an den Positionen 1, 2 und 3 enthält (aber nicht 4). Bei 'Python' sind das die Buchstaben 'yth'."
explanationWrong:
  - "'Pyt' wäre das Ergebnis von 'Python'[0:3]."
  - "'ytho' wäre das Ergebnis von 'Python'[1:5]."
  - "'ython' wäre das Ergebnis von 'Python'[1:]."
---
### Frage 49: Was gibt die folgende Code-Zeile aus?

```python
print("Python"[1:4])
```
- [ ] "Pyt"
- [x] "yth"
- [ ] "ytho"
- [ ] "ython"

---
topic: "Datentypen"
subtopic: "String"
level: "easy"
explanation: "Die Methode isalpha() prüft, ob ein String nur aus Buchstaben besteht (keine Zahlen, Leerzeichen oder Sonderzeichen)."
explanationWrong:
  - "string.only_letters() ist keine existierende String-Methode in Python."
  - "letters_only(string) ist keine eingebaute Python-Funktion."
  - "string.alpha() ist keine existierende String-Methode in Python."
---
### Frage 50: Wie kann man in Python prüfen, ob ein String nur aus Buchstaben besteht?
- [ ] `string.only_letters()`
- [ ] `letters_only(string)`
- [x] `string.isalpha()`
- [ ] `string.alpha()`