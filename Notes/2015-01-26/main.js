var assert = require('assert');

console.log(Date());

/* --- Pair programming! --- */

function plus(a, b){
  return 0;
}

it('should have a function called `plus`', function(){
  assert(plus);
  assert(typeof plus == 'function');
});

it('should take "zero"', function(){
  assert(plus("zero", "zero") == 0);
});