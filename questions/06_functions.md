---
# Python Funktionen Quiz mit Metadaten

---
topic: "Funktionen"
subtopic: "Definitionen"
level: "easy"
explanation: "In Python werden Funktionen mit dem Schlüsselwort `def` definiert, gefolgt vom Funktionsnamen und runden Klammern, die optional Parameter enthalten können. Der Funktionskörper wird nach einem Doppelpunkt eingerückt."
explanationWrong:
  - "Das Schlüsselwort `function` existiert in Python nicht zur Funktionsdefinition, es wird in anderen Programmiersprachen wie JavaScript verwendet."
  - "Das Schlüsselwort `new` wird in Python nicht für Funktionsdefinitionen verwendet."
  - "Das Schlüsselwort `create` existiert in Python nicht zur Funktionsdefinition."
---
### Frage 1: Wie wird eine Funktion in Python definiert?
- [ ] `function my_function():`
- [x] `def my_function():`
- [ ] `new function my_function():`
- [ ] `create my_function():`

---
topic: "Funktionen"
subtopic: "Dokumentation"
level: "medium"
explanation: "Ein Docstring in Python ist ein Dokumentationsstring, der direkt nach der Funktionsdefinition oder der Klassendefinition steht. Er wird üblicherweise mit dreifachen Anführungszeichen (''' oder \"\"\") umschlossen und beschreibt den Zweck, die Parameter und den Rückgabewert der Funktion."
explanationWrong:
  - "Python verwendet `#` für einzeilige Kommentare, nicht `//`."
  - "Es gibt keine spezielle Importanweisung für Dokumentation in Python."
  - "Ein Docstring ist in die Funktion eingebettet, nicht in einer externen Datei."
---
### Frage 2: Was ist ein "Docstring" in Python?
- [ ] Ein Kommentar, der mit `//` beginnt
- [ ] Eine spezielle Importanweisung für Dokumentation
- [x] Ein Dokumentationsstring am Anfang einer Funktion, der mit dreifachen Anführungszeichen umschlossen ist
- [ ] Eine externe Dokumentationsdatei

---
topic: "Funktionen"
subtopic: "Parameter und Argumente"
level: "medium"
explanation: "In Python sind Parameter die Variablen, die in der Funktionsdefinition deklariert werden. Sie dienen als Platzhalter für die Werte, die an die Funktion übergeben werden. Argumente hingegen sind die tatsächlichen Werte, die beim Aufruf der Funktion übergeben werden und den entsprechenden Parametern zugewiesen werden."
explanationWrong:
  - "Es gibt einen klaren Unterschied zwischen Parametern und Argumenten in Python."
  - "Diese Erklärung vertauscht die Bedeutung von Parametern und Argumenten."
  - "Der Unterschied liegt nicht im Datentyp, sondern in der Rolle im Kontext der Funktionsdefinition und des Funktionsaufrufs."
---
### Frage 3: Was ist der Unterschied zwischen einem Parameter und einem Argument in Python?
- [ ] Es gibt keinen Unterschied, beide Begriffe beschreiben dasselbe
- [x] Parameter sind Variablen in der Funktionsdefinition, Argumente sind die Werte, die an die Funktion übergeben werden
- [ ] Parameter sind die Werte, die an die Funktion übergeben werden, Argumente sind Variablen in der Funktionsdefinition
- [ ] Parameter sind für einfache Datentypen, Argumente für komplexe Datentypen

---
topic: "Funktionen"
subtopic: "Standardparameter"
level: "medium"
explanation: "Die Funktion `greet` hat zwei Parameter: `name` (ohne Standardwert) und `greeting` (mit dem Standardwert 'Hallo'). Wenn nur ein Argument übergeben wird, wird dieses dem Parameter `name` zugewiesen, und für `greeting` wird der Standardwert verwendet. Die Ausgabe ist daher 'Hallo, Max!'."
explanationWrong:
  - "Die Reihenfolge in der f-String-Formatierung ist `{greeting}, {name}!`, nicht umgekehrt."
  - "Die Variablennamen werden durch ihre Werte ersetzt, nicht als Strings ausgegeben."
  - "Die Funktion hat einen gültigen Standardparameter und es wird ein erforderliches Argument übergeben, daher wird kein Fehler ausgelöst."
---
### Frage 4: Was ist die Ausgabe des folgenden Codes?
```python
def greet(name, greeting="Hallo"):
    return f"{greeting}, {name}!"

print(greet("Max"))
```
- [ ] Max, Hallo!
- [x] Hallo, Max!
- [ ] greeting, name!
- [ ] Ein Fehler wird ausgelöst

---
topic: "Funktionen"
subtopic: "Rückgabewerte"
level: "medium"
explanation: "Wenn eine Python-Funktion keine explizite `return`-Anweisung enthält oder wenn eine Funktion mit `return` ohne Wert endet, gibt sie implizit `None` zurück. `None` ist ein spezielles Objekt in Python, das das Fehlen eines Wertes darstellt."
explanationWrong:
  - "Python-Funktionen können keinen, einen oder mehrere Werte zurückgeben."
  - "Es gibt keine Begrenzung für die Anzahl der zurückgegebenen Werte in Python."
  - "Die `return`-Anweisung kann an jeder Stelle in einer Funktion stehen, nicht nur am Ende."
---
### Frage 5: Welche Aussage zu Rückgabewerten in Python-Funktionen ist korrekt?
- [ ] Jede Funktion muss genau einen Wert zurückgeben
- [ ] Eine Funktion kann maximal drei Werte zurückgeben
- [x] Wenn keine `return`-Anweisung vorhanden ist, gibt die Funktion `None` zurück
- [ ] Die `return`-Anweisung kann nur am Ende einer Funktion stehen

---
topic: "Funktionen"
subtopic: "Verzweigungen mit Return"
level: "medium"
explanation: "Die Funktion überprüft den Wert von `x` gegen verschiedene Bedingungen. Da `x = 5` nicht größer als 10 ist und auch nicht größer als 5 ist (es ist genau 5), wird der `else`-Block ausgeführt und 'C' zurückgegeben."
explanationWrong:
  - "'A' würde zurückgegeben, wenn x > 10 wäre, was nicht der Fall ist."
  - "'B' würde zurückgegeben, wenn 5 < x <= 10 wäre, was nicht der Fall ist, da x = 5."
  - "Die Funktion enthält eine explizite `return`-Anweisung in jedem Zweig, daher wird immer ein Wert zurückgegeben, nicht `None`."
---
### Frage 6: Was ist der Rückgabewert der folgenden Funktion, wenn sie mit `my_function(5)` aufgerufen wird?
```python
def my_function(x):
    if x > 10:
        return "A"
    elif x > 5:
        return "B"
    else:
        return "C"
```
- [ ] "A"
- [ ] "B"
- [x] "C"
- [ ] None

---
topic: "Funktionen"
subtopic: "Multiple Rückgabewerte"
level: "medium"
explanation: "In Python kann eine Funktion mehrere Werte zurückgeben, indem diese durch Kommas getrennt in der `return`-Anweisung aufgelistet werden. Diese Werte werden dann als Tupel zurückgegeben. Es ist eine häufige Praxis, um mehrere Informationen aus einer Funktion zurückzugeben."
explanationWrong:
  - "Mehrere `return`-Anweisungen nacheinander würden nur den ersten Wert zurückgeben und dann die Funktion beenden."
  - "Es gibt kein `multiple`-Schlüsselwort in Python."
  - "Die Verwendung einer globalen Liste ist eine schlechte Praxis und nicht die standard-mäßige Methode, um mehrere Werte zurückzugeben."
