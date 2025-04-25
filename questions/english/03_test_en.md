---
# Python Quiz with Metadata (Part 4)

---
topic: "Grundlagen"
subtopic: "Indentation"
level: "easy"
explanation: "Python uses indentation to define blocks of code. Unlike many other programming languages that use braces or keywords, Python uses whitespace at the beginning of a line to define the scope. Four spaces are commonly used as the standard indentation."
explanationWrong:
  - "Python does not use braces {} to define code blocks as many other languages do."
  - "Python does not use keywords like 'begin' and 'end' to define code blocks."
  - "While semicolons can be used to separate statements on a single line, they are not used to define code blocks."
---
### Question 1: How are code blocks defined in Python?
- [ ] By using braces {}
- [ ] By using begin/end keywords
- [x] By using indentation
- [ ] By using semicolons ;

---
topic: "Datentypen"
subtopic: "String-Konkatenation"
level: "easy"
explanation: "In Python, strings can be concatenated using the + operator. When you add two strings together, they are joined to form a single string without any additional spaces between them. In this case, 'Hello ' + 'World' produces 'Hello World'."
explanationWrong:
  - "The + operator doesn't add spaces automatically; spaces must be included in the strings."
  - "String concatenation doesn't result in a list of strings."
  - "The operation is valid and doesn't raise a TypeError."
---
### Question 2: What is the output of the following code?
```python
result = "Hello " + "World"
print(result)
```
- [x] Hello World
- [ ] HelloWorld
- [ ] ['Hello', 'World']
- [ ] TypeError

---
topic: "Funktionen"
subtopic: "Dokumentation"
level: "easy"
explanation: "In Python, docstrings (documentation strings) are used to document modules, functions, classes, or methods. They are written as a string literal at the beginning of a function (or module, class, method) and are used by the help() function to generate documentation. Triple quotes allow docstrings to span multiple lines."
explanationWrong:
  - "Comments with # are not used for formal documentation that can be accessed by help()."
  - "Inline comments aren't used for formal documentation accessible through help()."
  - "While markdown can be used in docstrings, docstrings themselves are defined with triple quotes."
---
### Question 3: How are docstrings typically written in Python functions?
- [ ] Using # comments before the function
- [ ] Using # comments inside the function
- [x] Using triple-quoted strings at the beginning of the function
- [ ] Using markdown format

---
topic: "Datenstrukturen"
subtopic: "Dictionaries"
level: "medium"
explanation: "In Python dictionaries, the items() method returns an iterable view object of (key, value) tuples. When we use this in a for loop, we can unpack these tuples directly into variables. In this code, for each iteration, 'k' gets the key and 'v' gets the value from each key-value pair in the dictionary."
explanationWrong:
  - "The items() method returns (key, value) pairs, not just the keys."
  - "When iterating items(), the loop variables get both keys and values, not just values."
  - "The syntax is valid and doesn't raise a SyntaxError."
---
### Question 4: What will the following code print?
```python
data = {'a': 1, 'b': 2}
for k, v in data.items():
    print(k, v)
```
- [x] a 1
b 2
- [ ] a
b
- [ ] 1
2
- [ ] SyntaxError

---
topic: "Schleifen"
subtopic: "While-Schleifen"
level: "medium"
explanation: "This code uses a while loop to repeatedly divide n by 2 as long as n is greater than 1. Starting with n = 16, the sequence of values for n will be: 16 → 8 → 4 → 2 → 1. When n becomes 1, the while condition (n > 1) becomes False, and the loop exits. At this point, count has been incremented 4 times."
explanationWrong:
  - "The loop runs 4 times for the values 16, 8, 4, and 2, not 5 times."
  - "The loop doesn't run indefinitely; it stops when n becomes 1."
  - "The loop doesn't just run once; it divides n by 2 repeatedly."
---
### Question 5: How many times will the while loop in the following code execute?
```python
n = 16
count = 0
while n > 1:
    n = n // 2
    count += 1
print(count)
```
- [ ] 5 times
- [x] 4 times
- [ ] The loop will run indefinitely
- [ ] 1 time

---
topic: "Print_Input"
subtopic: "String-Formatierung"
level: "medium"
explanation: "In Python string formatting, '{:02d}' specifies that the number should be formatted as a decimal integer (d) with at least 2 digits (2), padded with zeros if necessary (0). For the number 7, this results in '07'."
explanationWrong:
  - "The format '{:02d}' adds leading zeros to make the number at least 2 digits long."
  - "The format doesn't just pad with a single 0; it ensures the number is at least 2 digits."
  - "The format is valid and doesn't raise a ValueError."
---
### Question 6: What will be the output of the following code?
```python
num = 7
formatted = "{:02d}".format(num)
print(formatted)
```
- [ ] 7
- [x] 07
- [ ] 7.00
- [ ] ValueError

---
topic: "Grundlagen"
subtopic: "Operatoren"
level: "medium"
explanation: "The bitwise XOR operator (^) in Python performs a 'exclusive or' operation on each bit position of the binary representation of the numbers. The result has a 1 in each bit position where the corresponding bits of the operands are different, and 0 where they are the same. For 5 (101 in binary) and 3 (011 in binary), the result is 6 (110 in binary)."
explanationWrong:
  - "5 + 3 = 8, not 6."
  - "5 * 3 = 15, not 6."
  - "5 - 3 = 2, not 6."
