var assert = require('assert'),
    _ = require('lodash'),
    events = require('./events.json');

console.log(Date());

/* // Functionally equivalent...
var pushEvents = events.filter(function(event){
  return event.type == 'PushEvent';
});

var pushEvents = _.filter(events, function(event){
  return event.type == 'PushEvent';
});
// */

var pushEvents = _.filter(events, {
  'type': 'PushEvent'
});

var first = _.first(events),
    last =  _.last(events)


function answer(){
  return {
    'total': events.length,
    'PushEvent': {
      'total': pushEvents.length,
    },
    /* // One day...
      'total': ...,
      'perDay': {
        'total': ... // Average events per day...
      }
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

it('should have 30 `events`', function(){
    assert.equal(anAnswer.total, 30);
});

it('should have 14 `PushEvent`', function(){
    assert.equal(anAnswer.PushEvent.total, 14);
});

it('should have some `perDay` stats?', function(){
    assert(first);
    assert(last);

    assert(first.created_at);
    assert(last.created_at);

    var datesWithTime = _.pluck(events, 'created_at');

    console.log(datesWithTime.slice(0, 5));

    var justDates = _.map(datesWithTime,
      function(date){
        return date.slice(0,10);
      }
    );

    console.log(justDates.slice(0,5));

    var uniqueDates = _.uniq(justDates);

    console.log(uniqueDates);

    var uniqueDates = _(events)
      .pluck('created_at')
      .map(function(date){
        return date.slice(0,10);
      })
      .uniq()
    .value();

    console.log(uniqueDates);
});
