---
# Python Datenstrukturen Quiz mit Metadaten

---
topic: "Datenstrukturen"
subtopic: "Listen vs. Tupel"
level: "easy"
explanation: "Der grundlegende Unterschied zwischen Listen und Tupeln in Python liegt in ihrer Veränderbarkeit. Listen sind veränderbar (mutable), was bedeutet, dass ihre Elemente nach der Erstellung hinzugefügt, entfernt oder geändert werden können. Tupel hingegen sind unveränderbar (immutable), ihre Elemente können nach der Erstellung nicht mehr geändert werden."
explanationWrong:
  - "Sowohl Listen als auch Tupel können beliebige Datentypen enthalten."
  - "Die Geschwindigkeit ist nicht der Hauptunterschied. Tupel sind in manchen Operationen minimal schneller aufgrund ihrer Unveränderbarkeit."
  - "Sowohl Listen als auch Tupel können theoretisch beliebig viele Elemente enthalten, begrenzt nur durch den verfügbaren Speicher."
---
### Frage 1: Was ist der Unterschied zwischen Listen und Tupeln in Python?
- [ ] Listen können nur Zahlen enthalten, Tupel können beliebige Datentypen enthalten
- [ ] Listen sind schneller als Tupel
- [x] Listen sind veränderbar (mutable), Tupel sind unveränderbar (immutable)
- [ ] Tupel können mehr Elemente enthalten als Listen

---
topic: "Datenstrukturen"
subtopic: "Listen erstellen"
level: "easy"
explanation: "In Python gibt es zwei Hauptmethoden, um eine leere Liste zu erstellen: die Literal-Syntax mit eckigen Klammern `[]` oder den Aufruf des Konstruktors `list()`. Beide Methoden erzeugen eine leere Liste."
explanationWrong:
  - "Geschweifte Klammern `{}` erzeugen ein leeres Dictionary, nicht eine Liste."
  - "Runde Klammern `()` erzeugen ein leeres Tupel, nicht eine Liste."
  - "Es gibt keine `new` Syntax in Python für die Erstellung von Objekten wie in manchen anderen Programmiersprachen."
---
### Frage 2: Wie erstellt man eine leere Liste in Python?
- [x] `my_list = []` oder `my_list = list()`
- [ ] `my_list = {}`
- [ ] `my_list = ()`
- [ ] `my_list = new List()`

---
topic: "Datenstrukturen"
subtopic: "Slicing"
level: "medium"
explanation: "Bei Slicing in Python mit der Syntax `liste[start:stop]` werden Elemente vom Index `start` bis (aber nicht einschließlich) Index `stop` ausgewählt. In diesem Fall bedeutet `numbers[1:4]`, dass die Elemente mit den Indizes 1, 2 und 3 ausgewählt werden, was den Werten 2, 3 und 4 entspricht."
explanationWrong:
  - "Das Endergebnis würde den Wert an Index 0 (also 1) enthalten, was bei `numbers[1:4]` nicht der Fall ist."
  - "Die Ausgabe würde den Wert an Index 4 (also 5) nicht enthalten, da bei `numbers[1:4]` nur bis (exklusive) Index 4 ausgewählt wird."
  - "Das Slice würde bei Index 1 beginnen, nicht bei Index 0."
---
### Frage 3: Was ist die Ausgabe des folgenden Codes?
```python
numbers = [1, 2, 3, 4, 5]
print(numbers[1:4])
```
- [ ] [1, 2, 3, 4]
- [x] [2, 3, 4]
- [ ] [1, 2, 3]
- [ ] [2, 3]

---
topic: "Datenstrukturen"
subtopic: "Listenmanipulation"
level: "easy"
explanation: "Die `append()`-Methode fügt ein Element am Ende einer Liste hinzu. Dies ist die standardmäßige Methode in Python, um ein einzelnes Element zu einer Liste hinzuzufügen."
explanationWrong:
  - "Es gibt keine `insert()`-Methode ohne Positionsangabe. Die korrekte Syntax wäre `list.insert(position, element)`."
  - "Es gibt keine `add()`-Methode für Listen in Python."
  - "Die `extend()`-Methode fügt die Elemente eines iterierbaren Objekts zur Liste hinzu, nicht ein einzelnes Element."
---
### Frage 4: Wie fügt man ein Element am Ende einer Liste hinzu?
- [ ] `list.insert(element)`
- [x] `list.append(element)`
- [ ] `list.add(element)`
- [ ] `list.extend(element)`

---
topic: "Datenstrukturen"
subtopic: "Listenmanipulation"
level: "medium"
explanation: "Die `extend()`-Methode fügt alle Elemente eines iterierbaren Objekts (wie eine Liste, ein Tupel, ein String etc.) zur Liste hinzu. Im Gegensatz zu `append()`, das das Objekt als Ganzes hinzufügt, werden bei `extend()` die einzelnen Elemente des übergebenen Objekts hinzugefügt."
explanationWrong:
  - "Die `extend()`-Methode ändert nichts an der Kapazität der Liste, da Python-Listen dynamisch sind und keine fixe Kapazität haben."
  - "Um ein Element mehrfach hinzuzufügen, würde man eine Schleife oder Multiplikation verwenden, nicht `extend()`."
  - "Die `extend()`-Methode fügt keine leeren Elemente hinzu, sondern die Elemente eines anderen iterierbaren Objekts."
---
### Frage 5: Was bewirkt die Methode `extend()` bei Listen?
- [ ] Sie vergrößert die Kapazität der Liste
- [ ] Sie fügt ein Element mehrfach hinzu
- [x] Sie fügt alle Elemente eines iterierbaren Objekts zur Liste hinzu
- [ ] Sie erweitert eine Liste um eine bestimmte Anzahl von leeren Elementen

---
topic: "Datenstrukturen"
subtopic: "Listenmanipulation"
level: "medium"
explanation: "Die `insert()`-Methode fügt ein Element an einer bestimmten Position in die Liste ein. Die Syntax ist `list.insert(position, element)`. In diesem Fall wird 'Orange' an Position 1 (dem zweiten Element) eingefügt, und alle nachfolgenden Elemente werden um eine Position nach rechts verschoben."
explanationWrong:
  - "Das Element wird nicht am Anfang der Liste eingefügt, sondern an Position 1."
  - "Das Element wird nicht am Ende der Liste eingefügt, sondern an Position 1."
  - "Die Methode ist syntaktisch korrekt und löst keinen Fehler aus."
