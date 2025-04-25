---
# Python Quiz with Metadata (Part 3)

---
topic: "Grundlagen"
subtopic: "Operationen"
level: "easy"
explanation: "The modulo operator '%' calculates the remainder of a division (10 % 5 = 0). The integer division operator '//' performs an integer division and returns the rounded-down result (10 // 5 = 2)."
explanationWrong:
  - "Integer division (//) returns an int, not a float."
  - "The modulo operator returns an int, not a float, when working with integers."
  - "The order of the outputs is incorrect."
---
### Question 1: What is the output of the following code?
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
explanation: "In Python string slicing with the syntax [start:end], the start index is inclusive, while the end index is exclusive. This means that the first specified index is included, but the second is not."
explanationWrong:
  - "The end index is not included in Python slicing."
  - "The start index is included in slicing, not excluded."
  - "String slicing works with both positive and negative indices."
---
### Question 2: Which of the following descriptions correctly explains string slicing in Python?
- [ ] String slicing always includes both the start and end indices
- [x] String slicing includes the start index but excludes the end index
- [ ] String slicing excludes both the start and end indices
- [ ] String slicing works only with positive indices

---
topic: "Datenstrukturen"
subtopic: "Listen-Methoden"
level: "medium"
explanation: "The insert() method adds an element at a specific position in the list. Here, 'orange' is inserted at position 1 (the second element), causing the original elements to shift to the right. As a result, 'banana', which was originally at position 1, moves to position 2."
explanationWrong:
  - "'apple' is still at position 0 after the insertion, not at position 2."
  - "'orange' is at position 1 after the insertion, not at position 2."
  - "'cherry' is at position 3 after the insertion, not at position 2."
---
### Question 3: What does the following code output?
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
explanation: "The slicing notation [::-1] reverses a string. It starts at the end of the string and moves backward to the beginning with a step of -1."
explanationWrong:
  - "[::-1] doesn't return the original string, but reverses it."
  - "[::-1] doesn't return just the first letter."
---
### Question 4: What is the result of the expression `"Python"[::-1]`?
- [ ] "Python"
- [ ] "P"
- [x] "nohtyP"
- [ ] "n"

---
topic: "Grundlagen"
subtopic: "Operatoren"
level: "easy"
explanation: "The 'in' operator in Python is used to check if an element is contained in a sequence (such as lists, strings, tuples). It returns True if the element is found, otherwise False."
explanationWrong:
  - "The 'in' operator can be used with various data types, not just lists."
  - "The 'in' operator returns a boolean value, not an index."
  - "The 'in' operator does not modify the sequence."
---
### Question 5: Which statement about Python's `in` operator is correct?
- [ ] It can only be used with lists
- [ ] It always returns an index where the element is found
- [x] It can be used to check if an element exists in a sequence
- [ ] It modifies the sequence by adding an element

---
topic: "Schleifen"
subtopic: "For-Schleifen"
level: "easy"
explanation: "This loop iterates through each number in the list and adds only the even numbers (numbers where num % 2 == 0 is true) to the total. In the numbers list, the even numbers are 2 and 4, and their sum is 6."
explanationWrong:
  - "10 would be the sum of all numbers in the list, not just the even ones."
  - "4 would be incorrect, as the sum of the even numbers is 2 + 4 = 6."
  - "2 would be incorrect, as there are two even numbers in the list whose sum is 6."
---
### Question 6: What is the output of the following code?
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
explanation: "The strip() method removes leading and trailing whitespace (including spaces, tabs, and newlines) from a string, but does not remove whitespace between words."
explanationWrong:
  - "strip() does not remove all whitespace in the string, only the leading and trailing ones."
  - "strip() does not remove whitespace between words."
  - "strip() does not capitalize letters."
---
### Question 7: What does the `strip()` method do when applied to a string?
- [ ] It removes all whitespace from the string
- [x] It removes leading and trailing whitespace
- [ ] It removes all whitespace between words
- [ ] It capitalizes the first letter of each word

