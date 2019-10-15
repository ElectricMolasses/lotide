const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😒😒😒 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length === keys2.length) {
    for (let key in keys1) {
      if (object1[key] !== object2[key]) return false;
    }
  } else return false;

  return true;
};

const obj1 = { a: '1', b: '2' };
const obj2 = { a: '1', b: '2' };

const obj3 = { a: '1', b: '2', c: '3' };

assertEqual(eqObjects(obj1, obj2), true);
assertEqual(eqObjects(obj2, obj3), false);