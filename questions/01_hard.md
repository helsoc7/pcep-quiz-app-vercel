---
# Python Quiz mit Metadaten (Teil 2)

---
topic: "Grundlagen"
subtopic: "String-Operationen"
level: "easy"
explanation: "In Python kann ein String mit einer Zahl multipliziert werden, um ihn entsprechend oft zu wiederholen. Der Operator + verkettet Strings miteinander. Daher erzeugt 3 * 'abc' + 'def' den String 'abcabcabcdef'."
explanationWrong:
  - "Eine Multiplikation wie 'abc' * 3 erzeugt eine Wiederholung, nicht 'abc3'."
  - "Die Formatierung fügt keinen Zahlenpräfix zu den Strings hinzu."
  - "Der Operator * wiederholt den String, er konvertiert ihn nicht in eine andere Form."
---
### Frage 1: Was ist das Ergebnis des folgenden Ausdrucks in Python?
```python
print(3 * 'abc' + 'def')
```
- [x] abcabcabcdef
- [ ] abc3def
- [ ] 3abcdef
- [ ] 3*abcdef

---
topic: "Grundlagen"
subtopic: "Syntax"
level: "easy"
explanation: "Die pass-Anweisung ist ein Platzhalter, der keine Aktion ausführt. Sie wird verwendet, wenn eine Anweisung syntaktisch erforderlich ist, aber keine Aktion ausgeführt werden soll, z.B. in leeren Funktionen oder als Platzhalter in Bedingungen und Schleifen."
explanationWrong:
  - "pass dient nicht zur Weitergabe von Werten zwischen Funktionen."
  - "Um die aktuelle Iteration in einer Schleife zu überspringen, wird continue verwendet, nicht pass."
  - "Um die Programmausführung zu beenden, wird exit() oder return verwendet, nicht pass."
---
### Frage 2: Was ist der Hauptzweck der `pass`-Anweisung in Python?
- [ ] Einen Wert von einer Funktion an eine andere weiterzugeben
- [ ] Die aktuelle Iteration in einer Schleife zu überspringen
- [x] Als Platzhalter zu dienen, wenn eine Anweisung syntaktisch erforderlich ist, aber keine Aktion benötigt wird
- [ ] Die Programmausführung zu beenden

---
topic: "Funktionen"
subtopic: "Parameterübergabe"
level: "easy"
explanation: "In Python werden Standardparameterwerte durch ein Gleichheitszeichen ohne Leerzeichen festgelegt: param=default_value. Dies legt einen Standardwert fest, der verwendet wird, wenn beim Funktionsaufruf kein Wert für diesen Parameter angegeben wird."
explanationWrong:
  - "Leerzeichen um das Gleichheitszeichen sind in Funktionsdefinitionen für Standardwerte nicht Standard."
  - "Der Doppelpunkt wird für Typ-Annotationen verwendet, nicht für Standardwerte."
  - "Der Pfeiloperator <- wird in Python nicht für Parameterdeklarationen verwendet."
---
### Frage 3: Welche der folgenden Optionen ist die korrekte Methode, um eine Funktion mit einem Standardparameterwert zu definieren?
- [ ] `def function(param = default_value):`
- [x] `def function(param=default_value):`
- [ ] `def function(param:default_value):`
- [ ] `def function(param<-default_value):`

---
topic: "Datenstrukturen"
subtopic: "Listen-Operationen"
level: "medium"
explanation: "Die append()-Methode fügt ein Element am Ende einer Liste hinzu. In diesem Fall wird [40, 50] als ein einzelnes Element zur Liste numbers hinzugefügt, wodurch die Länge der Liste auf 4 steigt."
explanationWrong:
  - "Die append()-Methode fügt ein einzelnes Element hinzu, nicht die einzelnen Elemente einer Liste."
  - "Die Liste hatte ursprünglich 3 Elemente und nach dem Aufruf von append() hat sie 4 Elemente."
  - "Der Aufruf von append() mit einer Liste als Argument ist gültig und führt zu keinem Fehler."
---
### Frage 4: Was wird die Ausgabe des folgenden Codes sein?
```python
numbers = [10, 20, 30]
numbers.append([40, 50])
print(len(numbers))
```
- [ ] 5
- [x] 4
- [ ] 3
- [ ] Ein Fehler wird ausgegeben

---
topic: "Grundlagen"
subtopic: "Variablenbereich"
level: "medium"
explanation: "In Python können Variablen im globalen Bereich von jeder Funktion aus zugegriffen werden. Um eine globale Variable aus einer Funktion heraus zu ändern, muss jedoch das Schlüsselwort 'global' verwendet werden."
explanationWrong:
  - "Ohne das Schlüsselwort 'global' kann man globale Variablen innerhalb einer Funktion lesen, aber nicht ändern."
  - "Globale Variablen sind aus Funktionen heraus zugänglich, wenn auch mit Einschränkungen bei der Modifizierung."
  - "Module haben separate globale Bereiche, aber sie können durch Import zugänglich gemacht werden."
---
### Frage 5: Welche Aussage beschreibt den globalen Bereich in Python korrekt?
- [ ] Auf Variablen im globalen Bereich kann von jeder Funktion aus zugegriffen und sie können ohne spezielle Schlüsselwörter geändert werden
- [ ] Auf Variablen im globalen Bereich kann nicht aus Funktionen zugegriffen werden
- [x] Auf Variablen im globalen Bereich kann von jeder Funktion aus zugegriffen werden, aber um sie zu ändern, wird das Schlüsselwort `global` benötigt
- [ ] Jedes Modul hat seinen eigenen separaten globalen Bereich, auf den andere Module nicht zugreifen können

---
topic: "Datentypen"
subtopic: "String-Methoden"
level: "easy"
explanation: "Die swapcase()-Methode ändert die Groß- und Kleinschreibung aller Zeichen in einem String. Großbuchstaben werden zu Kleinbuchstaben und umgekehrt."
explanationWrong:
  - "Die swapcase()-Methode tauscht nicht das erste und letzte Zeichen."
  - "Die swapcase()-Methode kehrt nicht den gesamten String um."
  - "Die swapcase()-Methode sortiert die Zeichen nicht alphabetisch."
