const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😒😒😒 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
  } else return false;
  return true;
};

assertEqual(eqArrays([1, 5, 7], [1, 5, 7]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2]), false);
assertEqual(eqArrays([1, 5, 7, 3], [1, 5, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 8]), false);
assertEqual(eqArrays([1, 2, 3], [8, 2, 3]), false);