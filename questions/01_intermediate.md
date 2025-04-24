---
# Python Quiz mit Metadaten (Teil 3)

---
topic: "Grundlagen"
subtopic: "Operationen"
level: "easy"
explanation: "Der Modulo-Operator '%' berechnet den Rest der Division (10 % 5 = 0). Der Integer-Divisionsoperator '//' führt eine ganzzahlige Division durch und gibt das abgerundete Ergebnis zurück (10 // 5 = 2)."
explanationWrong:
  - "Die ganzzahlige Division (//) gibt einen int zurück, nicht einen float."
  - "Der Modulo-Operator gibt einen int zurück, nicht einen float, wenn mit ganzen Zahlen gearbeitet wird."
  - "Die Reihenfolge der Ausgaben ist falsch."
---
### Frage 1: Was ist die Ausgabe des folgenden Codes?
```python
x = 10
y = 5
print(x % y, x // y)
```
- [ ] 0 2.0
- [x] 0 2
- [ ] 0.0 2
- [ ] 2 0

---
topic: "Datentypen"
subtopic: "String-Slicing"
level: "medium"
explanation: "Beim String-Slicing in Python mit der Syntax [start:end] ist der Startindex inklusiv (einschließlich), während der Endindex exklusiv (ausschließend) ist. Das bedeutet, dass der erste angegebene Index enthalten ist, aber der zweite nicht."
explanationWrong:
  - "Der Endindex wird in Python beim Slicing nicht eingeschlossen."
  - "Beim Slicing wird der Startindex eingeschlossen, nicht ausgeschlossen."
  - "String-Slicing funktioniert sowohl mit positiven als auch mit negativen Indizes."
---
### Frage 2: Welche der folgenden Beschreibungen erklärt das String-Slicing in Python korrekt?
- [ ] String-Slicing schließt immer sowohl Start- als auch Endindex ein
- [x] String-Slicing schließt den Startindex ein, aber schließt den Endindex aus
- [ ] String-Slicing schließt sowohl Start- als auch Endindex aus
- [ ] String-Slicing funktioniert nur mit positiven Indizes

---
topic: "Datenstrukturen"
subtopic: "Listen-Methoden"
level: "medium"
explanation: "Die insert()-Methode fügt ein Element an einer bestimmten Position in die Liste ein. Hier wird 'orange' an Position 1 (dem zweiten Element) eingefügt, wodurch die ursprünglichen Elemente nach rechts verschoben werden. Dadurch rückt 'banana', das ursprünglich an Position 1 war, auf Position 2."
explanationWrong:
  - "'apple' ist nach dem Einfügen immer noch an Position 0, nicht an Position 2."
  - "'orange' ist nach dem Einfügen an Position 1, nicht an Position 2."
  - "'cherry' ist nach dem Einfügen an Position 3, nicht an Position 2."
---
### Frage 3: Was gibt der folgende Code aus?
```python
words = ["apple", "banana", "cherry"]
words.insert(1, "orange")
print(words[2])
```
- [ ] apple
- [ ] orange
- [x] banana
- [ ] cherry

---
topic: "Datentypen"
subtopic: "String-Slicing"
level: "medium"
explanation: "Die Slicing-Notation [::-1] kehrt einen String um. Sie beginnt am Ende des Strings und geht rückwärts bis zum Anfang mit einem Schritt von -1."
explanationWrong:
  - "[::-1] gibt nicht den ursprünglichen String zurück, sondern kehrt ihn um."
  - "[::-1] gibt nicht nur den ersten Buchstaben zurück."
---
### Frage 4: Was ist das Ergebnis des Ausdrucks `"Python"[::-1]`?
- [ ] "Python"
- [ ] "P"
- [x] "nohtyP"
- [ ] "n"

---
topic: "Grundlagen"
subtopic: "Operatoren"
level: "easy"
explanation: "Der 'in'-Operator in Python wird verwendet, um zu prüfen, ob ein Element in einer Sequenz (wie Listen, Strings, Tupel) enthalten ist. Er gibt True zurück, wenn das Element gefunden wird, andernfalls False."
explanationWrong:
  - "Der 'in'-Operator kann mit verschiedenen Datentypen verwendet werden, nicht nur mit Listen."
  - "Der 'in'-Operator gibt einen booleschen Wert zurück, nicht einen Index."
  - "Der 'in'-Operator modifiziert die Sequenz nicht."
---
### Frage 5: Welche Aussage über Pythons `in`-Operator ist korrekt?
- [ ] Er kann nur mit Listen verwendet werden
- [ ] Er gibt immer einen Index zurück, an dem das Element gefunden wurde
- [x] Er kann verwendet werden, um zu prüfen, ob ein Element in einer Sequenz existiert
- [ ] Er modifiziert die Sequenz, indem er ein Element hinzufügt

---
topic: "Schleifen"
subtopic: "For-Schleifen"
level: "easy"
explanation: "Diese Schleife durchläuft jede Zahl in der Liste und addiert nur die geraden Zahlen (Zahlen, bei denen num % 2 == 0 wahr ist) zum Gesamtwert. In der Liste numbers sind die geraden Zahlen 2 und 4, deren Summe 6 ist."
explanationWrong:
  - "10 wäre die Summe aller Zahlen in der Liste, nicht nur der geraden."
  - "4 wäre nicht korrekt, da die Summe der geraden Zahlen 2 + 4 = 6 ist."
  - "2 wäre nicht korrekt, da es zwei gerade Zahlen in der Liste gibt, deren Summe 6 ist."
---
### Frage 6: Was ist die Ausgabe des folgenden Codes?
```python
numbers = [1, 2, 3, 4]
total = 0
for num in numbers:
    if num % 2 == 0:
        total += num
print(total)
```
- [ ] 10
- [x] 6
- [ ] 4
- [ ] 2

---
topic: "Datentypen"
subtopic: "String-Methoden"
level: "easy"
explanation: "Die strip()-Methode entfernt führende und nachfolgende Leerzeichen (einschließlich Leerzeichen, Tabulatoren und Zeilenumbrüche) aus einem String, nicht jedoch Leerzeichen zwischen Wörtern."
explanationWrong:
  - "strip() entfernt nicht alle Leerzeichen im String, sondern nur die führenden und nachfolgenden."
  - "strip() entfernt keine Leerzeichen zwischen Wörtern."
  - "strip() kapitalisiert keine Buchstaben."
