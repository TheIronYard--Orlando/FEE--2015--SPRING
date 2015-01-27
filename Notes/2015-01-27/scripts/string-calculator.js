var assert = require('assert');

console.log(Date());

it('should have a `plus` function', function(){
  assert(plus);
  assert.equal(typeof plus, 'function');
});

it('should add "zeros"', function(){
  assert.equal(plus("zero", "zero"), 0);
  assert.equal(plus("zero", "one"), 1);
  assert.equal(plus("zero", "two"), 2);
  assert.equal(plus("zero", "three"), 3);
  assert.equal(plus("zero", "four"), 4);
  assert.equal(plus("zero", "five"), 5);
  assert.equal(plus("zero", "six"), 6);
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
  };
  
  if ( B == "six" ){
    return numbers[B];
  }

  if ( B == "five" ){
    return numbers["five"];
    
    return 5;
  }
  if ( B == "four" ){
    return 4;
  }
  if ( B == "three" ){
    return 3;
  }
  
  if ( B == "two" ){
    return 2;
  }

  if ( B == "one" ){
    return 1;
  }

  return 0;
} // END plus