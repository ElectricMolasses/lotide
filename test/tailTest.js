const { assert, expect } = require('chai');
const tail = require('../tail');

describe('Tail', () => {
  it('should return an array with the first value removed', () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });
  it('should return an empty array if passed an array with one element', () => {
    assert.deepEqual(tail([4]), []);
  });
});