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

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, x => x[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map([1, 2, 3, 4], x => x * 3), [3, 6, 9, 12]);
assertArraysEqual(map([1, 2, 3, 4], () => 'Oh hai'), ['Oh hai', 'Oh hai', 'Oh hai', 'Oh hai']);