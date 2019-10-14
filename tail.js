const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😒😒😒 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

let testArray = [5, 4, 3, 2, 1];
let newArray = tail(testArray);


console.log("===OLD ARRAY VALIDATION===");
assertEqual(testArray.length, 5);
for (let i = 0; i < testArray.length; i++) {
  assertEqual(testArray[i], 5 - i);
}

console.log("===NEW ARRAY VALIDATION===");
assertEqual(newArray.length, 4);
for (let i = 0; i < newArray.length; i++) {
  assertEqual(newArray[i], 4 - i);
}