---
### Frage 6: Was ist die Ausgabe des folgenden Codes?
```python
fruits = ["Apfel", "Banane", "Kirsche"]
fruits.insert(1, "Orange")
print(fruits)
```
- [ ] ["Orange", "Apfel", "Banane", "Kirsche"]
- [x] ["Apfel", "Orange", "Banane", "Kirsche"]
- [ ] ["Apfel", "Banane", "Orange", "Kirsche"]
- [ ] Ein Fehler wird ausgelöst

---
topic: "Datenstrukturen"
subtopic: "Listenmanipulation"
level: "medium"
explanation: "Die `pop()`-Methode entfernt ein Element aus einer Liste und gibt dessen Wert zurück. Ohne Argument entfernt sie das letzte Element; mit einem Index als Argument entfernt sie das Element an der angegebenen Position."
explanationWrong:
  - "Die `remove()`-Methode entfernt ein Element basierend auf seinem Wert, nicht seiner Position, und gibt keinen Wert zurück."
  - "Es gibt keine `delete()`-Methode für Listen in Python."
  - "Es gibt keine `extract()`-Methode für Listen in Python."
---
### Frage 7: Welche Methode entfernt ein Element aus einer Liste und gibt den Wert zurück?
- [ ] `remove()`
- [x] `pop()`
- [ ] `delete()`
- [ ] `extract()`

---
topic: "Datenstrukturen"
subtopic: "Listenoperationen"
level: "easy"
explanation: "Der `+`-Operator bei Listen führt eine Konkatenation durch, d.h. er verbindet die beiden Listen zu einer neuen Liste, die alle Elemente beider Listen in der angegebenen Reihenfolge enthält."
explanationWrong:
  - "Der `+`-Operator führt keine elementweise Addition durch, wie es bei numerischen Arrays der Fall sein könnte."
  - "Der `+`-Operator erzeugt keine verschachtelte Liste, sondern fügt die Elemente direkt an."
  - "Der Ausdruck ist gültig und führt nicht zu einem Fehler."
---
### Frage 8: Was ist das Ergebnis des folgenden Ausdrucks?
```python
[1, 2, 3] + [4, 5, 6]
```
- [x] [1, 2, 3, 4, 5, 6]
- [ ] [5, 7, 9]
- [ ] [[1, 2, 3], [4, 5, 6]]
- [ ] Ein Fehler wird ausgelöst

---
topic: "Datenstrukturen"
subtopic: "Listen und range()"
level: "medium"
explanation: "Um eine Liste mit den Zahlen von 1 bis 10 zu erzeugen, verwendet man `list(range(1, 11))`. Die `range()`-Funktion erzeugt eine Sequenz von start (inklusive) bis stop (exklusive), daher ist stop=11 notwendig, um die 10 einzuschließen."
explanationWrong:
  - "`range(1, 10)` erzeugt die Sequenz 1 bis 9, nicht bis 10."
  - "`list(range(10))` erzeugt eine Liste mit den Zahlen 0 bis 9, nicht 1 bis 10."
  - "`[1-10]` ist keine gültige Python-Syntax für die Erzeugung von Listen."
---
### Frage 9: Wie erzeugt man eine Liste mit den Zahlen von 1 bis 10?
- [ ] `range(1, 10)`
- [x] `list(range(1, 11))`
- [ ] `list(range(10))`
- [ ] `[1-10]`

---
topic: "Datenstrukturen"
subtopic: "Negativer Index"
level: "medium"
explanation: "In Python erlauben negative Indizes den Zugriff auf Elemente von hinten. Der Index -1 bezieht sich auf das letzte Element, -2 auf das vorletzte usw. Daher gibt `numbers[-2]` das vorletzte Element der Liste aus, also 40."
explanationWrong:
  - "Der Wert -2 wird nicht ausgegeben; negative Indizes beziehen sich auf Positionen von hinten."
  - "Der Wert an Index 2 ist 30, nicht 20."
  - "Negative Indizes sind in Python gültig und lösen keinen Fehler aus."
---
### Frage 10: Was ist die Ausgabe des folgenden Codes?
```python
numbers = [10, 20, 30, 40, 50]
print(numbers[-2])
```
- [ ] -2
- [ ] 20
- [x] 40
- [ ] Ein Fehler wird ausgelöst

---
topic: "Datenstrukturen"
subtopic: "Sortieren"
level: "easy"
explanation: "Um eine Liste in aufsteigender Reihenfolge zu sortieren, verwendet man entweder die Methode `list.sort()`, die die Liste in-place sortiert, oder die Funktion `sorted(list)`, die eine neue sortierte Liste zurückgibt, ohne die ursprüngliche zu verändern."
explanationWrong:
  - "Es gibt keine globale `sort()`-Funktion, die eine Liste als Argument nimmt."
  - "Es gibt keine `order()`-Methode für Listen in Python."
  - "Es gibt keine `arrange()`-Methode für Listen in Python."
---
### Frage 11: Wie sortiert man eine Liste in aufsteigender Reihenfolge?
- [ ] `sort(list)`
- [x] `list.sort()` oder `sorted(list)`
- [ ] `list.order()`
- [ ] `list.arrange()`

---
topic: "Datenstrukturen"
subtopic: "Listenmethoden"
level: "medium"
explanation: "Die `count()`-Methode einer Liste gibt die Anzahl der Vorkommen eines bestimmten Elements in der Liste zurück. Sie zählt, wie oft ein spezifischer Wert in der Liste erscheint."
explanationWrong:
  - "Die Länge einer Liste wird mit `len(list)` ermittelt, nicht mit `count()`."
  - "Die Position eines Elements wird mit `index()` ermittelt, nicht mit `count()`."
  - "Die `count()`-Methode erzeugt keine neue Liste, sondern gibt einen Integer zurück."
---
### Frage 12: Was gibt die Methode `count()` einer Liste zurück?
- [ ] Die Länge der Liste
- [ ] Die Position eines Elements in der Liste
- [x] Die Anzahl der Vorkommen eines bestimmten Elements in der Liste
- [ ] Eine neue Liste mit gezählten Elementen

---
topic: "Datenstrukturen"
subtopic: "Listenkopien"
level: "medium"
explanation: "Um eine echte Kopie einer Liste zu erstellen, kann man `list.copy()`, Slice-Notation `list[:]` oder den Konstruktor `list(list)` verwenden. Alle drei Methoden erzeugen eine neue Liste, die die gleichen Elemente enthält, aber ein separates Objekt ist."
explanationWrong:
  - "Die Zuweisung `new_list = list` erstellt keine Kopie, sondern nur eine neue Referenz auf dasselbe Listenobjekt."
  - "Es gibt keine globale `copy()`-Funktion, die eine Liste als Argument nimmt."
  - "Listen werden in Python nicht automatisch kopiert, wenn sie einer neuen Variable zugewiesen werden."
