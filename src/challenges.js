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

module.exports = {
  compareTrue,
  splitSentence,
  concatName,
  calcArea,
};
