const { assert } = require('chai');
const letterPositions = require('../letterPositions');

describe('letterPositions', () => {
  it('should return the index of the letter provided, if it exists', () => {
    assert.deepEqual(letterPositions("hello").h, [0]);
    assert.deepEqual(letterPositions("hello").e, [1]);
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
    assert.deepEqual(letterPositions("hello").o, [4]);
  });
});