---
### Frage 7: Wie kann man mehrere Werte aus einer Funktion zurückgeben?
- [ ] Mit mehreren `return`-Anweisungen nacheinander
- [x] Durch Komma-getrennte Werte in einer `return`-Anweisung, die ein Tupel zurückgeben
- [ ] Durch Verwendung des `multiple`-Schlüsselworts
- [ ] Durch Verwendung einer globalen Liste

---
topic: "Funktionen"
subtopic: "Tupel Unpacking"
level: "medium"
explanation: "Die Funktion `get_values()` gibt drei Werte zurück, die als Tupel zurückgegeben werden. Diese werden durch Tupel-Entpackung (Tuple Unpacking) den Variablen a, b und c zugewiesen. Da b der Variable für den zweiten Wert entspricht, wird 2 ausgegeben."
explanationWrong:
  - "Der Wert 1 wird der Variablen a zugewiesen, nicht b."
  - "Der Wert 3 wird der Variablen c zugewiesen, nicht b."
  - "Die Operation ist gültig und löst keinen Fehler aus."
---
### Frage 8: Was ist die Ausgabe des folgenden Codes?
```python
def get_values():
    return 1, 2, 3

a, b, c = get_values()
print(b)
```
- [ ] 1
- [x] 2
- [ ] 3
- [ ] Ein Fehler wird ausgelöst

---
topic: "Funktionen"
subtopic: "Keyword Arguments"
level: "medium"
explanation: "Schlüsselwortargumente (Keyword Arguments) in Python sind Argumente, die beim Funktionsaufruf durch ihren Parameternamen identifiziert werden. Sie werden in der Form `parameter=wert` übergeben und erlauben flexiblere Funktionsaufrufe, da die Reihenfolge der Argumente nicht berücksichtigt werden muss."
explanationWrong:
  - "Schlüsselwortargumente beschränken die Werte nicht auf bestimmte Schlüsselwörter."
  - "Obwohl Dictionaries mit Schlüssel-Wert-Paaren arbeiten, beziehen sich Schlüsselwortargumente auf die Syntax beim Funktionsaufruf."
  - "Schlüsselwortargumente können optional sein, wenn sie Standardwerte haben, und sind nicht notwendigerweise erforderlich."
---
### Frage 9: Was sind Schlüsselwortargumente (Keyword Arguments) in Python?
- [ ] Argumente, die nur bestimmte Schlüsselwörter als Werte akzeptieren
- [x] Argumente, die beim Funktionsaufruf mit dem Parameternamen übergeben werden
- [ ] Argumente, die als Wörterbücher (dictionaries) übergeben werden
- [ ] Argumente, die für die Funktion erforderlich sind

---
topic: "Funktionen"
subtopic: "Funktionsaufrufe mit Parametern"
level: "medium"
explanation: "Die Funktion `calculate` hat drei Parameter: `a` und `b` ohne Standardwerte und `operation` mit dem Standardwert 'add'. Bei einem Funktionsaufruf müssen alle Parameter ohne Standardwerte entsprechende Argumente erhalten. Parameter mit Standardwerten können weggelassen werden. Bei der Verwendung von Schlüsselwortargumenten müssen alle positionellen Argumente vor den Schlüsselwortargumenten stehen."
explanationWrong:
  - "Da `a` und `b` keine Standardwerte haben, müssen sie Argumente erhalten, daher ist dieser Aufruf ungültig."
  - "Auch hier fehlen die erforderlichen Argumente für `a` und `b`."
  - "Positionelle Argumente müssen vor benannten Argumenten stehen, daher ist dieser Aufruf ungültig."
---
### Frage 10: Welcher Funktionsaufruf ist gültig, wenn die Funktion wie folgt definiert ist?
```python
def calculate(a, b, operation="add"):
    # Funktionsinhalt hier
```
- [ ] `calculate()`
- [ ] `calculate(operation="multiply")`
- [x] `calculate(5, 3, operation="multiply")`
- [ ] `calculate(a=5, 3, operation="multiply")`

---
topic: "Funktionen"
subtopic: "Standardparameter"
level: "easy"
explanation: "Standardparameter in Python sind Parameter, denen in der Funktionsdefinition ein Standardwert zugewiesen wird. Dieser Wert wird verwendet, wenn beim Funktionsaufruf kein entsprechendes Argument übergeben wird. In der Funktionsdefinition `def greet(name, message=\"Hallo\", language=\"de\")` haben `message` und `language` Standardwerte, während `name` keinen hat."
explanationWrong:
  - "`name` hat keinen Standardwert und ist daher kein Standardparameter."
  - "Nur `message` und `language` haben Standardwerte."
  - "Ein Standardparameter ist ein Parameter mit einem Standardwert, nicht jeder Parameter in einer Funktion."
---
### Frage 11: Was wird in der folgenden Funktionsdefinition als Standardparameter bezeichnet?
```python
def greet(name, message="Hallo", language="de"):
    # Funktionsinhalt hier
```
- [ ] `name`
- [ ] `message` und `name`
- [x] `message` und `language`
- [ ] Alle drei Parameter sind Standardparameter

---
topic: "Funktionen"
subtopic: "Veränderliche Standardparameter"
level: "hard"
explanation: "Wenn ein veränderliches Objekt (wie eine Liste oder ein Dictionary) als Standardparameter verwendet wird, wird dieses Objekt nur einmal beim Definieren der Funktion erstellt, nicht bei jedem Aufruf. Das bedeutet, dass Änderungen an diesem Objekt bei einem Funktionsaufruf auch bei nachfolgenden Aufrufen sichtbar sind. Dies kann zu unerwartetem Verhalten führen, wenn man annimmt, dass bei jedem Aufruf ein neues Objekt erstellt wird."
explanationWrong:
  - "Die Funktion generiert keinen Fehler, auch wenn dies eine häufige Fallstricke ist."
  - "Die korrekte Erklärung ist, dass das Objekt nur einmal erstellt wird, nicht bei jedem Aufruf."
  - "Die Syntax ist in Python erlaubt, obwohl sie zu unerwünschtem Verhalten führen kann."
---
### Frage 12: Was passiert, wenn ein Standardparameter als veränderliches Objekt (z.B. eine Liste) definiert wird?
- [ ] Die Funktion generiert einen Fehler, da Standardparameter immer unveränderlich sein müssen
- [x] Das Objekt wird beim ersten Aufruf der Funktion erstellt und bei nachfolgenden Aufrufen wiederverwendet
- [ ] Bei jedem Funktionsaufruf wird ein neues Objekt erstellt
- [ ] Diese Syntax ist in Python nicht erlaubt

---
topic: "Funktionen"
subtopic: "Scope"
level: "medium"
explanation: "In Python haben Variablen, die innerhalb einer Funktion definiert werden, einen lokalen Gültigkeitsbereich (local scope). Das bedeutet, dass sie nur innerhalb dieser Funktion existieren und von außerhalb nicht zugänglich sind. Nach dem Ende der Funktion werden lokale Variablen normalerweise aus dem Speicher entfernt."
explanationWrong:
  - "Lokale Variablen sind nicht global für das gesamte Programm zugänglich, sondern nur innerhalb der Funktion."
  - "Der Gültigkeitsbereich hängt nicht vom Variablentyp ab."
  - "Der Gültigkeitsbereich hängt nicht vom Variablennamen ab."
---
### Frage 13: Was ist der Gültigkeitsbereich (Scope) einer Variablen, die innerhalb einer Funktion definiert ist?
- [x] Lokal zur Funktion, außerhalb nicht zugänglich
- [ ] Global für das gesamte Programm
- [ ] Abhängig vom Variablentyp
- [ ] Abhängig vom Variablennamen

