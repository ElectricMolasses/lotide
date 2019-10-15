const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
  } else return false;
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`😃😃😃 Assertion Passed: [${arr1.toString()}] === [${arr2.toString()}]`);
  } else {
    console.log(`😒😒😒 Assertion Failed: [${arr1.toString()}] !== [${arr2.toString()}]`);
  }
};

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