---
### Frage 13: Wie erstellt man eine Kopie einer Liste?
- [ ] `new_list = list`
- [x] `new_list = list.copy()` oder `new_list = list[:]` oder `new_list = list(list)`
- [ ] `new_list = copy(list)`
- [ ] Listen werden automatisch kopiert, wenn man sie einer neuen Variable zuweist

---
topic: "Datenstrukturen"
subtopic: "Listenmanipulation"
level: "medium"
explanation: "Die `reverse()`-Methode kehrt die Reihenfolge der Elemente in einer Liste in-place um, d.h. sie verändert die ursprüngliche Liste. Nach dem Aufruf wird die Liste in umgekehrter Reihenfolge ausgegeben."
explanationWrong:
  - "Die Liste wird nicht unverändert ausgegeben; `reverse()` verändert die Liste in-place."
  - "Die `reverse()`-Methode gibt None zurück, nicht die umgekehrte Liste."
  - "Die `reverse()`-Methode kehrt alle Elemente um, nicht nur bestimmte."
---
### Frage 14: Was ist die Ausgabe des folgenden Codes?
```python
numbers = [1, 2, 3, 4, 5]
numbers.reverse()
print(numbers)
```
- [ ] [1, 2, 3, 4, 5]
- [x] [5, 4, 3, 2, 1]
- [ ] None
- [ ] [1, 3, 5]

---
topic: "Datenstrukturen"
subtopic: "Tupelerstellung"
level: "medium"
explanation: "Um ein Tupel mit einem einzigen Element zu erstellen, muss ein Komma nach dem Element stehen, entweder als `(1,)` oder als `1,`. Ohne das Komma würde Python `(1)` als einfachen numerischen Ausdruck interpretieren, nicht als Tupel."
explanationWrong:
  - "Ohne Komma wird `(1)` als numerischer Ausdruck interpretiert, nicht als Tupel."
  - "Es gibt keine `Tuple()`-Funktion in Python (mit großem T)."
  - "Diese Syntax ist für den Zugriff auf Elemente, nicht für die Erstellung von Tupeln."
---
### Frage 15: Wie erstellt man ein Tupel mit einem einzigen Element?
- [ ] `single_tuple = (1)`
- [x] `single_tuple = (1,)` oder `single_tuple = 1,`
- [ ] `single_tuple = Tuple(1)`
- [ ] `single_tuple = tuple[1]`

---
topic: "Datenstrukturen"
subtopic: "Tupel-Slicing"
level: "medium"
explanation: "Tupel unterstützen Slicing wie Listen. Die Syntax `t[1:4]` liefert ein neues Tupel, das die Elemente von Index 1 bis (nicht einschließlich) Index 4 enthält, also die Elemente mit den Indizes 1, 2 und 3."
explanationWrong:
  - "Das Slice beginnt bei Index 1, nicht bei Index 0."
  - "Das Ergebnis ist ein Tupel, kein Liste, da die Operation auf einem Tupel ausgeführt wird."
  - "Slicing ist für Tupel gültig und löst keinen Fehler aus."
---
### Frage 16: Was ist die Ausgabe des folgenden Codes?
```python
t = (1, 2, 3, 4, 5)
print(t[1:4])
```
- [ ] (1, 2, 3, 4)
- [x] (2, 3, 4)
- [ ] [2, 3, 4]
- [ ] Ein Fehler wird ausgelöst

---
topic: "Datenstrukturen"
subtopic: "Tupeleigenschaften"
level: "medium"
explanation: "Da Tupel unveränderbar (immutable) sind, können keine Elemente hinzugefügt werden, nachdem das Tupel erstellt wurde. Es gibt keine `append()`-Methode für Tupel, da dies die Unveränderbarkeit verletzen würde."
explanationWrong:
  - "Slicing ist für Tupel möglich, genau wie für Listen."
  - "Konkatenation von Tupeln ist möglich mit dem `+`-Operator."
  - "Die Länge eines Tupels kann mit `len(tuple)` ermittelt werden."
---
### Frage 17: Welche der folgenden Operationen ist mit Tupeln NICHT möglich?
- [ ] Slicing (`tuple[1:3]`)
- [ ] Konkatenation (`tuple1 + tuple2`)
- [x] Elemente hinzufügen (`tuple.append(element)`)
- [ ] Länge ermitteln (`len(tuple)`)

---
topic: "Datenstrukturen"
subtopic: "Tupel-Unpacking"
level: "medium"
explanation: "Unpacking (oder Zuweisung mehrerer Variablen) ist eine Technik in Python, bei der die Elemente einer Sequenz (wie eines Tupels) einzelnen Variablen zugewiesen werden. In diesem Fall werden die Werte 1, 2 und 3 den Variablen x, y und z zugewiesen."
explanationWrong:
  - "Die Anzahl der Variablen auf der linken Seite muss mit der Anzahl der Elemente im Tupel übereinstimmen, sonst wird ein Fehler ausgelöst."
  - "Jede Variable erhält genau ein Element aus dem Tupel, nicht das gesamte Tupel."
  - "Jede Variable erhält genau ein Element, nicht das gesamte Tupel."
---
### Frage 18: Was bewirkt der folgende Code?
```python
x, y, z = (1, 2, 3)
```
- [ ] Es wird ein Fehler ausgelöst
- [x] Die Variablen x, y und z erhalten die Werte 1, 2 bzw. 3
- [ ] x erhält den Wert (1, 2, 3), y und z bleiben undefiniert
- [ ] Alle drei Variablen erhalten den Wert (1, 2, 3)

---
topic: "Datenstrukturen"
subtopic: "Dictionaries"
level: "medium"
explanation: "Dictionaries in Python sind Sammlungen von Schlüssel-Wert-Paaren, die einen schnellen Zugriff auf Werte anhand ihrer Schlüssel ermöglichen. Sie bieten eine effiziente Möglichkeit, Daten zu speichern und abzurufen, da der Zugriff auf Werte über Schlüssel eine Zeitkomplexität von O(1) hat."
explanationWrong:
  - "Dictionaries sind nicht automatisch nach Schlüsseln sortiert. Die Reihenfolge wurde erst ab Python 3.7 beibehalten."
  - "Dictionaries können verschiedene hashbare Datentypen als Schlüssel verwenden, nicht nur Strings."
  - "Dictionaries können verschachtelt werden, d.h. ein Dictionary kann andere Dictionaries als Werte enthalten."
