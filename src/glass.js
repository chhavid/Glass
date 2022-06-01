class Glass {
  constructor(capacity, contents) {
    this.capacity = capacity;
    this.contents = contents;
  }

  contains() {
    return this.contents;
  }

  isFull() {
    return this.contents.length === this.capacity;
  }

  isEmpty() {
    return this.contents.length < 1;
  }

  isHomogeneous() {
    return this.contents.every((content) => this.contents[0] === content);
  }
}

exports.Glass = Glass;
