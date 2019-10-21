const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(array) {
  let flattened = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flattened.push(...flatten(array[i]));
    } else {
      flattened.push(array[i]);
    }
  }

  return flattened;
};

assertArraysEqual(flatten([1, 2, [3, 4, [5, 6]]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, 3]), [1, 2, 3]);
assertArraysEqual(flatten([[1, 2], 5, 3, [4], 4]), [1, 2, 5, 3, 4, 4]);
assertArraysEqual(flatten([1, 2, 3]), [1, 2, 3]);

module.exports = flatten;