---
### Question 7: What is the result of the expression 5 ^ 3 in Python?
- [ ] 8
- [x] 6
- [ ] 15
- [ ] 2

---
topic: "Datentypen"
subtopic: "Sets"
level: "medium"
explanation: "The symmetric_difference() method in Python sets returns a set containing elements that are in either of the sets, but not in both. Essentially, it's the set of elements that are in exactly one of the sets. In this case, {1, 2, 3}.symmetric_difference({3, 4, 5}) returns {1, 2, 4, 5}, as 3 is in both sets and thus excluded."
explanationWrong:
  - "The symmetric difference excludes common elements (3 in this case)."
  - "The symmetric difference includes elements that are in one set but not both."
  - "The symmetric difference returns a set, not a list."
---
### Question 8: What will be the output of the following code?
```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}
print(set1.symmetric_difference(set2))
```
- [x] {1, 2, 4, 5}
- [ ] {1, 2, 3, 4, 5}
- [ ] {3}
- [ ] [1, 2, 4, 5]

---
topic: "Funktionen"
subtopic: "Rekursion"
level: "medium"
explanation: "This function implements the Fibonacci sequence recursively. The base cases are when n is 0 or 1, which return 0 and 1 respectively. For other values, it recursively calculates fib(n-1) + fib(n-2). For fib(5), the calculation expands to fib(4) + fib(3), which further expands until reaching the base cases, eventually resulting in 5."
explanationWrong:
  - "The Fibonacci sequence for n=5 is 5, not 8."
  - "The function does not return the input itself; it calculates the Fibonacci number."
  - "The recursive implementation works correctly for this small input and doesn't cause a RecursionError."
---
### Question 9: What will be the output of the following code?
```python
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

print(fib(5))
```
- [ ] 8
- [x] 5
- [ ] The function will return the input: 5
- [ ] RecursionError

---
topic: "Datenstrukturen"
subtopic: "Nested Lists"
level: "medium"
explanation: "To access elements in a nested list, you use multiple indices, one for each level of nesting. In this case, matrix[1][0] accesses the element at index 0 of the sublist at index 1 of the matrix. The sublist at index 1 is [4, 5, 6], and the element at index 0 of this sublist is 4."
explanationWrong:
  - "matrix[1][0] refers to the first element of the second row, which is 4."
  - "[1, 0] would be the result if we created a new list with these indices, but this is not what the code does."
  - "The indices are valid and don't cause an IndexError."
---
### Question 10: What will be the output of the following code?
```python
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(matrix[1][0])
```
- [x] 4
- [ ] 2
- [ ] [1, 0]
- [ ] IndexError

---
topic: "Grundlagen"
subtopic: "Datentypen"
level: "easy"
explanation: "In Python, the type() function returns the type of an object. For string literals (enclosed in quotes), it returns <class 'str'>. This is Python's way of indicating that the object is an instance of the string class."
explanationWrong:
  - "String literals in Python are of type 'str', not 'string'."
  - "String literals in Python are of type 'str', not 'StringType'."
  - "String literals in Python are of type 'str', not 'text'."
---
### Question 11: What will be the output of the following code?
```python
print(type("Hello"))
```
- [x] <class 'str'>
- [ ] <class 'string'>
- [ ] <class 'StringType'>
- [ ] <class 'text'>

---
topic: "Datenstrukturen"
subtopic: "Listen-Methoden"
level: "medium"
explanation: "The reverse() method in Python lists reverses the order of elements in-place, meaning it modifies the original list without creating a new one. After reversing, the list becomes [3, 2, 1]. Then, when we try to access the element at index 3 with numbers[3], we get an IndexError because the list now has only 3 elements (indices 0, 1, and 2)."
explanationWrong:
  - "After reversal, the list becomes [3, 2, 1] which doesn't have an element at index 3."
  - "reverse() doesn't create a new reversed list; it modifies the original list in-place."
  - "The error occurs because we try to access an index that is out of bounds."
---
### Question 12: What will happen when the following code is executed?
```python
numbers = [1, 2, 3]
numbers.reverse()
print(numbers[3])
```
- [ ] 1
- [ ] None
- [x] IndexError
- [ ] TypeError

---
topic: "Schleifen"
subtopic: "List Comprehension"
level: "medium"
explanation: "This list comprehension creates a list where each element is the result of applying the expression x*x to each value of x from 1 to 5. It's essentially calculating the square of each number from 1 to 5, resulting in [1, 4, 9, 16, 25]."
explanationWrong:
  - "The list comprehension calculates squares, not just returns the range numbers."
  - "The range(1, 6) generates numbers from 1 to 5, not 0 to 5."
  - "The calculation is correct and doesn't result in a different sequence."
---
### Question 13: What will be the output of the following code?
```python
squares = [x*x for x in range(1, 6)]
print(squares)
```
- [ ] [1, 2, 3, 4, 5]
- [x] [1, 4, 9, 16, 25]
- [ ] [0, 1, 4, 9, 16, 25]
- [ ] [1, 2, 4, 8, 16]