---
topic: "Funktionen"
subtopic: "global Keyword"
level: "medium"
explanation: "Das `global`-Schlüsselwort in Python ermöglicht den Zugriff auf eine globale Variable innerhalb einer Funktion, um ihren Wert zu ändern. Ohne dieses Schlüsselwort würde eine Zuweisung an eine Variable mit demselben Namen innerhalb der Funktion eine neue lokale Variable erstellen, anstatt die globale Variable zu ändern."
explanationWrong:
  - "Das `global`-Schlüsselwort macht die Variable nicht in allen Modulen verfügbar, sondern nur innerhalb des aktuellen Moduls."
  - "Es importiert keine globale Variable aus einem anderen Modul, dafür würde man import-Anweisungen verwenden."
  - "Es macht nicht alle Variablen in einer Funktion global, sondern nur die spezifisch benannten."
---
### Frage 14: Was macht das `global`-Schlüsselwort in Python?
- [ ] Es definiert eine Variable, die in allen Modulen verfügbar ist
- [x] Es ermöglicht das Ändern einer globalen Variable innerhalb einer Funktion
- [ ] Es importiert eine globale Variable aus einem anderen Modul
- [ ] Es macht alle Variablen in einer Funktion global

---
topic: "Funktionen"
subtopic: "Lokale vs. Globale Variablen"
level: "medium"
explanation: "Der Code definiert eine globale Variable `x` mit dem Wert 10. In der Funktion `test_function` wird eine lokale Variable `x` mit dem Wert 20 definiert, die die globale Variable innerhalb der Funktion überdeckt (shadowing). Bei der Ausführung der Funktion wird der Wert der lokalen Variable ausgegeben (20), aber die globale Variable bleibt unverändert (10)."
explanationWrong:
  - "Die lokale Variable x in der Funktion hat keinen Einfluss auf die globale Variable x."
  - "Die lokale Variable x in der Funktion überschreibt nicht die globale Variable außerhalb der Funktion."
  - "Es wird kein Fehler ausgelöst, da es erlaubt ist, lokale Variablen mit demselben Namen wie globale Variablen zu definieren."
---
### Frage 15: Was ist die Ausgabe des folgenden Codes?
```python
x = 10

def test_function():
    x = 20
    print(x)

test_function()
print(x)
```
- [ ] 10, 10
- [ ] 20, 20
- [x] 20, 10
- [ ] Ein Fehler wird ausgelöst

---
topic: "Funktionen"
subtopic: "nonlocal Keyword"
level: "hard"
explanation: "Das `nonlocal`-Schlüsselwort in Python ermöglicht den Zugriff auf und die Änderung von Variablen aus dem umschließenden (enclosing) Gültigkeitsbereich, aber nicht aus dem globalen Bereich. Es wird hauptsächlich in verschachtelten Funktionen verwendet, um auf Variablen aus der äußeren Funktion zuzugreifen und sie zu ändern."
explanationWrong:
  - "Das `nonlocal`-Schlüsselwort macht die Variable nicht in allen Funktionen verfügbar."
  - "Es importiert keine Variable aus einem anderen Modul."
  - "Es verhindert nicht die Sichtbarkeit der Variable außerhalb der Funktion; es ermöglicht vielmehr den Zugriff auf eine Variable aus einem umschließenden Bereich."
---
### Frage 16: Was macht das `nonlocal`-Schlüsselwort in Python?
- [ ] Es definiert eine Variable, die in allen Funktionen verfügbar ist
- [ ] Es importiert eine Variable aus einem anderen Modul
- [x] Es ermöglicht das Ändern einer Variable aus dem umschließenden (nicht globalen) Gültigkeitsbereich
- [ ] Es verhindert, dass eine Variable außerhalb der Funktion sichtbar ist

---
topic: "Funktionen"
subtopic: "Lambda Functions"
level: "medium"
explanation: "Eine Lambda-Funktion in Python ist eine anonyme Funktion, die mit dem Schlüsselwort `lambda` definiert wird. Sie besteht aus einem einzigen Ausdruck und kann dort verwendet werden, wo ein Funktionsobjekt erwartet wird, ohne eine separate Funktionsdefinition mit `def` erstellen zu müssen. Lambda-Funktionen sind besonders nützlich für kurze, einmalige Funktionen."
explanationWrong:
  - "Lambda-Funktionen können zwar mehrere Werte zurückgeben (als Tupel), aber das ist nicht ihr Hauptmerkmal."
  - "Lambda-Funktionen werden nicht automatisch ausgeführt; sie werden wie normale Funktionen aufgerufen."
  - "Lambda-Funktionen sind nicht auf mathematische Operationen beschränkt, sondern können für jeden Ausdruck verwendet werden."
---
### Frage 17: Was ist eine Lambda-Funktion in Python?
- [ ] Eine Funktion, die mehrere Rückgabewerte hat
- [x] Eine anonyme Funktion, die in einem Ausdruck definiert wird
- [ ] Eine Funktion, die automatisch ausgeführt wird
- [ ] Eine integrierte Python-Funktion für mathematische Operationen

---
topic: "Funktionen"
subtopic: "Lambda Functions"
level: "medium"
explanation: "Lambda-Funktionen in Python bestehen aus einem einzigen Ausdruck, dessen Wert zurückgegeben wird. Im Gegensatz zu normalen Funktionen mit `def` können Lambda-Funktionen keine Anweisungsblöcke oder mehrere Anweisungen enthalten. Sie sind auf einen einzelnen Ausdruck beschränkt, was ihre Verwendung auf einfache Operationen beschränkt."
explanationWrong:
  - "Lambda-Funktionen können keine mehreren Anweisungen enthalten, nur einen einzelnen Ausdruck."
  - "Lambda-Funktionen können mehrere Parameter haben, genau wie normale Funktionen."
  - "Lambda-Funktionen können auch ohne Parameter definiert werden, z.B. `lambda: 42`."
---
### Frage 18: Welche der folgenden Aussagen ist richtig für Lambda-Funktionen in Python?
- [ ] Lambda-Funktionen können mehrere Anweisungen enthalten
- [ ] Lambda-Funktionen können nur einen Parameter haben
- [x] Lambda-Funktionen bestehen aus einem einzigen Ausdruck
- [ ] Lambda-Funktionen können keine Parameter haben

---
topic: "Funktionen"
subtopic: "Lambda Syntax"
level: "medium"
explanation: "Die korrekte Syntax für eine Lambda-Funktion in Python ist `lambda parameter: ausdruck`. In diesem Fall berechnet `lambda x: x**2` das Quadrat des Parameters x. Die Funktion nimmt einen Wert entgegen, quadriert ihn und gibt das Ergebnis zurück, alles in einer kompakten einzeiligen Notation."
explanationWrong:
  - "Der Pfeiloperator `=>` wird in Python nicht für Lambda-Funktionen verwendet (er wird in JavaScript verwendet)."
  - "Diese Syntax mit geschweiften Klammern und Semikolon ähnelt JavaScript oder anderen Sprachen, nicht Python."
  - "Diese Syntax mit einer einfachen Zuweisung würde nicht funktionieren; Lambda-Funktionen müssen mit `lambda` beginnen."
---
### Frage 19: Was ist die korrekte Syntax für eine Lambda-Funktion, die das Quadrat einer Zahl berechnet?
- [x] `lambda x: x**2`
- [ ] `lambda x => x**2`
- [ ] `lambda(x) { return x**2; }`
- [ ] `lambda = x**2`

---
topic: "Funktionen"
subtopic: "Module"
level: "easy"
explanation: "In Python wird ein Modul mit dem Schlüsselwort `import` importiert. Dies stellt alle Funktionen, Klassen und Variablen des Moduls zur Verfügung, die dann über die Notation `modulname.elementname` zugänglich sind. Module sind ein wichtiger Mechanismus zur Organisation und Wiederverwendung von Code in Python."
explanationWrong:
  - "Das Schlüsselwort `include` wird in anderen Sprachen wie C/C++ verwendet, nicht in Python."
  - "Das Schlüsselwort `require` wird in Sprachen wie Node.js/JavaScript verwendet, nicht in Python."
  - "Das Schlüsselwort `using` wird in Sprachen wie C# verwendet, nicht in Python."
