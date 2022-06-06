const areArraysEqual = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }
  return array1.every((element, index) =>
    element === array2[index]);
};

class Glass {
  #capacity;
  #liquidBlocks;
  constructor(capacity, liquid = []) {
    this.#capacity = capacity;
    this.#liquidBlocks = liquid;
  }

  contains() {
    return this.#liquidBlocks;
  }

  isUnfilled() {
    return this.#liquidBlocks.length < this.#capacity;
  }

  isEmpty() {
    return this.#liquidBlocks.length < 1;
  }

  isHomogeneous() {
    return this.#liquidBlocks.every((content) =>
      this.#liquidBlocks[0] === content);
  }

  fill(liquid) {
    if (this.isUnfilled()) {
      this.#liquidBlocks.push(liquid);
    }
  }

  pourInto(anotherGlass) {
    if (anotherGlass.isUnfilled() && !this.isEmpty()) {
      const liquidBlock = this.#liquidBlocks.pop();
      anotherGlass.fill(liquidBlock);
    }
  }

  display() {
    console.log(this.#liquidBlocks);
  }

  equals(anotherGlass) {
    return anotherGlass instanceof Glass &&
      this.#capacity === anotherGlass.#capacity &&
      areArraysEqual(this.#liquidBlocks, anotherGlass.#liquidBlocks);
  }
}

exports.Glass = Glass;
