const { assert } = require('chai');
const eqObjects = require('../eqObjects');

describe('eqObjects', () => {
  const ab = { a: '1', b: '2' };
  const ba = { a: '1', b: '2' };
  const abc = { a: '1', b: '2', c: '3' };
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };
  const nest1 = { a: 1, b: 2, c: { a: 1, b: 2, c: { a: 1, b: 2}}};
  const nest2 = { a: 1, b: 2, c: { a: 1, b: 2, c: { a: 1, b: 2}}};

  it('should return true when the objects match', () => {
    assert.isTrue(eqObjects(ab, ba));
    assert.isTrue(eqObjects(cd, dc));
    assert.isTrue(eqObjects(nest1, nest2));
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });

  it('should return false when the objects do not match', () => {
    assert.isFalse(eqObjects(ba, abc));
    assert.isFalse(eqObjects(cd, cd2,));
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
  });
});