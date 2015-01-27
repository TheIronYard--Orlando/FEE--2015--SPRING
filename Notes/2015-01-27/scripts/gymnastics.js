var assert = require('assert');

var events = require('../apis/github/users/al-the-x/events.json');

function answer(){
  return {
    'total': events.length
  }
} // END answer

assert(events);
assert(answer);
assert(typeof answer == 'function');

var theAnswer = answer();
  
assert.equal(theAnswer.total, 30);
assert(theAnswer.PushEvents);
assert(theAnswer.PushEvents.total);