---
### Frage 6: Was bewirkt der folgende Codeausschnitt?
```python
s = 'Python Programming'
result = s.swapcase()
```
- [ ] Tauscht das erste und letzte Zeichen des Strings aus
- [x] Ändert Kleinbuchstaben in Großbuchstaben und Großbuchstaben in Kleinbuchstaben
- [ ] Kehrt den gesamten String um
- [ ] Sortiert die Zeichen alphabetisch

---
topic: "Schleifen"
subtopic: "Schleifenkontrolle"
level: "medium"
explanation: "Das 'continue'-Statement überspringt die aktuelle Iteration (wenn i=5), während 'break' die Schleife vollständig beendet (wenn i=8). Daher werden nur die Zahlen 1, 2, 3, 4, 6 und 7 ausgegeben."
explanationWrong:
  - "Die Zahl 5 wird aufgrund des continue-Statements übersprungen."
  - "Die Zahlen nach 7 werden nicht ausgegeben, da die Schleife bei i=8 abbricht."
  - "continue überspringt die aktuelle Iteration, hält die Schleife aber nicht an."
---
### Frage 7: Was ist die Ausgabe des folgenden Codes?
```python
for i in range(1, 11):
    if i == 5:
        continue
    if i == 8:
        break
    print(i, end=' ')
```
- [ ] 1 2 3 4 5 6 7 8 9 10
- [ ] 1 2 3 4 6 7 8 9 10
- [x] 1 2 3 4 6 7
- [ ] 1 2 3 4 5 6 7

---
topic: "Datentypen"
subtopic: "Operationen"
level: "easy"
explanation: "Der Operator // in Python führt eine ganzzahlige Division durch, die immer ein Integer-Ergebnis liefert. Daher hat die Variable x nach der Zuweisung x = 3 // 2 den Wert 1 und den Typ int."
explanationWrong:
  - "Die Operation // liefert immer einen int, nicht einen float."
  - "Das Ergebnis von 3 // 2 ist 1, nicht True oder False, daher ist es kein bool."
  - "Eine komplexe Zahl hat einen Realteil und einen Imaginärteil, was hier nicht der Fall ist."
---
### Frage 8: Welchen Typ hat die Variable `x` nach der folgenden Zuweisung?
```python
x = 3 // 2
```
- [ ] float
- [x] int
- [ ] bool
- [ ] complex

---
topic: "Datentypen"
subtopic: "String-Methoden"
level: "easy"
explanation: "Die strip()-Methode entfernt führende und nachfolgende Leerzeichen (Leerzeichen, Tabs, Zeilenumbrüche) aus einem String."
explanationWrong:
  - "strip() entfernt nur führende und nachfolgende Leerzeichen, nicht alle Leerzeichen im String."
  - "strip() entfernt nicht speziell Satzzeichen, sondern standardmäßig Whitespace-Zeichen."
  - "strip() teilt den String nicht in eine Liste von Zeichen auf."
---
### Frage 9: Was bewirkt die `strip()`-Methode in Python, wenn sie auf einen String angewendet wird?
- [ ] Sie entfernt alle Leerzeichen aus dem String
- [ ] Sie entfernt alle Satzzeichen aus dem String
- [x] Sie entfernt führende und nachfolgende Leerzeichen aus dem String
- [ ] Sie teilt den String in eine Liste von Zeichen auf

---
topic: "Funktionen"
subtopic: "Parameterübergabe"
level: "medium"
explanation: "In Python werden Listen als Referenz übergeben. Der Aufruf von lst.append(4) modifiziert die Originalliste my_list. Die Zuweisung lst = [7, 8, 9] erstellt jedoch eine neue Liste und ändert die lokale Referenz, nicht die Originalliste."
explanationWrong:
  - "Die Originalliste wird durch append() geändert, daher ist my_list [1, 2, 3, 4]."
  - "Die Zuweisung lst = [7, 8, 9] ändert nur die lokale Referenz, nicht die Originalliste."
  - "new_list erhält den Rückgabewert der Funktion, also [7, 8, 9]."
---
### Frage 10: Was ist die Ausgabe des folgenden Codes?
```python
def modify_list(lst):
    lst.append(4)
    lst = [7, 8, 9]
    return lst

my_list = [1, 2, 3]
new_list = modify_list(my_list)
print(my_list, new_list)
```
- [ ] [1, 2, 3] [7, 8, 9]
- [x] [1, 2, 3, 4] [7, 8, 9]
- [ ] [1, 2, 3, 4] [1, 2, 3, 4]
- [ ] [7, 8, 9] [7, 8, 9]

---
topic: "Datentypen"
subtopic: "String-Slicing"
level: "medium"
explanation: "Die Slicing-Notation [1::2] wählt Zeichen vom Index 1 beginnend mit einem Schritt von 2 aus. Für 'python' bedeutet das die Zeichen an den Positionen 1, 3 und 5, also 'yhn'."
explanationWrong:
  - "'pto' wäre das Ergebnis von 'python'[0::2]."
  - "'yto' wäre eine falsche Kombination von Buchstaben, die nicht dem Slicing-Muster entspricht."
  - "'phn' wäre eine falsche Kombination von Buchstaben, die nicht dem Slicing-Muster entspricht."
---
### Frage 11: Was ist der Wert der Variable `result` nach der Ausführung des folgenden Codes?
```python
result = 'python'[1::2]
```
- [ ] pto
- [x] yhn
- [ ] yto
- [ ] phn

---
topic: "Datentypen"
subtopic: "Typ-Konvertierung"
level: "easy"
explanation: "Die int()-Funktion konvertiert eine Gleitkommazahl in eine Ganzzahl, indem sie den Dezimalteil verwirft (abschneidet), nicht rundet."
explanationWrong:
  - "round() rundet zur nächsten Ganzzahl, anstatt den Dezimalteil einfach zu verwerfen."
  - "floor() rundet ab zur nächsten Ganzzahl, ist aber kein eingebauter Typkonvertierer, sondern Teil des math-Moduls."
  - "truncate() ist keine standardmäßige Python-Funktion für die Typkonvertierung."
