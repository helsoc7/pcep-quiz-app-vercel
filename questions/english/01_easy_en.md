---
# Python Quiz with Metadata

---
topic: "Print_Input"
subtopic: "Input/Output"
level: "easy"
explanation: "The print() function is used in Python to output text to the console."
explanationWrong:
  - "write() is not a standard Python function for text output."
  - "console.log() is a JavaScript function, not a Python function."
  - "echo() is a command in PHP and Bash, but not a standard Python function."
---
### Question 1: What is the correct method to print "Hello, World!" in Python?
- [ ] `write("Hello, World!")`
- [ ] `console.log("Hello, World!")`
- [x] `print("Hello, World!")`
- [ ] `echo("Hello, World!")`

---
topic: "Datentypen"
subtopic: "Assignment"
level: "easy"
explanation: "In Python, the equals sign (=) is used to assign values to variables."
explanationWrong:
  - "Assignment happens from right to left, not the other way around."
  - "The := operator is available in Python 3.8+ for assignment expressions, but is not used for normal assignments."
  - "let x = 10 is JavaScript syntax, not Python syntax."
---
### Question 2: Which of the following options is the correct method to assign the value 10 to a variable named x?
- [x] `x = 10`
- [ ] `10 = x`
- [ ] `x := 10`
- [ ] `let x = 10`

---
topic: "Grundlagen"
subtopic: "Operations"
level: "easy"
explanation: "Python follows the mathematical order of operations: multiplication is performed before addition. Therefore, 3 * 4 = 12 is calculated first, then 2 + 12 = 14."
explanationWrong:
  - "20 would be the result if the calculation was performed from left to right: (2 + 3) * 4."
  - "24 would be the result of 2 * 3 * 4."
  - "10 is not the correct result according to the mathematical order of operations."
---
### Question 3: What is the result of the expression `2 + 3 * 4`?
- [ ] 20
- [x] 14
- [ ] 24
- [ ] 10

---
topic: "Grundlagen"
subtopic: "Syntax"
level: "easy"
explanation: "In Python, single-line comments are introduced with the # symbol. Everything after this symbol in a line is ignored by the interpreter."
explanationWrong:
  - "// is used for comments in languages like C, C++, Java, and JavaScript, not in Python."
  - "/* is used for multi-line comments in C, C++, Java, etc., not in Python."
  - "<!-- --> is the comment syntax in HTML, not in Python."
