const assert = require('assert');
const { Glasses } = require('../src/glasses.js');
const { Glass } = require('../src/glass.js');

describe('Glasses', () => {
  describe('equals', () => {
    it('Should equate same glasses', () => {
      const glass = new Glass(1, ['red']);
      const glasses1 = new Glasses(glass);
      const glasses2 = new Glasses(glass);
      assert.ok(glasses1.equals(glasses2));
    });

    it('Should return false if glasses are not same instance', () => {
      const glasses1 = new Glasses();
      const glasses2 = [];
      assert.strictEqual(glasses1.equals(glasses2), false);
    });

    it('Should return false if glasses are not same ', () => {
      const glass = new Glass(1, ['red']);
      const glasses1 = new Glasses(glass);
      const glasses2 = new Glasses();
      assert.strictEqual(glasses1.equals(glasses2), false);
    });
  });

  describe('add', () => {
    it('Should add glass into glasses', () => {
      const glass = new Glass(1, ['red']);
      const glasses1 = new Glasses();
      const glasses2 = new Glasses(glass);
      glasses1.add(glass);
      assert.ok(glasses1.equals(glasses2));
    });
  });

  describe('pour', () => {
    it('Should pour the from one to another', () => {
      const glass1 = new Glass(1, ['red']);
      const glass2 = new Glass(2, ['red']);
      const expectedGlass1 = new Glass(1, []);
      const expectedGlass2 = new Glass(2, ['red', 'red']);
      const glasses = new Glasses(glass1, glass2);
      const expectedGlasses = new Glasses(expectedGlass1, expectedGlass2);
      glasses.pour(0, 1);

      assert.ok(glasses.equals(expectedGlasses));
    });
  });

  describe('areHomogeneous', () => {
    it('Should return true if all glasses are homogeneous', () => {
      const glass1 = new Glass(1, ['red']);
      const glass2 = new Glass(1, []);
      const glasses = new Glasses(glass1, glass2);

      assert.ok(glasses.areHomogeneous());
    });

    it('Should return false if all glasses are not homogeneous', () => {
      const glass1 = new Glass(1, []);
      const glass2 = new Glass(2, ['red']);
      const glasses = new Glasses(glass1, glass2);

      assert.strictEqual(glasses.areHomogeneous(), false);
    });
  });
});
