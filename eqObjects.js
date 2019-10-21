const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length === keys2.length) {

    for (const key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) return false;
      } else if (typeof object1[key] === 'object' &&
                 typeof object2[key] === 'object') {
        if (!eqObjects(object1[key], object2[key])) return false;
      } else if (object1[key] !== object2[key]) return false;
    }
    
  } else {
    return false;
  }
  return true;
};

const ab = { a: '1', b: '2' };
const ba = { a: '1', b: '2' };

const abc = { a: '1', b: '2', c: '3' };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ba, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2,), false);

const nest1 = { a: 1, b: 2, c: { a: 1, b: 2, c: { a: 1, b: 2}}};
const nest2 = { a: 1, b: 2, c: { a: 1, b: 2, c: { a: 1, b: 2}}};

assertEqual(eqObjects(nest1, nest2), true);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false

module.exports = eqObjects;