---
topic: "Print_Input"
subtopic: "Mehrere Ausgaben"
level: "easy"
explanation: "In Python's print function, the 'sep' parameter specifies the separator between the items to be printed. By default, it's a space. In this code, sep='-' changes the separator to a hyphen, causing the elements to be printed with hyphens in between."
explanationWrong:
  - "The sep parameter changes the separator between printed items to a hyphen."
  - "The print function with multiple arguments prints each argument with the specified separator."
  - "The print statement is valid and doesn't result in an error."
---
### Question 14: What will be the output of the following code?
```python
print("Hello", "World", "Python", sep="-")
```
- [ ] Hello World Python
- [x] Hello-World-Python
- [ ] HelloWorldPython
- [ ] TypeError

---
topic: "Datentypen"
subtopic: "String-Methoden"
level: "medium"
explanation: "The title() method in Python strings converts the first character of each word to uppercase and the rest to lowercase. In this case, 'hello WORLD python' becomes 'Hello World Python'."
explanationWrong:
  - "The title() method capitalizes the first letter of each word, not just the first letter of the string."
  - "The title() method doesn't convert the entire string to uppercase."
  - "The title() method is a valid string method and doesn't result in an error."
---
### Question 15: What will be the output of the following code?
```python
text = "hello WORLD python"
print(text.title())
```
- [ ] Hello world python
- [ ] HELLO WORLD PYTHON
- [x] Hello World Python
- [ ] AttributeError

---
topic: "Funktionen"
subtopic: "Variablen-Sichtbarkeit"
level: "medium"
explanation: "In Python, when a variable is declared inside a function, it is local to that function and not accessible outside. In this code, the variable 'message' is local to the greet() function and not accessible in the global scope. When we try to print(message) outside the function, a NameError is raised."
explanationWrong:
  - "Local variables declared inside a function are not accessible outside unless explicitly returned."
  - "The print statement outside the function tries to access a variable that doesn't exist in its scope."
  - "The error is a NameError, not a SyntaxError, because 'message' is not defined in the global scope."
---
### Question 16: What will happen when the following code is executed?
```python
def greet():
    message = "Hello, World!"
    print(message)

greet()
print(message)
```
- [ ] The code will print "Hello, World!" twice
- [ ] The code will print "Hello, World!" once and then None
- [x] The code will print "Hello, World!" and then raise a NameError
- [ ] SyntaxError

---
topic: "Grundlagen"
subtopic: "Operatorrangfolge"
level: "medium"
explanation: "In Python, the order of operations (operator precedence) determines which parts of an expression are evaluated first. Multiplication (*) has higher precedence than addition (+), so 2 + 3 * 4 is evaluated as 2 + (3 * 4), which equals 2 + 12 = 14."
explanationWrong:
  - "The expression is not evaluated from left to right; operator precedence matters."
  - "Multiplication has higher precedence than addition, so 3 * 4 is evaluated first."
  - "The correct result, following operator precedence, is 14."
---
### Question 17: What is the result of the expression 2 + 3 * 4 in Python?
- [ ] 20
- [x] 14
- [ ] 24
- [ ] SyntaxError

---
topic: "Datenstrukturen"
subtopic: "Dictionaries"
level: "medium"
explanation: "The pop() method in Python dictionaries removes the item with the specified key and returns the value. If the key is not found and a default value is provided, it returns the default value. In this case, 'c' is not in the dictionary, so the default value 'Not found' is returned."
explanationWrong:
  - "The pop() method with a key that doesn't exist returns the default value, not the key."
  - "Since a default value is provided, no KeyError is raised when the key is not found."
  - "The pop() method doesn't add the key to the dictionary if it doesn't exist."
---
### Question 18: What will be the output of the following code?
```python
my_dict = {'a': 1, 'b': 2}
result = my_dict.pop('c', 'Not found')
print(result)
```
- [ ] c
- [x] Not found
- [ ] KeyError
- [ ] None

---
topic: "Schleifen"
subtopic: "For-Schleifen"
level: "medium"
explanation: "When you iterate through a string in Python with a for loop, you iterate through each character. In this code, the loop iterates through each character of 'Python', and for each character, it prints the character followed by its ASCII value (obtained with ord())."
explanationWrong:
  - "The loop iterates through each character, not just the first one."
  - "The loop prints both the character and its ASCII value, not just the ASCII value."
  - "The loop works correctly and doesn't raise an error."
---
### Question 19: What will the following code output?
```python
for char in "Python":
    print(char, ord(char))
```
- [ ] P 80
- [x] P 80
y 121
t 116
h 104
o 111
n 110
- [ ] 80 121 116 104 111 110
- [ ] TypeError

---
topic: "Funktionen"
subtopic: "Map-Funktion"
level: "medium"
explanation: "The map() function in Python applies a function to each item in an iterable and returns an iterator of the results. In this code, map(len, ['apple', 'banana', 'cherry']) applies the len() function to each string in the list, resulting in a map object containing [5, 6, 6]. The list() function then converts this map object to a list."
explanationWrong:
  - "The map() function applies len() to each element, returning the lengths [5, 6, 6]."
  - "The map() function returns a map object, not the original list."
  - "The function and list combination is valid and doesn't raise an error."
---
### Question 20: What will be the output of the following code?
```python
result = list(map(len, ['apple', 'banana', 'cherry']))
print(result)
```
- [x] [5, 6, 6]
- [ ] ['apple', 'banana', 'cherry']
- [ ] A map object
- [ ] TypeError

