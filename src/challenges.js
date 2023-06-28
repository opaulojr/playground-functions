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

module.exports = {
  compareTrue,
  splitSentence,
  concatName,
  calcArea,
  footballPoints,
  highestCount,
};