---
topic: "Schleifen"
subtopic: "For-Schleifen"
level: "medium"
explanation: "The loop iterates through the values 0, 1, and 2 (range(3)). In each iteration, x is multiplied by 2. Starting with x = 1, x becomes 2, then 4, and finally 8."
explanationWrong:
  - "3 would mean that x is incremented by 1 (1+1+1), not multiplied by 2."
  - "6 would be 1*2*3, which does not match the operation sequence in the loop."
  - "9 would be 3^2, which does not match the operation in the loop."
---
### Question 8: What value does `x` have after the execution of the following code?
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
explanation: "In Python, dictionary keys must be immutable objects, such as strings, numbers, or tuples. Mutable objects like lists cannot be used as keys because their hash value can change."
explanationWrong:
  - "Dictionary keys can be any immutable data type, not just strings."
  - "Since Python 3.7, dictionaries preserve the order of elements, but this is not true for all Python versions."
  - "Dictionaries can contain other dictionaries as values."
---
### Question 9: Which of the following statements about Python dictionaries is TRUE?
- [ ] Dictionary keys must be strings
- [ ] Dictionaries preserve the order of elements as they are added (in all Python versions)
- [x] Dictionary keys must be immutable objects
- [ ] Dictionaries cannot contain other dictionaries as values

---
topic: "Funktionen"
subtopic: "Parameterübergabe"
level: "medium"
explanation: "In Python, lists are passed by reference. When the function modify() calls the method lst.append(4), the element is added directly to the original numbers list. Therefore, [1, 2, 3, 4] is output."
explanationWrong:
  - "The original list is modified by the append() call in the function."
  - "append() adds elements at the end, not at the beginning."
  - "The operation is valid and does not cause an error."
---
### Question 10: What is the output of the following code?
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
- [ ] An error is raised

---
topic: "Datentypen"
subtopic: "String-Methoden"
level: "easy"
explanation: "The join() method joins a sequence of strings with the string on which it is called as the separator. Here, the strings 'apple', 'banana', and 'cherry' are joined with a comma and a space (', ') as the separator."
explanationWrong:
  - "join() returns a string, not a list."
  - "join() returns a single string, not multiple separate strings."
  - "join() uses the specified separator between the elements, here ', '."
---
### Question 11: What is the result of the following expression?
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
explanation: "The min() function finds the smallest value in a sequence. It compares the elements and returns the smallest one."
explanationWrong:
  - "smallest() is not a built-in Python function."
  - "lowest() is not a built-in Python function."
  - "minimum() is not a built-in Python function."
---
### Question 12: Which function is used to find the minimum value in a sequence?
- [ ] `smallest()`
- [x] `min()`
- [ ] `lowest()`
- [ ] `minimum()`

---
topic: "Datentypen"
subtopic: "Boolesche Werte"
level: "easy"
explanation: "In Python, empty collections ([], ''), zero (0), and None are evaluated as False when used in a boolean context. Therefore, bool([]), bool(''), bool(0), and bool(None) all return False."
explanationWrong:
  - "Empty collections, 0, and None are all evaluated as False in Python."
  - "The bool() function converts a value to its corresponding boolean value."
---
### Question 13: What is the output of the following code?
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
explanation: "The get() method returns the value for a key or a default value if the key does not exist. Here, data['c'] is set to the sum of data.get('a', 0) (1) and data.get('b', 0) (2), which is 3."
explanationWrong:
  - "data.get('a', 0) returns 1, not 0, since 'a' exists."
  - "data.get('b', 0) returns 2, not 0, since 'b' exists."
  - "The sum of 1 and 2 is 3, not 2."
---
### Question 14: What does the following code output?
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
explanation: "The title() method converts a string to 'Title Case', where the first letter of each word is capitalized."
explanationWrong:
  - "upper() converts the entire string to uppercase."
  - "capital() is not a standard string method in Python."
  - "capitalize() only capitalizes the first letter of the entire string, not every word."