---
### Frage 7: Was bewirkt die `strip()`-Methode, wenn sie auf einen String angewendet wird?
- [ ] Sie entfernt alle Leerzeichen aus dem String
- [x] Sie entfernt führende und nachfolgende Leerzeichen
- [ ] Sie entfernt alle Leerzeichen zwischen Wörtern
- [ ] Sie macht den ersten Buchstaben jedes Wortes groß

---
topic: "Schleifen"
subtopic: "For-Schleifen"
level: "medium"
explanation: "Die Schleife durchläuft die Werte 0, 1 und 2 (range(3)). In jeder Iteration wird x mit 2 multipliziert. Beginnend mit x = 1, wird x zu 2, dann zu 4 und schließlich zu 8."
explanationWrong:
  - "3 würde bedeuten, dass x um 1 erhöht wird (1+1+1), nicht mit 2 multipliziert."
  - "6 wäre 1*2*3, was nicht der Operationsreihenfolge in der Schleife entspricht."
  - "9 wäre 3^2, was nicht der Operation in der Schleife entspricht."
---
### Frage 8: Welchen Wert hat `x` nach der Ausführung des folgenden Codes?
```python
x = 1
for i in range(3):
    x *= 2
```
- [ ] 3
- [ ] 6
- [x] 8
- [ ] 9

---
topic: "Datenstrukturen"
subtopic: "Dictionaries"
level: "medium"
explanation: "In Python müssen Dictionary-Schlüssel unveränderliche (immutable) Objekte sein, wie Strings, Zahlen oder Tupel. Veränderliche (mutable) Objekte wie Listen können nicht als Schlüssel verwendet werden, da sich ihr Hash-Wert ändern kann."
explanationWrong:
  - "Dictionary-Schlüssel können beliebige unveränderliche Datentypen sein, nicht nur Strings."
  - "Seit Python 3.7 bewahren Dictionaries die Einfügereihenfolge, aber dies gilt nicht für alle Python-Versionen."
  - "Dictionaries können andere Dictionaries als Werte enthalten."
---
### Frage 9: Welche der folgenden Aussagen über Python-Dictionaries ist WAHR?
- [ ] Dictionary-Schlüssel müssen Strings sein
- [ ] Dictionaries bewahren die Reihenfolge der Elemente, wie sie hinzugefügt wurden (in allen Python-Versionen)
- [x] Dictionary-Schlüssel müssen unveränderliche Objekte sein
- [ ] Dictionaries können keine anderen Dictionaries als Werte enthalten

---
topic: "Funktionen"
subtopic: "Parameterübergabe"
level: "medium"
explanation: "In Python werden Listen als Referenz übergeben. Wenn die Funktion modify() die Methode lst.append(4) aufruft, wird das Element direkt zur Originalliste numbers hinzugefügt. Daher wird [1, 2, 3, 4] ausgegeben."
explanationWrong:
  - "Die Originalliste wird durch den Aufruf von append() in der Funktion verändert."
  - "append() fügt Elemente am Ende an, nicht am Anfang."
  - "Die Operation ist gültig und verursacht keinen Fehler."
---
### Frage 10: Was ist die Ausgabe des folgenden Codes?
```python
def modify(lst):
    lst.append(4)
    
numbers = [1, 2, 3]
modify(numbers)
print(numbers)
```
- [ ] [1, 2, 3]
- [x] [1, 2, 3, 4]
- [ ] [4, 1, 2, 3]
- [ ] Ein Fehler wird ausgegeben

---
topic: "Datentypen"
subtopic: "String-Methoden"
level: "easy"
explanation: "Die join()-Methode verbindet eine Sequenz von Strings mit dem String, auf dem sie aufgerufen wird, als Trennzeichen. Hier werden die Strings 'apple', 'banana' und 'cherry' mit einem Komma und einem Leerzeichen (', ') verbunden."
explanationWrong:
  - "join() gibt einen String zurück, nicht eine Liste."
  - "join() gibt einen einzelnen String zurück, nicht mehrere separate Strings."
  - "join() verwendet das angegebene Trennzeichen zwischen den Elementen, hier ', '."
---
### Frage 11: Was ist das Ergebnis des folgenden Ausdrucks?
```python
', '.join(['apple', 'banana', 'cherry'])
```
- [ ] ['apple, banana, cherry']
- [x] 'apple, banana, cherry'
- [ ] 'apple', 'banana', 'cherry'
- [ ] 'apple,banana,cherry'

---
topic: "Funktionen"
subtopic: "Eingebaute Funktionen"
level: "easy"
explanation: "Die min()-Funktion findet den kleinsten Wert in einer Sequenz. Sie vergleicht die Elemente und gibt das kleinste zurück."
explanationWrong:
  - "smallest() ist keine eingebaute Python-Funktion."
  - "lowest() ist keine eingebaute Python-Funktion."
  - "minimum() ist keine eingebaute Python-Funktion."
---
### Frage 12: Welche Funktion wird verwendet, um den Minimalwert in einer Sequenz zu finden?
- [ ] `smallest()`
- [x] `min()`
- [ ] `lowest()`
- [ ] `minimum()`

---
topic: "Datentypen"
subtopic: "Boolesche Werte"
level: "easy"
explanation: "In Python werden leere Sammlungen ([], ''), Null (0) und None als False bewertet, wenn sie in einem booleschen Kontext verwendet werden. Daher gibt bool([]), bool(''), bool(0) und bool(None) alle False zurück."
explanationWrong:
  - "Leere Sammlungen, 0 und None werden in Python alle als False bewertet."
  - "Die bool()-Funktion konvertiert einen Wert in seinen entsprechenden booleschen Wert."
---
### Frage 13: Was ist die Ausgabe des folgenden Codes?
```python
print(bool([]), bool(""), bool(0), bool(None))
```
- [ ] True True True True
- [x] False False False False
- [ ] False True False True
- [ ] True False True False

