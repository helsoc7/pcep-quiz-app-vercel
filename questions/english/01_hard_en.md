---
# Python Quiz with Metadata (Part 2)

---
topic: "Grundlagen"
subtopic: "String-Operationen"
level: "easy"
explanation: "In Python, a string can be multiplied by a number to repeat it that many times. The operator + concatenates strings. Therefore, 3 * 'abc' + 'def' produces the string 'abcabcabcdef'."
explanationWrong:
  - "A multiplication like 'abc' * 3 creates a repetition, not 'abc3'."
  - "The formatting does not add a numeric prefix to the strings."
  - "The operator * repeats the string, it does not convert it to another form."
---
### Question 1: What is the result of the following expression in Python?
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
explanation: "The pass statement is a placeholder that performs no action. It is used when a statement is syntactically required but no action should be performed, e.g., in empty functions or as a placeholder in conditions and loops."
explanationWrong:
  - "pass is not used to pass values between functions."
  - "To skip the current iteration in a loop, continue is used, not pass."
  - "To end program execution, exit() or return is used, not pass."
---
### Question 2: What is the main purpose of the `pass` statement in Python?
- [ ] To pass a value from one function to another
- [ ] To skip the current iteration in a loop
- [x] To serve as a placeholder when a statement is syntactically required but no action is needed
- [ ] To end program execution

---
topic: "Funktionen"
subtopic: "Parameterübergabe"
level: "easy"
explanation: "In Python, default parameter values are set using an equals sign without spaces: param=default_value. This sets a default value that is used when no value is specified for this parameter when calling the function."
explanationWrong:
  - "Spaces around the equals sign are not standard in function definitions for default values."
  - "The colon is used for type annotations, not for default values."
  - "The arrow operator <- is not used for parameter declarations in Python."
---
### Question 3: Which of the following options is the correct method to define a function with a default parameter value?
- [ ] `def function(param = default_value):`
- [x] `def function(param=default_value):`
- [ ] `def function(param:default_value):`
- [ ] `def function(param<-default_value):`

---
topic: "Datenstrukturen"
subtopic: "Listen-Operationen"
level: "medium"
explanation: "The append() method adds an element to the end of a list. In this case, [40, 50] is added as a single element to the numbers list, increasing the length of the list to 4."
explanationWrong:
  - "The append() method adds a single element, not the individual elements of a list."
  - "The list originally had 3 elements and after calling append() it has 4 elements."
  - "Calling append() with a list as an argument is valid and does not result in an error."
---
### Question 4: What will be the output of the following code?
```python
numbers = [10, 20, 30]
numbers.append([40, 50])
print(len(numbers))
```
- [ ] 5
- [x] 4
- [ ] 3
- [ ] An error will be raised

---
topic: "Grundlagen"
subtopic: "Variablenbereich"
level: "medium"
explanation: "In Python, variables in the global scope can be accessed from any function. However, to modify a global variable from a function, the 'global' keyword must be used."
explanationWrong:
  - "Without the 'global' keyword, you can read global variables within a function, but not modify them."
  - "Global variables are accessible from functions, although with limitations on modification."
  - "Modules have separate global scopes, but they can be made accessible through imports."
---
### Question 5: Which statement correctly describes the global scope in Python?
- [ ] Variables in the global scope can be accessed and modified from any function without special keywords
- [ ] Variables in the global scope cannot be accessed from functions
- [x] Variables in the global scope can be accessed from any function, but to modify them, the `global` keyword is needed
- [ ] Each module has its own separate global scope that other modules cannot access

---
topic: "Datentypen"
subtopic: "String-Methoden"
level: "easy"
explanation: "The swapcase() method changes the case of all characters in a string. Uppercase characters become lowercase and vice versa."
explanationWrong:
  - "The swapcase() method does not swap the first and last characters."
  - "The swapcase() method does not reverse the entire string."
  - "The swapcase() method does not sort characters alphabetically."