---
topic: "Datentypen"
subtopic: "String-Methoden"
level: "easy"
explanation: "The isalpha() method returns True if all characters in the string are alphabetic (letters) and there is at least one character. In 'Hello123', not all characters are alphabetic (the digits 1, 2, 3 are not), so isalpha() returns False."
explanationWrong:
  - "isalpha() returns True only if all characters are alphabetic, which is not the case here."
  - "Since 'Hello123' contains digits, isalpha() returns False, not True."
  - "isalpha() is a valid string method and doesn't raise an error."
---
### Question 21: What will be the output of the following code?
```python
text = "Hello123"
print(text.isalpha())
```
- [ ] True
- [x] False
- [ ] None
- [ ] AttributeError

---
topic: "Print_Input"
subtopic: "Escape-Sequenzen"
level: "easy"
explanation: "In Python strings, the escape sequence \\n represents a newline character. When printed, it causes the output to continue on the next line. In the string 'Hello\\nWorld', the \\n causes 'World' to be printed on a new line."
explanationWrong:
  - "The \\n is an escape sequence for a newline, not a literal 'n'."
  - "The \\n causes a line break in the output, not a space."
  - "The \\n is interpreted as a newline, not left as-is in the output."
---
### Question 22: What will be the output of the following code?
```python
print("Hello\nWorld")
```
- [ ] Hello\nWorld
- [x] Hello
World
- [ ] Hello World
- [ ] HelloWorld

---
topic: "Grundlagen"
subtopic: "Vergleichsoperatoren"
level: "easy"
explanation: "In Python, the not operator negates a boolean expression. The expression 10 > 5 evaluates to True, and not True evaluates to False."
explanationWrong:
  - "10 > 5 is True, so not (10 > 5) is False."
  - "The not operator negates the boolean value, turning True into False."
  - "The expression is correctly formed and doesn't result in an error."
---
### Question 23: What is the result of the expression not (10 > 5) in Python?
- [ ] True
- [x] False
- [ ] None
- [ ] SyntaxError

---
topic: "Datenstrukturen"
subtopic: "Tupel-Unpacking"
level: "medium"
explanation: "Tuple unpacking in Python allows you to assign multiple variables from the values in a tuple in a single statement. In this code, (a, b, c) = (1, 2, 3) assigns 1 to a, 2 to b, and 3 to c."
explanationWrong:
  - "The values are assigned in order: 1 to a, 2 to b, 3 to c."
  - "Tuple unpacking requires the same number of variables and values."
  - "The unpacking is valid and doesn't result in an error."
---
### Question 24: What values will a, b, and c have after executing the following code?
```python
(a, b, c) = (1, 2, 3)
```
- [x] a=1, b=2, c=3
- [ ] a=(1, 2, 3), b=None, c=None
- [ ] a=1, b=1, c=1
- [ ] ValueError

---
topic: "Schleifen"
subtopic: "Else-in-Schleifen"
level: "medium"
explanation: "In Python, the else clause in a loop is executed when the loop has exhausted the iterable (in a for loop) or when the condition becomes false (in a while loop), but not when the loop is terminated by a break statement. In this code, the loop completes normally without encountering a break, so the else block is executed, printing 'Loop completed'."
explanationWrong:
  - "Since the loop completes normally without a break, the else block is executed."
  - "The else clause in a loop is not related to if-else; it runs when the loop completes normally."
  - "The feature is correctly implemented and doesn't result in an error."
---
### Question 25: What will be the output of the following code?
```python
for i in range(3):
    print(i)
else:
    print("Loop completed")
```
- [x] 0
1
2
Loop completed
- [ ] 0
1
2
- [ ] Loop completed
- [ ] SyntaxError

---
topic: "Funktionen"
subtopic: "Höherwertige-Funktionen"
level: "medium"
explanation: "A higher-order function is a function that takes one or more functions as arguments or returns a function. In this code, the apply_twice function takes a function and a value as arguments, and applies the function to the value twice. When apply_twice(square, 3) is called, it first computes square(3)=9, then square(9)=81."
explanationWrong:
  - "The function is applied twice, so the result is square(square(3)) = square(9) = 81."
  - "The correct sequence is: square(3)=9, then square(9)=81."
  - "The code is correctly implemented and doesn't result in an error."
---
### Question 26: What will be the output of the following code?
```python
def square(x):
    return x * x

def apply_twice(func, val):
    return func(func(val))

print(apply_twice(square, 3))
```
- [ ] 6
- [ ] 9
- [x] 81
- [ ] TypeError

---
topic: "Datentypen"
subtopic: "Binäre-Umwandlung"
level: "medium"
explanation: "The bin() function returns the binary representation of an integer as a string, prefixed with '0b'. For the number 10, the binary representation is 1010, so bin(10) returns '0b1010'."
explanationWrong:
  - "The binary representation of 10 is 1010, prefixed with '0b'."
  - "The bin() function returns a string, not an integer."
  - "The function is correctly called and doesn't result in an error."
---
### Question 27: What will be the output of the following code?
```python
print(bin(10))
```
- [ ] 1010
- [x] 0b1010
- [ ] 2
- [ ] TypeError