---
topic: "Datenstrukturen"
subtopic: "Dictionary-Methoden"
level: "medium"
explanation: "Die get()-Methode gibt den Wert für einen Schlüssel zurück oder einen Standardwert, wenn der Schlüssel nicht existiert. Hier wird data['c'] auf die Summe von data.get('a', 0) (1) und data.get('b', 0) (2) gesetzt, was 3 ergibt."
explanationWrong:
  - "data.get('a', 0) gibt 1 zurück, nicht 0, da 'a' existiert."
  - "data.get('b', 0) gibt 2 zurück, nicht 0, da 'b' existiert."
  - "Die Summe von 1 und 2 ist 3, nicht 2."
---
### Frage 14: Was gibt der folgende Code aus?
```python
data = {'a': 1, 'b': 2}
data['c'] = data.get('a', 0) + data.get('b', 0)
print(data['c'])
```
- [ ] 0
- [ ] 1
- [ ] 2
- [x] 3

---
topic: "Datentypen"
subtopic: "String-Methoden"
level: "easy"
explanation: "Die title()-Methode konvertiert einen String in die 'Title Case', bei der der erste Buchstabe jedes Wortes großgeschrieben wird."
explanationWrong:
  - "upper() konvertiert den gesamten String in Großbuchstaben."
  - "capital() ist keine standardmäßige String-Methode in Python."
  - "capitalize() macht nur den ersten Buchstaben des gesamten Strings groß, nicht jeden Wortanfang."
---
### Frage 15: Was ist die korrekte Methode, um einen String in Title Case zu konvertieren (erster Buchstabe jedes Wortes groß)?
- [ ] `str.upper()`
- [ ] `str.capital()`
- [x] `str.title()`
- [ ] `str.capitalize()`

---
topic: "Funktionen"
subtopic: "Rekursion"
level: "medium"
explanation: "Die Funktion factorial() berechnet rekursiv die Fakultät einer Zahl. Die Fakultät von 4 (4!) ist 4 * 3 * 2 * 1 = 24."
explanationWrong:
  - "3! = 6, aber hier wird 4! berechnet, was 24 ergibt."
  - "4^3 = 64, was nicht dem Fakultätswert entspricht."
  - "Die Fakultät von 4 ist nicht 4."
---
### Frage 16: Was ist die Ausgabe des folgenden Codes?
```python
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n-1)
        
print(factorial(4))
```
- [ ] 12
- [x] 24
- [ ] 64
- [ ] 4

---
topic: "Print_Input"
subtopic: "Dateioperationen"
level: "easy"
explanation: "In Python wird eine Datei mit der open()-Funktion geöffnet. Der erste Parameter ist der Dateiname und der zweite Parameter gibt den Modus an, wobei 'r' für Lesemodus steht."
explanationWrong:
  - "Der Modus sollte als 'r' angegeben werden, nicht als 'read'."
  - "read() ist keine korrekte Funktion zum Öffnen einer Datei."
  - "file.open() ist keine korrekte Syntax zum Öffnen einer Datei."
---
### Frage 17: Welche der folgenden Optionen ist die korrekte Methode, um eine Datei namens "data.txt" zum Lesen in Python zu öffnen?
- [x] `f = open("data.txt", "r")`
- [ ] `f = open("data.txt", "read")`
- [ ] `f = read("data.txt")`
- [ ] `f = file.open("data.txt")`

---
topic: "Grundlagen"
subtopic: "Ausnahmebehandlung"
level: "medium"
explanation: "In Python wird der finally-Block immer ausgeführt, unabhängig davon, ob eine Ausnahme auftritt oder nicht. Auch wenn continue verwendet wird, wird der finally-Block vor dem Fortsetzen der Schleife ausgeführt. Daher ist die Ausgabe: 0 done done 2 done."
explanationWrong:
  - "Der finally-Block wird auch bei continue ausgeführt, daher ist das erste done nicht korrekt."
  - "Der finally-Block wird für jeden Schleifendurchlauf ausgeführt, nicht nur einmal am Ende."
  - "Der Code verursacht keinen Fehler."
---
### Frage 18: Was passiert, wenn der folgende Code ausgeführt wird?
```python
for i in range(3):
    try:
        if i == 1:
            continue
        print(i, end=" ")
    finally:
        print("done", end=" ")
```
- [ ] 0 1 2 done
- [ ] 0 done 2 done
- [x] 0 done done 2 done
- [ ] Ein Fehler tritt auf

---
topic: "Datenstrukturen"
subtopic: "Listen-Slicing"
level: "medium"
explanation: "Die Slicing-Notation numbers[1:-1] wählt Elemente vom Index 1 (inklusive) bis zum vorletzten Element (exklusive des letzten Elements) aus. In der Liste [1, 2, 3, 4, 5] sind das die Elemente mit den Indizes 1, 2 und 3, also [2, 3, 4]."
explanationWrong:
  - "[1, 2, 3, 4] würde alle Elemente außer dem letzten einschließen, was nicht korrekt ist."
  - "[2, 3, 4, 5] würde das erste Element ausschließen und das letzte einschließen, was nicht korrekt ist."
  - "[1, 5] würde nur das erste und letzte Element enthalten, was nicht korrekt ist."
---
### Frage 19: Was ist die Ausgabe des folgenden Codes?
```python
numbers = list(range(1, 6))
print(numbers[1:-1])
```
- [ ] [1, 2, 3, 4]
- [x] [2, 3, 4]
- [ ] [2, 3, 4, 5]
- [ ] [1, 5]

---
topic: "Datenstrukturen"
subtopic: "Dictionary-Iteration"
level: "easy"
explanation: "Die items()-Methode eines Dictionaries gibt Schlüssel-Wert-Paare zurück. In der Schleife wird nach einem Wert von 2 gesucht und der entsprechende Schlüssel ausgegeben. In diesem Fall ist 'b' der Schlüssel mit dem Wert 2."
explanationWrong:
  - "'a' hat den Wert 1, nicht 2."
  - "'c' hat den Wert 3, nicht 2."
  - "Die Schleife findet den Schlüssel 'b' mit dem Wert 2 und gibt ihn aus."
---
### Frage 20: Was wird der folgende Code ausgeben?
```python
d = {"a": 1, "b": 2, "c": 3}
for k, v in d.items():
    if v == 2:
        print(k)
```
- [ ] a
- [x] b
- [ ] c
- [ ] None

