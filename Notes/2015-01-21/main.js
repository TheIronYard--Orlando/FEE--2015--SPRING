var assert = require('assert');

// ------ Look, we're pairing! -----


function add(){
  return 2;
};

assert(add);
//assert(add(1,1) == 2);
assert.equal(add(1, 1), 2);