---
### Frage 20: Wie importiert man ein Modul in Python?
- [ ] `include module`
- [ ] `require module`
- [x] `import module`
- [ ] `using module`

---
topic: "Funktionen"
subtopic: "Import Syntax"
level: "medium"
explanation: "Die Anweisung `from math import sin, cos` importiert nur die spezifischen Funktionen `sin` und `cos` aus dem `math`-Modul. Dies ermöglicht es, diese Funktionen direkt ohne den Modulnamenspräfix zu verwenden (z.B. `sin(0)` statt `math.sin(0)`). Dies kann den Code lesbarer machen, birgt aber die Gefahr von Namenskonflikten."
explanationWrong:
  - "Diese Anweisung importiert nicht das gesamte Modul; dafür würde man `import math` verwenden."
  - "Die Anweisung erstellt keine Aliase; dafür würde man `import math as m` verwenden."
  - "Die Anweisung importiert nur die angegebenen Funktionen, nicht 'alle außer'."
---
### Frage 21: Was bewirkt die folgende Import-Anweisung?
```python
from math import sin, cos
```
- [ ] Importiert das gesamte math-Modul
- [x] Importiert nur die Funktionen sin und cos aus dem math-Modul
- [ ] Erstellt Aliase für das math-Modul
- [ ] Importiert alle Funktionen außer sin und cos aus dem math-Modul

---
topic: "Funktionen"
subtopic: "Module Aliases"
level: "medium"
explanation: "Ein Modulalias in Python wird mit der Syntax `import module as alias` erstellt. Dies ermöglicht es, ein Modul unter einem anderen, typischerweise kürzeren Namen zu verwenden. Dies ist besonders nützlich für Module mit langen Namen oder um Namenskonflikte zu vermeiden."
explanationWrong:
  - "Die beiden ersten Antwortmöglichkeiten sind identisch und beide korrekt."
  - "Die Syntax `import module with alias` ist in Python nicht gültig."
  - "Die Syntax `from module import alias` würde versuchen, ein Element namens 'alias' aus dem Modul zu importieren, nicht ein Alias für das Modul selbst zu erstellen."
---
### Frage 22: Wie importiert man ein Modul mit einem Alias?
- [ ] `import module as alias`
- [x] `import module as alias`
- [ ] `import module with alias`
- [ ] `from module import alias`

---
topic: "Funktionen"
subtopic: "Import Varianten"
level: "medium"
explanation: "Bei Verwendung von `import module` wird das gesamte Modul importiert, aber seine Elemente sind nur über die Notation `module.element` zugänglich. Dies verhindert Namenskonflikte mit lokalen Variablen oder Funktionen, die denselben Namen haben könnten. Bei `from module import *` werden alle Elemente des Moduls direkt in den aktuellen Namensraum importiert, was zu Namenskonflikten führen kann."
explanationWrong:
  - "Die Geschwindigkeit ist kein wesentlicher Unterschied zwischen diesen Importarten."
  - "Beide Varianten importieren denselben Code, nur die Zugriffsweise unterscheidet sich."
  - "Der Hauptunterschied liegt in der Handhabung des Namensraums, nicht in der Geschwindigkeit oder Menge des importierten Codes."
---
### Frage 23: Was ist der Vorteil der Verwendung von `import module` gegenüber `from module import *`?
- [ ] Die erste Variante ist schneller
- [ ] Die erste Variante importiert weniger Code
- [x] Die erste Variante vermeidet Namenskonflikte im aktuellen Namensraum
- [ ] Es gibt keinen Unterschied zwischen den beiden Varianten

---
topic: "Funktionen"
subtopic: "Module Inspection"
level: "medium"
explanation: "Die Funktion `dir(module)` in Python gibt eine Liste aller Namen zurück, die in dem angegebenen Modul definiert sind. Dies umfasst Funktionen, Klassen, Variablen und andere Module, die im Modul importiert wurden. Diese Funktion ist nützlich, um die verfügbaren Elemente eines Moduls zu erkunden, besonders bei unbekannten oder wenig dokumentierten Modulen."
explanationWrong:
  - "Es gibt keine `list(module)`-Funktion in Python, die diese Aufgabe erfüllt."
  - "Die `help(module)`-Funktion zeigt die Dokumentation des Moduls an, nicht eine Liste aller verfügbaren Namen."
  - "Es gibt keine `names(module)`-Funktion in Python, die diese Aufgabe erfüllt."

---
### Frage 24: Welche Funktion zeigt alle verfügbaren Namen in einem Modul an?
- [ ] `list(module)`
- [ ] `help(module)`
- [x] `dir(module)`
- [ ] `names(module)`

---
topic: "Funktionen"
subtopic: "Modulares Programmieren"
level: "medium"
explanation: "Der `if __name__ == \"__main__\":`-Block in Python dient dazu, Code zu identifizieren, der nur ausgeführt werden soll, wenn die Datei direkt als Skript ausgeführt wird, nicht wenn sie als Modul in ein anderes Programm importiert wird. Dies ist eine häufig verwendete Technik, um Skripts sowohl als eigenständige Programme als auch als wiederverwendbare Module zu gestalten."
explanationWrong:
  - "Dieser Block definiert nicht einfach den Hauptteil des Programms; er bedingt die Ausführung des Codes auf direkte Skriptausführung."
  - "Dieser Block überprüft nicht, ob das Programm mit Administratorrechten ausgeführt wird; dafür würden andere Mechanismen verwendet."
  - "Python hat keine formale 'Hauptfunktion' wie manche andere Sprachen; dieser Block dient einem ähnlichen Zweck, ist aber nicht dasselbe."
---
### Frage 25: Was ist der Zweck des `if __name__ == "__main__":`-Blocks in Python?
- [ ] Er definiert den Hauptteil des Programms, der immer ausgeführt wird
- [x] Er ermöglicht, dass Code nur ausgeführt wird, wenn die Datei direkt ausgeführt wird, nicht wenn sie als Modul importiert wird
- [ ] Er überprüft, ob das Programm mit Administratorrechten ausgeführt wird
- [ ] Er kennzeichnet den Anfang der Hauptfunktion

---
topic: "Funktionen"
subtopic: "Exceptions"
level: "medium"
explanation: "Die grundlegende Struktur für die Ausnahmebehandlung in Python besteht aus `try`, `except`, optional `else` und optional `finally`. Im `try`-Block steht der Code, der eine Ausnahme auslösen könnte. Der `except`-Block fängt spezifische Ausnahmen ab. Der optionale `else`-Block wird ausgeführt, wenn keine Ausnahme auftritt. Der optionale `finally`-Block wird immer ausgeführt, unabhängig davon, ob eine Ausnahme auftritt oder nicht."
explanationWrong:
  - "Python verwendet nicht `catch` für die Ausnahmebehandlung, sondern `except`."
  - "Python verwendet `except` statt `catch` und kennt kein `finally` ohne `except`."
  - "Python verwendet nicht `attempt` oder `otherwise`, sondern `try` und `else`."
---
### Frage 26: Was ist die grundlegende Struktur für die Ausnahmebehandlung in Python?
- [ ] `catch-try-finally`
- [x] `try-except-else-finally`
- [ ] `try-catch-finally`
- [ ] `attempt-except-otherwise`

