const { assert } = require('chai');
const takeUntil = require('../takeUntil');

describe('takeUntil', () => {
  it('should return everything up to the value provided as an array', () => {
    assert.deepEqual(takeUntil([1, 4, 6, 8, 3, 2, 3], x => x === 3), [1, 4, 6, 8]);
  });

  it('should return an empty array if the first element is the value not to take', () => {
    assert.deepEqual(takeUntil([6], x => x === 6), []);
  });
});