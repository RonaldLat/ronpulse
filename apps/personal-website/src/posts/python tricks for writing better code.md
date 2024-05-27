---
title: 11 Python tips and tricks to make you a better programmer
author: Ronald Otieno
date: 2023-10-01
layout: blog
published: true
excerpt: Here are some python skills that will help you write better programs and code efficient algorithims.
---

## Ternary operators

```python
condition = True
if condition:
    x=1
else:
    x=o

print(x)
```

the shorthand;

```python
x = 1 if condition else 0
```

## Improve readability of long numbers

On paper you can use comma(,) but not in python.
In python you can use underscores(\_) as separator.

This will save you from making mistakes when editing numbers.

```python
num1 = 10_000_000_000
num2 = 100_000_000
total = num1 + num2
print(total)

```

To add the separator to our output we can use python's string formatting (f string).

```python
//num1 = 10_000_000_000
//num2 = 100_000_000
//total = num1 + num2
print(f'{total:,}')
```

## Proper way of handling files

When reading from a file in python it is necessary to close it after you're done with it to free resources for other processes.

```python
f = open('textFile.txt', r)
file_contents = f.read()
f.close() # closing the file

words = file_contents.split(' ')
word_count = len(words)
print(word_count)
```

It is easy to forget to close a file and this can lead to memory leaks in your program.
An easier way of handling files is by using context manager.
Context managers are meant to manage resource for you so you don't have to remember to manage them yourself.

```python
with open('test_file.txt', 'r') as f:
    file_contents = f.read()

words = file_contents.split(' ')
word_count = len(words)
print(word_count)

```

Now you don't need to manually close downt the file because the contex manager will manage resources automatically.

## Use enumerate function when you need a counter while looping over something

Instead of this,

```python
players = ['Saka', 'Martinelli', 'Saliba']

index = 0
for player in players:
    print(index, player)
    index +=1
```

You can write it cleaner like this,

```python
players = ['Saka', 'Martinelli', 'Saliba']

for index, player in enumerate(players):
    print(index, player)
```

and it will produce the same result as before.

You can also pass a start value if you don't want to start at zero.

```python
players = ['Saka', 'Martinelli', 'Saliba']

for index, player in enumerate(players, start=1):
    print(index, player)
```

## Looping over two lists at once

Let's say the first list contains first names of people and the second list contains their second names.
And you want to write a function that joins the two names of each person
We can make use of the zip function.

```python
first_name = ['Bukayo', 'Gabriel', 'William',]
second_name = ['Saka', 'Martinelli', 'Saliba']

for a, b in zip(first_name, second_name):
    print(f'{a} {b}')
```

Zip can also be used for more than two lists.

```python
first_name = ['Bukayo', 'Gabriel', 'William',]
second_name = ['Saka', 'Martinelli', 'Saliba']
position = ['winger', 'winger', 'Defender']

for a, b,c in zip(first_name, second_name, position):
    print(f'{a} {b} -> {c}')

```

Zip works by returning a tuple of the three list we provide it with. All we are doing is just unpacking with the variables `a, b, c`.
This is similar to JavaScript's object destructuring.

If you use lists with different lengths, zip will terminate at the list with the shortest length.

## Use underscore for unused varibles

For example you are unpacking values from a tuple or list and you are plannig to use only one, you can use underscore to represent the value that you don't intend to use.

```python
numbers = (1,2)
a, _ = numbers
print(a)
```

This is usefull for preventing errors that IDEs throw when you declare variables that you don't use.

## Upacking longer values

When you're unpacking a tuple or list of even longers values, it might be tedious or impossible to match every value to a variable because sometimes you don't know in advance how many items it contains.

In this example, you're upacking many numbers but you only need the first two.
You can use asterisk and underscore to ignore the rest of the values after unpacking the first two.

```python
numbers = (1,2,3,4,5,6,7,8)
a, b, *_ = (numbers)
print(a,b) # 1 2
```

You can also add an asterisk and an additional variable to set the rest of the remaining values to it.

```python
numbers = (1,2,3,4,5,6,7,8)
a, b, *c = (numbers)
print(a,b,c) # 1 2 [3,4,5,6,7,8]
```

After `a` and `b` are set to `1` and `2`, the rest of the values will be set to `c`.

## Unpacking and grabbing the last value

This upacking technique works similarly to the previous ones with the only difference being that we can set some values to variables or ignore them, then set the last value of a list to it's own variable.

After `a,b,d` are set to `1,2,8`, the rest of the values are set to `c`.

```python
numbers = (1,2,3,4,5,6,7,8)
a, b, *c, d = (numbers)
print(a,b,c,d)
```

After `a,b,d` are set to `1,2,8`, the rest of the values are ignored.

```python
numbers = (1,2,3,4,5,6,7,8)
a, b, *_, d = (numbers)
print(a,b,d)
```

## Getting and setting setting attributes on empty objects

Make use of `setattr` to set attributes of an object to avoid naming conflicts in cases where varible names are similar to attribute names of that object.

```python
class Person():
    person
person = Person()

first_key ='first'
first_value = 'White'
setattr(person, first_key, first_val)
```

This function takes `object`, `key` and `value` arguments.

And in order to get attributes, use `getattr()` function.

```python
first = getattr(person, first_key)
print(first)
```

This will print out the value of the given attribute.

## Inputing secret information

It always recommended to store sensitive informatin in enviroment variables, but what if you need to type something like a password.
Function has a function just for this and it is called `getpass` from the getpass module.
It is standard library so you don't need to install anything.
You can use it by importing it, `from getpass import getpass`
To use it,

```python
from getpass import getpass

username = input('Username: ')
password = getpass('Password: ')

print('Loging in...')

```

When you type your username it will be visible but when you type your password nothing can be seen.
This is more secure.

## Getting help()

If you are stuck and don't know what a certain module, keyword or function does, you can open python and terminal and run the `help()` function with the module or function as argument.
To open python commandline, open your terminal emulator, type `python` and press enter.
For example to get help on what the `math` module does, `help('math')`
