const areGlassesEqual = (glasses1, glasses2) => {
  if (glasses1.length !== glasses2.length) {
    return false;
  }
  return glasses1.every((glass, index) =>
    glass.equals(glasses2[index]));
};

class Glasses {
  #glasses;
  constructor(...glasses) {
    this.#glasses = glasses;
  }

  add(glass) {
    this.#glasses.push(glass);
  }

  equals(otherGlasses) {
    return otherGlasses instanceof Glasses &&
      areGlassesEqual(this.#glasses, otherGlasses.#glasses);
  }

  pour(from, to) {
    this.#glasses[from].pourInto(this.#glasses[to]);
  }

  display() {
    this.#glasses.forEach((glass) => glass.display());
  }

  areHomogeneous() {
    return this.#glasses.every((glass) => {
      return (glass.isEmpty() || !glass.isUnfilled()) && glass.isHomogeneous();
    });
  }
}

exports.Glasses = Glasses;