---
### Question 6: What does the following code snippet do?
```python
s = 'Python Programming'
result = s.swapcase()
```
- [ ] Swaps the first and last characters of the string
- [x] Changes lowercase letters to uppercase and uppercase letters to lowercase
- [ ] Reverses the entire string
- [ ] Sorts the characters alphabetically

---
topic: "Schleifen"
subtopic: "Schleifenkontrolle"
level: "medium"
explanation: "The 'continue' statement skips the current iteration (when i=5), while 'break' completely terminates the loop (when i=8). Therefore, only the numbers 1, 2, 3, 4, 6, and 7 are output."
explanationWrong:
  - "The number 5 is skipped due to the continue statement."
  - "Numbers after 7 are not output because the loop breaks at i=8."
  - "continue skips the current iteration but does not stop the loop."
---
### Question 7: What is the output of the following code?
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
explanation: "The operator // in Python performs integer division, which always yields an integer result. Therefore, the variable x after the assignment x = 3 // 2 has the value 1 and the type int."
explanationWrong:
  - "The operation // always returns an int, not a float."
  - "The result of 3 // 2 is 1, not True or False, so it's not a bool."
  - "A complex number has a real part and an imaginary part, which is not the case here."
---
### Question 8: What type does the variable `x` have after the following assignment?
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
explanation: "The strip() method removes leading and trailing whitespace (spaces, tabs, newlines) from a string."
explanationWrong:
  - "strip() only removes leading and trailing whitespace, not all whitespace in the string."
  - "strip() does not specifically remove punctuation, but by default removes whitespace characters."
  - "strip() does not split the string into a list of characters."
---
### Question 9: What does the `strip()` method do in Python when applied to a string?
- [ ] It removes all whitespace from the string
- [ ] It removes all punctuation from the string
- [x] It removes leading and trailing whitespace from the string
- [ ] It splits the string into a list of characters

---
topic: "Funktionen"
subtopic: "Parameterübergabe"
level: "medium"
explanation: "In Python, lists are passed by reference. The call to lst.append(4) modifies the original list my_list. However, the assignment lst = [7, 8, 9] creates a new list and changes the local reference, not the original list."
explanationWrong:
  - "The original list is modified by append(), so my_list is [1, 2, 3, 4]."
  - "The assignment lst = [7, 8, 9] only changes the local reference, not the original list."
  - "new_list receives the return value of the function, which is [7, 8, 9]."
---
### Question 10: What is the output of the following code?
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
explanation: "The slicing notation [1::2] selects characters starting from index 1 with a step of 2. For 'python', this means the characters at positions 1, 3, and 5, which are 'yhn'."
explanationWrong:
  - "'pto' would be the result of 'python'[0::2]."
  - "'yto' would be an incorrect combination of letters that doesn't match the slicing pattern."
  - "'phn' would be an incorrect combination of letters that doesn't match the slicing pattern."
---
### Question 11: What is the value of the variable `result` after executing the following code?
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
explanation: "The int() function converts a floating-point number to an integer by discarding (truncating) the decimal part, not by rounding."
explanationWrong:
  - "round() rounds to the nearest integer, rather than simply discarding the decimal part."
  - "floor() rounds down to the nearest integer, but is not a built-in type converter; it's part of the math module."
  - "truncate() is not a standard Python function for type conversion."
---
### Question 12: How can you convert a floating-point number to an integer in Python, discarding the decimal part?
- [ ] `round(number)`
- [x] `int(number)`
- [ ] `floor(number)`
- [ ] `truncate(number)`

---
topic: "Datenstrukturen"
subtopic: "Dictionary-Methoden"
level: "medium"
explanation: "The setdefault() method adds a key with a default value to the dictionary if the key doesn't exist yet. In this case, 'c' is added with the value 3."
explanationWrong:
  - "setdefault() adds the key with the specified value if it doesn't exist."
  - "The value None would only be used if no default value was specified."
  - "setdefault() does not cause an error if the key doesn't exist."