---
### Question 4: Which symbol is used for single-line comments in Python?
- [ ] //
- [ ] /*
- [ ] <!-- -->
- [x] #

---
topic: "Datentypen"
subtopic: "Strings"
level: "easy"
explanation: "The 'str' (string) data type in Python is a sequence of characters enclosed in quotation marks (single or double)."
explanationWrong:
  - "int is the data type for integers, not for character strings."
  - "float is the data type for floating-point numbers, not for character strings."
  - "bool is the data type for boolean values (True/False), not for character strings."
---
### Question 5: Which of these data types is a sequence of characters in Python?
- [ ] int
- [ ] float
- [x] str
- [ ] bool

---
topic: "Print_Input"
subtopic: "String Operations"
level: "easy"
explanation: "The code uses the + operator to concatenate the strings 'Hello', space, and 'World', resulting in the output 'Hello World'."
explanationWrong:
  - "The strings are not joined without the space."
  - "The + operator concatenates the strings, it does not output the expression itself."
  - "Concatenating strings with + is valid in Python and does not cause an error."
---
### Question 6: What is the output of the following code?
```python
print("Hello" + " " + "World")
```
- [x] Hello World
- [ ] HelloWorld
- [ ] Hello + World
- [ ] An error is raised

---
topic: "Grundlagen"
subtopic: "Comparison Operations"
level: "easy"
explanation: "The expression 5 > 3 is a comparison operation that evaluates whether 5 is greater than 3, which is true (True)."
explanationWrong:
  - "The comparison operator returns a boolean value, not one of the compared numbers."
  - "5 > 3 is a true statement, so the result is True, not False."
---
### Question 7: What is the output of `print(5 > 3)`?
- [ ] 5
- [ ] 3
- [x] True
- [ ] False

---
topic: "Datentypen"
subtopic: "Numbers"
level: "easy"
explanation: "In Python, floating-point numbers are written with a period as the decimal separator. Therefore, x = 2.5 is the correct syntax."
explanationWrong:
  - "In Python, a period is used as the decimal separator, not a comma."
  - "float(2,5) would be interpreted as a function call with two arguments, not as a floating-point number."
  - "x = \"2.5\" would create a string, not a floating-point number."
---
### Question 8: How do you create a variable with the floating-point number 2.5?
- [ ] `x = 2,5`
- [x] `x = 2.5`
- [ ] `x = float(2,5)`
- [ ] `x = "2.5"`

---
topic: "Grundlagen"
subtopic: "Operations"
level: "medium"
explanation: "The // operator performs integer division, which rounds the result down to the nearest whole number towards negative infinity. 10 // 3 therefore equals 3."
explanationWrong:
  - "3.33 would be the result of a normal division (10 / 3)."
  - "3.0 would be a floating-point result, but // always returns an integer."
  - "4 would be incorrect, as 10 // 3 = 3 (3 * 3 = 9, remainder 1)."
---
### Question 9: What is the value of `10 // 3` in Python?
- [ ] 3.33
- [ ] 3.0
- [x] 3
- [ ] 4

---
topic: "Datentypen"
subtopic: "String Indexing"
level: "easy"
explanation: "In Python, indexing starts at 0. The index 1 therefore returns the second character in the string, which is 'y' in 'Python'."
explanationWrong:
  - "Index 0 returns 'P', not index 1."
  - "To get 'Py', you would need to use slice notation: 'Python'[0:2]."
  - "Index 1 returns 'y', not 't'."
---
### Question 10: What is the output of the following code?
```python
print("Python"[1])
```
- [ ] P
- [x] y
- [ ] Py
- [ ] t

---
topic: "Datentypen"
subtopic: "String Functions"
level: "easy"
explanation: "The len() function returns the number of characters in a string. 'Hello' contains 5 characters."
explanationWrong:
  - "4 would be incorrect, as 'Hello' has 5 characters."
  - "len() returns an integer, not the string itself."
  - "Calling len() on a string does not cause an error."
---
### Question 11: What does `len("Hello")` return?
- [ ] 4
- [x] 5
- [ ] "Hello"
- [ ] An error occurs

---
topic: "Grundlagen"
subtopic: "Operations"
level: "easy"
explanation: "In Python, the ** operator is used for exponentiation. For example, 2**3 equals 8 (2 to the power of 3)."
explanationWrong:
  - "^ is the bitwise XOR operator in Python, not the exponentiation operator."
  - "* is the multiplication operator, not the exponentiation operator."
  - "// is the operator for integer division, not for exponentiation."
---
### Question 12: Which of the following operators is used for exponentiation in Python?
- [ ] ^
- [ ] *
- [x] **
- [ ] //

---
topic: "Grundlagen"
subtopic: "Operations"
level: "easy"
explanation: "The modulo operator % returns the remainder of a division. 7 divided by 3 equals 2 with a remainder of 1, so 7 % 3 equals 1."
explanationWrong:
  - "2.33 would be the result of 7 / 3, not 7 % 3."
  - "2 would be incorrect, as the remainder of 7 / 3 = 1, not 2."
  - "4 would be incorrect, as the remainder of 7 / 3 = 1, not 4."
---
### Question 13: What is the output of `print(7 % 3)`?
- [ ] 2.33
- [x] 1
- [ ] 2
- [ ] 4

---
topic: "Datenstrukturen"
subtopic: "Lists"
level: "easy"
explanation: "An empty list in Python is created with square brackets []."
explanationWrong:
  - "my_list = list{} is not valid Python syntax."
  - "my_list = null is not valid Python syntax; None is used in Python."
  - "my_list = new List() is not valid Python syntax, but resembles Java or C# syntax."
---
### Question 14: How do you create an empty list in Python?
- [x] `my_list = []`
- [ ] `my_list = list{}`
- [ ] `my_list = null`
- [ ] `my_list = new List()`

---
topic: "Datentypen"
subtopic: "Type Conversion"
level: "easy"
explanation: "The built-in function int() converts a string to an integer."
explanationWrong:
  - "convert() is not a built-in Python function."
  - "integer() is not a built-in Python function."
  - "string_to_int() is not a built-in Python function."
---
### Question 15: Which built-in function converts a string to an integer?
- [ ] `convert()`
- [x] `int()`
- [ ] `integer()`
- [ ] `string_to_int()`

---
topic: "Datentypen"
subtopic: "String Methods"
level: "easy"
explanation: "The upper() method for strings returns a copy of the string with all letters converted to uppercase."
explanationWrong:
  - "lower() would convert all letters to lowercase, not uppercase."
  - "upper() changes all letters, not just specific ones."
  - "HeLLo would be the result of a different transformation, not of upper()."
---
### Question 16: What does `"Hello".upper()` return?
- [ ] "hello"
- [x] "HELLO"
- [ ] "Hello"
- [ ] "HeLLo"

---
topic: "Grundlagen"
subtopic: "Comparison Operations"
level: "easy"
explanation: "The == operator checks if two values are equal. Since 5 is not equal to 2, x == y returns the value False."
explanationWrong:
  - "The comparison is False, as 5 is not equal to 2."
  - "The == operator returns a boolean value, not one of the compared numbers."
---
### Question 17: What is the output of the following code?
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
subtopic: "Comparison Operations"
level: "easy"
explanation: "The == operator is used in Python to check if two values are equal."
explanationWrong:
  - "x = 5 is an assignment, not a comparison."
  - "x := 5 is an assignment expression in Python 3.8+, not an equality comparison."
  - "x === 5 is not valid Python syntax, but is used in JavaScript for strict equality."
---
### Question 18: What is the correct method to check if a variable x is equal to 5?
- [ ] `x = 5`
- [ ] `x := 5`
- [x] `x == 5`
- [ ] `x === 5`

---
topic: "Grundlagen"
subtopic: "Syntax"
level: "easy"
explanation: "In Python, conditions are introduced with a colon and the following code is indented. Curly braces are not used."
explanationWrong:
  - "Python does not use curly braces for code blocks like other languages."
  - "Python does not use the 'then' keyword in if statements."
  - "The last option mixes Python syntax with curly braces, which is not correct."
---
### Question 19: What is the correct syntax for a basic if statement in Python?
- [ ] `if (x > 5) { print("x is greater than 5") }`
- [x] `if x > 5: print("x is greater than 5")`
- [ ] `if x > 5 then print("x is greater than 5")`
- [ ] `if x > 5: { print("x is greater than 5") }`

---
topic: "Grundlagen"
subtopic: "Logical Operations"
level: "easy"
explanation: "The logical operator 'and' returns True if both operands are True. Since True and False are not both True, the result is False."
explanationWrong:
  - "For True and False, the result is False, not True."
  - "The expression is evaluated, not returned as a string."
  - "Using logical operators does not cause an error."
---
### Question 20: What is the output of `print(True and False)`?
- [ ] True
- [x] False
- [ ] "True and False"
- [ ] Error

---
topic: "Grundlagen"
subtopic: "String Operations"
level: "easy"
explanation: "When a string is multiplied by a number, the string is repeated that many times. 'Hello' * 3 therefore results in 'HelloHelloHello'."
explanationWrong:
  - "'Hello3' would be the result of string concatenation, not multiplication."
  - "'Hello Hello Hello' would have spaces between the repetitions, which are not inserted during multiplication."
  - "Multiplying a string by a number is valid in Python and does not cause an error."
---
### Question 21: What is the output of `print("Hello" * 3)`?
- [ ] "Hello3"
- [x] "HelloHelloHello"
- [ ] "Hello Hello Hello"
- [ ] Error

---
topic: "Datentypen"
subtopic: "Data Types"
level: "easy"
explanation: "Array is not a built-in data type in Python. The built-in sequence types are list, tuple, and dict."
explanationWrong:
  - "list is a built-in sequence type in Python."
  - "tuple is a built-in immutable sequence type in Python."
  - "dict is a built-in mapping type in Python."
---
### Question 22: Which of the following is NOT a Python data type?
- [ ] list
- [ ] tuple
- [ ] dict
- [x] array

---
topic: "Datenstrukturen"
subtopic: "List Indexing"
level: "easy"
explanation: "In Python, indexing starts at 0. Index 0 therefore returns the first element of the list, which is 'apple'."
explanationWrong:
  - "banana is the second element with index 1."
  - "cherry is the third element with index 2."
  - "The index returns the element at that position, not the index itself."
---
### Question 23: What is the output of the following code?
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
subtopic: "List Methods"
level: "easy"
explanation: "The append() method adds an element to the end of a list."
explanationWrong:
  - "add() is not a standard method for lists in Python."
  - "insert() adds an element at a specific position, but requires an index."
  - "end() is not a standard method for lists in Python."
---
### Question 24: What is the correct method to add an element to the end of a list?
- [x] `list.append(element)`
- [ ] `list.add(element)`
- [ ] `list.insert(element)`
- [ ] `list.end(element)`

---
topic: "Datentypen"
subtopic: "Boolean Values"
level: "easy"
explanation: "The bool() function converts a value to a boolean value. An empty string is evaluated as False."
explanationWrong:
  - "Empty collections and strings are evaluated as False in Python, not as True."
  - "bool(\"\") returns a boolean value, not the empty string."
  - "bool(\"\") returns False, not None."
---
### Question 25: What is the result of `bool("")`?
- [ ] True
- [x] False
- [ ] ""
- [ ] None

---
topic: "Datentypen"
subtopic: "String Methods"
level: "easy"
explanation: "The lower() method for strings returns a copy of the string with all letters converted to lowercase."
explanationWrong:
  - "upper() would convert all letters to uppercase, not lowercase."
  - "lower() changes all letters to lowercase, so 'Hello' becomes 'hello'."
  - "lower() returns the converted string, not None."
---
### Question 26: What does the following code output?
```python
print("Hello".lower())
```
- [ ] "HELLO"
- [x] "hello"
- [ ] "Hello"
- [ ] None

---
topic: "Schleifen"
subtopic: "Loop Types"
level: "medium"
explanation: "Python does not have a built-in do-while loop. The for loop and while loop in Python only execute the code block if the condition is true."
explanationWrong:
  - "A for loop only executes the code block if the iteration contains elements."
  - "A while loop only executes the code block if the condition at the beginning is true."
  - "A do-while loop that executes the code block at least once does not exist in Python."
---
### Question 27: Which loop will execute the code block at least once?
- [ ] for loop
- [ ] while loop
- [ ] do-while loop
- [x] None of the above

---
topic: "Datentypen"
subtopic: "String Methods"
level: "easy"
explanation: "The lower() method converts a string to lowercase."
explanationWrong:
  - "toLower() is a method in JavaScript, not in Python."
  - "lowercase() is not a standard method for strings in Python."
  - "small() is not a standard method for strings in Python."
---
### Question 28: How do you convert a string to lowercase in Python?
- [ ] `str.toLower()`
- [x] `str.lower()`
- [ ] `lowercase(str)`
- [ ] `str.small()`

---
topic: "Schleifen"
subtopic: "Range Function"
level: "medium"
explanation: "The range(3) function generates the sequence [0, 1, 2]. The end parameter in print() ensures that a space is added after each number instead of a line break."
explanationWrong:
  - "range(3) starts at 0, not at 1."
  - "range(3) returns [0, 1, 2], not [0, 1, 2, 3]."
  - "The output is in ascending order, not in reverse."
---
### Question 29: What is the output of the following code?
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
subtopic: "Type Checking"
level: "easy"
explanation: "The type() function returns the data type of a variable."
explanationWrong:
  - "typeof() is a JavaScript function, not a Python function."
  - "get_type() is not a standard function in Python."
  - "vartype() is not a standard function in Python."
---
### Question 30: Which function is used to determine the type of a variable?
- [ ] `typeof()`
- [x] `type()`
- [ ] `get_type()`
- [ ] `vartype()`

---
topic: "Datenstrukturen"
subtopic: "List Functions"
level: "easy"
explanation: "The len() function returns the number of elements in a sequence. The list fruits contains 3 elements."
explanationWrong:
  - "5 would be the sum of the lengths of the strings in the list, not the number of elements."
  - "15 would be the total number of characters in all strings in the list, not the number of elements."
  - "The len() function returns an integer, not the elements as a string."
---
### Question 31: What does the following code output?
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
subtopic: "Type Conversion"
level: "easy"
explanation: "The str() function converts an object to its string representation. str(123) therefore returns the string '123'."
explanationWrong:
  - "print(str(123)) outputs the string content, not the quotation marks."
  - "str(123) returns a string, not the data type."
  - "Converting a number to a string does not cause an error."
---
### Question 32: What is the output of `print(str(123))`?
- [ ] 123
- [x] "123"
- [ ] int
- [ ] An error is raised

---
topic: "Schleifen"
subtopic: "Loop Control"
level: "easy"
explanation: "The break statement terminates a loop prematurely and continues execution after the loop."
explanationWrong:
  - "exit() terminates the program, not just the loop."
  - "stop() is not a standard statement in Python."
  - "return() can end a function, but not specifically a loop."
---
### Question 33: Which statement is used to exit a loop prematurely?
- [x] `break`
- [ ] `exit`
- [ ] `stop`
- [ ] `return`

---
topic: "Datentypen"
subtopic: "String Slicing"
level: "easy"
explanation: "The slicing notation [0:2] returns characters from index 0 (inclusive) to index 2 (exclusive). Therefore, the first two characters 'Py' are returned."
explanationWrong:
  - "The slice [0:2] returns two characters, not just one."
  - "'Pyth' would be the result of [0:4]."
  - "'Python' would be the result of [0:6] or [:]."
---
### Question 34: What is the output of the following code?
```python
print("Python"[0:2])
```
- [x] "Py"
- [ ] "P"
- [ ] "Pyth"
- [ ] "Python"

---
topic: "Funktionen"
subtopic: "Function Definition"
level: "easy"
explanation: "In Python, functions are defined with the keyword def, followed by the function name and parameters in parentheses."
explanationWrong:
  - "function is not a keyword in Python, but is used in JavaScript."
  - "func is not a keyword in Python, but is used in Go."
  - "define is not a keyword in Python."
---
### Question 35: How do you define a function in Python?
- [ ] `function my_function():`
- [x] `def my_function():`
- [ ] `func my_function():`
- [ ] `define my_function():`

---
topic: "Grundlagen"
subtopic: "Comparison Operations"
level: "easy"
explanation: "The == operator is used in Python to check if two variables are equal."
explanationWrong:
  - "a = b is an assignment, not a comparison."
  - "a.equals(b) is not standard Python syntax."
  - "a eq b is not valid Python syntax."
---
### Question 36: What is the correct method to check if two variables are equal?
- [ ] `a = b`
- [x] `a == b`
- [ ] `a.equals(b)`
- [ ] `a eq b`

---
topic: "Grundlagen"
subtopic: "Logical Operations"
level: "easy"
explanation: "In Python, the keyword 'and' is used for logical AND operations."
explanationWrong:
  - "&& is used in languages like C, Java, and JavaScript, not in Python."
  - "& is the bitwise AND operator in Python, not the logical AND operator."
  - "+ is the addition operator, not for logical operations."
---
### Question 37: Which operator is used for logical AND in Python?
- [ ] &&
- [x] and
- [ ] &
- [ ] +

---
topic: "Grundlagen"
subtopic: "Comparison Operations"
level: "medium"
explanation: "Python allows chained comparisons. The expression 10 > 5 > 3 is evaluated as (10 > 5) and (5 > 3), both of which are True, so the overall result is True."
explanationWrong:
  - "The expression is correctly evaluated as (10 > 5) and (5 > 3), which results in True."
  - "The expression is correctly evaluated and does not raise an error."
  - "The result is a boolean value, not the first compared number."
---
### Question 38: What is the output of `print(10 > 5 > 3)`?
- [x] True
- [ ] False
- [ ] Error
- [ ] 10

---
topic: "Datenstrukturen"
subtopic: "Dictionaries"
level: "easy"
explanation: "An empty dictionary in Python is created with curly braces {}."
explanationWrong:
  - "Square brackets [] create an empty list, not a dictionary."
  - "Parentheses () create an empty tuple, not a dictionary."
  - "new Dictionary() is not valid Python syntax, but resembles Java or C# syntax."
---
### Question 39: What is the correct method to create an empty dictionary?
- [ ] `dict = []`
- [x] `dict = {}`
- [ ] `dict = ()`
- [ ] `dict = new Dictionary()`

---
topic: "Print_Input"
subtopic: "Formatted Output"
level: "medium"
explanation: "f-strings (formatted string literals) allow embedding expressions in string literals. The expression in the curly braces is evaluated and inserted into the string."
explanationWrong:
  - "The variable is replaced by its value, not left as a placeholder."
  - "The exclamation mark is kept in the string, not omitted."
  - "f-strings have been available since Python 3.6 and do not cause an error."
---
### Question 40: What is the output of the following code?
```python
name = "John"
print(f"Hello, {name}!")
```
- [ ] "Hello, {name}!"
- [ ] "Hello, John"
- [x] "Hello, John!"
- [ ] An error is raised

---
topic: "Print_Input"
subtopic: "User Input"
level: "easy"
explanation: "The input() function in Python reads user input from the keyboard and returns it as a string."
explanationWrong:
  - "The input() function displays a message when passed as an argument, but its main function is to read input."
  - "The input() function does not import modules."
  - "The input() function does not write data to a file."
---
### Question 41: What does the `input()` function do in Python?
- [ ] It displays a message
- [x] It reads user input from the keyboard
- [ ] It imports modules
- [ ] It writes data to a file

---
topic: "Grundlagen"
subtopic: "Logical Operations"
level: "easy"
explanation: "The 'not' operator negates a boolean value. Since True is true, not True equals False."
explanationWrong:
  - "not True is False, not True."
  - "not True is a defined boolean value, not None."
  - "The expression is correct and does not raise an error."
---
### Question 42: What is the result of the expression `not True`?
- [ ] True
- [x] False
- [ ] None
- [ ] Error

---
topic: "Datentypen"
subtopic: "Multi-line Strings"
level: "easy"
explanation: "In Python, multi-line strings can be created with triple quotation marks (\"\"\" or '''). These allow line breaks within the string."
explanationWrong:
  - "\\n in a string creates a line break, but it is not an actual multi-line string in the code."
  - "Single quotation marks cannot span multiple lines in Python without escape characters."
  - "Both answers are not correct; only triple quotation marks allow native multi-line strings."
---
### Question 43: Which of the following options is a correct method to write a multi-line string in Python?
- [ ] `"This is a\nmulti-line string"`
- [x] `"""This is a
multi-line string"""`
- [ ] `'This is a
multi-line string'`
- [ ] Both A and B are correct

---
topic: "Grundlagen"
subtopic: "Comparison Operations"
level: "easy"
explanation: "In Python, the == operator compares the values of the operands, regardless of their type. 5 and 5.0 have the same value, even though they have different types (int and float)."
explanationWrong:
  - "5 == 5.0 returns True in Python, as the values are equal, even though the types are different."
  - "The comparison does not raise an error."
  - "The comparison returns a defined boolean value, not None."
---
### Question 44: What is the result of `5 == 5.0` in Python?
- [x] True
- [ ] False
- [ ] Error
- [ ] None

---
topic: "Datenstrukturen"
subtopic: "Tuples"
level: "medium"
explanation: "Tuples are immutable collections in Python, meaning that after their creation, elements cannot be added, removed, or changed."
explanationWrong:
  - "Tuples are immutable, not mutable."
  - "Tuples can contain any type of data, not just numbers."
  - "Tuples and lists have different properties, especially regarding mutability."
---
### Question 45: Which statement correctly describes a Python tuple?
- [ ] Tuples are mutable collections
- [x] Tuples are immutable collections
- [ ] Tuples can only contain numbers
- [ ] Tuples are the same as lists

---
topic: "Funktionen"
subtopic: "Built-in Functions"
level: "medium"
explanation: "The range(5) function generates a sequence of numbers starting at 0 (by default) and going up to 5 (exclusive). The list() function converts this sequence to a list: [0, 1, 2, 3, 4]."
explanationWrong:
  - "range() starts at 0 by default, not at 1."
  - "range(5) generates numbers from 0 to 4, not from 0 to 5."
  - "Without the list() function, a range object would be returned, not the list."
---
### Question 46: What is the output of the following code?
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
explanation: "The syntax 'key in dictionary' is used to check if a key exists in a dictionary. This returns True if the key is present, otherwise False."
explanationWrong:
  - "key in dictionary.keys() also works, but is less efficient and not the preferred method."
  - "has_key() was a method in Python 2, but is no longer available in Python 3."
  - "contains() is not a standard method for dictionaries in Python."
---
### Question 47: How do you check if a key exists in a dictionary?
- [ ] `key in dictionary.keys()`
- [x] `key in dictionary`
- [ ] `dictionary.has_key(key)`
- [ ] `dictionary.contains(key)`

---
topic: "Print_Input"
subtopic: "Multiple Outputs"
level: "easy"
explanation: "Calling print() with multiple arguments outputs these values separated by spaces. In this case, the values 1 and 2 are output, separated by a space."
explanationWrong:
  - "(1, 2) would be the output of print((1, 2)), i.e., when outputting a tuple."
  - "[1, 2] would be the output of print([1, 2]), i.e., when outputting a list."
  - "\"1 2\" would be output with quotation marks, which is not the case with print()."
---
### Question 48: What is the output of the following code?
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
subtopic: "Importing Modules"
level: "easy"
explanation: "The correct syntax for importing a module in Python is 'import modulename'. In the case of the math module, that would be 'import math'."
explanationWrong:
  - "include is a keyword in C/C++, not in Python."
  - "using is a keyword in C#, not in Python."
  - "require is a keyword in JavaScript/Node.js, not in Python."
---
### Question 49: Which of the following options is the correct method to import a module named 'math' in Python?
- [x] `import math`
- [ ] `include math`
- [ ] `using math`
- [ ] `require math`

---
topic: "Datenstrukturen"
subtopic: "List Indexing"
level: "easy"
explanation: "In Python, indexing starts at 0. Index 1 therefore returns the second element in the list, which is 2."
explanationWrong:
  - "Index 0 returns the first element, which is 1."
  - "Index 2 returns the third element, which is 3."
  - "Index 3 returns the fourth element, which is 4."
---
### Question 50: What does the following code output?
```python
numbers = [1, 2, 3, 4]
print(numbers[1])
```
- [ ] 1
- [x] 2
- [ ] 3
- [ ] 4