---
### Frage 12: Wie kann man eine Gleitkommazahl in Python in eine Ganzzahl umwandeln, wobei der Dezimalteil verworfen wird?
- [ ] `round(number)`
- [x] `int(number)`
- [ ] `floor(number)`
- [ ] `truncate(number)`

---
topic: "Datenstrukturen"
subtopic: "Dictionary-Methoden"
level: "medium"
explanation: "Die setdefault()-Methode fügt einen Schlüssel mit einem Standardwert zum Dictionary hinzu, falls der Schlüssel noch nicht existiert. In diesem Fall wird 'c' mit dem Wert 3 hinzugefügt."
explanationWrong:
  - "setdefault() fügt den Schlüssel mit dem angegebenen Wert hinzu, wenn er nicht existiert."
  - "Der Wert None würde nur verwendet werden, wenn kein Standardwert angegeben wurde."
  - "setdefault() verursacht keinen Fehler, wenn der Schlüssel nicht existiert."
---
### Frage 13: Was ist die Ausgabe des folgenden Codes?
```python
my_dict = {'a': 1, 'b': 2}
my_dict.setdefault('c', 3)
print(my_dict)
```
- [ ] {'a': 1, 'b': 2}
- [x] {'a': 1, 'b': 2, 'c': 3}
- [ ] {'a': 1, 'b': 2, 'c': None}
- [ ] Ein Fehler wird ausgegeben

---
topic: "Datentypen"
subtopic: "String-Eigenschaften"
level: "easy"
explanation: "Die Unveränderlichkeit (Immutability) von Strings bedeutet, dass nach der Erstellung eines Strings sein Inhalt nicht mehr geändert werden kann. Jede Operation, die einen String zu ändern scheint, erstellt tatsächlich einen neuen String."
explanationWrong:
  - "Unveränderlichkeit bedeutet nicht, dass Strings sich ständig ändern, sondern das Gegenteil."
  - "Unveränderlichkeit hat nichts mit der Verwendung von Strings in Schleifen zu tun."
  - "Unveränderlichkeit ist eine grundlegende Eigenschaft von Strings in Python und kann nicht deaktiviert werden."
---
### Frage 14: Welche der folgenden Aussagen ist korrekt bezüglich der Unveränderlichkeit (Immutability) von Strings in Python?
- [ ] String-Unveränderlichkeit bedeutet, dass sich Strings ständig ändern
- [ ] String-Unveränderlichkeit bedeutet, dass Strings nicht in Schleifen verwendet werden können
- [x] String-Unveränderlichkeit bedeutet, dass der Inhalt eines bestehenden Strings nicht geändert werden kann
- [ ] String-Unveränderlichkeit ist eine optionale Funktion, die deaktiviert werden kann

---
topic: "Funktionen"
subtopic: "Standardparameter"
level: "medium"
explanation: "In Python werden Standardparameterwerte nur einmal bei der Funktionsdefinition ausgewertet, nicht bei jedem Funktionsaufruf. Bei Verwendung einer veränderlichen Datenstruktur wie einer Liste als Standardwert wird diese zwischen Funktionsaufrufen geteilt."
explanationWrong:
  - "Da die leere Liste als Standardparameter nur einmal erstellt wird, wird sie bei jedem Aufruf wiederverwendet und modifiziert."
  - "Die Liste wird durch beide Aufrufe modifiziert, nicht nur beim ersten."
  - "Die Syntax ist korrekt und verursacht keinen Fehler."
---
### Frage 15: Was ist die Ausgabe des folgenden Codes?
```python
def func(x=[]):
    x.append(1)
    return x

print(func())
print(func())
```
- [ ] [1] [1]
- [x] [1] [1, 1]
- [ ] [] [1]
- [ ] Ein Syntaxfehler tritt auf

---
topic: "Datenstrukturen"
subtopic: "Dictionary-Comprehension"
level: "medium"
explanation: "Eine Dictionary Comprehension verwendet die Syntax {key: value for item in iterable}. In diesem Fall wird für jeden Wert x in range(5) ein Schlüssel-Wert-Paar x: x*x erstellt."
explanationWrong:
  - "Die erste Option verwendet ein Komma statt eines Doppelpunkts, was zu einem syntaktischen Fehler führt."
  - "Die dritte Option hat eine ungültige Syntax für Comprehensions."
  - "Die vierte Option ist eine ungültige Syntax für den dict()-Konstruktor."
---
### Frage 16: Welche der folgenden Optionen erstellt korrekt ein Dictionary mit einer Dictionary Comprehension?
- [ ] `{x, x*x for x in range(5)}`
- [x] `{x: x*x for x in range(5)}`
- [ ] `{for x in range(5): x, x*x}`
- [ ] `dict(x, x*x for x in range(5))`

---
topic: "Grundlagen"
subtopic: "Operatoren"
level: "medium"
explanation: "Der 'is'-Operator in Python prüft, ob zwei Variablen auf dasselbe Objekt im Speicher verweisen (Identität), während '==' prüft, ob zwei Variablen den gleichen Wert haben (Gleichheit)."
explanationWrong:
  - "Der 'is'-Operator prüft die Objektidentität, nicht die Wertgleichheit."
  - "Der 'is'-Operator ist kein Alias für den Zuweisungsoperator '='."
  - "Der 'is'-Operator prüft nicht die Existenz einer Variable im aktuellen Bereich."
---
### Frage 17: Welche der folgenden Aussagen ist RICHTIG bezüglich des `is`-Operators in Python?
- [ ] `is` prüft, ob zwei Variablen den gleichen Wert haben
- [x] `is` prüft, ob zwei Variablen auf dasselbe Objekt im Speicher verweisen
- [ ] `is` ist ein Alias für den Zuweisungsoperator `=`
- [ ] `is` prüft, ob eine Variable im aktuellen Bereich existiert

---
topic: "Datenstrukturen"
subtopic: "Dictionary-Zugriff"
level: "easy"
explanation: "Wenn versucht wird, auf einen Schlüssel zuzugreifen, der in einem Dictionary nicht existiert, wird ein KeyError ausgelöst, es sei denn, es werden spezielle Methoden wie get() verwendet."
explanationWrong:
  - "Python erstellt nicht automatisch einen neuen Schlüssel mit None-Wert."
  - "Python ignoriert den fehlgeschlagenen Zugriff nicht einfach."
  - "Ein KeyError wird ausgelöst, nicht ein Standardwert zurückgegeben."