---
### Frage 19: Welche der folgenden Aussagen über Dictionaries ist korrekt?
- [ ] Dictionaries sind immer alphabetisch nach Schlüsseln sortiert
- [ ] Dictionaries können nur Strings als Schlüssel verwenden
- [x] Dictionaries bestehen aus Schlüssel-Wert-Paaren und bieten schnellen Zugriff auf Werte anhand ihrer Schlüssel
- [ ] Dictionaries können nicht verschachtelt werden (kein Dictionary innerhalb eines Dictionary)

---
topic: "Datenstrukturen"
subtopic: "Dictionary-Manipulation"
level: "easy"
explanation: "Um ein neues Schlüssel-Wert-Paar zu einem bestehenden Dictionary hinzuzufügen, verwendet man die Indexzugriffssyntax `dict[new_key] = new_value`. Wenn der Schlüssel bereits existiert, wird der zugehörige Wert überschrieben; andernfalls wird ein neues Paar hinzugefügt."
explanationWrong:
  - "Es gibt keine `append()`-Methode für Dictionaries in Python."
  - "Es gibt keine `add()`-Methode für Dictionaries in Python."
  - "Es gibt keine `insert()`-Methode für Dictionaries in Python."
---
### Frage 20: Wie fügt man ein neues Schlüssel-Wert-Paar zu einem bestehenden Dictionary hinzu?
- [x] `dict[new_key] = new_value`
- [ ] `dict.append(new_key, new_value)`
- [ ] `dict.add(new_key, new_value)`
- [ ] `dict.insert(new_key, new_value)`

---
topic: "Datenstrukturen"
subtopic: "Dictionary-Methoden"
level: "medium"
explanation: "Die `get()`-Methode eines Dictionaries erlaubt den Zugriff auf einen Wert anhand seines Schlüssels und die Angabe eines Standardwerts, der zurückgegeben wird, wenn der Schlüssel nicht im Dictionary existiert. In diesem Fall wird 'Nicht angegeben' zurückgegeben, da der Schlüssel 'beruf' nicht im Dictionary vorhanden ist."
explanationWrong:
  - "Bei Verwendung von `get()` wird kein KeyError ausgelöst, wenn der Schlüssel nicht existiert."
  - "`get()` gibt den Standardwert zurück, nicht None, wenn ein Standardwert angegeben ist."
  - "Der Schlüssel 'beruf' wird nicht zurückgegeben, sondern der Standardwert 'Nicht angegeben'."
---
### Frage 21: Was ist die Ausgabe des folgenden Codes?
```python
person = {"name": "Max", "alter": 30}
print(person.get("beruf", "Nicht angegeben"))
```
- [ ] Ein KeyError wird ausgelöst
- [ ] None
- [x] Nicht angegeben
- [ ] beruf

---
topic: "Datenstrukturen"
subtopic: "Dictionary-Methoden"
level: "easy"
explanation: "Die `clear()`-Methode entfernt alle Elemente aus einem Dictionary, sodass ein leeres Dictionary übrig bleibt. Dies ist nützlich, wenn man alle Einträge löschen möchte, ohne das Dictionary-Objekt selbst zu zerstören."
explanationWrong:
  - "Es gibt keine `remove_all()`-Methode für Dictionaries in Python."
  - "Es gibt keine `delete()`-Methode für Dictionaries in Python."
  - "Es gibt keine `reset()`-Methode für Dictionaries in Python."
---
### Frage 22: Welche Methode entfernt alle Elemente aus einem Dictionary?
- [ ] `remove_all()`
- [ ] `delete()`
- [x] `clear()`
- [ ] `reset()`

---
topic: "Datenstrukturen"
subtopic: "Dictionary-Iteration"
level: "medium"
explanation: "Wenn man über ein Dictionary mit einer for-Schleife iteriert (ohne Verwendung der items()-, values()- oder andere Methoden), werden standardmäßig die Schlüssel durchlaufen. In diesem Fall werden also die Schlüssel 'rot', 'grün' und 'blau' ausgegeben."
explanationWrong:
  - "Um die Werte zu durchlaufen, müsste man `for item in colors.values():` verwenden."
  - "Um Schlüssel-Wert-Paare zu durchlaufen, müsste man `for key, value in colors.items():` verwenden."
  - "Die Iteration über ein Dictionary ist gültig und löst keinen Fehler aus."
---
### Frage 23: Was ist die Ausgabe des folgenden Codes?
```python
colors = {"rot": "#FF0000", "grün": "#00FF00", "blau": "#0000FF"}
for item in colors:
    print(item)
```
- [ ] #FF0000, #00FF00, #0000FF
- [x] rot, grün, blau
- [ ] rot: #FF0000, grün: #00FF00, blau: #0000FF
- [ ] Ein Fehler wird ausgelöst

---
topic: "Datenstrukturen"
subtopic: "Dictionary-Methoden"
level: "easy"
explanation: "Um auf alle Schlüssel eines Dictionaries zuzugreifen, verwendet man die `keys()`-Methode. Diese Methode gibt ein Ansichtsobjekt (view object) zurück, das alle Schlüssel des Dictionaries enthält und Änderungen am ursprünglichen Dictionary widerspiegelt."
explanationWrong:
  - "`dict.keys` ohne Klammern gibt das Methodenattribut zurück, nicht die Schlüssel."
  - "Es gibt keine `get_keys()`-Methode für Dictionaries in Python."
  - "Es gibt keine globale `keys()`-Funktion, die ein Dictionary als Argument nimmt."
---
### Frage 24: Wie greift man auf alle Schlüssel eines Dictionaries zu?
- [ ] `dict.keys`
- [x] `dict.keys()`
- [ ] `dict.get_keys()`
- [ ] `keys(dict)`

---
topic: "Datenstrukturen"
subtopic: "Dictionary-Methoden"
level: "medium"
explanation: "Die `update()`-Methode aktualisiert ein Dictionary mit den Elementen aus einem anderen Dictionary oder aus Schlüssel-Wert-Paaren. Wenn ein Schlüssel bereits existiert, wird sein Wert überschrieben. In diesem Fall wird der Wert von 'b' von 2 auf 3 aktualisiert, und ein neuer Schlüssel 'c' mit dem Wert 4 wird hinzugefügt."
explanationWrong:
  - "Der Wert von 'b' wird aktualisiert, nicht beibehalten."
  - "Ein Dictionary kann nicht mehrere Einträge mit demselben Schlüssel haben."
  - "Die Operation ist gültig und löst keinen Fehler aus."