---
### Question 15: What is the correct method to convert a string to title case (first letter of each word capitalized)?
- [ ] `str.upper()`
- [ ] `str.capital()`
- [x] `str.title()`
- [ ] `str.capitalize()`

---
topic: "Funktionen"
subtopic: "Rekursion"
level: "medium"
explanation: "The factorial() function recursively calculates the factorial of a number. The factorial of 4 (4!) is 4 * 3 * 2 * 1 = 24."
explanationWrong:
  - "3! = 6, but here 4! is calculated, which is 24."
  - "4^3 = 64, which does not match the factorial value."
  - "The factorial of 4 is not 4."
---
### Question 16: What is the output of the following code?
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
explanation: "In Python, a file is opened with the open() function. The first parameter is the filename, and the second parameter specifies the mode, where 'r' stands for read mode."
explanationWrong:
  - "The mode should be specified as 'r', not as 'read'."
  - "read() is not a correct function for opening a file."
  - "file.open() is not a correct syntax for opening a file."
---
### Question 17: Which of the following options is the correct method to open a file named "data.txt" for reading in Python?
- [x] `f = open("data.txt", "r")`
- [ ] `f = open("data.txt", "read")`
- [ ] `f = read("data.txt")`
- [ ] `f = file.open("data.txt")`

---
topic: "Grundlagen"
subtopic: "Ausnahmebehandlung"
level: "medium"
explanation: "In Python, the finally block is always executed, regardless of whether an exception occurs or not. Even when continue is used, the finally block is executed before continuing the loop. Therefore, the output is: 0 done done 2 done."
explanationWrong:
  - "The finally block is also executed with continue, so the first option is not correct."
  - "The finally block is executed for each loop iteration, not just once at the end."
  - "The code does not cause an error."
---
### Question 18: What happens when the following code is executed?
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
- [ ] An error occurs

---
topic: "Datenstrukturen"
subtopic: "Listen-Slicing"
level: "medium"
explanation: "The slicing notation numbers[1:-1] selects elements from index 1 (inclusive) to the second-to-last element (exclusive of the last element). In the list [1, 2, 3, 4, 5], these are the elements with indices 1, 2, and 3, so [2, 3, 4]."
explanationWrong:
  - "[1, 2, 3, 4] would include all elements except the last one, which is not correct."
  - "[2, 3, 4, 5] would exclude the first element and include the last one, which is not correct."
  - "[1, 5] would only contain the first and last elements, which is not correct."
---
### Question 19: What is the output of the following code?
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
explanation: "The items() method of a dictionary returns key-value pairs. In the loop, it searches for a value of 2 and outputs the corresponding key. In this case, 'b' is the key with the value 2."
explanationWrong:
  - "'a' has the value 1, not 2."
  - "'c' has the value 3, not 2."
  - "The loop finds the key 'b' with the value 2 and outputs it."
---
### Question 20: What will the following code output?
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
explanation: "The enumerate() function adds a counter to each element of an iterable and returns pairs (index, element). It's useful when you want to access both the elements and their positions."
explanationWrong:
  - "enumerate() returns pairs of index and value, not just a list of indices."
  - "enumerate() doesn't just count how many elements are in the iterable."
  - "enumerate() doesn't return a boolean result."
---
### Question 21: What does the `enumerate()` function in Python return?
- [ ] A list of indices for the iterable
- [ ] A count of how many elements are in the iterable
- [x] An iterator that produces tuples containing indices and values
- [ ] A boolean indicating if all elements are enumerable

---
topic: "Datenstrukturen"
subtopic: "Referenzen"
level: "medium"
explanation: "In Python, objects like lists are accessed through references. With the assignment b = a, both variables reference the same list object. Therefore, changing a[0] also changes b, since it refers to the same object."
explanationWrong:
  - "b is a reference to the same list as a, so b changes when a is changed."
  - "b does not receive a copy of the list, but refers to the same list."
  - "The operation is valid and does not cause an error."
