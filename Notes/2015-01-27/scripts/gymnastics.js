var assert = require('assert');

var events = require('../apis/github/users/al-the-x/events.json');

function answer(){
  var index = 0;
  var numberOfPushEvents = 0;

  events.forEach(function(item){
    if ( item.type == "PushEvent" ){
      numberOfPushEvents++;
    }
  });
  var pushEvents = events.filter(function(item){
    return item.type == 'PushEvent';
  });
  
  pushEvents.length == numberOfPushEvents;

  /* // Irrelevant in the face of forEach...
  while ( index < events.length ){
    var event = events[index];

    if ( event.type == "PushEvent" ){
      numberOfPushEvents++;
    }
    
    index++;
  }
  // */

  return {
    'total': events.length,    // How many total events did you fetch?
    'PushEvent': {
      'total': numberOfPushEvents,
    }
    /* // Coming back around...
    'PushEvent': {
      'total': ...,  // How many total events of type `PushEvent` are there?
      'perDay': ...  // On average, how many`PushEvent` entries per day?
    },
    'other': {
      'total': ...,  // How many _other_ events are in the data?
      'perDay': ...  // How many per day, on average?
    } // */
  };
} // END answer

it('should have one big test', function(){
  assert(events);
  assert(events instanceof Array);

  assert(answer);
  assert(typeof answer == 'function');

  var theAnswer = answer();

  assert.equal(theAnswer.total, 30);
  // I assert that the key "total" in variable 
  // "theAnswer" is equal to Number 30

  assert(theAnswer.PushEvent);

  assert(theAnswer.PushEvent.total > 0);
  // */
});