---
### Frage 25: Was ist die Ausgabe des folgenden Codes?
```python
d = {"a": 1, "b": 2}
d.update({"b": 3, "c": 4})
print(d)
```
- [ ] {"a": 1, "b": 2, "c": 4}
- [x] {"a": 1, "b": 3, "c": 4}
- [ ] {"a": 1, "b": 2, "b": 3, "c": 4}
- [ ] Ein Fehler wird ausgelöst

---
topic: "Datenstrukturen"
subtopic: "Sets"
level: "medium"
explanation: "In Python erstellt man ein leeres Set mit dem Konstruktor `set()`. Die Syntax `{}` erzeugt ein leeres Dictionary, nicht ein leeres Set, was oft zu Verwirrung führt."
explanationWrong:
  - "Die Syntax `{}` erzeugt ein leeres Dictionary, nicht ein leeres Set."
  - "Es gibt keine `Set()`-Funktion in Python (mit großem S)."
  - "Es gibt keine `new Set()`-Syntax in Python."
---
### Frage 26: Wie erstellt man ein leeres Set in Python?
- [ ] `my_set = {}`
- [x] `my_set = set()`
- [ ] `my_set = Set()`
- [ ] `my_set = new Set()`

---
topic: "Datenstrukturen"
subtopic: "Set-Operationen"
level: "medium"
explanation: "Der Operator `|` (oder die Methode `union()`) bei Sets führt eine Vereinigung durch, d.h. er erzeugt ein neues Set, das alle einzigartigen Elemente aus beiden Sets enthält. Da Sets keine Duplikate erlauben, werden die gemeinsamen Elemente (hier 4 und 5) nur einmal aufgenommen."
explanationWrong:
  - "Sets erlauben keine Duplikate, daher würden die gemeinsamen Elemente nicht doppelt erscheinen."
  - "Die Vereinigung enthält alle Elemente beider Sets, nicht nur die gemeinsamen."
  - "Die Operation ist gültig und löst keinen Fehler aus."
---
### Frage 27: Was ist die Ausgabe des folgenden Codes?
```python
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}
print(set1 | set2)
```
- [ ] {1, 2, 3, 4, 5, 4, 5, 6, 7, 8}
- [x] {1, 2, 3, 4, 5, 6, 7, 8}
- [ ] {4, 5}
- [ ] Ein Fehler wird ausgelöst

---
topic: "Datenstrukturen"
subtopic: "Set-Operationen"
level: "medium"
explanation: "Der Operator `&` (oder die Methode `intersection()`) bei Sets führt eine Schnittmenge-Operation durch, d.h. er erzeugt ein neues Set, das nur die Elemente enthält, die in beiden Sets vorkommen."
explanationWrong:
  - "Der Operator `|` führt eine Vereinigung durch, nicht eine Schnittmenge."
  - "Der Operator `-` führt eine Differenzmenge durch, nicht eine Schnittmenge."
  - "Der Operator `^` führt eine symmetrische Differenz durch, nicht eine Schnittmenge."
---
### Frage 28: Welche Operation entspricht der Schnittmenge zweier Sets?
- [ ] `set1 | set2`
- [x] `set1 & set2`
- [ ] `set1 - set2`
- [ ] `set1 ^ set2`

---
topic: "Datenstrukturen"
subtopic: "Set-Operationen"
level: "medium"
explanation: "Der Operator `-` (oder die Methode `difference()`) bei Sets führt eine Differenzmenge-Operation durch, d.h. er erzeugt ein neues Set, das alle Elemente des ersten Sets enthält, die nicht im zweiten Set vorkommen. In diesem Fall bleibt nur das Element 1 übrig."
explanationWrong:
  - "Das Element 4 ist in beiden Sets enthalten und daher nicht im Ergebnis."
  - "Die Differenz enthält nur Elemente aus dem ersten Set, die nicht im zweiten sind, nicht die Vereinigung der Unterschiede."
  - "Die Differenz von {1, 2, 3} und {2, 3, 4} ist nicht die Vereinigung beider Sets."
---
### Frage 29: Was ist das Ergebnis des folgenden Ausdrucks?
```python
{1, 2, 3} - {2, 3, 4}
```
- [x] {1}
- [ ] {4}
- [ ] {1, 4}
- [ ] {1, 2, 3, 4}

---
topic: "Datenstrukturen"
subtopic: "Set-Eigenschaften"
level: "easy"
explanation: "Sets in Python erlauben keine Duplikate. Wenn man versucht, ein bereits vorhandenes Element hinzuzufügen, wird das Element ignoriert und das Set bleibt unverändert. Es wird kein Fehler ausgelöst, aber die Operation hat keinen Effekt auf das Set."
explanationWrong:
  - "Es wird kein Fehler ausgelöst, wenn man versucht, ein vorhandenes Element hinzuzufügen."
  - "Sets erlauben keine Duplikate, daher wird das Element nicht ein zweites Mal hinzugefügt."
  - "Das vorhandene Element wird nicht ersetzt, da es keinen Unterschied gibt zwischen dem 'alten' und dem 'neuen' Element."
---
### Frage 30: Was passiert, wenn man versucht, ein bereits vorhandenes Element zu einem Set hinzuzufügen?
- [ ] Es wird ein Fehler ausgelöst
- [ ] Das Element wird ein zweites Mal hinzugefügt
- [x] Das Element wird ignoriert, das Set bleibt unverändert
- [ ] Das Element ersetzt das vorhandene Element

---
topic: "Datenstrukturen"
subtopic: "Listenoperationen"
level: "easy"
explanation: "Um zu überprüfen, ob ein Element in einer Liste vorhanden ist, verwendet man den Operator `in`. Dieser gibt `True` zurück, wenn das Element in der Liste gefunden wird, andernfalls `False`."
explanationWrong:
  - "Es gibt keine `contains()`-Methode für Listen in Python."
  - "Es gibt keine `has()`-Methode für Listen in Python."
  - "Diese Syntax ist nicht gültig in Python."
---
### Frage 31: Wie überprüft man, ob ein Element in einer Liste vorhanden ist?
- [x] `element in list`
- [ ] `list.contains(element)`
- [ ] `list.has(element)`
- [ ] `element.in(list)`