---
### Question 22: What is the output of the following code?
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
explanation: "In Python, there are several ways to create a dictionary. You can define it with curly braces and key-value pairs, use the dict() constructor with named arguments, or call dict() with a list of tuples. All three methods are valid."
explanationWrong:
  - "dict(a=1, b=2, c=3) is a valid method for creating a dictionary."
  - "{'a': 1, 'b': 2, 'c': 3} is a valid method for creating a dictionary."
  - "dict([('a', 1), ('b', 2), ('c', 3)]) is a valid method for creating a dictionary."
---
### Question 23: Which of the following options is a valid method to create a dictionary in Python?
- [ ] `dict(a=1, b=2, c=3)`
- [ ] `{"a": 1, "b": 2, "c": 3}`
- [ ] `dict([("a", 1), ("b", 2), ("c", 3)])`
- [x] All of the above

---
topic: "Datentypen"
subtopic: "String-Methoden"
level: "easy"
explanation: "The split() method splits a string at whitespace (by default) and returns a list of parts. The string 'Python is fun' has three words, so len(words) returns the value 3."
explanationWrong:
  - "The string has 13 characters, but we're counting the number of words after splitting."
  - "11 is not the number of words in the string."
  - "2 is not the number of words in the string."
---
### Question 24: What is the output of the following code?
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
explanation: "This list comprehension creates a list of doubled values (x*2) for each x in the range from 1 to 4, but only if x is even (x % 2 == 0). In the range from 1 to 4, the even numbers are 2 and 4, and their doubling gives 4 and 8."
explanationWrong:
  - "[2, 4, 6, 8] would result if the condition was not applied."
  - "[2, 6] would result if the numbers themselves were returned, not their doubling."
  - "[4] would be incorrect, as there are two even numbers in the range."
---
### Question 25: What is the result of the following expression?
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
explanation: "The function greet() has two parameters: name and greeting with the default value 'Hello'. When only one argument is passed, the default value for greeting is used. Therefore, greet('John') returns the string 'Hello, John!'."
explanationWrong:
  - "The order of parameters is determined in the return statement, not in the function signature."
  - "Since a default value for greeting is defined, no error occurs when only one argument is passed."
  - "The second parameter has a default value, so 'Hello' is used when no value is provided."
---
### Question 26: What happens when the following code is executed?
```python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("John"))
```
- [ ] The function returns "John, Hello!"
- [x] The function returns "Hello, John!"
- [ ] An error occurs because the second parameter is missing
- [ ] The function returns "Hello, !"

---
topic: "Schleifen"
subtopic: "Continue-Statement"
level: "medium"
explanation: "The loop iterates through the numbers 1 to 4. For even numbers (i % 2 == 0), the continue statement is executed, which skips the rest of the loop. Therefore, only the odd numbers (1 and 3) are added to total, which gives 4."
explanationWrong:
  - "10 would be the sum of all numbers from 1 to 4."
  - "6 would be the sum of the even numbers from 1 to 4."
  - "0 would be the result if no numbers were added."
---
### Question 27: What is the output of the following code?
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
explanation: "The isalpha() method checks if a string contains only alphabetic characters (no numbers, spaces, or special characters)."
explanationWrong:
  - "alpha() is not a standard method for strings in Python."
  - "isalnum() checks if a string contains only alphanumeric characters (letters and numbers)."
  - "contains_alpha() is not a standard method for strings in Python."
---
### Question 28: Which method would you use to check if a string contains only alphabetic characters?
- [ ] `str.alpha()`
- [x] `str.isalpha()`
- [ ] `str.isalnum()`
- [ ] `str.contains_alpha()`