---
### Frage 18: Was passiert in Python, wenn Sie versuchen, auf einen Schlüssel zuzugreifen, der in einem Dictionary nicht existiert?
- [ ] Das Dictionary erstellt automatisch den Schlüssel mit einem None-Wert
- [ ] Das Programm wird ohne Auswirkung fortgesetzt
- [x] Ein KeyError wird ausgelöst
- [ ] Das Dictionary gibt einen Standard-Leerwert zurück

---
topic: "Datentypen"
subtopic: "String-Methoden"
level: "medium"
explanation: "Die ljust()-Methode richtet einen String linksbündig aus und füllt die restliche Breite mit dem angegebenen Zeichen auf. Bei text.ljust(10, '*') wird 'Python' (6 Zeichen) linksbündig ausgerichtet und mit 4 Sternchen aufgefüllt, um eine Gesamtlänge von 10 zu erreichen."
explanationWrong:
  - "ljust() fügt Zeichen am Ende hinzu, nicht am Anfang."
  - "ljust() verteilt die Füllzeichen nicht symmetrisch um den String."
  - "ljust() fügt die richtige Anzahl von Füllzeichen hinzu, um die angegebene Gesamtlänge zu erreichen."
---
### Frage 19: Was gibt der folgende Code aus?
```python
text = "Python"
print(text.ljust(10, '*'))
```
- [ ] *****Python
- [x] Python****
- [ ] **Python**
- [ ] Python*****

---
topic: "Funktionen"
subtopic: "Eingebaute Funktionen"
level: "easy"
explanation: "Die sum()-Funktion addiert alle Elemente einer Sequenz. Die Liste numbers enthält die Zahlen 0, 1, 2, 3, 4, deren Summe 10 ist."
explanationWrong:
  - "Die Summe von 0 bis 4 ist 10, nicht 5."
  - "Die Summe von 0 bis 4 ist 10, nicht 4."
  - "Die Summe von 0 bis 4 ist 10, nicht 15 (was die Summe von 1 bis 5 wäre)."
---
### Frage 20: Was ist die Ausgabe des folgenden Codes?
```python
numbers = list(range(5))
print(sum(numbers))
```
- [ ] 5
- [ ] 4
- [x] 10
- [ ] 15

---
topic: "Datenstrukturen"
subtopic: "Listen-Operationen"
level: "easy"
explanation: "Die pop()-Methode entfernt und gibt das letzte Element einer Liste zurück, wenn kein Index angegeben wird. Alternativ kann ein Index angegeben werden, um ein bestimmtes Element zu entfernen und zurückzugeben."
explanationWrong:
  - "Python-Listen können verschiedene Datentypen in einer einzigen Liste mischen."
  - "Listen in Python haben keine feste Größe und können dynamisch wachsen oder schrumpfen."
  - "Im Gegensatz zu Strings sind Listen in Python veränderbar (mutable)."
---
### Frage 21: Welche Aussage über Python-Listenoperationen ist korrekt?
- [ ] Sie können verschiedene Datentypen nicht in einer einzigen Liste mischen
- [ ] Listen in Python haben eine feste Größe, sobald sie erstellt wurden
- [x] Die `pop()`-Methode entfernt und gibt ein Element aus einer Liste zurück
- [ ] Listen sind unveränderlich wie Strings

---
topic: "Funktionen"
subtopic: "Eingebaute Funktionen"
level: "medium"
explanation: "Die any()-Funktion gibt True zurück, wenn mindestens ein Element im Iterable als wahr ausgewertet wird. In der gegebenen Liste ist der Wert 5 wahr, daher ist das Ergebnis True."
explanationWrong:
  - "Da mindestens ein Element (5) als wahr ausgewertet wird, gibt any() True zurück."
  - "any() gibt nicht None zurück, wenn ein wahres Element gefunden wird."
  - "any() gibt einen booleschen Wert zurück, nicht das erste wahre Element."
---
### Frage 22: Was wird das Ergebnis des folgenden Ausdrucks sein?
```python
any([0, False, "", None, [], 5])
```
- [x] True
- [ ] False
- [ ] None
- [ ] 5

---
topic: "Datenstrukturen"
subtopic: "Sets"
level: "medium"
explanation: "In Python erstellt {} ein leeres Dictionary, nicht ein leeres Set. Um ein leeres Set zu erstellen, muss man set() verwenden oder eine andere gültige Methode wie {*()}."
explanationWrong:
  - "set() ist die Standardmethode zum Erstellen eines leeren Sets."
  - "{*()} ist ein gültiger, wenn auch ungewöhnlicher Weg, ein leeres Set zu erstellen."
  - "set([]) erstellt ein leeres Set aus einer leeren Liste."
---
### Frage 23: Welche der folgenden Optionen ist KEINE gültige Methode, um ein leeres Set in Python zu erstellen?
- [ ] `set()`
- [ ] `{*()}`
- [x] `{}`
- [ ] `set([])`

---
topic: "Funktionen"
subtopic: "Benannte Parameter"
level: "medium"
explanation: "Die Funktion greet() akzeptiert zwei Parameter: 'name' und 'message' mit dem Standardwert 'Hello'. Bei Aufruf mit dem benannten Parameter message='Hi' wird dieser Wert verwendet, was zu 'Hi, John!' führt."
explanationWrong:
  - "Der Standardwert 'Hello' wird durch den explizit angegebenen Wert 'Hi' überschrieben."
  - "Die Reihenfolge der Parameter in der Ausgabe wird durch die return-Anweisung bestimmt, nicht durch die Reihenfolge der Argumente."
  - "Die Verwendung benannter Parameter ist syntaktisch korrekt und führt nicht zu einem TypeError."
---
### Frage 24: Was ist die Ausgabe des folgenden Codes?
```python
def greet(name, message="Hello"):
    return f"{message}, {name}!"
    
print(greet("John", message="Hi"))
```
- [ ] Hello, John!
- [x] Hi, John!
- [ ] John, Hi!
- [ ] Ein TypeError wird ausgelöst

