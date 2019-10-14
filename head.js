const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😒😒😒 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  return array[0];
};

assertEqual(head([5, 3, 2, 6]), 5);
assertEqual(head(["Hey", "Nope", "Please"]), "Hey");
assertEqual(head([]), undefined);
assertEqual(head([1]), 1);