---
topic: "Datenstrukturen"
subtopic: "Zeitkomplexität"
level: "medium"
explanation: "Die Zeitkomplexität für die Operation `element in list` bei einer Liste ist O(n), da im schlimmsten Fall jedes Element der Liste durchsucht werden muss, um festzustellen, ob das gesuchte Element enthalten ist. Dies ist eine lineare Suche."
explanationWrong:
  - "O(1) wäre die Zeitkomplexität für den Zugriff auf ein Element mit bekanntem Index."
  - "O(log n) wäre die Zeitkomplexität einer binären Suche in einer sortierten Liste."
  - "O(n²) wäre die Zeitkomplexität einer geschachtelten Schleife über die Liste."
---
### Frage 32: Was ist die Zeitkomplexität für die Operation `element in list` bei einer Liste?
- [ ] O(1)
- [x] O(n)
- [ ] O(log n)
- [ ] O(n²)

---
topic: "Datenstrukturen"
subtopic: "Zeitkomplexität"
level: "medium"
explanation: "Die Zeitkomplexität für die Operation `element in set` bei einem Set ist im Durchschnitt O(1) (konstante Zeit), da Sets in Python als Hash-Tabellen implementiert sind. Dies macht Sets sehr effizient für Enthaltenseinsoperationen, im Gegensatz zu Listen."
explanationWrong:
  - "O(n) wäre die Zeitkomplexität für eine lineare Suche, wie bei Listen."
  - "O(log n) wäre die Zeitkomplexität einer binären Suche in einer sortierten Struktur."
  - "O(n²) wäre die Zeitkomplexität einer geschachtelten Schleife."
---
### Frage 33: Was ist die Zeitkomplexität für die Operation `element in set` bei einem Set?
- [x] O(1)
- [ ] O(n)
- [ ] O(log n)
- [ ] O(n²)

---
topic: "Datenstrukturen"
subtopic: "List Comprehension"
level: "medium"
explanation: "Die korrekte Syntax für eine List Comprehension in Python, die Quadratzahlen berechnet, ist `[x**2 for x in range(1, 6)]`. Der Operator `**` wird für Potenzen verwendet, und `x**2` berechnet das Quadrat von x."
explanationWrong:
  - "Die Syntax `x²` ist in Python nicht gültig für Quadrate."
  - "Alle genannten Ausdrücke sind nicht gleich. Nur `[x**2 for x in range(1, 6)]` und `[x*x for x in range(1, 6)]` ergeben die Quadratzahlen."
  - "Die Ausdrücke unterscheiden sich in ihrer Syntax, auch wenn einige das gleiche Ergebnis erzeugen würden."
---
### Frage 34: Welcher Code erzeugt eine Liste mit den Quadratzahlen der Zahlen von 1 bis 5?
- [ ] `[x² for x in range(1, 6)]`
- [x] `[x**2 for x in range(1, 6)]`
- [ ] `[x*x for x in range(1, 6)]`
- [ ] Alle obigen Antworten sind korrekt

---
topic: "Datenstrukturen"
subtopic: "List Comprehension"
level: "medium"
explanation: "Die List Comprehension `[x * 2 for x in numbers if x % 2 == 0]` erzeugt eine neue Liste, die die verdoppelten Werte all jener Zahlen enthält, die gerade sind (d.h. deren Rest bei Division durch 2 gleich 0 ist). In der Liste numbers sind 2 und 4 gerade, daher ergibt sich `[4, 8]`."
explanationWrong:
  - "Diese Ausgabe würde entstehen, wenn alle Zahlen verdoppelt würden, ohne die Bedingung zu prüfen."
  - "Diese Ausgabe würde entstehen, wenn die ungeraden Zahlen verdoppelt würden, nicht die geraden."
  - "Die Operation ist syntaktisch korrekt und löst keinen Fehler aus."
---
### Frage 35: Was ist die Ausgabe des folgenden Codes?
```python
numbers = [1, 2, 3, 4, 5]
doubled = [x * 2 for x in numbers if x % 2 == 0]
print(doubled)
```
- [ ] [2, 4, 6, 8, 10]
- [x] [4, 8]
- [ ] [2, 6, 10]
- [ ] Ein Fehler wird ausgelöst

---
topic: "Datenstrukturen"
subtopic: "Listen und Sets"
level: "medium"
explanation: "Um Duplikate aus einer Liste zu entfernen, kann man die Liste in ein Set umwandeln (das automatisch Duplikate entfernt) und dann wieder zurück in eine Liste. Der Ausdruck `list(set(my_list))` führt diese Umwandlung aus."
explanationWrong:
  - "Es gibt keine `remove_duplicates()`-Methode für Listen in Python."
  - "Es gibt keine globale `remove_duplicates()`-Funktion in Python."
  - "Es gibt keine `unique()`-Methode für Listen in Python."
---
### Frage 36: Wie entfernt man Duplikate aus einer Liste?
- [ ] `list.remove_duplicates()`
- [ ] `remove_duplicates(list)`
- [x] `list(set(my_list))`
- [ ] `list.unique()`

---
topic: "Datenstrukturen"
subtopic: "Referenzen vs. Kopien"
level: "medium"
explanation: "In Python erzeugt die Zuweisung `b = a` keine Kopie der Liste, sondern nur eine neue Referenz auf dieselbe Liste. Wenn Änderungen an `b` vorgenommen werden, ändern sie auch `a`, da beide Variablen auf dasselbe Listenobjekt verweisen."
explanationWrong:
  - "Wenn `b` eine unabhängige Kopie von `a` wäre, würde `a` unverändert bleiben."
  - "Die append-Methode fügt das Element am Ende der Liste hinzu, nicht als verschachtelte Liste."
  - "Die Operation ist syntaktisch korrekt und löst keinen Fehler aus."
---
### Frage 37: Was ist die Ausgabe des folgenden Codes?
```python
a = [1, 2, 3]
b = a
b.append(4)
print(a)
```
- [ ] [1, 2, 3]
- [x] [1, 2, 3, 4]
- [ ] [1, 2, 3, [4]]
- [ ] Ein Fehler wird ausgelöst

---
topic: "Datenstrukturen"
subtopic: "Tupel und Listen"
level: "medium"
explanation: "Der Code erstellt ein Tupel `nested`, das zwei Listen enthält. Obwohl Tupel selbst unveränderbar sind, können die Objekte, auf die sie verweisen (in diesem Fall Listen), verändert werden. Daher ist es möglich, ein Element in der ersten Liste zu ändern, ohne einen Fehler auszulösen."
explanationWrong:
  - "Während Tupel selbst unveränderbar sind, können die Objekte, auf die sie verweisen, verändert werden."
  - "Die erste Liste im Tupel wird verändert, nicht das ursprüngliche Tupel selbst."
  - "Das Ergebnis ist ein Tupel, keine Liste, da das ursprüngliche Objekt ein Tupel war."