---
### Question 13: What is the output of the following code?
```python
my_dict = {'a': 1, 'b': 2}
my_dict.setdefault('c', 3)
print(my_dict)
```
- [ ] {'a': 1, 'b': 2}
- [x] {'a': 1, 'b': 2, 'c': 3}
- [ ] {'a': 1, 'b': 2, 'c': None}
- [ ] An error will be raised

---
topic: "Datentypen"
subtopic: "String-Eigenschaften"
level: "easy"
explanation: "The immutability of strings means that after a string is created, its content cannot be changed. Any operation that seems to modify a string actually creates a new string."
explanationWrong:
  - "Immutability does not mean that strings constantly change, but rather the opposite."
  - "Immutability has nothing to do with the use of strings in loops."
  - "Immutability is a fundamental property of strings in Python and cannot be disabled."
---
### Question 14: Which of the following statements is correct regarding the immutability of strings in Python?
- [ ] String immutability means that strings constantly change
- [ ] String immutability means that strings cannot be used in loops
- [x] String immutability means that the content of an existing string cannot be changed
- [ ] String immutability is an optional feature that can be disabled

---
topic: "Funktionen"
subtopic: "Standardparameter"
level: "medium"
explanation: "In Python, default parameter values are evaluated only once at function definition, not at each function call. When using a mutable data structure like a list as a default value, it is shared between function calls."
explanationWrong:
  - "Since the empty list as a default parameter is created only once, it is reused and modified with each call."
  - "The list is modified by both calls, not just the first one."
  - "The syntax is correct and does not cause an error."
---
### Question 15: What is the output of the following code?
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
- [ ] A syntax error occurs

---
topic: "Datenstrukturen"
subtopic: "Dictionary-Comprehension"
level: "medium"
explanation: "A dictionary comprehension uses the syntax {key: value for item in iterable}. In this case, for each value x in range(5), a key-value pair x: x*x is created."
explanationWrong:
  - "The first option uses a comma instead of a colon, which leads to a syntax error."
  - "The third option has an invalid syntax for comprehensions."
  - "The fourth option is an invalid syntax for the dict() constructor."
---
### Question 16: Which of the following options correctly creates a dictionary using a dictionary comprehension?
- [ ] `{x, x*x for x in range(5)}`
- [x] `{x: x*x for x in range(5)}`
- [ ] `{for x in range(5): x, x*x}`
- [ ] `dict(x, x*x for x in range(5))`

---
topic: "Grundlagen"
subtopic: "Operatoren"
level: "medium"
explanation: "The 'is' operator in Python checks if two variables refer to the same object in memory (identity), while '==' checks if two variables have the same value (equality)."
explanationWrong:
  - "The 'is' operator checks object identity, not value equality."
  - "The 'is' operator is not an alias for the assignment operator '='."
  - "The 'is' operator does not check for the existence of a variable in the current scope."
---
### Question 17: Which of the following statements is CORRECT regarding the `is` operator in Python?
- [ ] `is` checks if two variables have the same value
- [x] `is` checks if two variables refer to the same object in memory
- [ ] `is` is an alias for the assignment operator `=`
- [ ] `is` checks if a variable exists in the current scope

---
topic: "Datenstrukturen"
subtopic: "Dictionary-Zugriff"
level: "easy"
explanation: "When trying to access a key that doesn't exist in a dictionary, a KeyError is raised, unless special methods like get() are used."
explanationWrong:
  - "Python does not automatically create a new key with a None value."
  - "Python does not simply ignore the failed access."
  - "A KeyError is raised, not a default value returned."
---
### Question 18: What happens in Python when you try to access a key that doesn't exist in a dictionary?
- [ ] The dictionary automatically creates the key with a None value
- [ ] The program continues without effect
- [x] A KeyError is raised
- [ ] The dictionary returns a default empty value