---
topic: "Funktionen"
subtopic: "Exceptions"
level: "medium"
explanation: "Im `except`-Block wird der Code definiert, der ausgeführt werden soll, wenn eine bestimmte Ausnahme im zugehörigen `try`-Block auftritt. Hier kann spezifiziert werden, welche Art von Ausnahme abgefangen werden soll (z.B. `ValueError`, `TypeError`), und es kann festgelegt werden, was in diesem Fall geschehen soll (z.B. Fehlermeldung ausgeben, alternative Aktion ausführen)."
explanationWrong:
  - "Code, der nach der Ausnahmebehandlung ausgeführt werden soll, gehört in den `finally`-Block, nicht in den `except`-Block."
  - "Code, der keine Ausnahmen auslösen darf, wird normalerweise nicht explizit gekennzeichnet; das gesamte Programm sollte fehlerfrei sein."
  - "Code, der ausgeführt werden soll, wenn keine Ausnahme auftritt, gehört in den `else`-Block, nicht in den `except`-Block."
---
### Frage 27: Was wird im `except`-Block einer try-except-Struktur definiert?
- [ ] Der Code, der ausgeführt werden soll, nachdem eine Ausnahme behandelt wurde
- [x] Der Code, der ausgeführt werden soll, wenn eine bestimmte Ausnahme auftritt
- [ ] Der Code, der unter keinen Umständen eine Ausnahme auslösen darf
- [ ] Der Code, der ausgeführt werden soll, wenn keine Ausnahme auftritt

---
topic: "Funktionen"
subtopic: "Exceptions"
level: "medium"
explanation: "In diesem Code wird zuerst 'A' ausgegeben. Dann tritt ein ZeroDivisionError auf (Division durch Null), weshalb der `except`-Block ausgeführt wird und 'C' ausgegeben wird. Schließlich wird der `finally`-Block ausgeführt und 'D' ausgegeben. Der Code nach der Division durch Null im `try`-Block (print('B')) wird nicht ausgeführt, da der Kontrollfluss durch die Ausnahme unterbrochen wird."
explanationWrong:
  - "Der print('B')-Befehl wird nicht ausgeführt, da vorher eine Ausnahme auftritt."
  - "Sowohl A als auch D werden ausgegeben, aber durch die Ausnahme wird auch C ausgegeben."
  - "A wird definitiv ausgegeben, bevor die Ausnahme auftritt; C und D werden ebenfalls ausgegeben."
---
### Frage 28: Was ist die Ausgabe des folgenden Codes?
```python
try:
    print("A")
    1/0
    print("B")
except ZeroDivisionError:
    print("C")
finally:
    print("D")
```
- [ ] A B D
- [x] A C D
- [ ] A D
- [ ] C D

---
topic: "Funktionen"
subtopic: "Exceptions"
level: "medium"
explanation: "Der `finally`-Block in einer try-except-Struktur enthält Code, der immer ausgeführt wird, unabhängig davon, ob eine Ausnahme auftritt oder nicht. Dies ist nützlich für Aufräumarbeiten wie das Schließen von Dateien, Datenbankverbindungen oder das Freigeben von Ressourcen, die auf jeden Fall durchgeführt werden müssen, auch wenn Fehler auftreten."
explanationWrong:
  - "Der `finally`-Block wird auch ausgeführt, wenn eine Ausnahme auftritt, nicht nur wenn keine auftritt."
  - "Der `finally`-Block hat nichts mit dem Abfangen von Ausnahmen zu tun; dafür ist der `except`-Block zuständig."
  - "Der `finally`-Block wird nach dem `try`- und gegebenenfalls dem `except`-Block ausgeführt, nicht vor dem `try`-Block."
---
### Frage 29: Was ist der Zweck des `finally`-Blocks in einer try-except-Struktur?
- [ ] Er wird nur ausgeführt, wenn keine Ausnahme auftritt
- [ ] Er definiert die Standardaktion, wenn keine `except`-Klausel die Ausnahme abfängt
- [x] Er wird immer ausgeführt, unabhängig davon, ob eine Ausnahme auftritt oder nicht
- [ ] Er enthält Code, der vor dem `try`-Block ausgeführt wird

---
topic: "Funktionen"
subtopic: "Exceptions"
level: "medium"
explanation: "Der `else`-Block in einer try-except-Struktur wird nur ausgeführt, wenn im `try`-Block keine Ausnahme auftritt. Dies ermöglicht eine klare Trennung zwischen dem Code, der eine Ausnahme auslösen könnte (im `try`-Block), und dem Code, der nur ausgeführt werden soll, wenn alles glatt läuft (im `else`-Block)."
explanationWrong:
  - "Der `else`-Block wird nur ausgeführt, wenn keine Ausnahme auftritt, nicht unter allen Umständen."
  - "Der `else`-Block wird nur ausgeführt, wenn keine Ausnahme auftritt, nicht wenn eine auftritt."
  - "Der `else`-Block dient nicht dazu, alternative Code-Pfade für verschiedene Ausnahmetypen zu definieren; dafür würde man mehrere `except`-Blöcke verwenden."
---
### Frage 30: Was ist der Zweck des `else`-Blocks in einer try-except-Struktur?
- [ ] Er wird immer ausgeführt, unabhängig davon, ob eine Ausnahme auftritt oder nicht
- [x] Er wird nur ausgeführt, wenn keine Ausnahme im `try`-Block auftritt
- [ ] Er wird nur ausgeführt, wenn eine Ausnahme im `try`-Block auftritt
- [ ] Er enthält alternative Code-Pfade für verschiedene Ausnahmetypen

---
topic: "Funktionen"
subtopic: "Exceptions"
level: "medium"
explanation: "Python hat viele eingebaute Ausnahmetypen, darunter `ValueError`, `TypeError` und `IndexError`. `ErrorException` ist jedoch keine eingebaute Ausnahme in Python. Eingebaute Ausnahmen umfassen typische Fehler wie Typfehler, arithmetische Fehler, I/O-Fehler usw."
explanationWrong:
  - "`ValueError` ist eine eingebaute Ausnahme, die ausgelöst wird, wenn eine Funktion ein Argument mit dem richtigen Typ, aber einem ungültigen Wert erhält."
  - "`TypeError` ist eine eingebaute Ausnahme, die ausgelöst wird, wenn eine Operation auf einem ungeeigneten Typ ausgeführt wird."
  - "`IndexError` ist eine eingebaute Ausnahme, die ausgelöst wird, wenn ein Sequenzindex außerhalb des gültigen Bereichs liegt."
---
### Frage 31: Welche der folgenden ist KEINE eingebaute Ausnahme in Python?
- [ ] `ValueError`
- [ ] `TypeError`
- [ ] `IndexError`
- [x] `ErrorException`

---
topic: "Funktionen"
subtopic: "Exceptions"
level: "medium"
explanation: "In Python definiert man eine benutzerdefinierte Ausnahme, indem man eine neue Klasse erstellt, die von der Klasse `Exception` (oder einer spezifischeren Ausnahmeklasse) erbt. Dies ermöglicht es, spezifische Ausnahmetypen für bestimmte Fehlerszenarien in der eigenen Anwendung zu erstellen und angemessen darauf zu reagieren."
explanationWrong:
  - "Funktionsdekoratoren mit `@exception` werden nicht für die Definition von Ausnahmen verwendet."
  - "Obwohl man mit `raise` eine Ausnahme auslösen kann, definiert man damit keine neue Ausnahmeklasse."
  - "Es gibt kein `custom_exceptions`-Modul in der Python-Standardbibliothek für diesen Zweck."
---
### Frage 32: Wie definiert man eine benutzerdefinierte Ausnahme in Python?
- [ ] Durch Dekorieren einer Funktion mit `@exception`
- [x] Durch Erstellen einer Klasse, die von `Exception` erbt
- [ ] Durch Verwenden des `raise`-Schlüsselworts mit einem benutzerdefinierten String
- [ ] Durch Importieren des `custom_exceptions`-Moduls

