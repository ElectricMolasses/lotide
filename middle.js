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

module.exports = middle;