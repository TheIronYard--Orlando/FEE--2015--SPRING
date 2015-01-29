var assert = require('assert'),
    _ = require('lodash'),
    events = require('./events.json');

function answer(){
  return { /* // One day...
    'total': ...,
    'PushEvent': {
      'total': ...,
      'perDay': ...
    } // */
  };
}

anAnswer = answer();

it('should be setup', function(){
    assert(events);
    assert(answer);
    assert(anAnswer);

    assert(Array.isArray(events));
    assert.equal(typeof answer, 'function');
    assert.equal(typeof anAnswer, 'object');
});