---
topic: "Funktionen"
subtopic: "Exceptions"
level: "medium"
explanation: "In Python wird das Schlüsselwort `raise` verwendet, um explizit eine Ausnahme auszulösen. Die Syntax lautet `raise ExceptionType(\"Nachricht\")`, wobei `ExceptionType` einer der eingebauten oder benutzerdefinierten Ausnahmetypen ist. Dies ermöglicht es, auf Fehler oder unerwartete Bedingungen im Code zu reagieren."
explanationWrong:
  - "Python verwendet nicht `throw` zum Auslösen von Ausnahmen (dieses Schlüsselwort wird in Sprachen wie Java/C# verwendet)."
  - "Das Schlüsselwort `except` wird zum Abfangen von Ausnahmen verwendet, nicht zum Auslösen."
  - "Python hat kein `error`-Schlüsselwort für die Ausnahmebehandlung."
---
### Frage 33: Was ist die korrekte Syntax, um eine Ausnahme in Python auszulösen?
- [ ] `throw Exception("Fehlermeldung")`
- [ ] `except Exception("Fehlermeldung")`
- [x] `raise Exception("Fehlermeldung")`
- [ ] `error Exception("Fehlermeldung")`

---
topic: "Funktionen"
subtopic: "Exceptions"
level: "medium"
explanation: "Um mehrere Ausnahmetypen in einem einzigen `except`-Block abzufangen, umschließt man die Ausnahmetypen mit Klammern und trennt sie durch Kommas: `except (ExceptionType1, ExceptionType2):`. Diese Syntax erlaubt es, denselben Fehlerbehandlungscode für verschiedene Arten von Ausnahmen zu verwenden."
explanationWrong:
  - "Die Syntax mit Komma ohne Klammern war in älteren Python-Versionen gültig, wird aber jetzt nicht mehr empfohlen und ist in Python 3 veraltet."
  - "Eckige Klammern werden in Python für Listen verwendet, nicht für Gruppen von Ausnahmetypen."
  - "Das Schlüsselwort `and` wird in Python für logische Operationen verwendet, nicht für die Kombination von Ausnahmetypen."
---
### Frage 34: Wie fängt man mehrere Ausnahmetypen in einem einzigen `except`-Block ab?
- [ ] `except ValueError, TypeError:`
- [x] `except (ValueError, TypeError):`
- [ ] `except [ValueError, TypeError]:`
- [ ] `except ValueError and TypeError:`

---
topic: "Funktionen"
subtopic: "Exceptions"
level: "medium"
explanation: "Der Code versucht, den String 'abc' in eine Ganzzahl zu konvertieren, was zu einem `ValueError` führt. Da die erste `except`-Klausel `ValueError` abfängt und die Ausnahme der Variablen `e` zuweist, wird 'A:' gefolgt von der Fehlermeldung ausgegeben. Die Fehlermeldung erklärt, dass 'abc' keine gültige Darstellung einer Ganzzahl ist."
explanationWrong:
  - "Der Fehler ist ein `ValueError`, kein `TypeError`, daher wird nicht 'B' ausgegeben."
  - "Da der Fehler bereits von der ersten `except`-Klausel abgefangen wird, wird die allgemeine `except`-Klausel nicht ausgeführt."
  - "Der Code enthält eine gültige `except`-Klausel für `ValueError`, daher wird kein Fehler ausgelöst."
---
### Frage 35: Was ist die Ausgabe des folgenden Codes?
```python
try:
    x = int("abc")
except ValueError as e:
    print("A:", e)
except TypeError:
    print("B")
except:
    print("C")
```
- [x] A: invalid literal for int() with base 10: 'abc'
- [ ] B
- [ ] C
- [ ] Ein Fehler wird ausgelöst

---
topic: "Funktionen"
subtopic: "Exceptions"
level: "medium"
explanation: "Das Schlüsselwort `as` in einem `except`-Block wird verwendet, um die abgefangene Ausnahme einer Variablen zuzuweisen. Dies ermöglicht es, auf Informationen über die Ausnahme zuzugreifen, wie z.B. die Fehlermeldung oder andere Attribute, die für die Fehlerbehandlung nützlich sein können."
explanationWrong:
  - "Das Schlüsselwort `as` definiert keinen alternativen Code; es weist nur die Ausnahme einer Variablen zu."
  - "Das Schlüsselwort `as` definiert keinen Alias für den Ausnahmetyp; es weist die Ausnahmeinstanz einer Variablen zu."
  - "Das Schlüsselwort `as` ändert nicht das Verhalten der Ausnahmebehandlung; es bietet nur Zugriff auf die Ausnahmeinstanz."
---
### Frage 36: Wofür wird das Schlüsselwort `as` in einem `except`-Block verwendet?
- [ ] Um einen alternativen Ausnahmebehandlungscode zu definieren
- [x] Um die gefangene Ausnahme einer Variablen zuzuweisen
- [ ] Um einen Alias für den Ausnahmetyp zu definieren
- [ ] Um das Ausnahmebehandlungsverhalten zu ändern

---
topic: "Funktionen"
subtopic: "Exceptions"
level: "medium"
explanation: "In Python erben alle Ausnahmen von der Basisklasse `BaseException`. Die meisten benutzerdefinierten Ausnahmen sollten jedoch von der Klasse `Exception` erben, die ihrerseits von `BaseException` erbt. Diese Hierarchie ermöglicht eine präzise Ausnahmebehandlung, da spezifische Ausnahmetypen gefangen werden können, während Ausnahmen, die von derselben Basisklasse erben, gemeinsame Verhaltensweisen teilen."
explanationWrong:
  - "Ausnahmen in Python haben eine hierarchische Struktur, keine flachen Beziehungen."
  - "Die Basisklasse für Ausnahmen in Python ist `BaseException`, nicht `Error`."
  - "Die Hierarchie ist in der Python-Standardbibliothek festgelegt und hängt nicht vom Fehlertyp ab."
---
### Frage 37: Was ist die Hierarchie der Ausnahmen in Python?
- [ ] Alle Ausnahmen sind eigenständig und haben keine Hierarchie
- [x] Alle Ausnahmen erben von der Basisklasse `BaseException`
- [ ] Alle Ausnahmen erben von der Basisklasse `Error`
- [ ] Die Hierarchie hängt vom Typ des Fehlers ab

---
topic: "Funktionen"
subtopic: "Exceptions"
level: "medium"
explanation: "Die korrekte Verwendung von `try`, `except` und `finally` in Python folgt einer klaren Syntax: Der zu überwachende Code steht im `try`-Block, die Ausnahmebehandlung im `except`-Block (mit Angabe des Ausnahmetyps), und ein optionaler `finally`-Block enthält Code, der immer ausgeführt wird. Diese Struktur erlaubt eine robuste Fehlerbehandlung und sicheres Ressourcenmanagement."
explanationWrong:
  - "Python verwendet `except`, nicht `catch` für die Ausnahmebehandlung, und es gibt kein `endtry`."
  - "Python verwendet keine geschweiften Klammern für Codeblöcke, sondern Einrückung."
  - "Python verwendet Doppelpunkte nach den Schlüsselwörtern und benötigt kein explizites `end`."
---
### Frage 38: Welcher der folgenden Codeblöcke zeigt die korrekte Verwendung von `try`, `except` und `finally`?
- [ ] ```python
try:
    # Code
catch Exception:
    # Ausnahmebehandlung
endtry
```
- [ ] ```python
try {
    # Code
} except (Exception) {
    # Ausnahmebehandlung
}
```
- [x] ```python
try:
    # Code
except Exception:
    # Ausnahmebehandlung
finally:
    # Wird immer ausgeführt
```
- [ ] ```python
try
    # Code
except
    # Ausnahmebehandlung
end
```