---
topic: "Datentypen"
subtopic: "String-Methoden"
level: "medium"
explanation: "The ljust() method left-aligns a string and fills the remaining width with the specified character. With text.ljust(10, '*'), 'Python' (6 characters) is left-aligned and filled with 4 asterisks to reach a total length of 10."
explanationWrong:
  - "ljust() adds characters at the end, not at the beginning."
  - "ljust() does not distribute the fill characters symmetrically around the string."
  - "ljust() adds the correct number of fill characters to reach the specified total length."
---
### Question 19: What does the following code output?
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
explanation: "The sum() function adds all elements of a sequence. The list numbers contains the numbers 0, 1, 2, 3, 4, the sum of which is 10."
explanationWrong:
  - "The sum of 0 to 4 is 10, not 5."
  - "The sum of 0 to 4 is 10, not 4."
  - "The sum of 0 to 4 is 10, not 15 (which would be the sum of 1 to 5)."
---
### Question 20: What is the output of the following code?
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
explanation: "The pop() method removes and returns the last element of a list if no index is specified. Alternatively, an index can be specified to remove and return a specific element."
explanationWrong:
  - "Python lists can mix different data types in a single list."
  - "Lists in Python do not have a fixed size and can grow or shrink dynamically."
  - "Unlike strings, lists in Python are mutable."
---
### Question 21: Which statement about Python list operations is correct?
- [ ] You cannot mix different data types in a single list
- [ ] Lists in Python have a fixed size once created
- [x] The `pop()` method removes and returns an element from a list
- [ ] Lists are immutable like strings

---
topic: "Funktionen"
subtopic: "Eingebaute Funktionen"
level: "medium"
explanation: "The any() function returns True if at least one element in the iterable evaluates as true. In the given list, the value 5 is true, so the result is True."
explanationWrong:
  - "Since at least one element (5) evaluates as true, any() returns True."
  - "any() does not return None when a true element is found."
  - "any() returns a boolean value, not the first true element."
---
### Question 22: What will be the result of the following expression?
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
explanation: "In Python, {} creates an empty dictionary, not an empty set. To create an empty set, you must use set() or another valid method like {*()}."
explanationWrong:
  - "set() is the standard method for creating an empty set."
  - "{*()} is a valid, albeit unusual, way to create an empty set."
  - "set([]) creates an empty set from an empty list."
---
### Question 23: Which of the following options is NOT a valid method to create an empty set in Python?
- [ ] `set()`
- [ ] `{*()}`
- [x] `{}`
- [ ] `set([])`

---
topic: "Funktionen"
subtopic: "Benannte Parameter"
level: "medium"
explanation: "The greet() function accepts two parameters: 'name' and 'message' with the default value 'Hello'. When called with the named parameter message='Hi', this value is used, resulting in 'Hi, John!'."
explanationWrong:
  - "The default value 'Hello' is overridden by the explicitly specified value 'Hi'."
  - "The order of parameters in the output is determined by the return statement, not by the order of arguments."
  - "The use of named parameters is syntactically correct and does not result in a TypeError."
---
### Question 24: What is the output of the following code?
```python
def greet(name, message="Hello"):
    return f"{message}, {name}!"
    
print(greet("John", message="Hi"))
```
- [ ] Hello, John!
- [x] Hi, John!
- [ ] John, Hi!
- [ ] A TypeError is raised

---
topic: "Funktionen"
subtopic: "Eingebaute Funktionen"
level: "medium"
explanation: "The all() function returns True if all elements in the iterable evaluate as true. If this is not the case, it returns False."
explanationWrong:
  - "all() returns True only if all elements are true, not if any element is true."
  - "all() does not return a value from the iterable, but a boolean value."
  - "all() does not calculate the sum of the elements."
