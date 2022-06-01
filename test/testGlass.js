const { Glass } = require('../src/glass');
const assert = require('assert');

describe('Glass', () => {
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

  describe('isFull', () => {
    it('should return true if glass is full', () => {
      const glass1 = new Glass(1, ['red']);
      assert.deepStrictEqual(glass1.isFull(), true);
      const glass2 = new Glass(2, ['red', 'red']);
      assert.deepStrictEqual(glass2.isFull(), true);
    });
    it('should return false if glass is not full', () => {
      const glass1 = new Glass(2, ['red']);
      assert.deepStrictEqual(glass1.isFull(), false);
      const glass2 = new Glass(3, ['red', 'blue']);
      assert.deepStrictEqual(glass2.isFull(), false);
    });
  });

  describe('isEmpty', () => {
    it('should return true if glass is empty', () => {
      const glass1 = new Glass(1, []);
      assert.deepStrictEqual(glass1.isEmpty(), true);
      const glass2 = new Glass(4, []);
      assert.deepStrictEqual(glass2.isEmpty(), true);
    });
    it('should return false if glass is not empty', () => {
      const glass1 = new Glass(1, ['red']);
      assert.deepStrictEqual(glass1.isEmpty(), false);
      const glass2 = new Glass(3, ['red', 'blue']);
      assert.deepStrictEqual(glass2.isEmpty(), false);
    });
  });
});
