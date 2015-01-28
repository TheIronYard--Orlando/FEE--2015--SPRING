var assert = require('assert'),
    events = require('./events.json'),
    _ = require('lodash'),
    lodash = require('lodash');

_.forEach([ 1, 2, 3 ], function(item, index, all){
  console.log(item, index, all);
});

console.log('is every item even?', lodash.every([ 1, 2, 3 ], function(item, index, all){
  console.log(item, 'is even', item % 2, '?');
  return item % 2;
}));
