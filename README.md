# Project Playground Functions!

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## About

This is my 2nd project during my journey at Trybe!

In this project, I put into practice fundamental concepts such as variables, objects, functions, arrays, for loops, arrow functions, and template literals. Through the 13 proposed challenges, the project allowed the practical application of these concepts, strengthening understanding and skills in JavaScript programming. 🚀

## Repository Structure

- The `src` folder contains all the code
- Each implementation was developed in a specific function

# Implemented Functions

## Implemented a function using the `&&` operator

<details>
  <summary>
    Implemented the <code>compareTrue</code> function using only the <code>&&</code>
  </summary> <br />

The compareTrue function, when receiving two boolean parameters:

- Returns `true` if both values are true
- Returns `false` if one or both parameters are false

  Exemple:

```javascript
const hamburger = true;
const fries = true;
const mango = false;
const milk = false;
```

If the function is called with the values `hamburger` and `fries` as parameters, it returns `true`, but if called with the parameters `fries` and `mango` or `mango` and `milk`, it returns `false`
</details>


## Implemented a function that splits a sentence

<details>
  <summary>
    Implemented the function <code>splitSentence</code> that splits a sentence according to the number of words
  </summary> <br />

The function `splitSentence` takes a string as a parameter and should return an array with the words separated by commas

  Example:

- If the function receives the string `'The only constant is change'`, the return will be `['The', 'only', 'constant', 'is', 'change']`
</details>


## Implemented a function that uses string concatenation

<details>
  <summary>
    Implemented the function <code>concatName</code> that takes an array of strings and returns the last item in the first position
  </summary> <br />

The function `concatName` takes an array of strings and should return a string in the format `'LAST ITEM, FIRST ITEM'`, regardless of the array's size

  Example:

- If the parameter passed to the `concatName` function is the array `['Fries', 'Mango', 'Milk', 'Burger']`, the function should return `Burger, Fries`
</details>


## Implemented a function that calculates the area of a triangle

<details>
  <summary>
    Implemented the function <code>calcArea</code> that returns the calculation of the total area of a triangle
  </summary> <br />

The function `calcArea` takes the `base` and `height` values of a triangle, uses the formula `(base * height) / 2`, and returns the calculation of its area

  Example:

- The function `calcArea` returns the value 250 when it receives the `base` parameter with the value 10 and the `height` parameter with the value 50

- The function `calcArea` returns the value 5 when it receives the `base` parameter with the value 5 and the `height` parameter with the value 2

- The function `calcArea` returns the value 25.5 when it receives the `base` parameter with the value 51 and the `height` parameter with the value 1
</details>


## Implemented a function that calculates the number of points in a football championship

<details>
  <summary>
    Implemented the function <code>footballPoints</code> that calculates a football team's score in a championship based on the number of wins and draws
  </summary> <br />

The `footballPoints` function takes the number of wins (`wins`) and the number of draws (`ties`) as input and returns the total points the team scored in a championship. To do this, consider the following scoring rules:

- `wins`: the number of wins, each worth 3 points
- `ties`: the number of draws, each worth 1 point

  Example:

- The `footballPoints` function should return the value `50` points when the team has 14 wins and 8 draws

- The `footballPoints` function should return the value `5` points when the team has 1 win and 2 draws

- The `footballPoints` function should return the value `0` points when the team has 0 wins and 0 draws
</details>


## Implemented a function that calculates the number of repetitions of the highest number

<details>
  <summary>
    Implemented the function <code>highestCount</code> that should return the quantity of times the highest number repeats when given an array of numbers
  </summary> <br />

The function `highestCount` returns the quantity of times the **highest** number repeats within the array.

  Example:

- The function `highestCount` returns `2` when given the parameter `[9, 1, 2, 3, 9, 5, 7]`

- The function `highestCount` returns `1` when given the parameter `[1, 2, 2, 2, 7, 4, 6]`

- The function `highestCount` returns `3` when given the parameter `[1, 1, 1]`
</details>


## Implemented a Cat and Mouse function

<details>
  <summary>
    Implemented the function <code>catAndMouse</code> that checks which cat is closer to the mouse
  </summary> <br />

Imagine two cats are chasing the same mouse, and you need to check which cat is closer to its prey. For that, the function `catAndMouse` receives 3 parameters of type `number` in the following order:

- `mouse`: represents the mouse's position

- `cat1`: represents the position of cat 1

- `cat2`: represents the position of cat 2

The function calculates the distances between the mouse and each of the cats and returns which of the felines is closer to the mouse:

- Returns the string `'cat2'` if cat `cat2` is closer to the mouse
- Returns the string `'cat1'` if cat `cat1` is closer to the mouse
- Returns the string `'The cats collide, and the mouse escapes'` if the cats are at the same distance from the mouse

  Example:

- The function `catAndMouse` should return the string `'cat2'` when given parameters where cat `cat2` is 2 units away from the mouse, and `cat1` is 3 units away from the mouse

- The function `catAndMouse` should return the string `'cat1'` when given parameters where cat `cat1` is 6 units away from the mouse, and `cat2` is 12 units away from the mouse

- The function `catAndMouse` should return the string `'The cats collide, and the mouse escapes'` when given parameters where the cats are at the same distance from the mouse
</details>


## Implemented a FizzBuzz function

<details>
  <summary>
    Implemented the function <code>fizzBuzz</code> that receives an array of numbers and returns an array of strings according to the result
  </summary> <br />

The function `fizzBuzz` receives an array of numbers, and for each number in the array, it performs division by 3 and by 5. According to the result, it returns an array of strings:

- Returns the string `'fizz'` for each number in the array that is divisible only by 3
- Returns the string `'buzz'` for each number in the array that is divisible only by 5
- Returns the string `'fizzBuzz'` for each number in the array that is divisible by both 3 **and** 5
- Returns the string `'bug!'` for each number in the array that is not divisible by 3 nor by 5

  Example:

- The function `fizzBuzz` returns the strings `['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']` when given the parameters [2, 15, 7, 9, 45]

- The function `fizzBuzz` returns the strings `['bug!', 'fizz']` when given the parameters [7, 9]

- The function `fizzBuzz` returns the strings `['fizz', 'buzz']` when given the parameters [9, 25]
</details>


## Implemented a Encode and Decode function

<details>
  <summary>
    Implemented a function that encodes and decodes a phrase, replacing vowels with numbers or numbers with vowels
  </summary> <br />

To encode the phrase, use the function `encode`, which takes a string as a parameter and should replace all **lowercase vowels with numbers**, according to the format:

a -> 1 \
e -> 2 \
i -> 3 \
o -> 4 \
u -> 5

  Example:

- The function `encode` when given the parameter `'hi there!'`, should return the value `'h3 th2r2!'`
- The function `encode` when given the parameter `'How are you today?'`, should return the value `'H4w 1r2 y45 t4d1y?'`
- The function `encode` when given the parameter `'This is an encoding test.'`, should return the value `'Th3s 3s 1n 2nc4d3ng t2st.'`

To decode the phrase, use the function `decode`, which takes a string containing letters and numbers as a parameter and should replace all **numbers with lowercase vowels**, according to the format:

1 -> a \
2 -> e \
3 -> i \
4 -> o \
5 -> u

  Example:

- The function `decode` when given the parameter `'h3 th2r2!'`, should return the value `'hi there!'`
- The function `decode` when given the parameter `'H4w 1r2 y45 t4d1y?'`, should return the value `'How are you today?'`
- The function `decode` when given the parameter `'Th3s 3s 1 d2c4d2 t2st.'`, should return the value `'This is a decode test.'`
</details>


## Implementing a Technology List Function

<details>
  <summary>
    Implemented the function <code>techList</code> that takes an array and a string and returns an array of objects.
  </summary> <br />

The `techList` function takes two parameters:

- An array with technology names
- A name corresponding to a person's name

The function should return:

- `'Empty!'` if no parameters are provided
- An object for each technology in the array, with the following structure

```javascript
{
  tech: 'TechName',
  name: 'person name'
}
```

  Example:

- If the function receives the parameters `['React', 'Jest', 'HTML', 'CSS', 'JavaScript']` and `'Paulo'`, the return should be:

```javascript
[
  {
    tech: "CSS",
    name: "Paulo"
  },
  {
    tech: "HTML",
    name: "Paulo"
  },
  {
    tech: "JavaScript",
    name: "Paulo"
  },
  {
    tech: "Jest",
    name: "Paulo"
  },
  {
    tech: "React",
    name: "Paulo"
  }
]
```
</details>


## Implemented a Phone Number Function

<details>
  <summary>
    Implemented the function <code>generatePhoneNumber</code> that takes an array of 11 numbers and returns a formatted phone number with parentheses, hyphens, and spaces
  </summary> <br />

- The function `generatePhoneNumber` returns the string `'Array with incorrect size.'` if the array has a size different from 11

- The function `generatePhoneNumber` returns the string `'Cannot generate a phone number with these values.'` if any of the numbers in the array is **less** than 0, **greater** than 9 or repeats 4 times or more

Example:

- If the function parameter is `[1, 6, 9, 9, 4, 0, 1, 0, 5, 3, 1]`, the `generatePhoneNumber` function should return `(16) 99401-0531`
</details>


## Implemented a Function to Test the Existence Condition of a Triangle

<details>
  <summary>
    Implemented the function <code>triangleCheck</code> that checks if it is possible to form a triangle by analyzing the length of three sides
  </summary> <br />

The function `triangleCheck` receives the parameters `lineA`, `lineB`, and `lineC` with the length value of three distinct lines

- To form a triangle, it is necessary to meet one of the following conditions:

  1) **the measurement of _one_ of the sides** is **less than** the sum of the measurements of the other two sides and **greater than** the absolute value (modulus) of the difference between the other two sides. For example: `lineA` is less than `lineB + lineC` and greater than `|lineB - lineC|`. If the result of `lineB - lineC` is a negative value, the value is converted to positive, and it is checked whether `lineA` is greater than this converted result

  **_OR_**

  2) **the measurement of _any_ one of the sides** is **less than** the sum of the measurements of the other two sides. For example: `lineA` is less than `lineB + lineC`, `lineB` is less than `lineA + lineC`, and `lineC` is less than `lineA + lineB`

- The return of your function is a boolean value

  Example:

- The function `triangleCheck` should return the value `true` when passed the parameters `(10, 14, 8)`

- The function `triangleCheck` should return the value `false` when passed the parameters `(5, 10, 20)`
</details>


## Implemented a Welcome Function to Trybe's Bar!

<details>
  <summary>
    Implemented the function <code>hydrate</code> that receives a string and returns the suggestion of how many glasses of water you should drink
  </summary> <br />

- The function `hydrate` returns the suggestion of how many glasses of water should be drunk when given a string indicating the amount of beverage consumed

- The string will **always** have the format *quantity (in number) + type of beverage*

- The number in front of each beverage should be between 1 and 9

  Example:

```javascript
// Received string:
  '1 beer'

// Returned string:
  '1 glass of water'

// Received string:
  '1 cachaça, 5 beers, and 1 glass of wine'

// Returned string:
  '7 glasses of water'
```
</details>

---
