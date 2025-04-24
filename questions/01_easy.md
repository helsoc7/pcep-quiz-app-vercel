---
# Python Quiz mit Metadaten

---
topic: "Print_Input"
subtopic: "Ein-/Ausgabe"
level: "easy"
explanation: "Die print()-Funktion wird in Python verwendet, um Text auf der Konsole auszugeben."
explanationWrong:
  - "write() ist keine standardmäßige Python-Funktion zur Textausgabe."
  - "console.log() ist eine JavaScript-Funktion, keine Python-Funktion."
  - "echo() ist ein Befehl in PHP und Bash, aber keine standardmäßige Python-Funktion."
---
### Frage 1: Was ist die korrekte Methode, um "Hello, World!" in Python auszugeben?
- [ ] `write("Hello, World!")`
- [ ] `console.log("Hello, World!")`
- [x] `print("Hello, World!")`
- [ ] `echo("Hello, World!")`

---
topic: "Datentypen"
subtopic: "Zuweisung"
level: "easy"
explanation: "In Python wird das Gleichheitszeichen (=) verwendet, um Variablen Werte zuzuweisen."
explanationWrong:
  - "Die Zuweisung erfolgt von rechts nach links, nicht umgekehrt."
  - "Der Operator := ist in Python 3.8+ für Zuweisungsausdrücke verfügbar, wird aber nicht für normale Zuweisungen verwendet."
  - "let x = 10 ist eine JavaScript-Syntax, keine Python-Syntax."
---
### Frage 2: Welche der folgenden Optionen ist die korrekte Methode, um einer Variable namens x den Wert 10 zuzuweisen?
- [x] `x = 10`
- [ ] `10 = x`
- [ ] `x := 10`
- [ ] `let x = 10`

---
topic: "Grundlagen"
subtopic: "Operationen"
level: "easy"
explanation: "Python folgt der mathematischen Rangfolge von Operationen: Multiplikation wird vor Addition ausgeführt. Daher wird 3 * 4 = 12 zuerst berechnet, dann 2 + 12 = 14."
explanationWrong:
  - "20 wäre das Ergebnis, wenn die Berechnung von links nach rechts erfolgen würde: (2 + 3) * 4."
  - "24 wäre das Ergebnis von 2 * 3 * 4."
  - "10 ist nicht das korrekte Ergebnis gemäß der mathematischen Rangfolge."
---
### Frage 3: Was ist das Ergebnis des Ausdrucks `2 + 3 * 4`?
- [ ] 20
- [x] 14
- [ ] 24
- [ ] 10

---
topic: "Grundlagen"
subtopic: "Syntax"
level: "easy"
explanation: "In Python werden einzeilige Kommentare mit dem #-Symbol eingeleitet. Alles, was nach diesem Symbol in einer Zeile steht, wird vom Interpreter ignoriert."
explanationWrong:
  - "// wird in Sprachen wie C, C++, Java und JavaScript für Kommentare verwendet, nicht in Python."
  - "/* wird in C, C++, Java usw. für mehrzeilige Kommentare verwendet, nicht in Python."
  - "<!-- --> ist die Kommentarsyntax in HTML, nicht in Python."
