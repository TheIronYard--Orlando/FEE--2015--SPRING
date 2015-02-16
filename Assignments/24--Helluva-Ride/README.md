# 24 -- One Helluva Ride

## Description

You've come a long way since that first week. Right now, you're dirty, tired, and worn-out, but just on the other side of this tunnel is Angular JS and full-blown application development. Hang tight.

### Choose Your Own Assignment

There are a handful of assignments from the last few weeks that should stand out:

* **[Responsive Vertical Timeline](/Assignments/06--Now-With-More-Responsive/README.md)**
* **[Surf & Paddle RWD](/Assignments/08--Surf-and-Paddle-RWD/README.md)**
* **[String Calculator](/Assignments/12--Coding-Dojo-Style/README.md#string-calculator-kata)**
* **[Check Writing](/Assignments/12--Coding-Dojo-Style/README.md#check-writing-kata-lite)**
* **[API Gymnastics](/Assignments/13--Lists%2BDicts/README.md#api-gymnastics)**
* **[A Nice Game of Chess](/Assignments/16--Nice-Game-of-Chess/README.md)**
* **[Github Revolution](/Assignments/20--Github-Revolution/README.md)**

Redo all of these... or at least a reasonable replacement for each. **String Calculator** gotcha down? (It gets much more interesting after 20...) Swap it out for [a different kata](#coding-dojo-katas). Can't stand **Surf & Paddle**? [**The Iron Blog**](/Assignments/08--Surf-and-Paddle-RWD/README.md) is essentially the same assignment, so do that one instead.

See [**Requirements**](#requirements) for what to name them and where to put them, but make your own rules and checkpoints for each. Use whatever tools you think will help you... or challenge you. Pace yourself. Work with others. Review your notes. Look at your old code on Github, if it helps (probably won't, though). _Write your own code._

### Show me yo' moves!

Let's practice deploying to `gh-pages` as if it were the staging environment on a _real_ project. As you complete each piece of the assignment, push your work to Github _and_ push your branch to your `gh-pages` branch.

After you confirm your deployment, open a PR from your feature branch to your `master` branch and solicit feedback from your peers. Convert their feedback and any known issues you find into a checklist in the description of the PR. Add commits _to the feature branch_ to check things off your list and get your 2x:+1:'s!

Once approved, merge that bad boy but _keep the branch!_ Do some more work on the _next_ piece, push to your feature branch, update your `gh-pages` branch, and open _another_ PR to `master` for review.

#### Rinse lather repeat.

Remember to link _each_ of your PRs to your _WIP Issue_!

## Requirements

* _WIP Issue:_ `24 -- Helluva Ride`
  * checklist of assignments and checkpoints
  * link to each PR you merge
* _WIP Branch:_
  * work in: `TIY-Assignments:feature/24--helluva-ride`
  * deploy into: `TIY-Assignments:gh-pages`
* _WIP Files:_
  * `timeline/index.html`
  * `surf+paddle/index.html`
  * `katas/`
    * `string-calculator.js`
    * `check-writing.js`
    * `roman-numerals.js`
    * `euler-1.js` -- formerly `3s+5s.js`
    * `euler-2.js` -- even Fibonacci
    * `euler-4.js` -- largest palindrome
    * `euler-5.js` -- smallest multiple
  * `apis/gymnastics.js`
  * `chessboard/`
    * `index.html`
    * `css/main.css`
    * `js/main.js`
  * `github/`
    * `index.html`
    * `css/main.css`
    * `js/main.js`

### Show me yo' moves!

To make it easier for your peers to _find_ your work, include a file named `index.md` in your repository root. Initially, it should look like this:

```markdown
---
---

### Projects

* [Current WIP](pub/index.html)
```

_Note the two rows of three hyphens at the top of the file_... They're important. When you push that file to `gh-pages`, Github will convert it to an `index.html` file automatically... _as long as you have those hyphens._ Use Markdown to link to each project as you complete it.

### Coding Dojo Katas

#### String Calculator

```javascript
/**
 * @param String A an English number word
 * @param String B an English number word
 * @returns Number representing A + B
 */
function plus(A, B){
} // END plus

/**
 * @param String A an English number word
 * @param String B an English number word
 * @returns Number representing A - B
 */
function minus(A, B){
}

/**
 * @param String word an English number word
 * @returns Number translation of `word`
 */
function toNumber(word){
}
```

##### Checkpoints

* [ ] `"zero"` through `"ten"`
* [ ] `"ten"` through `"twenty"`
* [ ] `"twenty"` through `"thirty"`
* [ ] "`fifty`" through "`sixty`"
* [ ] "`ninety`" through "`one hundred`"
* [ ] `"one hundred"` through `"one hundred twenty"`

#### Check Writing

```javascript
/**
 * @param Number n representing a dollar value
 * @returns String of English words for `n`
 */
function toCheck(n){
} // END toCheck

assert.equal(toCheck(1.23), "one & 23/100s dollars");
assert.equal(toCheck(12.34), "twelve & 34/100s dollars");
assert.equal(toCheck(123.45), "one hundred twenty three & 34/100s dollars");
assert.equal(toCheck(1234.56), "one thousand two hundred thirty four & 56/100s dollars");
assert.equal(toCheck(12345.67), "twelve thousand three hundred forty five & 67/100s dollars");

/**
 * @param Number
 * @returns String an English number word
 */
function toEnglish(n){
} // END toEnglish

assert.equal(toEnglish(0), "zero");
assert.equal(toEnglish(1), "one");
assert.equal(toEnglish(2), "two");
```

#### Roman Numerals

```javascript
/**
 * @param String numeral a Roman numeral
 * @return Number value of `numeral` in decimal
 */
function fromRoman(numeral){
} // END toNumber

/**
 * @param Number n greater than 0
 * @return String Roman numeral for `n`
 */
function toRoman(n){
} // END toRoman

assert.equal(fromRoman('I'), 1);
assert.equal(fromRoman('II'), 2);
assert.equal(fromRoman('III'), 3);
assert.equal(fromRoman('IV'), 4);
assert.equal(fromRoman('V'), 5);

assert.equal(toRoman(6), 'VI');
assert.equal(toRoman(7), 'VII');
assert.equal(toRoman(8), 'VIII');
assert.equal(toRoman(9), 'IX');
assert.equal(toRoman(10), 'X');

// Fill in the `undefined` values...
assert.equal(toRoman(20), undefined);
assert.equal(toRoman(30), undefined);
assert.equal(toRoman(40), undefined);
assert.equal(toRoman(50), undefined);
assert.equal(toRoman(100), undefined);
assert.equal(toRoman(200), undefined);
assert.equal(toRoman(400), undefined);
assert.equal(toRoman(500), undefined);
assert.equal(toRoman(600), undefined);
assert.equal(toRoman(900), undefined);

// Woah...
assert.equal(toRoman(1000), undefined);
assert.equal(toRoman(2000), undefined);
assert.equal(toRoman(4000), undefined);
assert.equal(toRoman(5000), undefined);
assert.equal(toRoman(6000), undefined);

// What comes next?
assert.equal(toRoman(9999), undefined);
```

You might need to learn something about [Roman Numberals](http://en.wikipedia.org/wiki/Roman_numerals) to finish this one.

## Additional Resources

* [Immediately Invoked Function Expression (IIFE)](http://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
* [Emmet.io](http://emmet.io/)
