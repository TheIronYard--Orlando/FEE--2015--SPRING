var assert = require('assert'),
    events = require('./events.json');

function answer(){
  /** // TODO: Delete me later...
  var pushEventList = [ ];

  function keep(event){
    return event.type == "PushEvent";
  }

  // forEach event in events do...
  events.forEach(function(event){
    // if the "type" of event is "PushEvent"
    if ( keep(event) ){
      // put the event on the list of PushEvents
      pushEventList.push(event);
    }
  });

  var pushEventList = events.filter(keep);
  // */

  return {
    'total': events.length,
    'PushEvent': {
      'total': events.filter(function(event){
        return event.type == "PushEvent";
      }).length

    }
  };
}

it('should have an `answer` function', function(){
  assert(answer);
  assert.equal(typeof answer, 'function');
  assert.equal(typeof answer(), 'object');
});

var theAnswer = answer();

it('should have a `total` key', function(){
  assert.equal(theAnswer.total, 30);
  assert.equal(theAnswer.total, events.length);
});

it('should have a `PushEvent` key', function(){
  assert(theAnswer.PushEvent);
  assert.equal(
    typeof theAnswer.PushEvent,
    'object'
  );
  assert.equal(
    typeof theAnswer.PushEvent.total,
    'number'
  );
  assert.equal(theAnswer.PushEvent.total, 9);
});
