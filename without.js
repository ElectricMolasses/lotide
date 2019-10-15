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

const without = function(arr, filters) {
  let newArr = [...arr];

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < filters.length; j++) {
      if (newArr[i] === filters[j]) {
        newArr.splice(i, 1);
        i--;
        break;
      }
    }
  }

  return newArr;
};

let testArray = [1, 2, 3];

assertArraysEqual(without([1, 2, 3, 4, 5], [1, 5]), [2, 3, 4]);
assertArraysEqual(without([7, 8, 9], [8]), [7, 9]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []);
assertArraysEqual(without(testArray, [1, 3]), [2]);
assertArraysEqual(testArray, [1, 2, 3]);