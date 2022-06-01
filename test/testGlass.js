const { Glass } = require('../src/glass');
const assert = require('assert');

describe('Glass', () => {
  describe('equals', () => {
    it('should equate same glasses', () => {
      const glass1 = new Glass(2, ['red']);
      const glass2 = new Glass(2, ['red']);
      assert.ok(glass1.equals(glass2));
    });
    it('should return false if capacity is different', () => {
      const glass1 = new Glass(2, ['red']);
      const glass2 = new Glass(3, ['red']);
      assert.strictEqual(glass1.equals(glass2), false);
    });
    it('should return false if content is different', () => {
      const glass1 = new Glass(2, ['red']);
      const glass2 = new Glass(2, ['red', 'blue']);
      assert.strictEqual(glass1.equals(glass2), false);
    });
    it('should return false if instance is different', () => {
      const glass1 = new Glass(2, ['red']);
      const glass2 = { capacity: 2, liquid: ['red'] };
      assert.strictEqual(glass1.equals(glass2), false);
    });
  });

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

  describe('isHomogeneous', () => {
    it('should return true if glass is homogeneous', () => {
      const glass1 = new Glass(2, ['red', 'red']);
      assert.deepStrictEqual(glass1.isHomogeneous(), true);
      const glass2 = new Glass(4, ['blue']);
      assert.deepStrictEqual(glass2.isHomogeneous(), true);
    });
    it('should return true if glass is empty', () => {
      const glass = new Glass(2, []);
      assert.deepStrictEqual(glass.isHomogeneous(), true);
    });
    it('should return false if glass is heterogenous', () => {
      const glass = new Glass(2, ['red', 'blue']);
      assert.deepStrictEqual(glass.isHomogeneous(), false);
    });
  });

  describe('fill', () => {
    it('should add the content to glass.', () => {
      const glass = new Glass(2, ['red']);
      glass.fill('blue');
      assert.deepStrictEqual(glass.liquid, ['red', 'blue']);
    });
    it('should add the content to empty glass.', () => {
      const glass = new Glass(2, []);
      glass.fill('blue');
      assert.deepStrictEqual(glass.liquid, ['blue']);
    });
    it('should not add the content if glass is full.', () => {
      const glass = new Glass(1, ['red']);
      glass.fill('blue');
      assert.deepStrictEqual(glass.liquid, ['red']);
    });
  });

  describe('pour', () => {
    it('should pour to empty glass', () => {
      const glass1 = new Glass(1, ['red']);
      const glass2 = new Glass(2, []);
      glass1.pour(glass2);
      assert.deepStrictEqual(glass1.liquid, []);
      assert.deepStrictEqual(glass2.liquid, ['red']);
    });
    it('should pour if another glass is not full', () => {
      const glass1 = new Glass(3, ['red', 'blue']);
      const glass2 = new Glass(2, ['red']);
      glass1.pour(glass2);
      assert.deepStrictEqual(glass1.liquid, ['red']);
      assert.deepStrictEqual(glass2.liquid, ['red', 'blue']);
    });
    it('should not pour if another glass is full', () => {
      const glass1 = new Glass(3, ['red', 'blue']);
      const glass2 = new Glass(1, ['red']);
      glass1.pour(glass2);
      assert.deepStrictEqual(glass1.liquid, ['red', 'blue']);
      assert.deepStrictEqual(glass2.liquid, ['red']);
    });

    it('should not pour from empty glass', () => {
      const glass1 = new Glass(1, []);
      const glass2 = new Glass(1, ['red']);
      glass1.pour(glass2);
      assert.deepStrictEqual(glass1.liquid, []);
      assert.deepStrictEqual(glass2.liquid, ['red']);
    });
  });
});
