---
# Test
---
topic: "Grundlagen"
subtopic: "Ein-/Ausgabe"
level: "medium"
explanation: "Der sep-Parameter der print()-Funktion bestimmt das Trennzeichen zwischen den Argumenten."
explanationWrong:
  - "Ohne sep-Parameter würden Leerzeichen eingefügt werden."
  - "Der Bindestrich wird nicht als Trennzeichen verwendet, es sei denn, er wird explizit angegeben."
  - "Ohne jegliches Trennzeichen würden die Wörter zusammengefügt."
---
### Frage 12: Was ist die Ausgabe des folgenden Python-Codes?
```python
print("Python", "ist", "cool", sep="_")
```
- [ ] Python ist cool
- [x] Python_ist_cool
- [ ] Python-ist-cool
- [ ] Pythonistcool