---
topic: "Grundlagen"
subtopic: "Kommentare"
level: "easy"
explanation: "In Python, multiline comments can be created using triple quotes (''' or \"\"\"). Although these are technically docstrings when used at the beginning of modules, functions, classes, or methods, they are commonly used as multiline comments elsewhere. Single-line comments use the # symbol."
explanationWrong:
  - "/* */ is used for multiline comments in languages like C, Java, and JavaScript, not Python."
  - "// is used for single-line comments in languages like C++, Java, and JavaScript, not Python."
  - "<!-- --> is used for comments in HTML, not Python."
---
### Question 28: Which of the following is used for multiline comments in Python?
- [ ] /* Comment */
- [ ] // Comment
- [x] '''Comment'''
- [ ] <!-- Comment -->

---
topic: "Datenstrukturen"
subtopic: "Listen-Methoden"
level: "medium"
explanation: "The index() method in Python lists returns the index of the first occurrence of the specified element. If the element is not found, it raises a ValueError. In this code, the list [10, 20, 30, 20] contains the element 20 at indices 1 and 3, but index() returns only the first occurrence, which is at index 1."
explanationWrong:
  - "The index() method returns the index of the first occurrence, which is 1."
  - "The method doesn't return a list of all occurrences; it just returns the first one."
  - "Since 20 exists in the list, no ValueError is raised."
---
### Question 29: What will be the output of the following code?
```python
numbers = [10, 20, 30, 20]
print(numbers.index(20))
```
- [ ] 3
- [x] 1
- [ ] [1, 3]
- [ ] ValueError

---
topic: "Print_Input"
subtopic: "Ausgabe-Optionen"
level: "easy"
explanation: "In Python's print function, the 'sep' parameter specifies the separator between the printed items (default is a space), and the 'end' parameter specifies what to print at the end (default is a newline). In this code, sep=':' puts a colon between each item, and end='!' adds an exclamation mark at the end instead of a newline."
explanationWrong:
  - "The sep parameter sets the separator to a colon, and end adds an exclamation mark at the end."
  - "The parameters modify the output format, not the values being printed."
  - "The function call is valid and doesn't result in an error."
---
### Question 30: What will be the output of the following code?
```python
print("Hello", "World", "Python", sep=":", end="!")
```
- [ ] Hello World Python!
- [x] Hello:World:Python!
- [ ] Hello:World:Python
- [ ] TypeError

---
topic: "Funktionen"
subtopic: "Lambda-Funktionen"
level: "medium"
explanation: "A lambda function is an anonymous function defined with the lambda keyword. In this code, the lambda function takes two parameters (x and y) and returns their sum. When called with sort_by_sum([(1, 5), (2, 3), (4, 1)]), it sorts the tuples based on the sum of their elements. The tuple with the smallest sum comes first: (4, 1) has sum 5, (2, 3) has sum 5, and (1, 5) has sum 6. Python's sort is stable, so (4, 1) and (2, 3) maintain their relative order since they have the same sum."
explanationWrong:
  - "The sort is based on the sum of tuple elements, not just the first element."
  - "With a stable sort and equal sums for (4, 1) and (2, 3), they maintain their original order."
  - "The function is correctly implemented and doesn't result in an error."
---
### Question 31: What will be the output of the following code?
```python
def sort_by_sum(tuples_list):
    return sorted(tuples_list, key=lambda x: x[0] + x[1])

print(sort_by_sum([(1, 5), (2, 3), (4, 1)]))
```
- [ ] [(1, 5), (2, 3), (4, 1)]
- [x] [(4, 1), (2, 3), (1, 5)]
- [ ] [(1, 5), (4, 1), (2, 3)]
- [ ] TypeError

---
topic: "Datentypen"
subtopic: "Set-Operationen"
level: "medium"
explanation: "The difference() method in Python sets returns a set containing elements that are in the first set but not in the second set. In this case, {1, 2, 3, 4}.difference({2, 4, 6}) returns {1, 3}, which are the elements present in the first set but not in the second."
explanationWrong:
  - "The difference is elements in the first set but not in the second, not the common elements."
  - "The difference is not all unique elements across both sets."
  - "The operation returns a set, not a list."
---
### Question 32: What will be the output of the following code?
```python
set1 = {1, 2, 3, 4}
set2 = {2, 4, 6}
print(set1.difference(set2))
```
- [x] {1, 3}
- [ ] {2, 4}
- [ ] {1, 2, 3, 4, 6}
- [ ] [1, 3]

---
topic: "Schleifen"
subtopic: "Ausnahmebehandlung"
level: "medium"
explanation: "In Python, a try-except block allows you to handle exceptions gracefully. The try block contains code that might raise an exception, and the except block specifies how to handle the exception. In this code, the for loop attempts to convert each element to an integer. The strings '1' and '2' convert successfully, but 'three' raises a ValueError, which is caught by the except block, printing 'Not a number: three'. Then the loop continues with the next element."
explanationWrong:
  - "The exception doesn't stop the entire loop; only the current iteration is affected."
  - "The except block handles the ValueError and allows the loop to continue."
  - "The code is correctly structured and doesn't result in a syntax error."
