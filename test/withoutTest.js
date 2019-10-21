const { assert } = require('chai');
const without = require('../without');

describe('without', () => {
  it('should remove all values in the second array from the first', () => {
    assert.deepEqual(without([1, 2, 3, 4, 4, 4, 5, 6, 6], [4, 5]), [1, 2, 3, 6, 6]);
  });
});