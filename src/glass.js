class Glass {
  constructor(capacity, liquid) {
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
}

exports.Glass = Glass;