---
topic: "Funktionen"
subtopic: "Exceptions"
level: "hard"
explanation: "Wenn im `finally`-Block eine Ausnahme auftritt, überschreibt diese jede frühere Ausnahme, die im `try`-Block oder `except`-Block aufgetreten sein könnte. Das bedeutet, dass die ursprüngliche Ausnahme verloren geht und nur die neue Ausnahme propagiert wird. Dies kann die Fehlersuche erschweren, da die eigentliche Ursache des Problems möglicherweise verborgen bleibt."
explanationWrong:
  - "Ausnahmen in einem `finally`-Block werden nicht ignoriert; sie überschreiben frühere Ausnahmen."
  - "Es gibt keinen automatischen Mechanismus, der Ausnahmen im `finally`-Block behandelt."
  - "Der `finally`-Block wird vollständig ausgeführt, aber wenn eine Ausnahme auftritt, kann der Code nach dem `finally`-Block nicht ausgeführt werden, es sei denn, die Ausnahme wird abgefangen."
---
### Frage 39: Was passiert, wenn in einem `finally`-Block eine Ausnahme auftritt?
- [ ] Die Ausnahme wird ignoriert
- [ ] Die Ausnahme wird automatisch behandelt
- [x] Die Ausnahme überschreibt jede frühere Ausnahme im `try`-Block
- [ ] Der `finally`-Block wird nicht vollständig ausgeführt

---
topic: "Funktionen"
subtopic: "Exceptions"
level: "medium"
explanation: "Die Ausnahme `KeyboardInterrupt` wird in Python ausgelöst, wenn der Benutzer das Programm mit der Tastenkombination Strg+C (oder einem ähnlichen Signal) unterbricht. Dies ist eine gängige Methode, um ein laufendes Programm, insbesondere solche mit Endlosschleifen oder langen Operationen, manuell zu beenden."
explanationWrong:
  - "Die Ausnahme hat nichts mit ungültigen Tastenkombinationen zu tun, sondern speziell mit der Programmunterbrechung durch den Benutzer."
  - "Die Ausnahme wird nicht bei jeder Tasteneingabe ausgelöst, sondern nur bei spezifischen Unterbrechungssignalen."
  - "`KeyboardInterrupt` ist eine Standard-Python-Ausnahme, die Teil der Standardbibliothek ist."
---
### Frage 40: Welche Anweisung ist korrekt über die Ausnahme `KeyboardInterrupt`?
- [ ] Sie wird ausgelöst, wenn eine ungültige Tastenkombination gedrückt wird
- [x] Sie wird ausgelöst, wenn der Benutzer das Programm mit Strg+C unterbricht
- [ ] Sie wird ausgelöst, wenn eine Taste gedrückt wird, während das Programm auf Eingabe wartet
- [ ] Sie ist keine Standard-Python-Ausnahme

---
topic: "Funktionen"
subtopic: "Höhere Ordnung"
level: "medium"
explanation: "Eine Funktion höherer Ordnung in Python ist eine Funktion, die andere Funktionen als Argumente annimmt oder Funktionen als Rückgabewerte liefert. Dieses Konzept ist ein grundlegendes Prinzip funktionaler Programmierung und ermöglicht flexible und wiederverwendbare Code-Muster wie map, filter und reduce."
explanationWrong:
  - "Die Anzahl der Parameter ist nicht entscheidend für die Definition einer Funktion höherer Ordnung."
  - "Methoden in Klassen sind nicht automatisch Funktionen höherer Ordnung."
  - "Rekursive Funktionen rufen sich selbst auf, sind aber nicht notwendigerweise Funktionen höherer Ordnung."
---
### Frage 41: Was ist eine Funktion höherer Ordnung in Python?
- [ ] Eine Funktion mit mehr als drei Parametern
- [x] Eine Funktion, die andere Funktionen als Argumente annimmt oder zurückgibt
- [ ] Eine Funktion, die in einer Klasse definiert ist
- [ ] Eine Funktion, die rekursiv ist

---
topic: "Funktionen"
subtopic: "Module Inspection"
level: "medium"
explanation: "Die Funktion `dir(module)` wird verwendet, um alle verfügbaren Attribute, Methoden und Funktionen eines Moduls anzuzeigen. Sie gibt eine Liste von Strings zurück, die die Namen der verfügbaren Elemente enthalten. Diese Funktion ist besonders nützlich, um die Schnittstelle eines unbekannten Moduls zu erkunden oder zu überprüfen, welche Funktionalitäten ein Modul bietet."
explanationWrong:
  - "Die Funktion `help(module)` zeigt die Dokumentation des Moduls an, nicht alle verfügbaren Methoden und Attribute."
  - "Es gibt keine Methode `module.methods()` in Python."
  - "Es gibt keine Funktion `list(module)`, die diese Aufgabe erfüllt."
---
### Frage 42: Wie kann man herausfinden, welche Methoden und Attribute ein importiertes Modul hat?
- [ ] `help(module)`
- [x] `dir(module)`
- [ ] `module.methods()`
- [ ] `list(module)`

---
topic: "Funktionen"
subtopic: "Pakete"
level: "medium"
explanation: "Ein Python-Paket ist ein Verzeichnis, das Python-Module enthält und eine spezielle Datei namens `__init__.py` beinhaltet (in neueren Python-Versionen ist diese Datei optional, aber traditionell erforderlich). Pakete ermöglichen die Organisation von Modulen in einer hierarchischen Struktur und bieten einen Namensraum, um Namenskonflikte zu vermeiden."
explanationWrong:
  - "Ein einfaches Verzeichnis mit Python-Dateien ohne `__init__.py` wird nicht als Paket erkannt (zumindest nicht in älteren Python-Versionen)."
  - "Ein Paket ist kein komprimiertes Archiv; das wäre eher ein Verteilungsformat wie eine .tar.gz- oder .whl-Datei."
  - "Ein Modul, das mehrere Klassen enthält, ist immer noch ein Modul, kein Paket."
---
### Frage 43: Was ist ein Python-Paket?
- [ ] Eine Sammlung von Python-Dateien in einem Verzeichnis
- [ ] Ein komprimiertes Archiv von Python-Modulen
- [x] Ein Verzeichnis, das Python-Module enthält und eine spezielle `__init__.py`-Datei
- [ ] Ein Modul, das mehrere Klassen enthält

---
topic: "Funktionen"
subtopic: "Import Syntax"
level: "medium"
explanation: "Die Syntax `import module.function` ist keine gültige Import-Anweisung in Python. Um eine spezifische Funktion aus einem Modul zu importieren, würde man `from module import function` verwenden. Die Syntax `import module.function` versucht, ein (Sub-)Modul namens `function` innerhalb des Moduls `module` zu importieren, nicht eine Funktion."
explanationWrong:
  - "Die Syntax `import module` ist gültig und importiert das gesamte Modul."
  - "Die Syntax `from module import function` ist gültig und importiert nur die angegebene Funktion."
  - "Die Syntax `from module import *` ist gültig und importiert alle öffentlichen Namen aus dem Modul."
---
### Frage 44: Welches der folgenden Statements ist KEINE gültige Variation der import-Anweisung in Python?
- [ ] `import module`
- [ ] `from module import function`
- [ ] `from module import *`
- [x] `import module.function`

