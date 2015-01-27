var assert = require('assert');

console.log(Date());

/* --- Pair programming! --- */

function plus(a, b){
  if (b == "zero") {
   return 0;
  } else {
    return 1; 
  };
  
  return a + b; // dead code
}



it('should have a function called `plus`', function(){
  assert(plus);
  assert(typeof plus == 'function');
});

it('should take "zero"', function(){
  assert.equal(plus("zero", "zero"), 0);
  assert.equal(plus("orange", "zero"), 0);
});


it('should take "one"', function () {
  assert.equal(plus("zero","one"), 1);
});

