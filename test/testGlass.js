const { Glass } = require('../src/glass');
const assert = require('assert');

describe('contains', () => {
  it('should return the contents of glass', () => {
    const glass = new Glass(2, ['red']);
    assert.deepStrictEqual(glass.contains(), ['red']);
  });
  it('should return the contents of empty glass', () => {
    const glass = new Glass(1, []);
    assert.deepStrictEqual(glass.contains(), []);
  });
});
