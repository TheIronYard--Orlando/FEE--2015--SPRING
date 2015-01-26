# 11 -- Coding Dojo Style

## Description

* JavaScript Koans
* String Calculator Kata
* Check Writing Kata
* Nice Game of Chess
* JavaScript Koans
* Blog post

## Deliverables

* _WIP Issue_ named `11 -- Coding Dojo Style` with tasks and estimates
* _WIP Branch_ named `feature/11--coding-dojo` with:
  * commit that deletes `scripts/main.js`
  * documentation in `docs/JS.md` for:
    * the `Array` literal type, i.e. how do I write one in various forms?
    * the magic property `length` with some examples
    * the _non-experimental_ [**Mutator Methods**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Mutator_methods), e.g. `pop()`, `push()`, `splice()`
  * commits for **A Nice Game of Chess** in `scripts/main.js`
  * commits for **String Calculator Kata** in `scripts/string-calculator.js`
  * commits for **Check Writing Kata** in `scripts/check-writing.js`
* Open PR from `feature/11--coding-dojo` to `master` with:
  * link to your _WIP Issue_
  * 2x :+1:s from your peers
* New blog post in `USERNAME.github.io` with a permalink (e.g. `http://USERNAME.github.io/#blog-title`)...!
* Fork of [`mrdavidlaing/javascript-koans`](https://github.com/mrdavidlaing/javascript-koans) with:
  * a new branch called `first` with commits to the `koans/` directory _only_
  * an open PR from `first` to your _local_ `master` (check the **base** repo)
* Comments in your _WIP Issue_:
  * link to PR in `TIY-Assignments`
  * link to PR in `javascript-koans`
  * link to your blog post permalink

## Requirements

**Note:** I expect you to minimally have the following to recieve credit:

* the **Yak Shaving** tasks, of course!
* more documentation in `docs/JS.md`
* a fork of `mrdavidlaing/javascript-koans` with an open PR to _your_ `master`
* **String Calculator** and **Check Writing** _with tests_
* _A blog post of at least 100 words..._ That's less than you think.

### Tasks

* [ ] **Yak Shaving**
  * Merge your last PR if you haven't already! (use the merge button, Luke)
  * Pull your `master` branch locally _after_ you merge!
  * Create a new branch called `feature/11--coding-dojo`
  * Delete and commit `scripts/main.js`
  * Create and commit `scripts/string-calculator.js` and `scripts/check-writing.js`
  * Push your branch and open a PR
* [ ] **Reading JavaScript**
  * [ ] Checkpoint: `Array` literals: empty and filled
  * [ ] Checkpoint: Other ways to create an `Array`?
  * [ ] Checkpoint: What's your `length`...?
  * [ ] Checkpoint: First Mutator method!
  * [ ] Checkpoint: Five Mutators down!
  * [ ] Checkpoint: What, there's only 7?
  * [ ] Mission Complete!
* [ ] **A Nice Game of Chess**
  * [ ] Checkpoint: Retyped [the example](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Example:_Creating_a_two-dimensional_array) in `scripts/main.js`
  * [ ] Checkpoint: I can move pieces! Well, one, really.
  * [ ] Checkpoint: Moved _both_ sides at least once!
  * [ ] Checkpoint: Opening complete!
* [ ] **Coding Dojo** -- Time for your katas
  * [ ] Checkpoint: TDD **String Calculator** from `"zero"` to `"five"` in _my_ repo
  * [ ] Checkpoint: TDD **String Calculator** from `"zero"` to `"five"` in _another_ repo
  * [ ] Checkpoint: TDD **String Calculator** from `"zero"` to `"ten"`! (HipChat that $#!+)
  * [ ] Checkpoint: TDD **Check Writing** from `1` to `10` in _my_ repo
  * [ ] Checkpoint: TDD **Check Writing** from `1` to `10` in _another_ repo
  * **BONUS:** TDD **Check Writing** above `20`...?
* [ ] [**JavaScript Koans**](https://github.com/mrdavidlaing/javascript-koans)
  * [ ] Checkpoint: Forked and installed...!
  * [ ] Checkpoint: Ran it and it broke... as intended!
  * [ ] Checkpoint: Got `AboutExpects.js` green!
  * [ ] Checkpoint: Got `AboutArrays.js` green!
  * **BONUS:** Got `AboutFunctions.js` green! (but I'm really confused)
  * **BONUS:** Got `AboutObjects.js` green! (wasn't that bad, actually)
* [ ] **BLOG IT!**

### Format for _Reading JavaScript_

---
### Literal: `Array` (TODO: link/to/docs)

* *symbol:* `[ ]`
* *pronunciation:* "array", "new array"
* *examples:*
```javascript
// New empty Array
// New Array with some elements
// Any other way to do it?
```

#### `Array.length`

* *value:* `Number` of?
* *examples:*
```javascript
```

#### [`Array.prototype.pop()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

* *result:* what does it do?
* *parameters:* does it have any?
* *returns:* what types? from where?
---

### A Nice Game of Chess

Embedded in the MDN's `Array` documentation is [a simple exercise involving a chessboard](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Example:_Creating_a_two-dimensional_array). Retype that example into your `scripts/main.js` file, overwriting your calculator example completely. Nobody need that anyway.

The example provides a little JavaScript to print the board and move _one_ piece:

```javascript
console.log(board.join('\n')); // print the board to the console

// Move White King's Pawn forward 2...
board[4][4] = board[6][4];
board[6][4] = ' ';
```

Loose statements like that are _so_ ugly. Wrap those up in separate functions:

```javascript
function print(board){
  // stuff and junk...
}

function move(board, fromX, fromY, toX, toY){
  // TODO: make this work...
}
```

#### BEAST MODE

Try to replicate the moves of [the Catalan Opening, Closed Variation](http://www.chess.com/opening/eco/E06_Catalan_Opening_Closed_Variation) with a series of calls to your `move()` function (check out [my awesome movie about it](http://www.chess.com/opening/eco/E06_Catalan_Opening_Closed_Variation)).

### String Calculator Kata

Provide a function called `plus` that accepts two `String` arguments that should always be English number words (e.g. one, two, three) and returns a `Number` representing the sum. Use your new `it()` and `describe()` robots from `mocha`. For example:

 ```javascript
var assert = require('assert');

function plus(A, B){
  // TYPE ALL OF THIS YOURSELF!
}

it('should add "one" and "one"', function(){
  assert.equal(plus("one", "one"), 2);
});
```

* Provide test cases for `"zero"` through `"ten"`
* Just use `if` and `return` statements
* You may need to read about [Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)

### Check Writing Kata (LITE)

Provide a function called `toEnglish` that accepts a `Number` and returns a `String` representing the corresponding English number word. For example:

```javascript
assert.equal(toEnglish(1), "one");
assert.equal(toEnglish(2), "two");
```

#### BEAST MODE

This is the first part of a larger kata. Given a `Number` like `1234.56`, provide a `String` representation like you would see on a printed check: `"one thousand, two hundred thirty four & 56/100s"`. Work your way up to that gigantic number, though, by starting with `toEnglish`, as above, and adding `toCheck`.

## Additional Resources

