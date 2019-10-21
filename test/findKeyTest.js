const { assert } = require('chai');
const findKey = require('../findKey');

let obj;

describe('findKey', () => {
  before(() => {
    obj = {
      1: "Cat",
      2: 5,
      3: 7,
      4: 82,
      5: true,
      6: [1, 2, 3]
    };
  });
  
  it('should return a key whose element fulfills he callback', () => {
    assert.deepEqual(findKey(obj, x => typeof x === 'number'), '2');
    assert.deepEqual(findKey(obj, x => x), "1");
    assert.deepEqual(findKey(obj, x => Array.isArray(x)), "6");
    assert.deepEqual(findKey(obj, () => false), undefined);
  });
});