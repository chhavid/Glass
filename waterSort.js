const { play, initialise, showGlasses, parseInput } =
  require('./src/gameLib.js');

const read = (callBack) => {
  process.stdin.on('data', (chunk) => {
    callBack(chunk);
  });

  process.stdin.on('end', () => {
    console.log('Game ended');
  });
};

const main = () => {
  const glasses = initialise();
  showGlasses(glasses);
  read((chunk) => play(...parseInput(chunk), glasses));
};

main();