---
topic: "Funktionen"
subtopic: "Eingebaute Funktionen"
level: "medium"
explanation: "Die all()-Funktion gibt True zurück, wenn alle Elemente im Iterable als wahr ausgewertet werden. Ist dies nicht der Fall, gibt sie False zurück."
explanationWrong:
  - "all() gibt nur True zurück, wenn alle Elemente wahr sind, nicht wenn irgendein Element wahr ist."
  - "all() gibt keinen Wert aus dem Iterable zurück, sondern einen booleschen Wert."
  - "all() berechnet nicht die Summe der Elemente."
---
### Frage 25: Welche der folgenden Aussagen ist korrekt über Pythons `all()`-Funktion?
- [ ] `all()` gibt True zurück, wenn irgendein Element im Iterable wahr ist
- [x] `all()` gibt True zurück, wenn alle Elemente im Iterable wahr sind
- [ ] `all()` gibt das erste Element im Iterable zurück
- [ ] `all()` gibt die Summe aller Elemente im Iterable zurück

---
topic: "Datenstrukturen"
subtopic: "Referenzen"
level: "medium"
explanation: "In Python werden Listen als Referenzen behandelt. Wenn list1 an list2 zugewiesen wird, verweisen beide auf dasselbe Listenobjekt. Das Ändern eines Elements in list1 ändert daher auch list2."
explanationWrong:
  - "Da beide Variablen auf dasselbe Objekt verweisen, ändert die Modifikation von list1 auch list2."
  - "Es wird keine neue Liste erstellt, die beide Listen kombiniert."
  - "Die Operation ist syntaktisch korrekt und führt zu keinem Fehler."
---
### Frage 26: Was wird der folgende Code ausgeben?
```python
list1 = [1, 2, 3]
list2 = list1
list1[0] = 4
print(list2)
```
- [ ] [1, 2, 3]
- [x] [4, 2, 3]
- [ ] [4, 2, 3, 1, 2, 3]
- [ ] Ein Fehler wird ausgegeben
---
topic: "Funktionen"
subtopic: "Eingebaute Funktionen"
level: "easy"
explanation: "Die max()-Funktion findet den größten Wert in einer Sequenz. Sie wird verwendet, um den größten Wert in einer Liste, einem Tupel oder einer anderen Sequenz zu finden."
explanationWrong:
  - "largest() ist keine eingebaute Python-Funktion."
  - "big() ist keine eingebaute Python-Funktion."
  - "top() ist keine eingebaute Python-Funktion."
---
### Frage 27: Welche Funktion würden Sie verwenden, um den größten Wert in einer Sequenz zu finden?
- [ ] `largest()`
- [x] `max()`
- [ ] `big()`
- [ ] `top()`

---
topic: "Datenstrukturen"
subtopic: "Sortieren"
level: "easy"
explanation: "Die sorted()-Funktion erstellt eine neue sortierte Liste aus einem iterierbaren Objekt, ohne das Original zu verändern. Dies ist der korrekte Weg, um eine sortierte Kopie einer Liste zu erstellen."
explanationWrong:
  - "list.sort() sortiert die Liste in-place und gibt None zurück, nicht die sortierte Liste."
  - "list.sorted() ist keine gültige Methode in Python."
  - "sort(list) ist keine eingebaute Python-Funktion."
---
### Frage 28: Was ist die korrekte Methode, um eine neue sortierte Liste aus einer bestehenden Liste zu erstellen, ohne die Originalliste zu verändern?
- [ ] `new_list = list.sort()`
- [x] `new_list = sorted(list)`
- [ ] `new_list = list.sorted()`
- [ ] `new_list = sort(list)`

---
topic: "Datentypen"
subtopic: "String-Methoden"
level: "easy"
explanation: "Die find()-Methode gibt den Index des ersten Vorkommens eines Substring in einem String zurück. 'l' erscheint zuerst an Position 2 in 'hello' (Indizierung beginnt bei 0)."
explanationWrong:
  - "Der Index beginnt bei 0, nicht bei 1, daher ist 'h' an Position 0, 'e' an Position 1, und 'l' an Position 2."
  - "-1 würde zurückgegeben werden, wenn der Substring nicht gefunden wird."
  - "find() gibt einen einzelnen Index zurück, nicht eine Liste von Indizes."
---
### Frage 29: Was ist das Ergebnis des folgenden Ausdrucks?
```python
'hello'.find('l')
```
- [ ] 0
- [ ] -1
- [x] 2
- [ ] [2, 3]

---
topic: "Funktionen"
subtopic: "Verschachtelte Funktionen"
level: "medium"
explanation: "Das nonlocal-Schlüsselwort erlaubt einer verschachtelten Funktion, auf Variablen aus dem umschließenden Bereich zuzugreifen und sie zu ändern. In diesem Fall ändert inner_function den Wert von x auf 20, und outer_function gibt diesen geänderten Wert zurück."
explanationWrong:
  - "Durch das nonlocal-Schlüsselwort wird der Wert von x in der äußeren Funktion auf 20 geändert."
  - "Ohne das nonlocal-Schlüsselwort würde inner_function eine lokale Variable x erstellen, die die Variable der äußeren Funktion nicht beeinflusst."
  - "Das nonlocal-Schlüsselwort ist syntaktisch korrekt und führt nicht zu einem NameError."
---
### Frage 30: Was ist die Ausgabe des folgenden Codes?
```python
def outer_function():
    x = 10
    def inner_function():
        nonlocal x
        x = 20
    inner_function()
    return x

print(outer_function())
```
- [ ] 10
- [x] 20
- [ ] Ein NameError wird ausgelöst
- [ ] None

---
topic: "Datentypen"
subtopic: "String-Methoden"
level: "easy"
explanation: "Die count()-Methode zählt, wie oft ein bestimmter Substring in einem String vorkommt. In 'Python Programming' kommt der Buchstabe 'P' zweimal vor: am Anfang von 'Python' und am Anfang von 'Programming'."
explanationWrong:
  - "Es gibt 2 Vorkommen von 'P', nicht 0."
  - "Es gibt 2 Vorkommen von 'P', nicht 1."
  - "Die count()-Methode verursacht keinen ValueError für einen gültigen Substring."
