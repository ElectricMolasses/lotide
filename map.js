const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = map;