---
topic: "Schleifen"
subtopic: "Enumeration"
level: "medium"
explanation: "Die enumerate()-Funktion fügt zu jedem Element eines Iterables einen Zähler hinzu und gibt Paare (Index, Element) zurück. Sie ist nützlich, wenn man sowohl auf die Elemente als auch auf ihre Position zugreifen möchte."
explanationWrong:
  - "enumerate() gibt Paare von Index und Wert zurück, nicht nur eine Liste von Indizes."
  - "enumerate() zählt nicht nur, wie viele Elemente im Iterable sind."
  - "enumerate() gibt kein boolesches Ergebnis zurück."
---
### Frage 21: Was gibt die `enumerate()`-Funktion in Python zurück?
- [ ] Eine Liste von Indizes für das Iterable
- [ ] Eine Zählung, wie viele Elemente im Iterable sind
- [x] Einen Iterator, der Tupel mit Indizes und Werten erzeugt
- [ ] Einen booleschen Wert, der angibt, ob alle Elemente aufzählbar sind

---
topic: "Datenstrukturen"
subtopic: "Referenzen"
level: "medium"
explanation: "In Python werden Objekte wie Listen durch Referenzen zugänglich gemacht. Bei der Zuweisung b = a verweisen beide Variablen auf dasselbe Listenobjekt. Daher führt die Änderung von a[0] dazu, dass sich auch b ändert, da es sich um dasselbe Objekt handelt."
explanationWrong:
  - "b ist eine Referenz auf dieselbe Liste wie a, daher ändert sich b, wenn a geändert wird."
  - "b erhält nicht eine Kopie der Liste, sondern verweist auf dieselbe Liste."
  - "Die Operation ist gültig und verursacht keinen Fehler."
---
### Frage 22: Was ist die Ausgabe des folgenden Codes?
```python
a = [1, 2, 3]
b = a
a[0] = 5
print(b)
```
- [ ] [1, 2, 3]
- [x] [5, 2, 3]
- [ ] [1, 2, 3, 5]
- [ ] Error

---
topic: "Datenstrukturen"
subtopic: "Dictionary-Erstellung"
level: "medium"
explanation: "In Python gibt es mehrere Möglichkeiten, ein Dictionary zu erstellen. Man kann es mit geschweiften Klammern und Schlüssel-Wert-Paaren definieren, den dict()-Konstruktor mit benannten Argumenten verwenden oder dict() mit einer Liste von Tupeln aufrufen. Alle drei Methoden sind gültig."
explanationWrong:
  - "dict(a=1, b=2, c=3) ist eine gültige Methode zur Erstellung eines Dictionaries."
  - "{'a': 1, 'b': 2, 'c': 3} ist eine gültige Methode zur Erstellung eines Dictionaries."
  - "dict([('a', 1), ('b', 2), ('c', 3)]) ist eine gültige Methode zur Erstellung eines Dictionaries."
---
### Frage 23: Welche der folgenden Optionen ist eine gültige Methode, um ein Dictionary in Python zu erstellen?
- [ ] `dict(a=1, b=2, c=3)`
- [ ] `{"a": 1, "b": 2, "c": 3}`
- [ ] `dict([("a", 1), ("b", 2), ("c", 3)])`
- [x] Alle oben genannten

---
topic: "Datentypen"
subtopic: "String-Methoden"
level: "easy"
explanation: "Die split()-Methode teilt einen String an Leerzeichen (standardmäßig) und gibt eine Liste der Teile zurück. Der String 'Python is fun' hat drei Wörter, also gibt len(words) den Wert 3 zurück."
explanationWrong:
  - "Der String hat 13 Zeichen, aber wir zählen die Anzahl der Wörter nach dem Aufteilen."
  - "11 ist nicht die Anzahl der Wörter im String."
  - "2 ist nicht die Anzahl der Wörter im String."
---
### Frage 24: Was ist die Ausgabe des folgenden Codes?
```python
text = "Python is fun"
words = text.split()
print(len(words))
```
- [ ] 10
- [ ] 11
- [x] 3
- [ ] 2

---
topic: "Datenstrukturen"
subtopic: "List Comprehension"
level: "medium"
explanation: "Diese List Comprehension erzeugt eine Liste der doppelten Werte (x*2) für jedes x im Bereich von 1 bis 4, aber nur wenn x gerade ist (x % 2 == 0). Im Bereich von 1 bis 4 sind die geraden Zahlen 2 und 4, deren Verdopplung 4 und 8 ergibt."
explanationWrong:
  - "[2, 4, 6, 8] würde entstehen, wenn die Bedingung nicht angewendet würde."
  - "[2, 6] würde entstehen, wenn die Zahlen selbst zurückgegeben würden, nicht ihre Verdopplung."
  - "[4] wäre nicht korrekt, da es zwei gerade Zahlen im Bereich gibt."
---
### Frage 25: Was ist das Ergebnis des folgenden Ausdrucks?
```python
[x*2 for x in range(1, 5) if x % 2 == 0]
```
- [ ] [2, 4, 6, 8]
- [x] [4, 8]
- [ ] [2, 6]
- [ ] [4]

---
topic: "Funktionen"
subtopic: "Standardparameter"
level: "easy"
explanation: "Die Funktion greet() hat zwei Parameter: name und greeting mit dem Standardwert 'Hello'. Wenn nur ein Argument übergeben wird, wird der Standardwert für greeting verwendet. Daher gibt greet('John') den String 'Hello, John!' zurück."
explanationWrong:
  - "Die Reihenfolge der Parameter wird in der Rückgabeanweisung festgelegt, nicht in der Funktionssignatur."
  - "Da ein Standardwert für greeting definiert ist, tritt kein Fehler auf, wenn nur ein Argument übergeben wird."
  - "Der zweite Parameter hat einen Standardwert, daher wird 'Hello' verwendet, wenn kein Wert angegeben wird."