---
### Frage 38: Was ist die Ausgabe des folgenden Codes?
```python
nested = ([1, 2], [3, 4])
nested[0][1] = 5
print(nested)
```
- [ ] Ein Fehler wird ausgelöst, da Tupel unveränderbar sind
- [x] ([1, 5], [3, 4])
- [ ] ([1, 2], [3, 4])
- [ ] [[1, 5], [3, 4]]

---
topic: "Datenstrukturen"
subtopic: "List Comprehension"
level: "medium"
explanation: "List Comprehensions bieten eine kompakte und effiziente Syntax zum Erstellen von Listen basierend auf bestehenden Listen oder anderen iterierbaren Objekten. Sie können Filter (if-Anweisungen) enthalten und sind oft lesbarer und schneller als traditionelle for-Schleifen für solche Aufgaben."
explanationWrong:
  - "List Comprehensions können mit jeder Art von iterierbarem Objekt arbeiten, nicht nur mit Listen."
  - "List Comprehensions sind oft schneller als äquivalente for-Schleifen, da sie optimierter sind."
  - "List Comprehensions können bedingte Anweisungen (if) enthalten, um Elemente zu filtern."
---
### Frage 39: Welche der folgenden Aussagen über List Comprehensions ist korrekt?
- [ ] List Comprehensions können nur mit Listen arbeiten, nicht mit anderen iterierbaren Objekten
- [ ] List Comprehensions sind immer langsamer als klassische for-Schleifen
- [x] List Comprehensions bieten eine kompakte Syntax zum Erstellen von Listen basierend auf bestehenden Listen
- [ ] List Comprehensions können keine bedingten Anweisungen (if) enthalten

---
topic: "Datenstrukturen"
subtopic: "List Comprehension"
level: "medium"
explanation: "Die List Comprehension enthält zwei if-Bedingungen: `i % 2 == 0` filtert gerade Zahlen und `i % 3 == 0` filtert Zahlen, die durch 3 teilbar sind. Nur Zahlen, die beide Bedingungen erfüllen, werden in die Ergebnisliste aufgenommen. Im Bereich 0-9 sind dies nur 0 und 6."
explanationWrong:
  - "Diese Ausgabe würde entstehen, wenn nur die erste Bedingung (gerade Zahlen) überprüft würde."
  - "Diese Ausgabe würde entstehen, wenn nur die zweite Bedingung (durch 3 teilbar) überprüft würde."
  - "Diese Ausgabe enthält Zahlen, die nur die erste Bedingung erfüllen, nicht beide."
---
### Frage 40: Was ist der Wert von `result` nach Ausführung des folgenden Codes?
```python
result = [i for i in range(10) if i % 2 == 0 if i % 3 == 0]
```
- [ ] [0, 2, 4, 6, 8]
- [ ] [0, 3, 6, 9]
- [x] [0, 6]
- [ ] [2, 4, 8]

---
topic: "Datenstrukturen"
subtopic: "Listenindizierung"
level: "easy"
explanation: "In Python kann man mit negativen Indizes von hinten auf Listenelemente zugreifen. Der Index -1 bezieht sich auf das letzte Element der Liste. Dies ist eine bequeme Methode, um auf das letzte Element zuzugreifen, ohne die Länge der Liste kennen zu müssen."
explanationWrong:
  - "Es gibt keine `last()`-Methode für Listen in Python."
  - "Der Index `len(list)` würde einen IndexError verursachen, da Listenindizes bei 0 beginnen und bis len(list)-1 gehen."
  - "Es gibt keine `end()`-Methode für Listen in Python."
---
### Frage 41: Wie kann man auf das letzte Element einer Liste zugreifen?
- [ ] `list.last()`
- [x] `list[-1]`
- [ ] `list[len(list)]`
- [ ] `list.end()`

---
topic: "Datenstrukturen"
subtopic: "Datentypen"
level: "medium"
explanation: "In Python erzeugt die Syntax `{}` (leere geschweifte Klammern) standardmäßig ein leeres Dictionary, nicht ein leeres Set. Um ein leeres Set zu erzeugen, muss man den Konstruktor `set()` verwenden. Der Typ von `a` ist daher `dict`."
explanationWrong:
  - "Ein leeres Set wird mit `set()` erzeugt, nicht mit `{}`."
  - "Die Variable `a` ist kein List-Objekt, sondern ein Dictionary."
  - "Die Variable `a` ist kein Tuple-Objekt, sondern ein Dictionary."
---
### Frage 42: Was ist die Ausgabe des folgenden Codes?
```python
a = {}
print(type(a))
```
- [ ] <class 'set'>
- [x] <class 'dict'>
- [ ] <class 'list'>
- [ ] <class 'tuple'>

---
topic: "Datenstrukturen"
subtopic: "Strings"
level: "medium"
explanation: "Strings in Python sind unveränderbar (immutable), d.h. einmal erstellt, können ihre einzelnen Zeichen nicht mehr geändert werden. Der Versuch, ein einzelnes Zeichen zu ändern (z.B. `s[0] = 'X'`), führt zu einem TypeError. Um einen String zu ändern, muss ein neuer String erstellt werden."
explanationWrong:
  - "Strings können mit dem `+`-Operator verkettet werden."
  - "Strings unterstützen Slicing, ähnlich wie Listen."
  - "Über Strings kann mit einer for-Schleife iteriert werden, Zeichen für Zeichen."
---
### Frage 43: Welche der folgenden Operationen ist nicht möglich mit Strings in Python?
- [ ] Konkatenation mit dem `+`-Operator
- [ ] Slicing wie bei Listen
- [x] Ändern einzelner Zeichen (z.B. `s[0] = 'X'`)
- [ ] Iteration mit einer for-Schleife

---
topic: "Datenstrukturen"
subtopic: "Set-Operationen"
level: "medium"
explanation: "Der Operator `^` (oder die Methode `symmetric_difference()`) bei Sets führt eine symmetrische Differenz durch, d.h. er erzeugt ein neues Set, das alle Elemente enthält, die in genau einem der beiden Sets vorkommen, aber nicht in beiden. In diesem Fall sind das die Elemente 1, 2, 4 und 5."
explanationWrong:
  - "Die beiden Antwortmöglichkeiten sind identisch und beide korrekt."
  - "Die symmetrische Differenz enthält nicht die gemeinsamen Elemente der beiden Sets."
  - "Die symmetrische Differenz enthält nicht alle Elemente beider Sets, sondern nur die nicht-gemeinsamen."
