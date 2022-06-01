const areArraysEqual = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }
  return array1.every((element, index) =>
    element === array2[index]);
};

class Glass {
  constructor(capacity, liquid = []) {
    this.capacity = capacity;
    this.liquid = liquid;
  }

  contains() {
    return this.liquid;
  }

  isFull() {
    return this.liquid.length === this.capacity;
  }

  isEmpty() {
    return this.liquid.length < 1;
  }

  isHomogeneous() {
    return this.liquid.every((content) => this.liquid[0] === content);
  }

  fill(liquid) {
    if (!this.isFull()) {
      this.liquid.push(liquid);
    }
  }

  pour(anotherGlass) {
    if (!anotherGlass.isFull()) {
      const liquidBlock = this.liquid.pop();
      anotherGlass.fill(liquidBlock);
    }
  }

  equals(anotherGlass) {
    return anotherGlass instanceof Glass &&
      this.capacity === anotherGlass.capacity &&
      areArraysEqual(this.liquid, anotherGlass.liquid);
  }
}

exports.Glass = Glass;
