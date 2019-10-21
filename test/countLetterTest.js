const countLetters = require('../countLetters');
const {assert} = require('chai')

describe('countLetters', () =>{
  let text = "These are in fact letters."
  it('should return 4 for counting \'t\' "These are in fact letters." ', () => {
    assert.equal(countLetters(text).t,4)
  })
  it('should return 2 for counting \'a\' "These are in fact letters." ', () => {
    assert.equal(countLetters(text).a,2)
  })
  it('should return 1 for counting \'l\' "These are in fact letters." ', () => {
    assert.equal(countLetters(text).l,1)
  })
})