---
topic: "Datenstrukturen"
subtopic: "Listen-Methoden"
level: "medium"
explanation: "The pop() method removes and returns the element at the specified index. With numbers.pop(2), the element at index 2 (the third element, 3) is removed and returned. The list becomes [1, 2, 4, 5]."
explanationWrong:
  - "pop(2) removes the element at index 2 (the third element), not the one with the value 2."
  - "The last element is removed when no index is specified, not when pop(2) is called."
  - "pop() returns the removed element and removes it from the list."
---
### Question 29: What will be the output of the following code?
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
explanation: "Although Python passes objects by reference, the assignment my_list = [10, 20, 30] within the function change_list() causes my_list to reference a new list object that is local to the function. The original list original remains unchanged."
explanationWrong:
  - "The original list is not changed by the reassignment within the function."
  - "The function only changes the local reference, not the list outside the function."
  - "No new elements are added to the original list."
---
### Question 30: What is the output of the following code?
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
explanation: "The & operator performs an intersection of two sets. It returns a new set with the elements that are present in both sets. The common letters in 'Hello' and 'World' are 'o' and 'l'."
explanationWrong:
  - "The first option would be a union (union) of the sets, not an intersection."
  - "The second option does not correctly account for case sensitivity."
  - "The fourth option would be an empty set, which is not correct since there are common letters."
---
### Question 31: What is the result of the following expression?
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
explanation: "The any() function returns True if at least one element in the iterable evaluates to True. It returns False if all elements are False or if the iterable is empty."
explanationWrong:
  - "all() returns True if all elements are true, not any()."
  - "any() returns a boolean value, not the first true element."
  - "any() does not count the number of true elements."
---
### Question 32: What does the `any()` function in Python return?
- [ ] True if all elements in the iterable are true
- [x] True if at least one element in the iterable is true
- [ ] The first true element in the iterable
- [ ] The number of true elements in the iterable

---
topic: "Datentypen"
subtopic: "String-Methoden"
level: "medium"
explanation: "The center() method centers a string in a field of the specified width by adding padding characters on the left and right. With center(7, '*'), the string 'abc' is centered in a field of width 7, with asterisks added on the left and right, resulting in '**abc**'."
explanationWrong:
  - "'abc****' would be the result of ljust(7, '*'), not center()."
  - "'****abc' would be the result of rjust(7, '*'), not center()."
  - "'***abc***' would have 9 characters, not the specified 7."
---
### Question 33: What is the output of the following code?
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
explanation: "The pop() method removes and returns the last element of a list if no index is specified. You can also specify an index to remove an element at a specific position."
explanationWrong:
  - "remove() removes an element with a specific value but does not return a value."
  - "delete() is not a standard method for lists in Python."
  - "discard() is a method for sets, not for lists."
---
### Question 34: Which of the following methods removes and returns the last element of a list?
- [ ] `list.remove()`
- [ ] `list.delete()`
- [x] `list.pop()`
- [ ] `list.discard()`
---
topic: "Datenstrukturen"
subtopic: "Kopieren"
level: "medium"
explanation: "The copy() method creates a shallow copy of a list. This new list contains the same elements as the original list but is a separate object. Changes to the original list do not affect the copy."
explanationWrong:
  - "Since y is a copy of x, not a reference, changes to x are not reflected in y."
  - "The append() method adds elements at the end, not at the beginning."
  - "y is a copy, not an empty list."
---
### Question 35: What is the output of the following code?
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
explanation: "The sorted() function returns a new sorted list without modifying the original sequence. In contrast, the sort() method sorts a list in-place and returns None."
explanationWrong:
  - "sorted() does not change the original sequence but returns a new list."
  - "sorted() returns a list, not a tuple."
  - "sorted() returns a sorted list, not just the largest element."
---
### Question 36: What does the `sorted()` function return?
- [ ] It sorts the original sequence and returns None
- [x] It returns a new sorted list without modifying the original sequence
- [ ] It returns a tuple of sorted elements
- [ ] It returns the largest element in the sequence