---
topic: "Funktionen"
subtopic: "Closure"
level: "hard"
explanation: "Der Code definiert eine äußere Funktion `outer()`, die eine lokale Variable `x = 1` hat und eine innere Funktion `inner()` definiert. Die innere Funktion verwendet das Schlüsselwort `nonlocal`, um anzuzeigen, dass sie die Variable `x` aus dem umgebenden Gültigkeitsbereich verwenden möchte. Sie ändert dann `x` auf 2 und gibt 'Inner: 2' aus. Danach wird der geänderte Wert von `x` auch in der äußeren Funktion sichtbar, daher gibt `outer()` 'Outer: 2' aus."
explanationWrong:
  - "Ohne das `nonlocal`-Schlüsselwort würde `x` in der inneren Funktion eine lokale Variable sein und die äußere Variable bliebe unverändert."
  - "Das `nonlocal`-Schlüsselwort ermöglicht die Änderung der Variable im äußeren Gültigkeitsbereich, daher wird auch 'Outer: 2' ausgegeben."
  - "Das `nonlocal`-Schlüsselwort ist eine gültige Python-Syntax und löst keinen Fehler aus."
---
### Frage 45: Was ist die Ausgabe des folgenden Codes?
```python
def outer():
    x = 1
    def inner():
        nonlocal x
        x = 2
        print("Inner:", x)
    inner()
    print("Outer:", x)

outer()
```
- [ ] Inner: 1, Outer: 1
- [ ] Inner: 2, Outer: 1
- [x] Inner: 2, Outer: 2
- [ ] Ein Fehler wird ausgelöst
---
topic: "Funktionen"
subtopic: "Funktionseigenschaften"
level: "medium"
explanation: "In Python sind Funktionen First-Class-Objekte, was bedeutet, dass sie vielseitig verwendet werden können: sie können innerhalb anderer Funktionen definiert werden (verschachtelte Funktionen), als Argumente an andere Funktionen übergeben werden (Callbacks), andere Funktionen zurückgeben (Closures) und sogar keinen Parameter haben. Die Flexibilität von Funktionen in Python ist ein mächtiges Feature, das funktionale Programmierparadigmen unterstützt."
explanationWrong:
  - "Funktionen können sehr wohl andere Funktionen zurückgeben, z.B. in Closures oder Factory-Funktionen."
  - "Verschachtelte Funktionen (Funktionen innerhalb von Funktionen) sind in Python gültig und nützlich."
  - "Funktionen als Parameter zu übergeben, ist ein grundlegendes Konzept in funktionaler Programmierung und in Python üblich."
---
### Frage 46: Welche der folgenden Aussagen zu Funktionen in Python ist NICHT korrekt?
- [ ] Funktionen können andere Funktionen zurückgeben
- [ ] Funktionen können innerhalb von anderen Funktionen definiert werden
- [ ] Funktionen können als Argumente an andere Funktionen übergeben werden
- [x] Funktionen müssen mindestens einen Parameter haben

---
topic: "Funktionen"
subtopic: "First-Class Functions"
level: "medium"
explanation: "In Python können Funktionen Variablen zugewiesen werden, genau wie andere Objekte (Zahlen, Strings, Listen usw.). Die korrekte Syntax dafür ist einfach `func_var = my_function` (ohne Klammern, da wir die Funktion selbst referenzieren wollen, nicht ihr Ergebnis). Dies ermöglicht es, Funktionen als Argumente zu übergeben, sie in Datenstrukturen zu speichern oder sie später aufzurufen."
explanationWrong:
  - "Es gibt keine `function`-Funktion in Python, die eine Funktion als Argument nimmt."
  - "Das `@`-Symbol wird für Dekoratoren verwendet, nicht um eine Funktion einer Variablen zuzuweisen."
  - "Diese Syntax würde versuchen, eine neue Funktion zu definieren, nicht eine bestehende Funktion einer Variablen zuzuweisen."
---
### Frage 47: Welches ist ein gültiger Weg, eine Funktion in Python zu einer Variablen zuzuweisen?
- [x] `func_var = my_function`
- [ ] `func_var = function(my_function)`
- [ ] `func_var = @my_function`
- [ ] `func_var = def my_function()`

---
topic: "Funktionen"
subtopic: "Module und Pakete"
level: "medium"
explanation: "In Python ist ein Modul eine einzelne Datei mit Python-Code, die Definitionen und Anweisungen enthält. Ein Paket hingegen ist ein Verzeichnis, das mehrere Module (Python-Dateien) enthält und eine spezielle `__init__.py`-Datei (optional in neueren Python-Versionen), die das Verzeichnis als Paket kennzeichnet. Diese Unterscheidung ermöglicht die Organisation von Code in einer hierarchischen Struktur."
explanationWrong:
  - "Module und Pakete sind verschiedene Konzepte in Python, nicht dasselbe."
  - "Diese Unterteilung basierend auf Inhalt ist nicht korrekt; sowohl Module als auch Pakete können Funktionen und Klassen enthalten."
  - "Module können Teil der Standardbibliothek sein oder extern, genau wie Pakete; dies ist kein Unterscheidungsmerkmal."
---
### Frage 48: Was ist der Unterschied zwischen einem Modul und einem Paket in Python?
- [ ] Es gibt keinen Unterschied, beide Begriffe beschreiben dasselbe
- [x] Ein Modul ist eine einzelne Python-Datei, ein Paket ist ein Verzeichnis mit Python-Dateien und einer __init__.py-Datei
- [ ] Ein Modul enthält nur Funktionen, ein Paket enthält Klassen und Objekte
- [ ] Module sind Teil der Standardbibliothek, Pakete müssen separat installiert werden

---
topic: "Funktionen"
subtopic: "Rekursion"
level: "medium"
explanation: "Die Funktion `factorial` berechnet die Fakultät einer Zahl, also das Produkt aller positiven ganzen Zahlen von 1 bis zur gegebenen Zahl. Sie verwendet Rekursion, das heißt, sie ruft sich selbst mit einem verkleinerten Argument auf. Für n=4 berechnet sie 4! = 4 × 3! = 4 × 3 × 2! = 4 × 3 × 2 × 1! = 4 × 3 × 2 × 1 = 24. Das Ergebnis ist also 24."
explanationWrong:
  - "Die Fakultät von 4 ist nicht 4, sondern 4! = 4 × 3 × 2 × 1 = 24."
  - "Die Fakultät von 4 ist nicht 12, sondern 4! = 4 × 3 × 2 × 1 = 24."
  - "Die Funktion ist korrekt definiert und löst keinen Fehler aus, solange n eine nicht-negative ganze Zahl ist."
---
### Frage 49: Was ist der Rückgabewert der folgenden Funktion, wenn sie mit `factorial(4)` aufgerufen wird?
```python
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n-1)
```
- [ ] 4
- [ ] 12
- [x] 24
- [ ] Ein Fehler wird ausgelöst

---
topic: "Funktionen"
subtopic: "Closure"
level: "hard"
explanation: "Der Code implementiert ein Closure, eine besondere Art von Funktion, die ihren Umgebungszustand 'speichert'. Die Funktion `counter()` gibt eine innere Funktion `increment()` zurück, die auf die Variable `count` aus dem äußeren Gültigkeitsbereich zugreift. Jeder Aufruf von `my_counter()` erhöht `count` um 1 und gibt den neuen Wert zurück. Da `count` seinen Wert zwischen den Aufrufen behält, gibt der Code nacheinander 1 und 2 aus."
explanationWrong:
  - "Die Funktion gibt nicht 0, 0 aus, da der Zähler bei jedem Aufruf inkrementiert wird."
  - "Die Funktion gibt nicht 0, 1 aus, da der Zähler vor der Rückgabe inkrementiert wird, also beginnt die Ausgabe bei 1."
  - "Das Konzept der Closures ist in Python gültig und löst keinen Fehler aus."
---
### Frage 50: Was ist die Ausgabe des folgenden Codes?
```python
def counter():
    count = 0
    def increment():
        nonlocal count
        count += 1
        return count
    return increment

my_counter = counter()
print(my_counter())
print(my_counter())
```
- [ ] 0, 0
- [ ] 0, 1
- [x] 1, 2
- [ ] Ein Fehler wird ausgelöst