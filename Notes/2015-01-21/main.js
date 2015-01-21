var assert = require('assert');

function add(A, B){
  console.log(A + B);
  return A + B;
}

add(1, 1); // {2}

assert.equal(
  add(1, 1), 
  2
);

add(add(1, 1), 2);