---
topic: "Funktionen"
subtopic: "Standardparameter"
level: "medium"
explanation: "In Python, default parameter values are evaluated only once at function definition. In the first execution of func(), the default values [] and {} are used. In the second execution, the explicitly passed values [1, 2] and {'x': 1} are used."
explanationWrong:
  - "The default parameter values are displayed correctly."
  - "The passed arguments are correctly displayed in the second execution."
  - "The function does not raise an error."
---
### Question 37: What will the following code output?
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
explanation: "In Python, assigning a variable within a function creates a local variable by default. The inner function has its own local variable x with the value 2, while the outer function keeps its own variable x with the value 1."
explanationWrong:
  - "The assignment in inner() creates a local variable that doesn't affect the outer variable."
  - "Without the nonlocal keyword, the assignment in inner() doesn't affect the variable in outer()."
  - "Each function has its own variable scope."
---
### Question 38: What is the output of the following code?
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
explanation: "The code uses two nested loops, where i traverses the outer loop (0 to 2) and j traverses the inner loop (0 to 1). For each combination, an '*' is output if i equals j, otherwise a '-'. This leads to the pattern *-*-*-."
explanationWrong:
  - "**---- would result if the condition were always true for the first two iterations."
  - "The pattern is based on comparing i and j, not on another condition."
  - "------ would result if the condition were never true."
---
### Question 39: What is the output of the following code?
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
explanation: "The join() method joins the elements of a sequence into a string, using the string on which the method is called as the separator. Here, the words are joined with a hyphen (-)."
explanationWrong:
  - "join() uses the specified separator, not a comma and a space."
  - "join() returns a string, not a list with a single string."
  - "join() uses the specified separator, not a slash."
---
### Question 40: What will the following code output?
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
explanation: "The + operator with lists performs concatenation. It creates a new list containing the elements of both lists. With a + b, the elements of a and b are combined into a new list [1, 2, 3, 4, 5, 6]."
explanationWrong:
  - "[5, 7, 9] would be the result if the corresponding elements were added, which Python doesn't do by default with lists."
  - "[[1, 2, 3], [4, 5, 6]] would be the result if a list of lists were created, not a concatenated list."
  - "The + operator is defined for lists and doesn't cause an error."
---
### Question 41: If `a = [1, 2, 3]` and `b = [4, 5, 6]`, what will `a + b` return?
- [ ] [5, 7, 9]
- [x] [1, 2, 3, 4, 5, 6]
- [ ] [[1, 2, 3], [4, 5, 6]]
- [ ] Error

---
topic: "Datenstrukturen"
subtopic: "Dictionary-Iteration"
level: "easy"
explanation: "When iterating over a dictionary without calling a specific method like items(), the keys are iterated by default. Therefore, the code outputs the keys 'a' and 'b'."
explanationWrong:
  - "To iterate over the values, you would need to use my_dict.values()."
  - "To iterate over key-value pairs, you would need to use my_dict.items()."
  - "The output shows only the keys, not the keys with their values."
---
### Question 42: What is the output of the following code?
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
explanation: "The slice assignment numbers[1:3] = [200, 300] replaces the elements at indices 1 and 2 with 200 and 300. The list therefore becomes [10, 200, 300, 40]."
explanationWrong:
  - "The slice assignment replaces the corresponding elements, it doesn't keep the original list."
  - "The slice assignment replaces the elements at positions 1 and 2, not just the first element."
  - "The new elements are inserted directly into the list, not as a nested list."
---
### Question 43: What is the output of the following code?
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
explanation: "The expression float('3.14') + int('2') first converts '3.14' to the floating-point number 3.14 and '2' to the integer 2. Then these values are added, resulting in 5.14."
explanationWrong:
  - "'3.142' would be the result of string concatenation, not numerical addition."
  - "3.142 would be incorrect, as the addition 3.14 + 2 = 5.14."
  - "The type conversions are valid and don't cause an error."
