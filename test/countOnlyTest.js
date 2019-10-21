const countOnly = require('../countOnly');
const { assert } = require('chai');

describe('countOnly', () => {

  it('should return an object containing search items as keys, and the counts as values', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    const result = countOnly(firstNames ,
      { "Jason": true,
        "Karima": true,
        "Fang": true });

    it('should return 1 for Janson', () => {
      assert.strictEqual(result["Jason"], 1)
    });
    it('should return undefined for karima', () => {
      assert.strictEqual(result["Karima"], undefined)
    });
    it('should return 2 for fang', () => {
      assert.strictEqual(result["Fang"], 2)
    });

    assert.deepEqual(countOnly(["1", "1", "2", "3"], { "1": true, "3": true}), {"1": 2, "3": 1});
  });
});