---
### Frage 4: Welches Symbol wird für einzeilige Kommentare in Python verwendet?
- [ ] //
- [ ] /*
- [ ] <!-- -->
- [x] #

---
topic: "Datentypen"
subtopic: "Strings"
level: "easy"
explanation: "Der Datentyp 'str' (String) in Python ist eine Sequenz von Zeichen, die durch Anführungszeichen (einfach oder doppelt) eingeschlossen wird."
explanationWrong:
  - "int ist der Datentyp für Ganzzahlen, nicht für Zeichenketten."
  - "float ist der Datentyp für Gleitkommazahlen, nicht für Zeichenketten."
  - "bool ist der Datentyp für boolesche Werte (True/False), nicht für Zeichenketten."
---
### Frage 5: Welcher dieser Datentypen ist eine Sequenz von Zeichen in Python?
- [ ] int
- [ ] float
- [x] str
- [ ] bool

---
topic: "Print_Input"
subtopic: "String-Operationen"
level: "easy"
explanation: "Der Code verwendet den +-Operator zur Verkettung der Strings 'Hello', Leerzeichen und 'World', was zur Ausgabe 'Hello World' führt."
explanationWrong:
  - "Die Strings werden nicht ohne das Leerzeichen zusammengefügt."
  - "Der +-Operator verketttet die Strings, er gibt nicht den Ausdruck selbst aus."
  - "Die Verkettung von Strings mit + ist in Python gültig und verursacht keinen Fehler."
---
### Frage 6: Was ist die Ausgabe des folgenden Codes?
```python
print("Hello" + " " + "World")
```
- [x] Hello World
- [ ] HelloWorld
- [ ] Hello + World
- [ ] Ein Fehler wird ausgegeben

---
topic: "Grundlagen"
subtopic: "Vergleichsoperationen"
level: "easy"
explanation: "Der Ausdruck 5 > 3 ist eine Vergleichsoperation, die auswertet, ob 5 größer als 3 ist, was wahr (True) ist."
explanationWrong:
  - "Der Vergleichsoperator gibt einen booleschen Wert zurück, nicht eine der verglichenen Zahlen."
  - "5 > 3 ist eine wahre Aussage, daher ist das Ergebnis True, nicht False."
---
### Frage 7: Was ist die Ausgabe von `print(5 > 3)`?
- [ ] 5
- [ ] 3
- [x] True
- [ ] False

---
topic: "Datentypen"
subtopic: "Zahlen"
level: "easy"
explanation: "In Python werden Gleitkommazahlen mit einem Punkt als Dezimaltrennzeichen geschrieben. Daher ist x = 2.5 die korrekte Syntax."
explanationWrong:
  - "In Python wird ein Punkt als Dezimaltrennzeichen verwendet, kein Komma."
  - "float(2,5) würde als Funktionsaufruf mit zwei Argumenten interpretiert werden, nicht als eine Gleitkommazahl."
  - "x = \"2.5\" würde einen String erstellen, keine Gleitkommazahl."
---
### Frage 8: Wie erstellt man eine Variable mit der Gleitkommazahl 2,5?
- [ ] `x = 2,5`
- [x] `x = 2.5`
- [ ] `x = float(2,5)`
- [ ] `x = "2.5"`

---
topic: "Grundlagen"
subtopic: "Operationen"
level: "medium"
explanation: "Der Operator // führt eine ganzzahlige Division durch, die das Ergebnis zur nächsten ganzen Zahl Richtung Minus-Unendlich abrundet. 10 // 3 ergibt daher 3."
explanationWrong:
  - "3.33 wäre das Ergebnis einer normalen Division (10 / 3)."
  - "3.0 wäre ein Gleitkomma-Ergebnis, aber // liefert immer einen Integer."
  - "4 wäre falsch, da 10 // 3 = 3 ist (3 * 3 = 9, Rest 1)."
---
### Frage 9: Was ist der Wert von `10 // 3` in Python?
- [ ] 3.33
- [ ] 3.0
- [x] 3
- [ ] 4

---
topic: "Datentypen"
subtopic: "String-Indexierung"
level: "easy"
explanation: "In Python beginnt die Indexierung bei 0. Der Index 1 gibt daher das zweite Zeichen im String zurück, also 'y' in 'Python'."
explanationWrong:
  - "Der Index 0 gibt 'P' zurück, nicht der Index 1."
  - "Um 'Py' zu erhalten, müsste man Slice-Notation verwenden: 'Python'[0:2]."
  - "Der Index 1 gibt 'y' zurück, nicht 't'."
---
### Frage 10: Was ist die Ausgabe des folgenden Codes?
```python
print("Python"[1])
```
- [ ] P
- [x] y
- [ ] Py
- [ ] t

---
topic: "Datentypen"
subtopic: "String-Funktionen"
level: "easy"
explanation: "Die Funktion len() gibt die Anzahl der Zeichen in einem String zurück. 'Hello' enthält 5 Zeichen."
explanationWrong:
  - "4 wäre falsch, da 'Hello' 5 Zeichen hat."
  - "len() gibt einen Integer zurück, nicht den String selbst."
  - "Der Aufruf von len() für einen String verursacht keinen Fehler."
---
### Frage 11: Was gibt `len("Hello")` zurück?
- [ ] 4
- [x] 5
- [ ] "Hello"
- [ ] Ein Fehler tritt auf

---
topic: "Grundlagen"
subtopic: "Operationen"
level: "easy"
explanation: "In Python wird der Operator ** für die Potenzierung verwendet. Zum Beispiel ist 2**3 gleich 8 (2 hoch 3)."
explanationWrong:
  - "^ ist in Python der bitweise XOR-Operator, nicht der Potenzierungsoperator."
  - "* ist der Multiplikationsoperator, nicht der Potenzierungsoperator."
  - "// ist der Operator für ganzzahlige Division, nicht für Potenzierung."
---
### Frage 12: Welcher der folgenden Operatoren wird für die Potenzierung in Python verwendet?
- [ ] ^
- [ ] *
- [x] **
- [ ] //

---
topic: "Grundlagen"
subtopic: "Operationen"
level: "easy"
explanation: "Der Modulo-Operator % gibt den Rest einer Division zurück. 7 geteilt durch 3 ergibt 2 mit einem Rest von 1, daher ist 7 % 3 gleich 1."
explanationWrong:
  - "2.33 wäre das Ergebnis von 7 / 3, nicht von 7 % 3."
  - "2 wäre falsch, da der Rest bei 7 / 3 = 1 ist, nicht 2."
  - "4 wäre falsch, da der Rest bei 7 / 3 = 1 ist, nicht 4."
---
### Frage 13: Was ist die Ausgabe von `print(7 % 3)`?
- [ ] 2.33
- [x] 1
- [ ] 2
- [ ] 4

---
topic: "Datenstrukturen"
subtopic: "Listen"
level: "easy"
explanation: "Eine leere Liste in Python wird mit eckigen Klammern [] erstellt."
explanationWrong:
  - "my_list = list{} ist keine gültige Python-Syntax."
  - "my_list = null ist keine gültige Python-Syntax, in Python wird None verwendet."
  - "my_list = new List() ist keine gültige Python-Syntax, sondern ähnelt eher Java oder C#."
---
### Frage 14: Wie erstellt man eine leere Liste in Python?
- [x] `my_list = []`
- [ ] `my_list = list{}`
- [ ] `my_list = null`
- [ ] `my_list = new List()`

---
topic: "Datentypen"
subtopic: "Typ-Konvertierung"
level: "easy"
explanation: "Die eingebaute Funktion int() konvertiert einen String in eine Ganzzahl."
explanationWrong:
  - "convert() ist keine eingebaute Python-Funktion."
  - "integer() ist keine eingebaute Python-Funktion."
  - "string_to_int() ist keine eingebaute Python-Funktion."
---
### Frage 15: Welche eingebaute Funktion konvertiert einen String in eine Ganzzahl?
- [ ] `convert()`
- [x] `int()`
- [ ] `integer()`
- [ ] `string_to_int()`

---
topic: "Datentypen"
subtopic: "String-Methoden"
level: "easy"
explanation: "Die Methode upper() für Strings gibt eine Kopie des Strings zurück, bei der alle Buchstaben in Großbuchstaben umgewandelt wurden."
explanationWrong:
  - "lower() würde alle Buchstaben in Kleinbuchstaben umwandeln, nicht in Großbuchstaben."
  - "upper() ändert alle Buchstaben, nicht nur bestimmte."
  - "HeLLo wäre das Ergebnis einer anderen Transformation, nicht von upper()."
---
### Frage 16: Was gibt `"Hello".upper()` zurück?
- [ ] "hello"
- [x] "HELLO"
- [ ] "Hello"
- [ ] "HeLLo"

---
topic: "Grundlagen"
subtopic: "Vergleichsoperationen"
level: "easy"
explanation: "Der Operator == vergleicht, ob zwei Werte gleich sind. Da 5 nicht gleich 2 ist, ergibt x == y den Wert False."
explanationWrong:
  - "Der Vergleich ist False, da 5 nicht gleich 2 ist."
  - "Der Operator == gibt einen booleschen Wert zurück, nicht eine der verglichenen Zahlen."
---
### Frage 17: Was ist die Ausgabe des folgenden Codes?
```python
x = 5
y = 2
print(x == y)
```
- [ ] True
- [x] False
- [ ] 5
- [ ] 2

---
topic: "Grundlagen"
subtopic: "Vergleichsoperationen"
level: "easy"
explanation: "Der Operator == wird in Python verwendet, um zu überprüfen, ob zwei Werte gleich sind."
explanationWrong:
  - "x = 5 ist eine Zuweisung, kein Vergleich."
  - "x := 5 ist in Python 3.8+ ein Zuweisungsausdruck, kein Gleichheitsvergleich."
  - "x === 5 ist keine gültige Python-Syntax, sondern wird in JavaScript für strikte Gleichheit verwendet."
---
### Frage 18: Was ist die korrekte Methode, um zu überprüfen, ob eine Variable x gleich 5 ist?
- [ ] `x = 5`
- [ ] `x := 5`
- [x] `x == 5`
- [ ] `x === 5`

---
topic: "Grundlagen"
subtopic: "Syntax"
level: "easy"
explanation: "In Python werden Bedingungen mit einem Doppelpunkt eingeleitet und der folgende Code wird eingerückt. Geschweifte Klammern werden nicht verwendet."
explanationWrong:
  - "Python verwendet keine geschweiften Klammern für Codeblöcke wie andere Sprachen."
  - "Python verwendet kein 'then' Schlüsselwort in if-Anweisungen."
  - "Die letzte Option mischt Python-Syntax mit geschweiften Klammern, was nicht korrekt ist."
---
### Frage 19: Was ist die korrekte Syntax für eine einfache if-Anweisung in Python?
- [ ] `if (x > 5) { print("x ist größer als 5") }`
- [x] `if x > 5: print("x ist größer als 5")`
- [ ] `if x > 5 then print("x ist größer als 5")`
- [ ] `if x > 5: { print("x ist größer als 5") }`

---
topic: "Grundlagen"
subtopic: "Logische Operationen"
level: "easy"
explanation: "Der logische Operator 'and' gibt True zurück, wenn beide Operanden True sind. Da True and False nicht beide True sind, ist das Ergebnis False."
explanationWrong:
  - "Für True and False ist das Ergebnis False, nicht True."
  - "Der Ausdruck wird ausgewertet, nicht als String zurückgegeben."
  - "Die Verwendung von logischen Operatoren verursacht keinen Fehler."
---
### Frage 20: Was ist die Ausgabe von `print(True and False)`?
- [ ] True
- [x] False
- [ ] "True and False"
- [ ] Error

---
topic: "Grundlagen"
subtopic: "String-Operationen"
level: "easy"
explanation: "Wenn ein String mit einer Zahl multipliziert wird, wird der String entsprechend oft wiederholt. 'Hello' * 3 ergibt daher 'HelloHelloHello'."
explanationWrong:
  - "'Hello3' wäre das Ergebnis einer Stringverkettung (Konkatenation), nicht einer Multiplikation."
  - "'Hello Hello Hello' würde Leerzeichen zwischen den Wiederholungen haben, die bei der Multiplikation nicht eingefügt werden."
  - "Die Multiplikation eines Strings mit einer Zahl ist in Python gültig und verursacht keinen Fehler."
---
### Frage 21: Was ist die Ausgabe von `print("Hello" * 3)`?
- [ ] "Hello3"
- [x] "HelloHelloHello"
- [ ] "Hello Hello Hello"
- [ ] Error

---
topic: "Datentypen"
subtopic: "Datentypen"
level: "easy"
explanation: "Array ist kein eingebauter Datentyp in Python. Die eingebauten Sequenztypen sind list, tuple und dict."
explanationWrong:
  - "list ist ein eingebauter Sequenztyp in Python."
  - "tuple ist ein eingebauter unveränderlicher Sequenztyp in Python."
  - "dict ist ein eingebauter Mappingtyp in Python."
---
### Frage 22: Welcher der folgenden ist KEIN Python-Datentyp?
- [ ] list
- [ ] tuple
- [ ] dict
- [x] array

---
topic: "Datenstrukturen"
subtopic: "Listen-Indexierung"
level: "easy"
explanation: "In Python beginnt die Indexierung bei 0. Der Index 0 gibt daher das erste Element der Liste zurück, also 'apple'."
explanationWrong:
  - "banana ist das zweite Element mit Index 1."
  - "cherry ist das dritte Element mit Index 2."
  - "Der Index gibt das Element an dieser Position zurück, nicht den Index selbst."
---
### Frage 23: Was ist die Ausgabe des folgenden Codes?
```python
fruits = ["apple", "banana", "cherry"]
print(fruits[0])
```
- [x] "apple"
- [ ] "banana"
- [ ] "cherry"
- [ ] 0

---
topic: "Datenstrukturen"
subtopic: "Listen-Methoden"
level: "easy"
explanation: "Die append()-Methode fügt ein Element am Ende einer Liste hinzu."
explanationWrong:
  - "add() ist keine Standardmethode für Listen in Python."
  - "insert() fügt ein Element an einer bestimmten Position ein, benötigt aber einen Index."
  - "end() ist keine Standardmethode für Listen in Python."
---
### Frage 24: Was ist die korrekte Methode, um ein Element am Ende einer Liste hinzuzufügen?
- [x] `list.append(element)`
- [ ] `list.add(element)`
- [ ] `list.insert(element)`
- [ ] `list.end(element)`

---
topic: "Datentypen"
subtopic: "Boolesche Werte"
level: "easy"
explanation: "Die bool()-Funktion konvertiert einen Wert in einen booleschen Wert. Ein leerer String wird als False bewertet."
explanationWrong:
  - "Leere Sammlungen und Strings werden in Python als False bewertet, nicht als True."
  - "bool(\"\") gibt einen booleschen Wert zurück, nicht den leeren String."
  - "bool(\"\") gibt False zurück, nicht None."
---
### Frage 25: Was ist das Ergebnis von `bool("")`?
- [ ] True
- [x] False
- [ ] ""
- [ ] None

---
topic: "Datentypen"
subtopic: "String-Methoden"
level: "easy"
explanation: "Die lower()-Methode für Strings gibt eine Kopie des Strings zurück, bei der alle Buchstaben in Kleinbuchstaben umgewandelt wurden."
explanationWrong:
  - "upper() würde alle Buchstaben in Großbuchstaben umwandeln, nicht in Kleinbuchstaben."
  - "lower() ändert alle Buchstaben in Kleinbuchstaben, daher wird 'Hello' zu 'hello'."
  - "lower() gibt den umgewandelten String zurück, nicht None."
---
### Frage 26: Was gibt der folgende Code aus?
```python
print("Hello".lower())
```
- [ ] "HELLO"
- [x] "hello"
- [ ] "Hello"
- [ ] None

---
topic: "Schleifen"
subtopic: "Schleifentypen"
level: "medium"
explanation: "Python hat keine eingebaute do-while-Schleife. Die for-Schleife und while-Schleife in Python führen den Codeblock nur aus, wenn die Bedingung wahr ist."
explanationWrong:
  - "Eine for-Schleife führt den Codeblock nur aus, wenn die Iteration Elemente enthält."
  - "Eine while-Schleife führt den Codeblock nur aus, wenn die Bedingung am Anfang wahr ist."
  - "Eine do-while-Schleife, die den Codeblock mindestens einmal ausführt, existiert in Python nicht."
---
### Frage 27: Welche Schleife wird den Codeblock mindestens einmal ausführen?
- [ ] for-Schleife
- [ ] while-Schleife
- [ ] do-while-Schleife
- [x] Keine der genannten

---
topic: "Datentypen"
subtopic: "String-Methoden"
level: "easy"
explanation: "Die lower()-Methode konvertiert einen String in Kleinbuchstaben."
explanationWrong:
  - "toLower() ist eine Methode in JavaScript, nicht in Python."
  - "lowercase() ist keine Standardmethode für Strings in Python."
  - "small() ist keine Standardmethode für Strings in Python."
---
### Frage 28: Wie konvertiert man einen String in Kleinbuchstaben in Python?
- [ ] `str.toLower()`
- [x] `str.lower()`
- [ ] `lowercase(str)`
- [ ] `str.small()`

---
topic: "Schleifen"
subtopic: "Range-Funktion"
level: "medium"
explanation: "Die range(3)-Funktion erzeugt die Sequenz [0, 1, 2]. Der end-Parameter in print() sorgt dafür, dass nach jeder Zahl ein Leerzeichen statt eines Zeilenumbruchs folgt."
explanationWrong:
  - "range(3) beginnt bei 0, nicht bei 1."
  - "range(3) gibt [0, 1, 2] zurück, nicht [0, 1, 2, 3]."
  - "Die Ausgabe erfolgt in aufsteigender Reihenfolge, nicht umgekehrt."
---
### Frage 29: Was ist die Ausgabe des folgenden Codes?
```python
for i in range(3):
    print(i, end=" ")
```
- [ ] 1 2 3
- [x] 0 1 2
- [ ] 0 1 2 3
- [ ] 3 2 1 0

---
topic: "Datentypen"
subtopic: "Typüberprüfung"
level: "easy"
explanation: "Die type()-Funktion gibt den Datentyp einer Variable zurück."
explanationWrong:
  - "typeof() ist eine JavaScript-Funktion, keine Python-Funktion."
  - "get_type() ist keine Standardfunktion in Python."
  - "vartype() ist keine Standardfunktion in Python."
---
### Frage 30: Welche Funktion wird verwendet, um den Typ einer Variable zu ermitteln?
- [ ] `typeof()`
- [x] `type()`
- [ ] `get_type()`
- [ ] `vartype()`

---
topic: "Datenstrukturen"
subtopic: "Listen-Funktionen"
level: "easy"
explanation: "Die len()-Funktion gibt die Anzahl der Elemente in einer Sequenz zurück. Die Liste fruits enthält 3 Elemente."
explanationWrong:
  - "5 wäre die Summe der Längen der Strings in der Liste, nicht die Anzahl der Elemente."
  - "15 wäre die Gesamtzahl der Zeichen in allen Strings der Liste, nicht die Anzahl der Elemente."
  - "Die len()-Funktion gibt einen Integer zurück, nicht die Elemente als String."
---
### Frage 31: Was gibt der folgende Code aus?
```python
fruits = ["apple", "banana", "cherry"]
print(len(fruits))
```
- [ ] 5
- [ ] 15
- [x] 3
- [ ] "apple,banana,cherry"

---
topic: "Datentypen"
subtopic: "Typ-Konvertierung"
level: "easy"
explanation: "Die str()-Funktion konvertiert ein Objekt in seine String-Darstellung. str(123) gibt daher den String '123' zurück."
explanationWrong:
  - "print(str(123)) gibt den String-Inhalt aus, nicht die Anführungszeichen."
  - "str(123) gibt einen String zurück, nicht den Datentyp."
  - "Die Konvertierung einer Zahl in einen String verursacht keinen Fehler."
---
### Frage 32: Was ist die Ausgabe von `print(str(123))`?
- [ ] 123
- [x] "123"
- [ ] int
- [ ] Ein Fehler wird ausgegeben

---
topic: "Schleifen"
subtopic: "Schleifenkontrolle"
level: "easy"
explanation: "Die break-Anweisung beendet eine Schleife vorzeitig und setzt die Ausführung nach der Schleife fort."
explanationWrong:
  - "exit() beendet das Programm, nicht nur die Schleife."
  - "stop() ist keine Standardanweisung in Python."
  - "return() kann eine Funktion beenden, aber nicht spezifisch eine Schleife."
---
### Frage 33: Welche Anweisung wird verwendet, um eine Schleife vorzeitig zu beenden?
- [x] `break`
- [ ] `exit`
- [ ] `stop`
- [ ] `return`

---
topic: "Datentypen"
subtopic: "String-Slicing"
level: "easy"
explanation: "Die Slicing-Notation [0:2] gibt Zeichen vom Index 0 (inklusive) bis Index 2 (exklusive) zurück. Daher werden die ersten zwei Zeichen 'Py' zurückgegeben."
explanationWrong:
  - "Der Slice [0:2] gibt zwei Zeichen zurück, nicht nur eines."
  - "'Pyth' wäre das Ergebnis von [0:4]."
  - "'Python' wäre das Ergebnis von [0:6] oder [:]."
---
### Frage 34: Was ist die Ausgabe des folgenden Codes?
```python
print("Python"[0:2])
```
- [x] "Py"
- [ ] "P"
- [ ] "Pyth"
- [ ] "Python"

---
topic: "Funktionen"
subtopic: "Funktionsdefinition"
level: "easy"
explanation: "In Python werden Funktionen mit dem Schlüsselwort def definiert, gefolgt vom Funktionsnamen und Parametern in Klammern."
explanationWrong:
  - "function ist kein Schlüsselwort in Python, sondern wird in JavaScript verwendet."
  - "func ist kein Schlüsselwort in Python, sondern wird in Go verwendet."
  - "define ist kein Schlüsselwort in Python."
---
### Frage 35: Wie definiert man eine Funktion in Python?
- [ ] `function my_function():`
- [x] `def my_function():`
- [ ] `func my_function():`
- [ ] `define my_function():`

---
topic: "Grundlagen"
subtopic: "Vergleichsoperationen"
level: "easy"
explanation: "Der Operator == wird in Python verwendet, um zu überprüfen, ob zwei Variablen gleich sind."
explanationWrong:
  - "a = b ist eine Zuweisung, kein Vergleich."
  - "a.equals(b) ist keine standardmäßige Python-Syntax."
  - "a eq b ist keine gültige Python-Syntax."
---
### Frage 36: Was ist die korrekte Methode, um zu überprüfen, ob zwei Variablen gleich sind?
- [ ] `a = b`
- [x] `a == b`
- [ ] `a.equals(b)`
- [ ] `a eq b`

---
topic: "Grundlagen"
subtopic: "Logische Operationen"
level: "easy"
explanation: "In Python wird das Schlüsselwort 'and' für logische UND-Operationen verwendet."
explanationWrong:
  - "&& wird in Sprachen wie C, Java und JavaScript verwendet, nicht in Python."
  - "& ist der bitweise UND-Operator in Python, nicht der logische UND-Operator."
  - "+ ist der Additions-Operator, nicht für logische Operationen."
---
### Frage 37: Welcher Operator wird für logisches UND in Python verwendet?
- [ ] &&
- [x] and
- [ ] &
- [ ] +

---
topic: "Grundlagen"
subtopic: "Vergleichsoperationen"
level: "medium"
explanation: "Python ermöglicht Kettenvergleiche. Der Ausdruck 10 > 5 > 3 wird als (10 > 5) und (5 > 3) ausgewertet, was beides True ist, daher ist das Gesamtergebnis True."
explanationWrong:
  - "Der Ausdruck wird korrekt als (10 > 5) and (5 > 3) ausgewertet, was True ergibt."
  - "Der Ausdruck wird korrekt ausgewertet und löst keinen Fehler aus."
  - "Das Ergebnis ist ein boolescher Wert, nicht die erste verglichene Zahl."
---
### Frage 38: Was ist die Ausgabe von `print(10 > 5 > 3)`?
- [x] True
- [ ] False
- [ ] Error
- [ ] 10

---
topic: "Datenstrukturen"
subtopic: "Dictionaries"
level: "easy"
explanation: "Ein leeres Dictionary in Python wird mit geschweiften Klammern {} erstellt."
explanationWrong:
  - "Eckige Klammern [] erstellen eine leere Liste, kein Dictionary."
  - "Runde Klammern () erstellen ein leeres Tuple, kein Dictionary."
  - "new Dictionary() ist keine gültige Python-Syntax, sondern ähnelt eher Java oder C#."
---
### Frage 39: Was ist die korrekte Methode, um ein leeres Dictionary zu erstellen?
- [ ] `dict = []`
- [x] `dict = {}`
- [ ] `dict = ()`
- [ ] `dict = new Dictionary()`

---
topic: "Print_Input"
subtopic: "Formatierte Ausgabe"
level: "medium"
explanation: "f-Strings (formatierte String-Literale) ermöglichen die Einbettung von Ausdrücken in String-Literale. Der Ausdruck in den geschweiften Klammern wird ausgewertet und in den String eingefügt."
explanationWrong:
  - "Die Variable wird durch ihren Wert ersetzt, nicht als Platzhalter belassen."
  - "Das Ausrufezeichen wird im String behalten, nicht weggelassen."
  - "f-Strings sind seit Python 3.6 verfügbar und verursachen keinen Fehler."
---
### Frage 40: Was ist die Ausgabe des folgenden Codes?
```python
name = "John"
print(f"Hello, {name}!")
```
- [ ] "Hello, {name}!"
- [ ] "Hello, John"
- [x] "Hello, John!"
- [ ] Ein Fehler wird ausgegeben

---
topic: "Print_Input"
subtopic: "Benutzereingabe"
level: "easy"
explanation: "Die input()-Funktion in Python liest Benutzereingaben von der Tastatur ein und gibt sie als String zurück."
explanationWrong:
  - "Die input()-Funktion zeigt eine Nachricht an, wenn sie als Argument übergeben wird, aber ihre Hauptfunktion ist das Einlesen von Eingaben."
  - "Die input()-Funktion importiert keine Module."
  - "Die input()-Funktion schreibt keine Daten in eine Datei."
---
### Frage 41: Was macht die `input()`-Funktion in Python?
- [ ] Sie gibt eine Nachricht aus
- [x] Sie liest Benutzereingaben von der Tastatur
- [ ] Sie importiert Module
- [ ] Sie schreibt Daten in eine Datei

---
topic: "Grundlagen"
subtopic: "Logische Operationen"
level: "easy"
explanation: "Der Operator 'not' negiert einen booleschen Wert. Da True wahr ist, ist not True gleich False."
explanationWrong:
  - "not True ist False, nicht True."
  - "not True ist ein definierter boolescher Wert, nicht None."
  - "Der Ausdruck ist korrekt und löst keinen Fehler aus."
---
### Frage 42: Was ist das Ergebnis des Ausdrucks `not True`?
- [ ] True
- [x] False
- [ ] None
- [ ] Error

---
topic: "Datentypen"
subtopic: "Mehrzeilige Strings"
level: "easy"
explanation: "In Python können mehrzeilige Strings mit dreifachen Anführungszeichen (\"\"\" oder ''') erstellt werden. Diese erlauben Zeilenumbrüche innerhalb des Strings."
explanationWrong:
  - "\\n in einem String erzeugt einen Zeilenumbruch, es ist aber kein tatsächlicher mehrzeiliger String im Code."
  - "Einfache Anführungszeichen können in Python nicht über mehrere Zeilen gehen, ohne Escape-Zeichen."
  - "Beide Antworten sind nicht korrekt; nur die dreifachen Anführungszeichen erlauben native mehrzeilige Strings."
---
### Frage 43: Welche der folgenden Optionen ist eine korrekte Methode, um einen mehrzeiligen String in Python zu schreiben?
- [ ] `"Dies ist ein\nmehrzeiliger String"`
- [x] `"""Dies ist ein
mehrzeiliger String"""`
- [ ] `'Dies ist ein
mehrzeiliger String'`
- [ ] Sowohl A als auch B sind korrekt

---
topic: "Grundlagen"
subtopic: "Vergleichsoperationen"
level: "easy"
explanation: "In Python vergleicht der Operator == die Werte der Operanden, unabhängig von ihrem Typ. 5 und 5.0 haben den gleichen Wert, auch wenn sie unterschiedliche Typen haben (int und float)."
explanationWrong:
  - "5 == 5.0 ergibt True in Python, da die Werte gleich sind, auch wenn die Typen unterschiedlich sind."
  - "Der Vergleich löst keinen Fehler aus."
  - "Der Vergleich ergibt einen definierten booleschen Wert, nicht None."
---
### Frage 44: Was ist das Ergebnis von `5 == 5.0` in Python?
- [x] True
- [ ] False
- [ ] Error
- [ ] None

---
topic: "Datenstrukturen"
subtopic: "Tuples"
level: "medium"
explanation: "Tuples sind unveränderliche (immutable) Sammlungen in Python, d.h. nach ihrer Erstellung können Elemente nicht mehr hinzugefügt, entfernt oder geändert werden."
explanationWrong:
  - "Tuples sind unveränderlich, nicht veränderlich."
  - "Tuples können jede Art von Daten enthalten, nicht nur Zahlen."
  - "Tuples und Listen haben unterschiedliche Eigenschaften, insbesondere in Bezug auf die Veränderbarkeit."
---
### Frage 45: Welche Aussage beschreibt ein Python-Tuple korrekt?
- [ ] Tuples sind veränderliche Sammlungen
- [x] Tuples sind unveränderliche Sammlungen
- [ ] Tuples können nur Zahlen enthalten
- [ ] Tuples sind dasselbe wie Listen

---
topic: "Funktionen"
subtopic: "Eingebaute Funktionen"
level: "medium"
explanation: "Die range(5)-Funktion erzeugt eine Sequenz von Zahlen beginnend bei 0 (standardmäßig) bis 5 (exklusive). Die list()-Funktion konvertiert diese Sequenz in eine Liste: [0, 1, 2, 3, 4]."
explanationWrong:
  - "range() beginnt standardmäßig bei 0, nicht bei 1."
  - "range(5) erzeugt Zahlen von 0 bis 4, nicht von 0 bis 5."
  - "Ohne die list()-Funktion würde ein range-Objekt zurückgegeben, nicht die Liste."
---
### Frage 46: Was ist die Ausgabe des folgenden Codes?
```python
print(list(range(5)))
```
- [ ] [1, 2, 3, 4, 5]
- [x] [0, 1, 2, 3, 4]
- [ ] [0, 1, 2, 3, 4, 5]
- [ ] range(0, 5)

---
topic: "Datenstrukturen"
subtopic: "Dictionaries"
level: "easy"
explanation: "Die Syntax 'key in dictionary' wird verwendet, um zu prüfen, ob ein Schlüssel in einem Dictionary existiert. Dies gibt True zurück, wenn der Schlüssel vorhanden ist, andernfalls False."
explanationWrong:
  - "key in dictionary.keys() funktioniert auch, ist aber weniger effizient und nicht die bevorzugte Methode."
  - "has_key() war eine Methode in Python 2, aber ist in Python 3 nicht mehr verfügbar."
  - "contains() ist keine Standardmethode für Dictionaries in Python."
---
### Frage 47: Wie überprüft man, ob ein Schlüssel in einem Dictionary existiert?
- [ ] `key in dictionary.keys()`
- [x] `key in dictionary`
- [ ] `dictionary.has_key(key)`
- [ ] `dictionary.contains(key)`

---
topic: "Print_Input"
subtopic: "Mehrfache Ausgabe"
level: "easy"
explanation: "Der Aufruf von print() mit mehreren Argumenten gibt diese Werte durch Leerzeichen getrennt aus. In diesem Fall werden die Werte 1 und 2 ausgegeben, getrennt durch ein Leerzeichen."
explanationWrong:
  - "(1, 2) wäre die Ausgabe von print((1, 2)), also bei der Ausgabe eines Tuples."
  - "[1, 2] wäre die Ausgabe von print([1, 2]), also bei der Ausgabe einer Liste."
  - "\"1 2\" würde mit Anführungszeichen ausgegeben werden, was bei print() nicht der Fall ist."
---
### Frage 48: Was ist die Ausgabe des folgenden Codes?
```python
x = 1
y = 2
print(x, y)
```
- [ ] (1, 2)
- [x] 1 2
- [ ] [1, 2]
- [ ] "1 2"

---
topic: "Funktionen"
subtopic: "Module importieren"
level: "easy"
explanation: "Die korrekte Syntax zum Importieren eines Moduls in Python ist 'import modulname'. Im Fall des math-Moduls wäre das 'import math'."
explanationWrong:
  - "include ist ein Schlüsselwort in C/C++, nicht in Python."
  - "using ist ein Schlüsselwort in C#, nicht in Python."
  - "require ist ein Schlüsselwort in JavaScript/Node.js, nicht in Python."
---
### Frage 49: Welche der folgenden Optionen ist die korrekte Methode, um ein Modul namens 'math' in Python zu importieren?
- [x] `import math`
- [ ] `include math`
- [ ] `using math`
- [ ] `require math`

---
topic: "Datenstrukturen"
subtopic: "Listen-Indexierung"
level: "easy"
explanation: "In Python beginnt die Indexierung bei 0. Der Index 1 gibt daher das zweite Element in der Liste zurück, also 2."
explanationWrong:
  - "Der Index 0 gibt das erste Element zurück, also 1."
  - "Der Index 2 gibt das dritte Element zurück, also 3."
  - "Der Index 3 gibt das vierte Element zurück, also 4."
---
### Frage 50: Was gibt der folgende Code aus?
```python
numbers = [1, 2, 3, 4]
print(numbers[1])
```
- [ ] 1
- [x] 2
- [ ] 3
- [ ] 4