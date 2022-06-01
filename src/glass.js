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
}

exports.Glass = Glass;
