const { assert } = require('chai');
const map = require('../map');

describe('map', () => {
  it('should apply the callback to every element in the array, and return a new array with those changes', () => {
    assert.deepEqual(map([1, 2, 3, 4, 5], x => x + 10), [11, 12, 13, 14, 15]);
  });
});