---
### Question 25: Which of the following statements is correct about Python's `all()` function?
- [ ] `all()` returns True if any element in the iterable is true
- [x] `all()` returns True if all elements in the iterable are true
- [ ] `all()` returns the first element in the iterable
- [ ] `all()` returns the sum of all elements in the iterable

---
topic: "Datenstrukturen"
subtopic: "Referenzen"
level: "medium"
explanation: "In Python, lists are treated as references. When list1 is assigned to list2, both refer to the same list object. Changing an element in list1 therefore also changes list2."
explanationWrong:
  - "Since both variables refer to the same object, modifying list1 also changes list2."
  - "No new list is created that combines both lists."
  - "The operation is syntactically correct and does not result in an error."
---
### Question 26: What will the following code output?
```python
list1 = [1, 2, 3]
list2 = list1
list1[0] = 4
print(list2)
```
- [ ] [1, 2, 3]
- [x] [4, 2, 3]
- [ ] [4, 2, 3, 1, 2, 3]
- [ ] An error will be raised
---
topic: "Funktionen"
subtopic: "Eingebaute Funktionen"
level: "easy"
explanation: "The max() function finds the largest value in a sequence. It is used to find the largest value in a list, tuple, or other sequence."
explanationWrong:
  - "largest() is not a built-in Python function."
  - "big() is not a built-in Python function."
  - "top() is not a built-in Python function."
---
### Question 27: Which function would you use to find the largest value in a sequence?
- [ ] `largest()`
- [x] `max()`
- [ ] `big()`
- [ ] `top()`

---
topic: "Datenstrukturen"
subtopic: "Sortieren"
level: "easy"
explanation: "The sorted() function creates a new sorted list from an iterable object, without altering the original. This is the correct way to create a sorted copy of a list."
explanationWrong:
  - "list.sort() sorts the list in-place and returns None, not the sorted list."
  - "list.sorted() is not a valid method in Python."
  - "sort(list) is not a built-in Python function."
---
### Question 28: What is the correct method to create a new sorted list from an existing list without changing the original list?
- [ ] `new_list = list.sort()`
- [x] `new_list = sorted(list)`
- [ ] `new_list = list.sorted()`
- [ ] `new_list = sort(list)`

---
topic: "Datentypen"
subtopic: "String-Methoden"
level: "easy"
explanation: "The find() method returns the index of the first occurrence of a substring in a string. 'l' first appears at position 2 in 'hello' (indexing starts at 0)."
explanationWrong:
  - "The index starts at 0, not at 1, so 'h' is at position 0, 'e' at position 1, and 'l' at position 2."
  - "-1 would be returned if the substring is not found."
  - "find() returns a single index, not a list of indices."
---
### Question 29: What is the result of the following expression?
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
explanation: "The nonlocal keyword allows a nested function to access and modify variables from the enclosing scope. In this case, inner_function changes the value of x to 20, and outer_function returns this modified value."
explanationWrong:
  - "With the nonlocal keyword, the value of x in the outer function is changed to 20."
  - "Without the nonlocal keyword, inner_function would create a local variable x that does not affect the variable of the outer function."
  - "The nonlocal keyword is syntactically correct and does not result in a NameError."
---
### Question 30: What is the output of the following code?
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
- [ ] A NameError is raised
- [ ] None

---
topic: "Datentypen"
subtopic: "String-Methoden"
level: "easy"
explanation: "The count() method counts how many times a specific substring occurs in a string. In 'Python Programming', the letter 'P' occurs twice: at the beginning of 'Python' and at the beginning of 'Programming'."
explanationWrong:
  - "There are 2 occurrences of 'P', not 0."
  - "There are 2 occurrences of 'P', not 1."
  - "The count() method does not cause a ValueError for a valid substring."
---
### Question 31: What will be the output of the following code?
```python
word = "Python Programming"
print(word.count('P'))
```
- [ ] 0
- [x] 2
- [ ] 1
- [ ] A ValueError is raised

