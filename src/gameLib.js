const { exit } = require('process');

const { Glass } = require('./glass.js');
const { Glasses } = require('./glasses.js');

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
  return new Glasses(glass1, glass2, glass3);
};

const play = (from, to, glasses) => {
  try {
    glasses.pour(from - 1, to - 1);
  } catch (error) {
    console.log('invalid input\n');
  }
  glasses.display();
  if (glasses.areHomogeneous()) {
    console.log('Game over!');
    exit();
  }
};

const parseInput = (chunk) => chunk.split('to');

exports.play = play;
exports.initialise = initialise;
exports.showGlasses = showGlasses;
exports.parseInput = parseInput;