---
### Frage 26: Was passiert, wenn der folgende Code ausgeführt wird?
```python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("John"))
```
- [ ] Die Funktion gibt "John, Hello!" zurück
- [x] Die Funktion gibt "Hello, John!" zurück
- [ ] Es tritt ein Fehler auf, weil der zweite Parameter fehlt
- [ ] Die Funktion gibt "Hello, !" zurück

---
topic: "Schleifen"
subtopic: "Continue-Statement"
level: "medium"
explanation: "Die Schleife durchläuft die Zahlen 1 bis 4. Bei geraden Zahlen (i % 2 == 0) wird die continue-Anweisung ausgeführt, wodurch der Rest der Schleife übersprungen wird. Daher werden nur die ungeraden Zahlen (1 und 3) zu total addiert, was 4 ergibt."
explanationWrong:
  - "10 wäre die Summe aller Zahlen von 1 bis 4."
  - "6 wäre die Summe der geraden Zahlen von 1 bis 4."
  - "0 wäre das Ergebnis, wenn keine Zahlen addiert würden."
---
### Frage 27: Was ist die Ausgabe des folgenden Codes?
```python
total = 0
for i in range(1, 5):
    if i % 2 == 0:
        continue
    total += i
print(total)
```
- [ ] 10
- [ ] 6
- [x] 4
- [ ] 0

---
topic: "Datentypen"
subtopic: "String-Methoden"
level: "easy"
explanation: "Die isalpha()-Methode prüft, ob ein String nur aus alphabetischen Zeichen besteht (keine Zahlen, Leerzeichen oder Sonderzeichen)."
explanationWrong:
  - "alpha() ist keine Standardmethode für Strings in Python."
  - "isalnum() prüft, ob ein String nur aus alphanumerischen Zeichen besteht (Buchstaben und Zahlen)."
  - "contains_alpha() ist keine Standardmethode für Strings in Python."
---
### Frage 28: Welche Methode würden Sie verwenden, um zu prüfen, ob ein String nur alphabetische Zeichen enthält?
- [ ] `str.alpha()`
- [x] `str.isalpha()`
- [ ] `str.isalnum()`
- [ ] `str.contains_alpha()`

---
topic: "Datenstrukturen"
subtopic: "Listen-Methoden"
level: "medium"
explanation: "Die pop()-Methode entfernt und gibt das Element an dem angegebenen Index zurück. Bei numbers.pop(2) wird das Element mit Index 2 (also das dritte Element, 3) entfernt und zurückgegeben. Die Liste wird zu [1, 2, 4, 5]."
explanationWrong:
  - "pop(2) entfernt das Element an Index 2 (das dritte Element), nicht das mit dem Wert 2."
  - "Das letzte Element wird entfernt, wenn kein Index angegeben wird, nicht wenn pop(2) aufgerufen wird."
  - "pop() gibt das entfernte Element zurück und entfernt es aus der Liste."
---
### Frage 29: Was wird die Ausgabe des folgenden Codes sein?
```python
numbers = [1, 2, 3, 4, 5]
result = numbers.pop(2)
print(result, numbers)
```
- [ ] 2 [1, 3, 4, 5]
- [x] 3 [1, 2, 4, 5]
- [ ] 3 [1, 2, 3, 4]
- [ ] 5 [1, 2, 3, 4]

---
topic: "Funktionen"
subtopic: "Parameterübergabe"
level: "medium"
explanation: "Obwohl Python Objekte als Referenz übergibt, führt die Zuweisung my_list = [10, 20, 30] innerhalb der Funktion change_list() dazu, dass my_list auf ein neues Listenobjekt verweist, das nur lokal zur Funktion ist. Die ursprüngliche Liste original bleibt unverändert."
explanationWrong:
  - "Die Originalliste wird durch die Neuzuweisung innerhalb der Funktion nicht verändert."
  - "Die Funktion ändert nur die lokale Referenz, nicht die Liste außerhalb der Funktion."
  - "Es werden keine neuen Elemente zur Originalliste hinzugefügt."
---
### Frage 30: Was ist die Ausgabe des folgenden Codes?
```python
def change_list(my_list):
    my_list = [10, 20, 30]
    
original = [1, 2, 3]
change_list(original)
print(original)
```
- [x] [1, 2, 3]
- [ ] [10, 20, 30]
- [ ] [1, 2, 3, 10, 20, 30]
- [ ] []

---
topic: "Datenstrukturen"
subtopic: "Sets"
level: "medium"
explanation: "Der &-Operator führt eine Schnittmenge (Intersection) zweier Sets aus. Er gibt ein neues Set mit den Elementen zurück, die in beiden Sets vorkommen. Die gemeinsamen Buchstaben in 'Hello' und 'World' sind 'o' und 'l'."
explanationWrong:
  - "Die erste Option wäre eine Vereinigung (Union) der Sets, nicht eine Schnittmenge."
  - "Die zweite Option berücksichtigt nicht die Groß-/Kleinschreibung korrekt."
  - "Die vierte Option wäre ein leeres Set, was nicht korrekt ist, da es gemeinsame Buchstaben gibt."
---
### Frage 31: Was ist das Ergebnis des folgenden Ausdrucks?
```python
set('Hello') & set('World')
```
- [ ] {'H', 'e', 'l', 'o', 'W', 'r', 'd'}
- [ ] {'h', 'e', 'l', 'o', 'w', 'r', 'd'}
- [x] {'o', 'l'}
- [ ] set()

---
topic: "Funktionen"
subtopic: "Eingebaute Funktionen"
level: "medium"
explanation: "Die any()-Funktion gibt True zurück, wenn mindestens ein Element im Iterable als True ausgewertet wird. Sie gibt False zurück, wenn alle Elemente False sind oder das Iterable leer ist."
explanationWrong:
  - "all() gibt True zurück, wenn alle Elemente wahr sind, nicht any()."
  - "any() gibt einen booleschen Wert zurück, nicht das erste wahre Element."
  - "any() zählt nicht die Anzahl der wahren Elemente."
---
### Frage 32: Was gibt die `any()`-Funktion in Python zurück?
- [ ] True, wenn alle Elemente im Iterable wahr sind
- [x] True, wenn mindestens ein Element im Iterable wahr ist
- [ ] Das erste wahre Element im Iterable
- [ ] Die Anzahl der wahren Elemente im Iterable

