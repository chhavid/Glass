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
});
