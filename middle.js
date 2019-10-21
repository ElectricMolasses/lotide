const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let middle = array.length / 2;
  if (middle % 1 === 0) {
    return [array[middle - 1], array[middle]];
  } else {
    return [array[Math.floor(middle)]];
  }
};

assertArraysEqual(middle([2, 4, 6, 2, 3, 1]), [6, 2]);
assertArraysEqual(middle([5, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([5]), [5]);

module.exports = middle;