---
topic: "Datentypen"
subtopic: "String-Methoden"
level: "medium"
explanation: "Die center()-Methode zentriert einen String in einem Feld mit der angegebenen Breite, indem links und rechts Füllzeichen hinzugefügt werden. Bei center(7, '*') wird der String 'abc' in einem Feld der Breite 7 zentriert, wobei links und rechts Sternchen eingefügt werden, was zu '**abc**' führt."
explanationWrong:
  - "'abc****' wäre das Ergebnis von ljust(7, '*'), nicht center()."
  - "'****abc' wäre das Ergebnis von rjust(7, '*'), nicht center()."
  - "'***abc***' hätte 9 Zeichen, nicht die angegebenen 7."
---
### Frage 33: Was ist die Ausgabe des folgenden Codes?
```python
print('abc'.center(7, '*'))
```
- [ ] abc****
- [ ] ****abc
- [x] **abc**
- [ ] ***abc***

---
topic: "Datenstrukturen"
subtopic: "Listen-Methoden"
level: "easy"
explanation: "Die pop()-Methode entfernt und gibt das letzte Element einer Liste zurück, wenn kein Index angegeben wird. Man kann auch einen Index angeben, um ein Element an einer bestimmten Position zu entfernen."
explanationWrong:
  - "remove() entfernt ein Element mit einem bestimmten Wert, gibt aber keinen Wert zurück."
  - "delete() ist keine Standardmethode für Listen in Python."
  - "discard() ist eine Methode für Sets, nicht für Listen."
---
### Frage 34: Welche der folgenden Methoden entfernt und gibt das letzte Element einer Liste zurück?
- [ ] `list.remove()`
- [ ] `list.delete()`
- [x] `list.pop()`
- [ ] `list.discard()`

---
topic: "Datenstrukturen"
subtopic: "Kopieren"
level: "medium"
explanation: "Die copy()-Methode erstellt eine flache Kopie einer Liste. Diese neue Liste enthält dieselben Elemente wie die ursprüngliche Liste, ist aber ein separates Objekt. Änderungen an der ursprünglichen Liste wirken sich nicht auf die Kopie aus."
explanationWrong:
  - "Da y eine Kopie von x ist, nicht eine Referenz, werden Änderungen an x nicht in y reflektiert."
  - "Die append()-Methode fügt Elemente am Ende hinzu, nicht am Anfang."
  - "y ist eine Kopie, keine leere Liste."
---
### Frage 35: Was ist die Ausgabe des folgenden Codes?
```python
x = [1, 2, 3]
y = x.copy()
x.append(4)
print(y)
```
- [ ] [1, 2, 3, 4]
- [x] [1, 2, 3]
- [ ] [4, 1, 2, 3]
- [ ] []

---
topic: "Funktionen"
subtopic: "Eingebaute Funktionen"
level: "medium"
explanation: "Die sorted()-Funktion gibt eine neue sortierte Liste zurück, ohne die ursprüngliche Sequenz zu verändern. Im Gegensatz dazu sortiert die sort()-Methode eine Liste in-place und gibt None zurück."
explanationWrong:
  - "sorted() ändert die ursprüngliche Sequenz nicht, sondern gibt eine neue Liste zurück."
  - "sorted() gibt eine Liste zurück, kein Tupel."
  - "sorted() gibt eine sortierte Liste zurück, nicht nur das größte Element."
---
### Frage 36: Was gibt die `sorted()`-Funktion zurück?
- [ ] Sie sortiert die ursprüngliche Sequenz und gibt None zurück
- [x] Sie gibt eine neue sortierte Liste zurück, ohne die ursprüngliche Sequenz zu verändern
- [ ] Sie gibt ein Tupel sortierter Elemente zurück
- [ ] Sie gibt das größte Element in der Sequenz zurück

---
topic: "Funktionen"
subtopic: "Standardparameter"
level: "medium"
explanation: "In Python werden Standardparameterwerte nur einmal bei der Funktionsdefinition ausgewertet. Bei der ersten Ausführung von func() werden die Standardwerte [] und {} verwendet. Bei der zweiten Ausführung werden die explizit übergebenen Werte [1, 2] und {'x': 1} verwendet."
explanationWrong:
  - "Die Standardparameterwerte werden korrekt angezeigt."
  - "Die übergebenen Argumente werden korrekt in der zweiten Ausführung angezeigt."
  - "Die Funktion erzeugt keinen Fehler."
---
### Frage 37: Was wird der folgende Code ausgeben?
```python
def func(a=[], b={}):
    print(f"a={a}, b={b}")
    
func()
func([1, 2], {"x": 1})
```
- [ ] a=None, b=None
     a=[1, 2], b={'x': 1}
- [x] a=[], b={}
     a=[1, 2], b={'x': 1}
- [ ] a=[], b={}
     a=[], b={}
- [ ] Error

---
topic: "Funktionen"
subtopic: "Variablenbereich"
level: "medium"
explanation: "In Python erzeugt die Zuweisung einer Variablen innerhalb einer Funktion standardmäßig eine lokale Variable. Die innere Funktion hat ihre eigene lokale Variable x mit dem Wert 2, während die äußere Funktion ihre eigene Variable x mit dem Wert 1 behält."
explanationWrong:
  - "Die Zuweisung in inner() erzeugt eine lokale Variable, die die äußere Variable nicht beeinflusst."
  - "Ohne das nonlocal-Schlüsselwort beeinflusst die Zuweisung in inner() die Variable in outer() nicht."
  - "Jede Funktion hat ihren eigenen Variablenbereich."
---
### Frage 38: Was ist die Ausgabe des folgenden Codes?
```python
def outer():
    x = 1
    def inner():
        x = 2
        print("inner:", x)
    inner()
    print("outer:", x)
    
outer()
```
- [ ] inner: 1
     outer: 2
- [x] inner: 2
     outer: 1
- [ ] inner: 2
     outer: 2
- [ ] inner: 1
     outer: 1

