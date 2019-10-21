const { assert } = require('chai');
const eqArrays = require('../eqArrays');

describe('eqArrays', () => {
  it('should return true when the arrays match.', () => {
    assert.isTrue(eqArrays([1, 5, 4, 7], [1, 5, 4, 7]));
  });

  it('should return false when the arrays do not match', () => {
    assert.isFalse(eqArrays([1, 5, 4, 7], [1, 5, 3, 7]));
  });
});