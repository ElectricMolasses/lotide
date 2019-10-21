const { assert } = require('chai');
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

describe('findKeyByValue', () => {
  
  it('should return the key to find the requested value', () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
  });
});