---
topic: "Schleifen"
subtopic: "Verschachtelte Schleifen"
level: "medium"
explanation: "Der Code verwendet zwei verschachtelte Schleifen, wobei i die äußere Schleife (0 bis 2) und j die innere Schleife (0 bis 1) durchläuft. Für jede Kombination wird ein '*' ausgegeben, wenn i gleich j ist, andernfalls ein '-'. Dies führt zu dem Muster *-*-*-."
explanationWrong:
  - "**---- würde entstehen, wenn die Bedingung immer wahr wäre für die ersten beiden Iterationen."
  - "Das Muster basiert auf dem Vergleich von i und j, nicht auf einer anderen Bedingung."
  - "------ würde entstehen, wenn die Bedingung nie wahr wäre."
---
### Frage 39: Was ist die Ausgabe des folgenden Codes?
```python
for i in range(3):
    for j in range(2):
        if i == j:
            print("*", end="")
        else:
            print("-", end="")
```
- [ ] **----
- [x] *-*-*-
- [ ] -*-*-*
- [ ] ------

---
topic: "Datentypen"
subtopic: "String-Methoden"
level: "easy"
explanation: "Die join()-Methode verbindet die Elemente einer Sequenz zu einem String, wobei der String, auf dem die Methode aufgerufen wird, als Trennzeichen verwendet wird. Hier werden die Wörter mit einem Bindestrich (-) verbunden."
explanationWrong:
  - "join() verwendet das angegebene Trennzeichen, nicht ein Komma und ein Leerzeichen."
  - "join() gibt einen String zurück, nicht eine Liste mit einem einzelnen String."
  - "join() verwendet das angegebene Trennzeichen, nicht einen Schrägstrich."
---
### Frage 40: Was wird der folgende Code ausgeben?
```python
words = ["apple", "banana", "cherry"]
print("-".join(words))
```
- [ ] apple, banana, cherry
- [ ] ["apple-banana-cherry"]
- [x] apple-banana-cherry
- [ ] apple/banana/cherry

---
topic: "Datenstrukturen"
subtopic: "Listen-Operationen"
level: "easy"
explanation: "Der +-Operator mit Listen führt eine Verkettung durch. Er erstellt eine neue Liste, die die Elemente beider Listen enthält. Bei a + b werden die Elemente von a und b zu einer neuen Liste [1, 2, 3, 4, 5, 6] zusammengefügt."
explanationWrong:
  - "[5, 7, 9] wäre das Ergebnis, wenn die entsprechenden Elemente addiert würden, was Python mit Listen nicht standardmäßig tut."
  - "[[1, 2, 3], [4, 5, 6]] wäre das Ergebnis, wenn eine Liste von Listen erstellt würde, nicht eine verkettete Liste."
  - "Der +-Operator ist für Listen definiert und verursacht keinen Fehler."
---
### Frage 41: Wenn `a = [1, 2, 3]` und `b = [4, 5, 6]`, was wird `a + b` zurückgeben?
- [ ] [5, 7, 9]
- [x] [1, 2, 3, 4, 5, 6]
- [ ] [[1, 2, 3], [4, 5, 6]]
- [ ] Error

---
topic: "Datenstrukturen"
subtopic: "Dictionary-Iteration"
level: "easy"
explanation: "Wenn man über ein Dictionary iteriert, ohne eine spezifische Methode wie items() aufzurufen, werden standardmäßig die Schlüssel durchlaufen. Daher gibt der Code die Schlüssel 'a' und 'b' aus."
explanationWrong:
  - "Um die Werte zu durchlaufen, müsste man my_dict.values() verwenden."
  - "Um Schlüssel-Wert-Paare zu durchlaufen, müsste man my_dict.items() verwenden."
  - "Die Ausgabe zeigt nur die Schlüssel, nicht die Schlüssel mit ihren Werten."
---
### Frage 42: Was ist die Ausgabe des folgenden Codes?
```python
my_dict = {"a": 1, "b": 2}
for item in my_dict:
    print(item, end=" ")
```
- [ ] 1 2
- [x] a b
- [ ] ("a", 1) ("b", 2)
- [ ] a:1 b:2

---
topic: "Datenstrukturen"
subtopic: "Listen-Slicing"
level: "medium"
explanation: "Die Slice-Zuweisung numbers[1:3] = [200, 300] ersetzt die Elemente mit den Indizes 1 und 2 durch 200 und 300. Die Liste wird daher zu [10, 200, 300, 40]."
explanationWrong:
  - "Die Slice-Zuweisung ersetzt die entsprechenden Elemente, sie behält nicht die ursprüngliche Liste bei."
  - "Die Slice-Zuweisung ersetzt die Elemente an den Positionen 1 und 2, nicht nur das erste Element."
  - "Die neuen Elemente werden direkt in die Liste eingefügt, nicht als verschachtelte Liste."
---
### Frage 43: Was ist die Ausgabe des folgenden Codes?
```python
numbers = [10, 20, 30, 40]
numbers[1:3] = [200, 300]
print(numbers)
```
- [ ] [10, 20, 30, 40]
- [ ] [10, 200, 300]
- [x] [10, 200, 300, 40]
- [ ] [10, [200, 300], 40]

---
topic: "Datentypen"
subtopic: "Typ-Konvertierung"
level: "easy"
explanation: "Der Ausdruck float('3.14') + int('2') konvertiert zuerst '3.14' in die Gleitkommazahl 3.14 und '2' in die Ganzzahl 2. Dann werden diese Werte addiert, was 5.14 ergibt."
explanationWrong:
  - "'3.142' wäre das Ergebnis einer Stringverkettung, nicht einer numerischen Addition."
  - "3.142 wäre nicht korrekt, da die Addition 3.14 + 2 = 5.14 ergibt."
  - "Die Typkonvertierungen sind gültig und verursachen keinen Fehler."
---
### Frage 44: Was ist das Ergebnis von `float("3.14") + int("2")`?
- [ ] "3.142"
- [ ] 3.142
- [x] 5.14
- [ ] Error

---
topic: "Funktionen"
subtopic: "Eingebaute Funktionen"
level: "medium"
explanation: "Die all()-Funktion gibt True zurück, wenn alle Elemente im Iterable als True ausgewertet werden. Wenn mindestens ein Element False ist oder das Iterable leer ist, gibt sie False zurück."
explanationWrong:
  - "any() gibt True zurück, wenn mindestens ein Element wahr ist, nicht all()."
  - "all() gibt einen booleschen Wert zurück, nicht die Anzahl der wahren Elemente."
  - "all() gibt einen booleschen Wert zurück, nicht das erste falsche Element."