---
### Question 44: What is the result of `float("3.14") + int("2")`?
- [ ] "3.142"
- [ ] 3.142
- [x] 5.14
- [ ] Error

---
topic: "Funktionen"
subtopic: "Eingebaute Funktionen"
level: "medium"
explanation: "The all() function returns True if all elements in the iterable evaluate to True. If at least one element is False or the iterable is empty, it returns False."
explanationWrong:
  - "any() returns True if at least one element is true, not all()."
  - "all() returns a boolean value, not the number of true elements."
  - "all() returns a boolean value, not the first false element."
---
### Question 45: What does the `all()` function in Python return?
- [ ] True if any element in the iterable is true
- [x] True if all elements in the iterable are true
- [ ] The number of true elements in the iterable
- [ ] The first false element in the iterable

---
topic: "Datenstrukturen"
subtopic: "Tupel"
level: "medium"
explanation: "A tuple is an immutable sequence, but it can contain mutable objects like lists. Here, the tuple b contains a reference to the list a. Although the tuple itself cannot be changed, the list within the tuple can be changed."
explanationWrong:
  - "Since b contains a reference to the list a, it reflects changes to a."
  - "b contains a reference to the list, not a copy."
  - "The tuple contains a single list as an element, not multiple elements."
---
### Question 46: What is the output of the following code?
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
explanation: "The sorted() function sorts elements in ascending order by default. For strings, uppercase letters are sorted before lowercase letters. Therefore, 'Banana' comes before 'apple' and 'cherry'."
explanationWrong:
  - "The sorted() function changes the order based on the ASCII value of the characters."
  - "To sort regardless of case, you would need to use a key argument."
  - "The third option is correct, as uppercase letters come before lowercase letters in ASCII."
---
### Question 47: What is the output of the following code?
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
explanation: "In the function func(a, b, *args, **kwargs), *args collects additional positional arguments and **kwargs collects additional named arguments. With func(1, 2, 3, 4, x=5, y=6), a=1 and b=2 are the regular positional arguments, args=(3, 4) contains two additional positional arguments, and kwargs={'x': 5, 'y': 6} contains two named arguments. Therefore, len(args) + len(kwargs) = 2 + 2 = 4."
explanationWrong:
  - "There are 6 arguments in total, but we're only counting the length of args and kwargs."
  - "args contains 2 elements and kwargs contains 2 elements, for a total of 4."
  - "a and b are not counted in args or kwargs."
---
### Question 48: What will the following code output?
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
explanation: "The pass statement is a placeholder that performs no action. In the code, pass is executed for even numbers, but it has no effect on the program flow. For odd numbers, i is output. Therefore, only the odd numbers 1 and 3 are output."
explanationWrong:
  - "0, 2, 4 are even numbers for which pass is executed, they are not output."
  - "All numbers would be output if the if conditions had no effect."
  - "There is output of the odd numbers 1 and 3."
---
### Question 49: What is the output of the following code?
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
- [ ] No output

---
topic: "Datenstrukturen"
subtopic: "List Comprehension"
level: "medium"
explanation: "This list comprehension uses a conditional expression that returns 'hi' if i is even (i % 2 == 0), and 'hello' if i is odd. For i from 0 to 3, this gives ['hi', 'hello', 'hi', 'hello']."
explanationWrong:
  - "The list comprehension uses a conditional expression to alternate between 'hi' and 'hello'."
  - "The condition i % 2 == 0 is true for even numbers (0, 2) and false for odd numbers (1, 3)."
  - "The list comprehension iterates through all values from 0 to 3, not just a subset."
---
### Question 50: What is the output of the following code?
```python
words = ["hi" if i % 2 == 0 else "hello" for i in range(4)]
print(words)
```
- [ ] ["hi", "hi", "hi", "hi"]
- [ ] ["hello", "hello", "hello", "hello"]
- [x] ["hi", "hello", "hi", "hello"]
- [ ] ["hi, "hello"]