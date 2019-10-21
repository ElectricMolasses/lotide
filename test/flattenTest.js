const { assert } = require('chai');
const flatten = require('../flatten');

describe('flatten', () => {
  it('should flatten any nested arrays into the first level of the provided array.', () => {
    assert.deepEqual(flatten([1, 2, [3, 4, [5, 6]]]), [1, 2, 3, 4, 5, 6]);
    assert.deepEqual(flatten([1, 2, 3]), [1, 2, 3]);
    assert.deepEqual(flatten([[1, 2], 5, 3, [4], 4]), [1, 2, 5, 3, 4, 4]);
    assert.deepEqual(flatten([1, 2, 3]), [1, 2, 3]);
  });
});