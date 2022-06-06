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
}

exports.Glasses = Glasses;