---
### Frage 31: Was wird die Ausgabe des folgenden Codes sein?
```python
word = "Python Programming"
print(word.count('P'))
```
- [ ] 0
- [x] 2
- [ ] 1
- [ ] Ein ValueError wird ausgelöst

---
topic: "Funktionen"
subtopic: "Module"
level: "easy"
explanation: "Module in Python sind Dateien, die Python-Definitionen und -Anweisungen enthalten. Sie werden verwendet, um Code in wiederverwendbare Einheiten zu organisieren."
explanationWrong:
  - "Ein Modul ist ein größeres Konzept als eine Funktion und enthält typischerweise mehrere Funktionen, Klassen und Variablen."
  - "Module können in Python oder in C geschrieben sein (z.B. einige Standard-Module)."
  - "Ein Python-Programm kann mehrere Module importieren."
---
### Frage 32: Welche Aussage ist korrekt über Python-Module?
- [ ] Ein Modul ist dasselbe wie eine Funktion
- [ ] Module können nur in Python geschrieben werden
- [x] Module sind Dateien, die Python-Definitionen und -Anweisungen enthalten
- [ ] Jedes Python-Programm kann nur ein Modul importieren

---
topic: "Datenstrukturen"
subtopic: "Listen-Operationen"
level: "easy"
explanation: "Der 'in'-Operator prüft, ob ein Element in einer Sequenz vorhanden ist. Da 'apple' in der Liste fruits enthalten ist, gibt der Ausdruck 'apple' in fruits True zurück."
explanationWrong:
  - "Der 'in'-Operator gibt einen booleschen Wert zurück (True/False), nicht das Element selbst."
  - "Der 'in'-Operator gibt nicht den Index des Elements zurück."
---
### Frage 33: Was ist die Ausgabe des folgenden Codes?
```python
fruits = ['apple', 'banana', 'cherry']
print('apple' in fruits)
```
- [x] True
- [ ] False
- [ ] 'apple'
- [ ] 0

---
topic: "Funktionen"
subtopic: "Lambda-Funktionen"
level: "medium"
explanation: "Die filter()-Funktion wendet eine Funktion auf jedes Element eines Iterables an und gibt ein Iterator-Objekt mit den Elementen zurück, für die die Funktion True zurückgibt. Die Lambda-Funktion prüft, ob eine Zahl gerade ist (x % 2 == 0). Daher werden nur die geraden Zahlen (2, 4) in der Ergebnisliste sein."
explanationWrong:
  - "[1, 3, 5] wären die ungeraden Zahlen, nicht die geraden."
  - "Die Lambda-Funktion filtert gerade Zahlen, nicht ungerade."
  - "filter() gibt die Elemente zurück, die die Bedingung erfüllen, nicht eine Liste von Wahrheitswerten."
---
### Frage 34: Was ist der Wert der Variable `result` nach der Ausführung des folgenden Codes?
```python
numbers = [1, 2, 3, 4, 5]
result = list(filter(lambda x: x % 2 == 0, numbers))
```
- [ ] [1, 3, 5]
- [x] [2, 4]
- [ ] [True, False, True, False, True]
- [ ] []

---
topic: "Funktionen"
subtopic: "Eingebaute Funktionen"
level: "medium"
explanation: "Die zip()-Funktion kombiniert Elemente aus mehreren Iterables zu Tupeln. Sie wird verwendet, um parallele Iterationen über mehrere Sequenzen zu ermöglichen."
explanationWrong:
  - "zip() hat nichts mit dem Komprimieren von Dateien zu tun."
  - "zip() konvertiert nicht Zahlen in Strings."
  - "zip() erstellt keine Liste aufeinanderfolgender ganzer Zahlen."
---
### Frage 35: Was ist der Zweck der Python-Funktion `zip()`?
- [ ] Dateien und Ordner zu komprimieren
- [x] Elemente aus mehreren Iterables zu Tupeln zu kombinieren
- [ ] Zahlen in Strings zu konvertieren
- [ ] Eine Liste aufeinanderfolgender ganzer Zahlen zu erstellen

---
topic: "Funktionen"
subtopic: "Eingebaute Funktionen"
level: "easy"
explanation: "Die range()-Funktion erzeugt eine Sequenz aufeinanderfolgender Ganzzahlen. Sie wird häufig in for-Schleifen verwendet, um eine bestimmte Anzahl von Iterationen durchzuführen."
explanationWrong:
  - "consecutive() ist keine eingebaute Python-Funktion."
  - "sequence() ist keine eingebaute Python-Funktion."
  - "series() ist keine eingebaute Python-Funktion."
---
### Frage 36: Welche der folgenden ist eine eingebaute Python-Funktion, die eine Reihe aufeinanderfolgender Ganzzahlen zurückgibt?
- [ ] `consecutive()`
- [x] `range()`
- [ ] `sequence()`
- [ ] `series()`

---
topic: "Funktionen"
subtopic: "Verschachtelte Funktionen"
level: "medium"
explanation: "Der Ausdruck min(max(3, 4), max(8, 2)) wertet zuerst max(3, 4) = 4 und max(8, 2) = 8 aus, dann min(4, 8) = 4. Daher ist das Ergebnis 4."
explanationWrong:
  - "max(3, 4) = 4 und max(8, 2) = 8, dann min(4, 8) = 4, nicht 2."
  - "max(3, 4) = 4, nicht 3."
  - "min(4, 8) = 4, nicht 8."
---
### Frage 37: Was wird das Ergebnis des folgenden Ausdrucks sein?
```python
min(max(3, 4), max(8, 2))
```
- [ ] 2
- [ ] 3
- [x] 4
- [ ] 8

---
topic: "Funktionen"
subtopic: "Eingebaute Funktionen"
level: "easy"
explanation: "Die round()-Funktion rundet eine Zahl auf eine angegebene Anzahl von Dezimalstellen. round(7.6345, 2) rundet 7.6345 auf 2 Dezimalstellen, was 7.63 ergibt."
explanationWrong:
  - "round() benötigt keinen dritten Parameter für einfaches Runden."
  - "format() ist eine andere Funktion zur String-Formatierung, nicht zum mathematischen Runden."
  - "Der letzte Ansatz würde Rundungsfehler aufgrund der Gleitkomma-Arithmetik verursachen."
