const { assert, expect } = require('chai');
const assertEqual = require('../assertEqual');
require('mocha-sinon');

describe('AssertEqual', () => {
  beforeEach(() => {
    const log = console.log;
    this.sinon.stub(console, "log").callsFake(() => {
      return log.apply(log, arguments);
    });
  });
  it('should return true when the two values match', () => {
    expect(assertEqual(5, 5).to.equal(true));
    expect(console.log).to.be.called.with('true');
  });

  it('should return false when the two items do not match', () => {
    //expect(assertEqual(5, 1).to.equal(false));
    //expect(assertEqual(5, '5').to.equal(false));
  });
});
/*
beforeEach(function() {
  let log = console.log;
  // Sinon automatically cleans up stubs for us before it completes
  // a test, so we shouldn't have to worry about restore().

  // I created a "fake" function that still runs the console.log
  // command via console.log.apply, but lets sinon spy on it for
  // testing.  We then confirm in the tests that the argument passed
  // to it was the correct string, and that the call actually
  // completed with calledOnce.
  this.sinon.stub(console, 'log').callsFake(() => {
    return log.apply(log, arguments);
  });
});
*/