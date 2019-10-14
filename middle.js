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