---
### Question 33: What will be the output of the following code?
```python
items = ['1', '2', 'three', '4']
for item in items:
    try:
        number = int(item)
        print(f"Number: {number}")
    except ValueError:
        print(f"Not a number: {item}")
```
- [ ] Number: 1
Number: 2
ValueError: invalid literal for int() with base 10: 'three'
- [x] Number: 1
Number: 2
Not a number: three
Number: 4
- [ ] Number: 1
Number: 2
- [ ] SyntaxError

---
topic: "Grundlagen"
subtopic: "Typ-Überprüfung"
level: "easy"
explanation: "The isinstance() function in Python checks if an object is an instance of a specified class or type. It returns True if the object is an instance of the specified type(s), and False otherwise. In this code, isinstance(5, int) checks if 5 is an integer, which it is, so it returns True."
explanationWrong:
  - "5 is indeed an instance of the int class, so isinstance(5, int) returns True."
  - "isinstance() checks the type of the object, not its value."
  - "The function is correctly called and doesn't result in an error."
---
### Question 34: What will be the output of the following code?
```python
print(isinstance(5, int))
```
- [x] True
- [ ] False
- [ ] 5
- [ ] TypeError

---
topic: "Datenstrukturen"
subtopic: "Queue"
level: "medium"
explanation: "In Python, we can use collections.deque as an efficient double-ended queue. The append() method adds elements to the right side of the deque, and popleft() removes and returns elements from the left side, which provides first-in, first-out (FIFO) behavior. In this code, elements are added to the right (2, 4, 6) and then removed from the left in the same order."
explanationWrong:
  - "deque with append and popleft gives FIFO behavior, returning elements in the order they were added."
  - "The elements are removed in insertion order: 2, then 4, then 6."
  - "The queue operations are valid and don't result in an error."
---
### Question 35: What will be the output of the following code?
```python
from collections import deque
queue = deque()
queue.append(2)
queue.append(4)
queue.append(6)
print(queue.popleft())
print(queue.popleft())
print(queue.popleft())
```
- [x] 2
4
6
- [ ] 6
4
2
- [ ] [2, 4, 6]
- [ ] IndexError

---
topic: "Funktionen"
subtopic: "Filter-Funktion"
level: "medium"
explanation: "The filter() function in Python constructs an iterator from elements of an iterable for which a function returns true. In this case, the lambda function checks if a number is odd (n % 2 == 1). When applied to the list [1, 2, 3, 4, 5], it filters out the even numbers, leaving only the odd ones: [1, 3, 5]."
explanationWrong:
  - "The filter selects odd numbers (where n % 2 == 1), not even numbers."
  - "The filter function returns a filter object, which is converted to a list."
  - "The operation is valid and doesn't result in an error."
---
### Question 36: What will be the output of the following code?
```python
result = list(filter(lambda n: n % 2 == 1, [1, 2, 3, 4, 5]))
print(result)
```
- [ ] [2, 4]
- [x] [1, 3, 5]
- [ ] A filter object
- [ ] TypeError

---
topic: "Print_Input"
subtopic: "F-Strings"
level: "medium"
explanation: "f-strings in Python allow for expressions inside string literals using curly braces {}. In this code, f'{x} + {y} = {x + y}' embeds the values of x (5) and y (3) in the string, as well as their sum (8). The resulting string is '5 + 3 = 8'."
explanationWrong:
  - "f-strings evaluate expressions within {}, so {x + y} becomes 8, not the literal 'x + y'."
  - "f-strings substitute variable values, so {x} becomes 5 and {y} becomes 3."
  - "The f-string is correctly formed and doesn't result in an error."
---
### Question 37: What will be the output of the following code?
```python
x = 5
y = 3
result = f'{x} + {y} = {x + y}'
print(result)
```
- [ ] {x} + {y} = {x + y}
- [x] 5 + 3 = 8
- [ ] x + y = 8
- [ ] SyntaxError

---
topic: "Datentypen"
subtopic: "Set-Comprehension"
level: "medium"
explanation: "A set comprehension, similar to a list comprehension, creates a set from an iterable, applying an expression to each element. In this code, {x**2 for x in range(1, 5)} creates a set with the squares of numbers 1 through 4. The resulting set contains the values {1, 4, 9, 16}. Note that sets are unordered, so the order in the output may vary."
explanationWrong:
  - "A set comprehension creates a set, not a list, so the result is a set of squares."
  - "The range(1, 5) generates numbers 1 through 4, not 0 through 4."
  - "The comprehension is correctly formed and doesn't result in an error."
---
### Question 38: What will be the output of the following code?
```python
result = {x**2 for x in range(1, 5)}
print(result)
```
- [ ] [1, 4, 9, 16]
- [x] {1, 4, 9, 16}
- [ ] {0, 1, 4, 9, 16}
- [ ] SyntaxError

---
topic: "Schleifen"
subtopic: "Continue-Statement"
level: "medium"
explanation: "The continue statement in Python skips the rest of the current iteration of a loop and continues with the next iteration. In this code, when i is equal to 3, the continue statement is executed, and the print statement for that iteration is skipped. Therefore, the numbers 1, 2, 4, and 5 are printed, but 3 is skipped."
explanationWrong:
  - "continue skips the rest of the current iteration but doesn't exit the loop."
  - "With continue at i=3, only the 3 is skipped, and the loop continues with 4 and 5."
  - "The continue statement is correctly used and doesn't result in an error."
