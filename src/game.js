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

const playGame = (from, to, glasses) => {
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

const read = (callBack) => {
  process.stdin.on('data', (chunk) => {
    callBack(...chunk.split('to'));
  });

  process.stdin.on('end', () => {
    console.log('Game ended');
  });
};

const main = () => {
  const glasses = initialise();
  showGlasses(glasses);
  read((from, to) => playGame(from, to, glasses));
};

main();
