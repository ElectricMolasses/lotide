const countOnly = require('../countOnly');
const { assert } = require('chai');

describe('countOnly', () => {
  it('should return an object containing search items as keys, and the counts as values', () => {
    assert.deepEqual(countOnly(["1", "1", "2", "3"], { "1": true, "3": true}), {"1": 2, "3": 1});
  });
});