# 10 -- Math is Hard

## Description

* pair programming
* build your own  calculator: add, sub, mul, div
* start on your own _string_ calculator
* continue documentation: control flow
* add chess pieces to board
* correct bugs

## Deliverables

* A _WIP Issue_ named `10 -- Math is Hard` with tasks and estimates
* A branch in `TIY-Assignments` named `feature/10--math-hard` with:
  * a commit that creates:
    * a _new_ directory called `scripts/`
    * a file in `scripts/` called `main.js`
  * new commits to `docs/JS.md` that:
    * document 10 control-flow keywords
    * minimally including `if`, `else` and `return`
  * commits to `pub/index.html` or `pub/css/main.css` that:
    * add dark and light chess pieces to your grid _via CSS_
    * provide a hover-state to each square that contains a piece
* A PR in `TIY-Assignments` from `feature/10--math-hard` to `master` with:
  * a link to your _WIP Issue_
  * 2x peer review
* Links in your _WIP Issue_ to:
  * your PR in `TIY-Assignments`

## Requirements

**Note:** You _must_ provide the full set of **Deliverables** to avoid **Incomplete** on this assignment.

### Tasks

* **Yak Shaving**
  * [ ] Create a new _WIP Issue_ with tasks _and estimates!_
  * [ ] Create a new branch called `10--math-hard`
  * [ ] Create a new directory called `scripts/`
  * [ ] Create and commit a new file in `scripts/` called `main.js`
  * [ ] Push the branch to Github and open a PR
* **Reading JavaScript** -- Control Flow
  * [ ] Checkpoint: Added `if` with examples
  * [ ] Checkpoint: Added `else` with examples
  * [ ] Checkpoint: Added `return` with examples
  * [ ] Checkpoint: Five control statements!
  * [ ] Mission Complete: Ten control statements!
* **Math is Hard**
  * [ ] Checkpoint: Created and committed and **RAN** `scripts/main.js`
  * [ ] Checkpoint: Houston, we have addition. :rocket:
  * [ ] Checkpoint: We are four by four. :four_leaf_clover:
  * [ ] Checkpoint: Division by zero is... :zero:
  * [ ] Checkpoint: "one" plus "one" is 2
  * [ ] Mission Complete!

### Calculator Kata

Fill in the following functions to provide addition, subtraction, multiplication and division operations. Your `div` function should _always_ produce a `Number` value, even when given `0` as a second argument. Use `assert()` to build test cases for a sampling of positive and negative numbers, including zero.

```javascript
/**
 * @param Number A
 * @param Number B
 * @return sum of A and B
 */
function add(A, B){
}

/**
 * @param Number A
 * @param Number B
 * @return difference of A and B
 */
function diff(A, B){
}

/**
 * @param Number A
 * @param Number B
 * @return product of A times B
 */
function prod(A, B){
}

/**
 * @param Number A
 * @param Number B
 * @return division of A by B
 */
function div(A, B){
}
```

### String Calculator Kata

Provide a function called `plus` that accepts two `String` arguments that should always be English number words (e.g. one, two, three) and returns a `Number` representing the sum. For example:

 ```javascript
 assert(plus("one", "one") === 2);
```

Use `assert()` to provide test cases for `"zero"` through `"ten"`. **Hint:** use `if` and `return` statements!

#### **BEAST MODE**

For people who need challenges, add more operations or expand your number range. When you get above `"twenty"`, though, you probably want to write a funtion called `toNumber`.

## Additional Resources

* [JavaScript Guide on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
  * [Statements (Control Flow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements)
* [JavaScript Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
  * [Statements and Declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
