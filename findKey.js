const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😒😒😒 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) return key;
  }
};

let obj = {
  1: "Cat",
  2: 5,
  3: 7,
  4: 82,
  5: true,
  6: [1, 2, 3]
};

assertEqual(findKey(obj, x => typeof x === 'number'), '2');
assertEqual(findKey(obj, x => x), "1");
assertEqual(findKey(obj, x => Array.isArray(x)), "6");
assertEqual(findKey(obj, () => false), undefined);