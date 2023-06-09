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

module.exports = {
  compareTrue,
  splitSentence,
  concatName,
};