---
### Question 39: What will be the output of the following code?
```python
for i in range(1, 6):
    if i == 3:
        continue
    print(i)
```
- [ ] 1
2
3
4
5
- [x] 1
2
4
5
- [ ] 1
2
- [ ] SyntaxError

---
topic: "Grundlagen"
subtopic: "Import-Direktiven"
level: "easy"
explanation: "In Python, the 'as' keyword in import statements allows you to create an alias for a module or specific imports. This is useful for modules with long names or to avoid naming conflicts. In this code, 'import math as m' imports the math module under the alias 'm', which is then used to access the math.pi constant."
explanationWrong:
  - "The 'as' keyword creates an alias for a module, not a shorthand syntax."
  - "The alias doesn't create a new module; it just provides an alternative name."
  - "The import statement with 'as' is correctly formed and doesn't result in an error."
---
### Question 40: What is the purpose of the 'as' keyword in the following import statement?
```python
import math as m
print(m.pi)
```
- [x] It creates an alias for the module
- [ ] It imports only the specified part of the module
- [ ] It creates a shorthand syntax for Python statements
- [ ] It's a syntax error

---
topic: "Funktionen"
subtopic: "Unpacking-Argumente"
level: "medium"
explanation: "In Python, the * operator can be used to 'unpack' an iterable into individual arguments when calling a function. In this code, args = [2, 3] contains two values that are unpacked into the sum_values function as separate arguments. This is equivalent to calling sum_values(2, 3), which returns 2 + 3 = 5."
explanationWrong:
  - "The * operator unpacks the list into separate arguments, not passing it as a single list argument."
  - "The function receives 2 and 3 as separate arguments, not a list, so it returns 2 +, which is 5."
  - "The unpacking is correctly done and doesn't result in an error."
---
### Question 41: What will be the output of the following code?
```python
def sum_values(a, b):
    return a + b

args = [2, 3]
print(sum_values(*args))
```
- [ ] [2, 3]
- [x] 5
- [ ] TypeError
- [ ] None

---
topic: "Datentypen"
subtopic: "Byte-String"
level: "medium"
explanation: "In Python, bytes objects are immutable sequences of single bytes. The b prefix before a string literal creates a bytes object. When printed, bytes objects show ASCII characters where possible, and escape sequences \\x for non-ASCII bytes. In this case, b'hello' represents a sequence of bytes corresponding to the ASCII codes for 'h', 'e', 'l', 'l', 'o'."
explanationWrong:
  - "The b prefix creates a bytes object, not a regular string."
  - "The printed representation includes the b prefix to indicate it's a bytes object."
  - "The bytes object is correctly created and doesn't result in an error."
---
### Question 42: What will be the output of the following code?
```python
byte_string = b'hello'
print(byte_string)
```
- [ ] hello
- [x] b'hello'
- [ ] [104, 101, 108, 108, 111]
- [ ] TypeError

---
topic: "Datenstrukturen"
subtopic: "Stack"
level: "medium"
explanation: "In Python, a list can be used as a stack with append() to push elements and pop() to remove and return the last element. This follows the last-in, first-out (LIFO) principle. In this code, elements are added to the stack (1, 2, 3) and then removed in reverse order (3, 2, 1)."
explanationWrong:
  - "Using append and pop gives LIFO behavior, returning elements in reverse order of insertion."
  - "The elements are removed in reverse order: 3, then 2, then 1."
  - "The stack operations are valid and don't result in an error."
---
### Question 43: What will be the output of the following code?
```python
stack = []
stack.append(1)
stack.append(2)
stack.append(3)
print(stack.pop())
print(stack.pop())
print(stack.pop())
```
- [ ] 1
2
3
- [x] 3
2
1
- [ ] [1, 2, 3]
- [ ] IndexError

---
topic: "Print_Input"
subtopic: "String-Literale"
level: "easy"
explanation: "In Python, raw strings (prefixed with r) treat backslashes as literal characters rather than escape characters. This is useful for strings that contain backslashes, like file paths or regular expressions. In this code, r'C:\\Users\\name' represents the literal string 'C:\\Users\\name', where the backslashes are not treated as escape characters."
explanationWrong:
  - "Raw strings don't process escape sequences, so \\U and \\n are printed as literal characters."
  - "The r prefix affects how escape sequences are processed, not how the string is displayed."
  - "The raw string is correctly created and doesn't result in an error."
---
### Question 44: What will be the output of the following code?
```python
path = r'C:\Users\name'
print(path)
```
- [ ] C:Usersname
- [x] C:\Users\name
- [ ] C:\Users
ame
- [ ] SyntaxError

---
topic: "Grundlagen"
subtopic: "Bedingungsausdrücke"
level: "medium"
explanation: "A conditional expression (sometimes called a ternary operator) in Python has the form 'x if condition else y'. It evaluates to x if the condition is true, and y otherwise. In this code, 'even' if num % 2 == 0 else 'odd' evaluates to 'even' for num = 4 (since 4 % 2 = 0) and 'odd' for num = 7 (since 7 % 2 = 1)."
explanationWrong:
  - "For num=4, the expression evaluates to 'even' since 4 is divisible by 2."
  - "For num=7, the expression evaluates to 'odd' since 7 is not divisible by 2."
  - "The conditional expressions are correctly formed and don't result in an error."
