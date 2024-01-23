// Desafio 1
function compareTrue(x, y) {
  return x && y;
}

// Desafio 2
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 3
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 4
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let count = 0;
  let highNum = array[0];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highNum) highNum = array[index];
  }

  for (let index = 0; index < array.length; index += 1) {
    if (highNum === array[index]) count += 1;
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const distanceCat1 = Math.abs(mouse - cat1);
  const distanceCat2 = Math.abs(mouse - cat2);
  const mouseWin = 'The cats collide, and the mouse escapes';

  if (distanceCat1 < distanceCat2) return 'cat1';
  if (distanceCat1 > distanceCat2) return 'cat2';

  return mouseWin;
}

// Desafio 8
function fizzBuzz(numbers) {
  return numbers.map((number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      return 'fizzBuzz';
    } if (number % 3 === 0) {
      return 'fizz';
    } if (number % 5 === 0) {
      return 'buzz';
    }
    return 'bug!';
  });
}

// Desafio 9
function encode(string) {
  const vowels = {
    a: '1', e: '2', i: '3', o: '4', u: '5',
  };

  return string.replace(/[aeiou]/g, (match) => vowels[match]);
}

function decode(string) {
  const numbers = {
    1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u',
  };

  return string.replace(/[1-5]/g, (match) => numbers[match]);
}

// Desafio 10
function techList(array, string) {
  const result = [];
  array.sort();

  if (array.length === 0) return 'Empty!';

  for (let index = 0; index < array.length; index += 1) {
    result.push({
      tech: array[index],
      name: string,
    });
  }

  return result;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  const count = {};

  if (numbers.length !== 11) return 'Array with incorrect size.';

  for (let index = 0; index < numbers.length; index += 1) {
    const number = numbers[index];

    if (number < 0 || number > 9) {
      return 'Cannot generate a phone number with these values.';
    }
  }

  for (let index = 0; index < numbers.length; index += 1) {
    const number = numbers[index];

    count[number] = count[number] ? count[number] + 1 : 1;
    if (count[number] >= 4) {
      return 'Cannot generate a phone number with these values.';
    }
  }

  const areaCode = numbers.slice(0, 2).join('');
  const firstPart = numbers.slice(2, 7).join('');
  const secondPart = numbers.slice(7).join('');

  return `(${areaCode}) ${firstPart}-${secondPart}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  const condition1 = lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
  const condition2 = lineB < lineA + lineC && lineB > Math.abs(lineA - lineC);
  const condition3 = lineC < lineA + lineB && lineC > Math.abs(lineA - lineB);

  return condition1 || condition2 || condition3;
}

function hydrate(string) {
  const regex = /\d+/g;
  const numbers = string.match(regex);

  const totalCups = numbers.reduce((sum, num) => sum + parseInt(num, 10), 0);

  if (totalCups === 1) return '1 glass of water';

  return `${totalCups} glasses of water`;
}

module.exports = {
  compareTrue,
  splitSentence,
  concatName,
  calcArea,
  footballPoints,
  highestCount,
  catAndMouse,
  fizzBuzz,
  encode,
  decode,
  techList,
  generatePhoneNumber,
  triangleCheck,
  hydrate,
};
