const { Glass } = require('./glass.js');
const { exit } = require('process');
process.stdin.setEncoding('utf8');

const showGlasses = (glasses) => {
  glasses.forEach((glass) => glass.display());
};

const initialise = () => {
  const red = 'red';
  const blue = 'blue';
  const glass1 = new Glass(3, [red, red]);
  const glass2 = new Glass(3, [blue, blue, blue]);
  const glass3 = new Glass(3, [red]);
  return [glass1, glass2, glass3];
};

const play = (from, to, glasses) => {
  try {
    glasses[from - 1].pourInto(glasses[to - 1]);
  } catch (error) {
    console.log('invalid input\n');
  }
  showGlasses(glasses);
  if (gameOver(glasses)) {
    console.log('Game over!');
    exit();
  }
};

const gameOver = (glasses) => {
  return glasses.every((glass) => {
    return (glass.isEmpty() || !glass.isUnfilled()) && glass.isHomogeneous();
  });
};

const parseInput = (chunk) => chunk.split('to');

exports.play = play;
exports.initialise = initialise;
exports.showGlasses = showGlasses;
exports.parseInput = parseInput;
