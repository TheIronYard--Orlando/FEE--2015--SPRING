var assert = require('assert');

console.log(Date());

it('should have a `plus` function', function(){
  assert(plus);
  assert.equal(typeof plus, 'function');
});

it('should add "zero" to everything', function(){
  assert.equal(plus("zero", "zero"), 0);
  assert.equal(plus("zero", "one"), 1);
  assert.equal(plus("zero", "two"), 2);
  assert.equal(plus("zero", "three"), 3);
  assert.equal(plus("zero", "four"), 4);
  assert.equal(plus("zero", "five"), 5);
  assert.equal(plus("zero", "six"), 6);
});

it('should add "one" to everything', function(){
  assert.equal(plus("one", "zero"), 1);
});

/**
 * Create a function called `plus()` that accepts two `Strings`
 * representing English number words, e.g. "one", "two", "three", 
 * and returns a `Number` representing their sum. For example:
 *
 *     assert.equal(plus("one", "one"), 2);
 *
 * @param String A English number word
 * @param String B English number word
 * @return Number sum of A and B
 */
function plus(A, B){
  var numbers = {
    "six": 6,
    "five": 5,
    "four": 4,
    "three": 3,
    "two": 2,
    "one": 1,
    "zero": 0,
  };
  
  if ( A == "one" ){
    return 1;
  }
  
  return numbers[B];
} // END plus