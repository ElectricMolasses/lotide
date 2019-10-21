/*
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
*/

const { assert, expect } = require('chai');
const tail = require('../tail');

describe('Tail', () => {
  it('should return an array with the first value removed', () => {
    expect(tail([1, 2, 3, 4])).to.equal([2, 3, 4]);
  });
});