---
### Frage 45: Was gibt die `all()`-Funktion in Python zurück?
- [ ] True, wenn irgendein Element im Iterable wahr ist
- [x] True, wenn alle Elemente im Iterable wahr sind
- [ ] Die Anzahl der wahren Elemente im Iterable
- [ ] Das erste falsche Element im Iterable

---
topic: "Datenstrukturen"
subtopic: "Tupel"
level: "medium"
explanation: "Ein Tupel ist eine unveränderliche (immutable) Sequenz, aber es kann veränderliche (mutable) Objekte wie Listen enthalten. Hier enthält das Tupel b eine Referenz auf die Liste a. Obwohl das Tupel selbst nicht geändert werden kann, kann die Liste innerhalb des Tupels geändert werden."
explanationWrong:
  - "Da b eine Referenz auf die Liste a enthält, spiegelt es Änderungen an a wider."
  - "b enthält eine Referenz auf die Liste, nicht eine Kopie."
  - "Das Tupel enthält eine einzige Liste als Element, nicht mehrere Elemente."
---
### Frage 46: Was ist die Ausgabe des folgenden Codes?
```python
a = [1, 2, 3]
b = (a,)
a.append(4)
print(b)
```
- [ ] ([1, 2, 3],)
- [x] ([1, 2, 3, 4],)
- [ ] ([1, 2, 3], 4)
- [ ] [1, 2, 3, 4]

---
topic: "Datenstrukturen"
subtopic: "Sortieren"
level: "medium"
explanation: "Die sorted()-Funktion sortiert Elemente standardmäßig in aufsteigender Reihenfolge. Bei Strings werden Großbuchstaben vor Kleinbuchstaben sortiert. Daher kommt 'Banana' vor 'apple' und 'cherry'."
explanationWrong:
  - "Die sorted()-Funktion ändert die Reihenfolge basierend auf dem ASCII-Wert der Zeichen."
  - "Um die Sortierung unabhängig von der Groß-/Kleinschreibung durchzuführen, müsste man ein Schlüsselargument verwenden."
  - "Die dritte Option ist korrekt, da Großbuchstaben im ASCII vor Kleinbuchstaben kommen."
---
### Frage 47: Was ist die Ausgabe des folgenden Codes?
```python
print(sorted(['apple', 'Banana', 'cherry']))
```
- [ ] ['apple', 'Banana', 'cherry']
- [ ] ['apple', 'banana', 'cherry']
- [x] ['Banana', 'apple', 'cherry']
- [ ] ['banana', 'apple', 'cherry']

---
topic: "Funktionen"
subtopic: "Parameter"
level: "medium"
explanation: "In der Funktion func(a, b, *args, **kwargs) sammelt *args zusätzliche Positionsargumente und **kwargs sammelt zusätzliche benannte Argumente. Bei func(1, 2, 3, 4, x=5, y=6) sind a=1 und b=2 die regulären Positionsargumente, args=(3, 4) enthält zwei zusätzliche Positionsargumente und kwargs={'x': 5, 'y': 6} enthält zwei benannte Argumente. Daher ist len(args) + len(kwargs) = 2 + 2 = 4."
explanationWrong:
  - "Es gibt 6 Argumente insgesamt, aber wir zählen nur die Länge von args und kwargs."
  - "args enthält 2 Elemente und kwargs enthält 2 Elemente, insgesamt 4."
  - "a und b werden nicht zu args oder kwargs gezählt."
---
### Frage 48: Was wird der folgende Code ausgeben?
```python
def func(a, b, *args, **kwargs):
    print(len(args) + len(kwargs))
    
func(1, 2, 3, 4, x=5, y=6)
```
- [ ] 6
- [ ] 2
- [x] 4
- [ ] 5

---
topic: "Schleifen"
subtopic: "Pass-Statement"
level: "easy"
explanation: "Die pass-Anweisung ist ein Platzhalter, der keine Aktion ausführt. Im Code wird pass für gerade Zahlen ausgeführt, aber es hat keine Auswirkung auf den Programmfluss. Für ungerade Zahlen wird i ausgegeben. Daher werden nur die ungeraden Zahlen 1 und 3 ausgegeben."
explanationWrong:
  - "0, 2, 4 sind gerade Zahlen, für die pass ausgeführt wird, sie werden nicht ausgegeben."
  - "Alle Zahlen würden ausgegeben werden, wenn die if-Bedingungen keine Auswirkung hätten."
  - "Es gibt eine Ausgabe der ungeraden Zahlen 1 und 3."
---
### Frage 49: Was ist die Ausgabe des folgenden Codes?
```python
for i in range(5):
    if i % 2 == 0:
        pass
    else:
        print(i, end=" ")
```
- [ ] 0 2 4
- [x] 1 3
- [ ] 0 1 2 3 4
- [ ] Keine Ausgabe

---
topic: "Datenstrukturen"
subtopic: "List Comprehension"
level: "medium"
explanation: "Diese List Comprehension verwendet einen bedingten Ausdruck, der 'hi' zurückgibt, wenn i gerade ist (i % 2 == 0), und 'hello', wenn i ungerade ist. Für i von 0 bis 3 ergibt das ['hi', 'hello', 'hi', 'hello']."
explanationWrong:
  - "Die List Comprehension verwendet einen bedingten Ausdruck, um zwischen 'hi' und 'hello' zu wechseln."
  - "Die Bedingung i % 2 == 0 ist wahr für gerade Zahlen (0, 2) und falsch für ungerade Zahlen (1, 3)."
  - "Die List Comprehension durchläuft alle Werte von 0 bis 3, nicht nur eine Teilmenge."
---
### Frage 50: Was ist die Ausgabe des folgenden Codes?
```python
words = ["hi" if i % 2 == 0 else "hello" for i in range(4)]
print(words)
```
- [ ] ["hi", "hi", "hi", "hi"]
- [ ] ["hello", "hello", "hello", "hello"]
- [x] ["hi", "hello", "hi", "hello"]
- [ ] ["hi, "hello"]