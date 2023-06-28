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
  const mouseWin = 'os gatos trombam e o rato foge';

  if (distanceCat1 < distanceCat2) return 'cat1';
  if (distanceCat1 > distanceCat2) return 'cat2';

  return mouseWin;
}

module.exports = {
  compareTrue,
  splitSentence,
  concatName,
  calcArea,
  footballPoints,
  highestCount,
  catAndMouse,
};
