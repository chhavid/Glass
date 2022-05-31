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
}

exports.Glass = Glass;
