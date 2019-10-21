const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`😃😃😃 Assertion Passed: [${arr1.toString()}] === [${arr2.toString()}]`);
  } else {
    console.log(`😒😒😒 Assertion Failed: [${arr1.toString()}] !== [${arr2.toString()}]`);
  }
};

assertArraysEqual([1, 5, 7], [1, 5, 7]);
assertArraysEqual([1, 2, 3], [1, 2]);
assertArraysEqual([1, 5, 7, 3], [1, 5, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 8]);
assertArraysEqual([1, 2, 3], [8, 2, 3]);