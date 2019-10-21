const middle = require('../middle');
const {assert} = require('chai')
const assertArraysEqual = require('../assertArraysEqual')

describe('middle', () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("should return  5 for [5]", () => {
    assert.deepEqual(middle([5]), [5]);
  });
});