---
### Frage 38: Wie würden Sie die Zahl 7.6345 in Python auf zwei Dezimalstellen runden?
- [x] `round(7.6345, 2)`
- [ ] `round(7.6345, 2, 0)`
- [ ] `format(7.6345, '.2')`
- [ ] `int(7.6345 * 100) / 100`

---
topic: "Funktionen"
subtopic: "Pakete"
level: "medium"
explanation: "Ein Python-Paket ist ein Verzeichnis, das Python-Module und eine spezielle __init__.py-Datei enthält. Pakete dienen dazu, größere Codebibliotheken zu organisieren und Namensraum-Konflikte zu vermeiden."
explanationWrong:
  - "Ein Paket ist ein Verzeichnis mit Modulen, nicht nur ein komprimiertes Archiv."
  - "Eine einzelne Python-Datei mit mehreren Klassen ist nur ein Modul, kein Paket."
  - "Ein Paket ist mehr als nur eine Sammlung von Variablen."
---
### Frage 39: Welche der folgenden Beschreibungen trifft am besten auf ein Python-Paket zu?
- [ ] Ein komprimiertes Archiv von Python-Code
- [x] Ein Verzeichnis, das Python-Module und eine spezielle __init__.py-Datei enthält
- [ ] Eine einzelne Python-Datei, die mehrere Klassen definiert
- [ ] Eine Sammlung von Python-Variablen

---
topic: "Funktionen"
subtopic: "Funktionen mit Standardparametern"
level: "medium"
explanation: "Die Funktion calculate() führt je nach übergebenem 'operation'-Parameter eine Berechnung durch. Bei 'multiply' wird 5 * 3 = 15 berechnet und zurückgegeben."
explanationWrong:
  - "Bei operation='multiply' wird 5 * 3 = 15 berechnet, nicht 8 (was 5 + 3 wäre)."
  - "Bei operation='multiply' wird 5 * 3 = 15 berechnet, nicht 2 (was 5 / 3 gerundet wäre)."
  - "Es wird ein gültiger operation-Parameter übergeben, daher wird nicht None zurückgegeben."
---
### Frage 40: Was ist die Ausgabe des folgenden Codes?
```python
def calculate(a, b, operation='add'):
    if operation == 'add':
        return a + b
    elif operation == 'multiply':
        return a * b
    else:
        return None

print(calculate(5, 3, 'multiply'))
```
- [ ] 8
- [x] 15
- [ ] 2
- [ ] None

---
topic: "Funktionen"
subtopic: "Eingebaute Funktionen"
level: "medium"
explanation: "Die enumerate()-Funktion gibt ein Objekt zurück, das Paare (Index, Element) für jedes Element in einem Iterable erzeugt. Sie ist nützlich, wenn sowohl die Elemente als auch deren Positionen benötigt werden."
explanationWrong:
  - "enumerate() erstellt nicht einfach eine nummerierte Liste, sondern Paare von Indizes und Elementen."
  - "enumerate() prüft nicht, ob ein Container numerische Elemente enthält."
  - "enumerate() zählt nicht einfach die Gesamtzahl der Elemente, sondern gibt Paare (Index, Element) zurück."
---
### Frage 41: Was macht die `enumerate()`-Funktion in Python?
- [ ] Sie erstellt eine nummerierte Liste
- [x] Sie gibt ein Tupel zurück, das den Zähler und das Element aus einem Iterable enthält
- [ ] Sie prüft, ob ein Container numerische Elemente hat
- [ ] Sie zählt die Gesamtzahl der Elemente in einem Iterable

---
topic: "Datenstrukturen"
subtopic: "Dictionary-Methoden"
level: "medium"
explanation: "Die get()-Methode eines Dictionaries gibt den Wert für einen Schlüssel zurück, falls dieser existiert, andernfalls einen Standardwert (hier 3). Da 'c' nicht im Dictionary data existiert, wird der Standardwert 3 zurückgegeben."
explanationWrong:
  - "get() ändert das Dictionary nicht, es fügt keinen neuen Schlüssel hinzu."
  - "get() gibt den angegebenen Standardwert zurück, wenn der Schlüssel nicht existiert, nicht None (es sei denn, None ist der angegebene Standardwert)."
  - "get() löst keinen KeyError aus, wenn der Schlüssel nicht gefunden wird; das ist einer der Vorteile dieser Methode."
---
### Frage 42: Was ist die Ausgabe des folgenden Codes?
```python
data = {'a': 1, 'b': 2}
print(data.get('c', 3))
```
- [ ] {'a': 1, 'b': 2, 'c': 3}
- [ ] None
- [x] 3
- [ ] Ein KeyError wird ausgelöst

---
topic: "Datenstrukturen"
subtopic: "Listen-Funktionen"
level: "easy"
explanation: "Die len()-Funktion wird verwendet, um die Anzahl der Elemente in einer Liste oder einer anderen Sequenz zu zählen. Sie gibt die Größe oder Länge des Objekts zurück."
explanationWrong:
  - "size() ist keine eingebaute Python-Funktion für Listen."
  - "count() zählt das Vorkommen eines bestimmten Elements in einer Liste, nicht die Gesamtanzahl der Elemente."
  - "length() ist keine eingebaute Python-Funktion."
---
### Frage 43: Welche Methode können Sie verwenden, um die Anzahl der Elemente in einer Liste zu zählen?
- [ ] `size()`
- [x] `len()`
- [ ] `count()`
- [ ] `length()`

---
topic: "Datenstrukturen"
subtopic: "List Comprehension"
level: "medium"
explanation: "Eine List Comprehension in Python folgt der Syntax [ausdruck for element in iterable if bedingung]. Die korrekte Methode, um ungerade Zahlen zu filtern, ist [x for x in numbers if x % 2 != 0]."
explanationWrong:
  - "Die erste Option hat eine falsche Syntax für List Comprehensions."
  - "Die dritte Option hat eine falsche Syntax für List Comprehensions."
  - "Die vierte Option hat eine falsche Syntax für List Comprehensions."