---
### Frage 44: Was ist die Ausgabe des folgenden Codes?
```python
a = {1, 2, 3}
b = {3, 4, 5}
print(a ^ b)
```
- [ ] {1, 2, 4, 5}
- [x] {1, 2, 4, 5}
- [ ] {3}
- [ ] {1, 2, 3, 4, 5}

---
topic: "Datenstrukturen"
subtopic: "Set-Methoden"
level: "easy"
explanation: "Die `clear()`-Methode entfernt alle Elemente aus einem Set, sodass ein leeres Set übrig bleibt. Dies ist nützlich, wenn man alle Elemente löschen möchte, ohne das Set-Objekt selbst zu zerstören."
explanationWrong:
  - "Es gibt keine `remove_all()`-Methode für Sets in Python."
  - "Es gibt keine `delete()`-Methode für Sets in Python."
  - "Es gibt keine `empty()`-Methode für Sets in Python."
---
### Frage 45: Welche Methode verwendet man, um alle Elemente eines Sets zu löschen?
- [ ] `remove_all()`
- [ ] `delete()`
- [x] `clear()`
- [ ] `empty()`

---
topic: "Datenstrukturen"
subtopic: "Tupel-Operationen"
level: "medium"
explanation: "Tupel können mit dem `+`-Operator verkettet (konkateniert) werden, ähnlich wie Listen. Dies erzeugt ein neues Tupel, das alle Elemente beider Tupel in der angegebenen Reihenfolge enthält. In diesem Fall wird das Tupel (1, 2, 3, 4, 5, 6) erzeugt."
explanationWrong:
  - "Die Operation ist gültig und löst keinen Fehler aus."
  - "Das Ergebnis ist ein Tupel, kein verschachteltes Tupel."
  - "Das Ergebnis ist ein Tupel, keine Liste."
---
### Frage 46: Was ist die Ausgabe des folgenden Codes?
```python
tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)
print(tuple1 + tuple2)
```
- [ ] Es wird ein Fehler ausgelöst
- [x] (1, 2, 3, 4, 5, 6)
- [ ] ((1, 2, 3), (4, 5, 6))
- [ ] [1, 2, 3, 4, 5, 6]

---
topic: "Datenstrukturen"
subtopic: "Set-Eigenschaften"
level: "easy"
explanation: "Sets in Python enthalten nur eindeutige Elemente. Wenn ein Set aus einer Liste mit Duplikaten erstellt wird, werden die Duplikate automatisch entfernt. Die ursprüngliche Liste enthält 11 Elemente, aber nur 5 eindeutige Werte (1, 2, 3, 4, 5), daher hat das Set 5 Elemente."
explanationWrong:
  - "Die ursprüngliche Liste hat 11 Elemente, aber das Set enthält nur die eindeutigen Werte."
  - "Es gibt mehr als 3 eindeutige Werte in der Liste."
  - "Die Operation ist gültig und löst keinen Fehler aus."
---
### Frage 47: Wie viele Elemente enthält das Set nach Ausführung des folgenden Codes?
```python
s = set([1, 2, 3, 2, 3, 4, 5, 4, 3, 2, 1])
```
- [ ] 11
- [ ] 3
- [x] 5
- [ ] Ein Fehler wird ausgelöst

---
topic: "Datenstrukturen"
subtopic: "Datenstrukturwahl"
level: "easy"
explanation: "Ein Set ist die beste Datenstruktur, um eine Sammlung eindeutiger Elemente zu speichern, da Sets in Python automatisch Duplikate verhindern. Außerdem bieten Sets eine effiziente Suche mit einer durchschnittlichen Zeitkomplexität von O(1) für Enthaltenseinsoperationen."
explanationWrong:
  - "Listen erlauben Duplikate und haben eine Zeitkomplexität von O(n) für die Suche."
  - "Tupel erlauben ebenfalls Duplikate und haben eine Zeitkomplexität von O(n) für die Suche."
  - "Dictionaries speichern Schlüssel-Wert-Paare und wären überflüssig komplex für eine einfache Sammlung eindeutiger Elemente."
---
### Frage 48: Welche der folgenden Datenstrukturen ist am besten geeignet, um eine Sammlung eindeutiger Elemente zu speichern?
- [ ] Liste
- [ ] Tupel
- [ ] Dictionary
- [x] Set

---
topic: "Datenstrukturen"
subtopic: "String-Slicing"
level: "medium"
explanation: "Bei Slicing in Python mit der Syntax `string[start:stop]` werden Zeichen vom Index `start` bis (aber nicht einschließlich) Index `stop` ausgewählt. In diesem Fall bedeutet `\"Python\"[1:4]`, dass die Zeichen mit den Indizes 1, 2 und 3 ausgewählt werden, was den Buchstaben 'y', 't' und 'h' entspricht, also 'yth'."
explanationWrong:
  - "Der gesamte String würde nur ohne Slicing oder mit `[:]` zurückgegeben werden."
  - "Die Buchstaben 'P', 'y', 't' entsprechen den Indizes 0, 1, 2, nicht 1, 2, 3."
  - "Die Buchstaben 'y', 't', 'h', 'o' würden mit `[1:5]` zurückgegeben werden, nicht mit `[1:4]`."
---
### Frage 49: Was ist das Ergebnis des folgenden Ausdrucks?
```python
"Python"[1:4]
```
- [ ] "Python"
- [ ] "Pyt"
- [x] "yth"
- [ ] "ytho"

---
topic: "Datenstrukturen"
subtopic: "Anwendungsfälle"
level: "medium"
explanation: "Ein Dictionary ist ideal, um die Häufigkeit des Vorkommens von Wörtern zu speichern, da es effiziente Schlüssel-Wert-Zuordnungen ermöglicht. Die Wörter können als Schlüssel und ihre Häufigkeiten als Werte gespeichert werden, was einen schnellen Zugriff und Aktualisierung erlaubt."
explanationWrong:
  - "Listen eignen sich nicht gut für Häufigkeitszählungen, da die Suche nach einem Wort eine Zeitkomplexität von O(n) hat."
  - "Tupel sind unveränderbar und eignen sich daher nicht für dynamisches Zählen."
  - "Sets speichern nur eindeutige Elemente ohne Häufigkeitsinformationen."
---
### Frage 50: Welche Datenstruktur ist am besten geeignet, um die Häufigkeit des Vorkommens von Wörtern in einem Text zu speichern?
- [ ] Liste
- [ ] Tupel
- [x] Dictionary
- [ ] Set