---
### Question 45: What will be the outputs of the following code when num=4 and num=7?
```python
result = 'even' if num % 2 == 0 else 'odd'
print(result)
```
- [x] 'even' for num=4, 'odd' for num=7
- [ ] 'odd' for num=4, 'even' for num=7
- [ ] 'even' for both num=4 and num=7
- [ ] SyntaxError

---
topic: "Funktionen"
subtopic: "Dekoratoren"
level: "hard"
explanation: "Decorators in Python are functions that modify the behavior of other functions. In this code, the decorator 'log_calls' wraps the function 'greet', adding behavior to print when the function is called and when it returns. When greet('Alice') is called, it's actually calling the wrapped function, which first prints 'Calling greet', then calls the original greet function (which prints 'Hello, Alice'), and finally prints 'greet returned'."
explanationWrong:
  - "The decorator adds behavior before and after the original function call."
  - "The @log_calls syntax applies the decorator to the greet function."
  - "The decorator pattern is correctly implemented and doesn't result in an error."
---
### Question 46: What will be the output of the following code?
```python
def log_calls(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned")
        return result
    return wrapper

@log_calls
def greet(name):
    print(f"Hello, {name}")

greet('Alice')
```
- [ ] Hello, Alice
- [x] Calling greet
Hello, Alice
greet returned
- [ ] log_calls returned
Hello, Alice
- [ ] SyntaxError

---
topic: "Datentypen"
subtopic: "String-Formatierung"
level: "medium"
explanation: "Python's string format() method allows you to format selected parts of a string. In the statement 'The value is {0:.2f}'.format(3.14159), {0:.2f} is a format specifier where 0 is the index of the argument to format, and .2f means to format it as a floating-point number with 2 decimal places. This results in 'The value is 3.14'."
explanationWrong:
  - "The format specifier .2f rounds to 2 decimal places, not 3."
  - "The format method correctly handles floating-point formatting."
  - "The string formatting is correctly done and doesn't result in an error."
---
### Question 47: What will be the output of the following code?
```python
value = 3.14159
print('The value is {0:.2f}'.format(value))
```
- [ ] The value is 3.14159
- [x] The value is 3.14
- [ ] The value is 3.142
- [ ] ValueError

---
topic: "Schleifen"
subtopic: "Dictionary-Iteration"
level: "medium"
explanation: "When iterating over a dictionary in Python with a for loop, you iterate over its keys by default. The items() method returns an iterable of key-value pairs as tuples. In this code, for k, v in sorted(grades.items()) iterates over the items of the grades dictionary in sorted order of keys, unpacking each (key, value) tuple into k and v variables."
explanationWrong:
  - "The items() method returns (key, value) pairs, which are then sorted by key."
  - "The iteration gives both keys and values, not just keys."
  - "The sorted() function sorts by key by default, not by value."
---
### Question 48: What will be the output of the following code?
```python
grades = {'Alice': 85, 'Bob': 90, 'Charlie': 78}
for k, v in sorted(grades.items()):
    print(f"{k}: {v}")
```
- [x] Alice: 85
Bob: 90
Charlie: 78
- [ ] Alice
Bob
Charlie
- [ ] 85
90
78
- [ ] {'Alice': 85, 'Bob': 90, 'Charlie': 78}

---
topic: "Datenstrukturen"
subtopic: "Named Tuples"
level: "medium"
explanation: "A namedtuple in Python is a factory function for creating tuple subclasses with named fields. It allows you to access fields by name instead of just by index. In this code, Point is a namedtuple with fields 'x' and 'y'. When p = Point(3, 4) is created, you can access its fields as p.x and p.y, which return 3 and 4 respectively."
explanationWrong:
  - "A namedtuple creates a new tuple-like type with named fields."
  - "Fields of a namedtuple can be accessed by name, like p.x and p.y."
  - "The namedtuple is correctly created and used, and doesn't result in an error."
---
### Question 49: What will be the output of the following code?
```python
from collections import namedtuple

Point = namedtuple('Point', ['x', 'y'])
p = Point(3, 4)
print(p.x, p.y)
```
- [x] 3 4
- [ ] Point(x=3, y=4)
- [ ] (3, 4)
- [ ] AttributeError

---
topic: "Funktionen"
subtopic: "Reduce-Funktion"
level: "medium"
explanation: "The reduce() function from the functools module applies a function of two arguments cumulatively to the items of an iterable, from left to right, to reduce the iterable to a single value. In this code, reduce(lambda x, y: x * y, [1, 2, 3, 4, 5]) multiplies all numbers in the list, resulting in 1 * 2 * 3 * 4 * 5 = 120."
explanationWrong:
  - "The reduce function applies the lambda to all elements cumulatively, not just consecutive pairs."
  - "The lambda multiplies its arguments, so the result is the product of all numbers in the list."
  - "The reduce operation is correctly done and doesn't result in an error."
---
### Question 50: What will be the output of the following code?
```python
from functools import reduce

result = reduce(lambda x, y: x * y, [1, 2, 3, 4, 5])
print(result)
```
- [ ] 15
- [x] 120
- [ ] [120]
- [ ] TypeError