---
### Frage 44: Was ist die korrekte Syntax für eine Python List Comprehension, die ungerade Zahlen aus einer Liste filtert?
- [ ] `[if x % 2 != 0 then x for x in numbers]`
- [x] `[x for x in numbers if x % 2 != 0]`
- [ ] `[x if x % 2 != 0 for x in numbers]`
- [ ] `[for x in numbers if x % 2 != 0: x]`

---
topic: "Datenstrukturen"
subtopic: "Listen-Methoden"
level: "medium"
explanation: "Die insert()-Methode fügt ein Element an einer bestimmten Position in eine Liste ein. Wenn der Index größer als die Länge der Liste ist, wird das Element einfach am Ende hinzugefügt, ohne Fehler oder zusätzliche None-Werte."
explanationWrong:
  - "insert() mit einem Index außerhalb des Bereichs löst keinen IndexError aus."
  - "Python fügt keine None-Werte ein, um Lücken zu füllen."
  - "Die Operation wird nicht ignoriert; das Element wird am Ende der Liste hinzugefügt."
---
### Frage 45: Was passiert, wenn der folgende Code ausgeführt wird?
```python
my_list = [1, 2, 3]
my_list.insert(10, 4)
print(my_list)
```
- [ ] Ein IndexError wird ausgelöst
- [ ] Die Zahl 4 wird an Index 10 eingefügt, und None-Werte füllen die Positionen 3-9
- [x] Die Zahl 4 wird am Ende der Liste hinzugefügt
- [ ] Die Operation wird ignoriert und die Liste bleibt unverändert

---
topic: "Funktionen"
subtopic: "Eingebaute Funktionen"
level: "medium"
explanation: "Die zip()-Funktion wird verwendet, um Elemente aus mehreren Iterables zu kombinieren. Um ein Dictionary aus zwei Listen zu erstellen, können Sie zip() mit dem dict()-Konstruktor verwenden: dict(zip(keys, values))."
explanationWrong:
  - "merge() ist keine eingebaute Python-Funktion für diesen Zweck."
  - "combine() ist keine eingebaute Python-Funktion für diesen Zweck."
  - "dict_from_lists() ist keine eingebaute Python-Funktion."
---
### Frage 46: Welche eingebaute Funktion würden Sie verwenden, um ein Dictionary aus zwei Listen zu erstellen, eine mit Schlüsseln und die andere mit Werten?
- [ ] `merge()`
- [ ] `combine()`
- [x] `zip()`
- [ ] `dict_from_lists()`

---
topic: "Schleifen"
subtopic: "Enumeration"
level: "medium"
explanation: "Die enumerate()-Funktion gibt Paare (Index, Element) zurück. Im Code wird nach dem Buchstaben 'h' gesucht, der in 'Python' an Index 3 steht. Wenn er gefunden wird, wird der Index ausgegeben."
explanationWrong:
  - "Der Code gibt nicht den Buchstaben 'P' aus, sondern den Index von 'h'."
  - "Der Code gibt nicht den Buchstaben 'h' aus, sondern seinen Index."
  - "Der Index von 'h' in 'Python' ist 3, nicht 4 (die Indizierung beginnt bei 0)."
---
### Frage 47: Was ist die Ausgabe des folgenden Codes?
```python
text = "Python"
for i, char in enumerate(text):
    if char == 'h':
        print(i)
```
- [ ] P
- [ ] h
- [x] 3
- [ ] 4

---
topic: "Funktionen"
subtopic: "Lambda-Funktionen"
level: "medium"
explanation: "Eine Lambda-Funktion in Python wird mit dem Schlüsselwort lambda definiert, gefolgt von Parametern, einem Doppelpunkt und dem Ausdruck. Die korrekte Syntax ist 'lambda x: x * 2'."
explanationWrong:
  - "Die erste Option fehlt der Doppelpunkt zwischen Parameter und Ausdruck."
  - "Die dritte Option verwendet def, nicht lambda."
  - "Die vierte Option hat eine falsche Syntax für Lambda-Funktionen."
---
### Frage 48: Welche der folgenden Aussagen definiert korrekt eine Lambda-Funktion in Python?
- [ ] `lambda x = x * 2`
- [x] `lambda x: x * 2`
- [ ] `def lambda(x): x * 2`
- [ ] `lambda: x = x * 2`

---
topic: "Funktionen"
subtopic: "Eingebaute Funktionen"
level: "medium"
explanation: "Die dir()-Funktion ohne Argumente gibt eine Liste von Namen im aktuellen lokalen Bereich zurück. Dies umfasst alle Namen von Variablen, Funktionen und Klassen, die im aktuellen Bereich definiert sind."
explanationWrong:
  - "Um den aktuellen Arbeitsverzeichnispfad zu erhalten, würde man os.getcwd() verwenden, nicht dir()."
  - "dir() gibt nicht speziell eine Liste aller Python-Schlüsselwörter zurück."
  - "dir() zeigt nicht die Python-Dokumentation an."
---
### Frage 49: Was macht die Python-Funktion `dir()`, wenn sie ohne Argumente aufgerufen wird?
- [ ] Gibt den Pfad des aktuellen Arbeitsverzeichnisses zurück
- [ ] Gibt eine Liste aller Python-Schlüsselwörter zurück
- [x] Gibt eine Liste von Namen im aktuellen lokalen Bereich zurück
- [ ] Zeigt die Python-Dokumentation an

---
topic: "Funktionen"
subtopic: "Rückgabewerte"
level: "easy"
explanation: "Wenn eine Funktion in Python keinen expliziten Rückgabewert hat (d.h. keine return-Anweisung oder eine leere return-Anweisung), gibt sie standardmäßig None zurück."
explanationWrong:
  - "Python gibt nicht standardmäßig 0 zurück, wenn kein Wert angegeben ist."
  - "Python gibt nicht standardmäßig False zurück, wenn kein Wert angegeben ist."
  - "Python gibt nicht standardmäßig einen leeren String zurück, wenn kein Wert angegeben ist."
---
### Frage 50: Wenn eine Funktion in Python keinen Wert explizit zurückgibt, was wird standardmäßig zurückgegeben?
- [ ] 0
- [ ] False
- [x] None
- [ ] Ein leerer String