---
topic: "Funktionen"
subtopic: "Module"
level: "easy"
explanation: "Modules in Python are files that contain Python definitions and statements. They are used to organize code into reusable units."
explanationWrong:
  - "A module is a larger concept than a function and typically contains multiple functions, classes, and variables."
  - "Modules can be written in Python or in C (e.g., some standard modules)."
  - "A Python program can import multiple modules."
---
### Question 32: Which statement is correct about Python modules?
- [ ] A module is the same as a function
- [ ] Modules can only be written in Python
- [x] Modules are files that contain Python definitions and statements
- [ ] Each Python program can only import one module

---
topic: "Datenstrukturen"
subtopic: "Listen-Operationen"
level: "easy"
explanation: "The 'in' operator checks if an element is present in a sequence. Since 'apple' is contained in the list fruits, the expression 'apple' in fruits returns True."
explanationWrong:
  - "The 'in' operator returns a boolean value (True/False), not the element itself."
  - "The 'in' operator does not return the index of the element."
---
### Question 33: What is the output of the following code?
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
explanation: "The filter() function applies a function to each element of an iterable and returns an iterator object with the elements for which the function returns True. The lambda function checks if a number is even (x % 2 == 0). Therefore, only the even numbers (2, 4) will be in the result list."
explanationWrong:
  - "[1, 3, 5] would be the odd numbers, not the even ones."
  - "The lambda function filters even numbers, not odd ones."
  - "filter() returns the elements that satisfy the condition, not a list of truth values."
---
### Question 34: What is the value of the variable `result` after executing the following code?
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
explanation: "The zip() function combines elements from multiple iterables into tuples. It is used to enable parallel iterations over multiple sequences."
explanationWrong:
  - "zip() has nothing to do with compressing files."
  - "zip() does not convert numbers to strings."
  - "zip() does not create a list of consecutive integers."
---
### Question 35: What is the purpose of the Python function `zip()`?
- [ ] To compress files and folders
- [x] To combine elements from multiple iterables into tuples
- [ ] To convert numbers to strings
- [ ] To create a list of consecutive integers

---
topic: "Funktionen"
subtopic: "Eingebaute Funktionen"
level: "easy"
explanation: "The range() function generates a sequence of consecutive integers. It is often used in for loops to perform a certain number of iterations."
explanationWrong:
  - "consecutive() is not a built-in Python function."
  - "sequence() is not a built-in Python function."
  - "series() is not a built-in Python function."
---
### Question 36: Which of the following is a built-in Python function that returns a sequence of consecutive integers?
- [ ] `consecutive()`
- [x] `range()`
- [ ] `sequence()`
- [ ] `series()`

---
topic: "Funktionen"
subtopic: "Verschachtelte Funktionen"
level: "medium"
explanation: "The expression min(max(3, 4), max(8, 2)) first evaluates max(3, 4) = 4 and max(8, 2) = 8, then min(4, 8) = 4. Therefore, the result is 4."
explanationWrong:
  - "max(3, 4) = 4 and max(8, 2) = 8, then min(4, 8) = 4, not 2."
  - "max(3, 4) = 4, not 3."
  - "min(4, 8) = 4, not 8."
---
### Question 37: What will be the result of the following expression?
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
explanation: "The round() function rounds a number to a specified number of decimal places. round(7.6345, 2) rounds 7.6345 to 2 decimal places, resulting in 7.63."
explanationWrong:
  - "round() does not require a third parameter for simple rounding."
  - "format() is a different function for string formatting, not for mathematical rounding."
  - "The last approach would cause rounding errors due to floating-point arithmetic."
---
### Question 38: How would you round the number 7.6345 to two decimal places in Python?
- [x] `round(7.6345, 2)`
- [ ] `round(7.6345, 2, 0)`
- [ ] `format(7.6345, '.2')`
- [ ] `int(7.6345 * 100) / 100`

