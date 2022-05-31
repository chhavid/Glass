class Glass {
  constructor(capacity, contents) {
    this.capacity = capacity;
    this.contents = contents;
  }

  contains() {
    return this.contents;
  }
}

exports.Glass = Glass;