---
topic: "Funktionen"
subtopic: "Pakete"
level: "medium"
explanation: "A Python package is a directory that contains Python modules and a special __init__.py file. Packages are used to organize larger code libraries and avoid namespace conflicts."
explanationWrong:
  - "A package is a directory with modules, not just a compressed archive."
  - "A single Python file with multiple classes is just a module, not a package."
  - "A package is more than just a collection of variables."
---
### Question 39: Which of the following descriptions best matches a Python package?
- [ ] A compressed archive of Python code
- [x] A directory that contains Python modules and a special __init__.py file
- [ ] A single Python file that defines multiple classes
- [ ] A collection of Python variables

---
topic: "Funktionen"
subtopic: "Funktionen mit Standardparametern"
level: "medium"
explanation: "The calculate() function performs a calculation depending on the 'operation' parameter passed. For 'multiply', it calculates 5 * 3 = 15 and returns that."
explanationWrong:
  - "For operation='multiply', it calculates 5 * 3 = 15, not 8 (which would be 5 + 3)."
  - "For operation='multiply', it calculates 5 * 3 = 15, not 2 (which would be 5 / 3 rounded)."
  - "A valid operation parameter is being passed, so None is not returned."
---
### Question 40: What is the output of the following code?
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
explanation: "The enumerate() function returns an object that generates pairs (index, element) for each element in an iterable. It is useful when both the elements and their positions are needed."
explanationWrong:
  - "enumerate() does not simply create a numbered list, but pairs of indices and elements."
  - "enumerate() does not check if a container contains numeric elements."
  - "enumerate() does not simply count the total number of elements, but returns pairs (index, element)."
---
### Question 41: What does the `enumerate()` function do in Python?
- [ ] It creates a numbered list
- [x] It returns a tuple containing the counter and the element from an iterable
- [ ] It checks if a container has numeric elements
- [ ] It counts the total number of elements in an iterable

---
topic: "Datenstrukturen"
subtopic: "Dictionary-Methoden"
level: "medium"
explanation: "The get() method of a dictionary returns the value for a key if it exists, otherwise a default value (here 3). Since 'c' does not exist in the dictionary data, the default value 3 is returned."
explanationWrong:
  - "get() does not modify the dictionary, it does not add a new key."
  - "get() returns the specified default value when the key does not exist, not None (unless None is the specified default value)."
  - "get() does not raise a KeyError when the key is not found; that's one of the advantages of this method."
---
### Question 42: What is the output of the following code?
```python
data = {'a': 1, 'b': 2}
print(data.get('c', 3))
```
- [ ] {'a': 1, 'b': 2, 'c': 3}
- [ ] None
- [x] 3
- [ ] A KeyError is raised

---
topic: "Datenstrukturen"
subtopic: "Listen-Funktionen"
level: "easy"
explanation: "The len() function is used to count the number of elements in a list or other sequence. It returns the size or length of the object."
explanationWrong:
  - "size() is not a built-in Python function for lists."
  - "count() counts the occurrences of a specific element in a list, not the total number of elements."
  - "length() is not a built-in Python function."
---
### Question 43: Which method can you use to count the number of elements in a list?
- [ ] `size()`
- [x] `len()`
- [ ] `count()`
- [ ] `length()`

---
topic: "Datenstrukturen"
subtopic: "List Comprehension"
level: "medium"
explanation: "A list comprehension in Python follows the syntax [expression for element in iterable if condition]. The correct method to filter odd numbers is [x for x in numbers if x % 2 != 0]."
explanationWrong:
  - "The first option has an incorrect syntax for list comprehensions."
  - "The third option has an incorrect syntax for list comprehensions."
  - "The fourth option has an incorrect syntax for list comprehensions."
---
### Question 44: What is the correct syntax for a Python list comprehension that filters odd numbers from a list?
- [ ] `[if x % 2 != 0 then x for x in numbers]`
- [x] `[x for x in numbers if x % 2 != 0]`
- [ ] `[x if x % 2 != 0 for x in numbers]`
- [ ] `[for x in numbers if x % 2 != 0: x]`

---
topic: "Datenstrukturen"
subtopic: "Listen-Methoden"
level: "medium"
explanation: "The insert() method adds an element at a specific position in a list. If the index is greater than the length of the list, the element is simply added at the end, without errors or additional None values."
explanationWrong:
  - "insert() with an index out of range does not raise an IndexError."
  - "Python does not insert None values to fill gaps."
  - "The operation is not ignored; the element is added to the end of the list."
---
### Question 45: What happens when the following code is executed?
```python
my_list = [1, 2, 3]
my_list.insert(10, 4)
print(my_list)
```
- [ ] An IndexError is raised
- [ ] The number 4 is inserted at index 10, and None values fill positions 3-9
- [x] The number 4 is added to the end of the list
- [ ] The operation is ignored and the list remains unchanged

---
topic: "Funktionen"
subtopic: "Eingebaute Funktionen"
level: "medium"
explanation: "The zip() function is used to combine elements from multiple iterables. To create a dictionary from two lists, you can use zip() with the dict() constructor: dict(zip(keys, values))."
explanationWrong:
  - "merge() is not a built-in Python function for this purpose."
  - "combine() is not a built-in Python function for this purpose."
  - "dict_from_lists() is not a built-in Python function."
---
### Question 46: Which built-in function would you use to create a dictionary from two lists, one with keys and the other with values?
- [ ] `merge()`
- [ ] `combine()`
- [x] `zip()`
- [ ] `dict_from_lists()`

---
topic: "Schleifen"
subtopic: "Enumeration"
level: "medium"
explanation: "The enumerate() function returns pairs (index, element). In the code, it searches for the letter 'h', which is at index 3 in 'Python'. When found, the index is output."
explanationWrong:
  - "The code does not output the letter 'P', but the index of 'h'."
  - "The code does not output the letter 'h', but its index."
  - "The index of 'h' in 'Python' is 3, not 4 (indexing starts at 0)."
---
### Question 47: What is the output of the following code?
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
explanation: "A lambda function in Python is defined with the lambda keyword, followed by parameters, a colon, and the expression. The correct syntax is 'lambda x: x * 2'."
explanationWrong:
  - "The first option is missing the colon between parameter and expression."
  - "The third option uses def, not lambda."
  - "The fourth option has an incorrect syntax for lambda functions."
---
### Question 48: Which of the following statements correctly defines a lambda function in Python?
- [ ] `lambda x = x * 2`
- [x] `lambda x: x * 2`
- [ ] `def lambda(x): x * 2`
- [ ] `lambda: x = x * 2`

---
topic: "Funktionen"
subtopic: "Eingebaute Funktionen"
level: "medium"
explanation: "The dir() function without arguments returns a list of names in the current local scope. This includes all names of variables, functions, and classes defined in the current scope."
explanationWrong:
  - "To get the current working directory path, one would use os.getcwd(), not dir()."
  - "dir() does not specifically return a list of all Python keywords."
  - "dir() does not display the Python documentation."
---
### Question 49: What does the Python function `dir()` do when called without arguments?
- [ ] Returns the path of the current working directory
- [ ] Returns a list of all Python keywords
- [x] Returns a list of names in the current local scope
- [ ] Displays the Python documentation

---
topic: "Funktionen"
subtopic: "Rückgabewerte"
level: "easy"
explanation: "If a function in Python has no explicit return value (i.e., no return statement or an empty return statement), it returns None by default."
explanationWrong:
  - "Python does not return 0 by default when no value is specified."
  - "Python does not return False by default when no value is specified."
  - "Python does not return an empty string by default when no value is specified."
---
### Question 50: If a function in Python does not explicitly return a value, what is returned by default?
- [ ] 0
- [ ] False
- [x] None
- [ ] An empty string