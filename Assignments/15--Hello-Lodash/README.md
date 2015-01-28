# 15 -- Hello Lodash! (I Hope)

## Description

Seemed like we needed some more time with `Array` manipulation and plucking values out of dictionaries, so I punted _Tools on Tuesday_ to Wednesday. Forgive the alliteration. Keep in mind that Lodash is a _bug_ library, and there's _lots_ of proverbial wilderness in there. We'll make some inroads through documenting some of the methods that are seem like replacements to those in native JavaScript. Try to use those in your homework tonight.

### Coding Dojo

Make sure that **String Calculator** and **Check Writing** meet the specs from yesterday, and help out anyone who's still behind...

Tired of those yet? Great! Here's a _new_ kata:

#### 3's and 5's

If you consider the natural numbers under 10 that are multiples of either 3 or 5, you get (3, 5, 6, 9). The sum of these nnumbers is 23. What is the sum of the multiples of 3 or 5 under 20? Under 30? Under 50? Under 100? 1000?

Copy the starting point in **Requirements** into a file called `3s+5s.js` in `scripts/`, so you're not dealing with a completely blank page. Talk through the problem as a team, and break it down into pieces before you just start writing something.

### Reading JavaScript: Lodash Edition

[The Lodash library](http://lodash.com/) provides a number of methods that appear to be duplicates of [the built-in `Array` methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_of_array_instances). Document them using the format in **Requirements** and specifically note the differences from the built-ins. Additionally, document the following, which we'll use a lot:

* [`_.reject`](http://lodash.com/docs#reject)
* [`_.where`](http://lodash.com/docs#where)

### A Better Chessboard

Now that we're all warmed up, let's put our JavaScript iteration skills to more productive use! The previous rendering of a chessboard in JavaScript leaves much to be desired... it's basically just a bunch of text that only looks good on the console. Don't we know HTML, though?

Use the _new_ `print(board)` function provided in **Requirements** as a starting point and add your own code to render a `<table>`-based HTML chessboard from the JavaScript version. Start by just printing the correct HTML, then display the chess piece with [the appropriate HTML entity](http://www.amp-what.com/unicode/search/chess)... If only there was a way to convert from the single characters used on the chessboard to a numeric value.

### API Gymnastics

Of course we'll have some more routines to practice... Soon. Keep working on the last set for now. You gotta learn how to land before you learn how to roll.

## Deliverables

* _WIP Issue:_ `15 -- Hello Lodash`
* _WIP Branch:_ `TIY-Assignments:feature/15--hello-lodash` with:
  * _multiple_ commits to:
    * `scripts/3s+5s.js` -- for at least 10, 20, 30
    * `scripts/main.js` -- a better chessboard
    * `docs/lodash.md` -- documentation++
* PR in `TIY-Assignments` with:
  * 2x :+1:'s from peers
  * links to _WIP Issue_

## Requirements

* **Yak Shaving**
* **Coding Dojos**
  * **String Calculator** with dictionary lookups in `scripts/string-calculator.js`
  * **Check Writing** with array lookups in `scripts/check-writing.js`
  * **3's and 5's** for 10, 20, 30 in `scripts/3s+5s.js`
* **Reading JavaScript** in `docs/lodash.md`
* **A Better Chessboard** in `scripts/main.js`
  * Using JavaScript to generate HTML
  * Printing HTML entities for chesspieces

### Tasks

* [ ] **Yak Shaving**
  * [ ] Create your _WIP Issue_ with tasks and estimates!
  * [ ] Close your PR, pull `master`, open a new branch!
  * [ ] Add new files:
    * `scripts/3s+5s.js`
    * `docs/lodash.md`
  * [ ] Push your branch and open a PR!
* [ ] **API Gymnastics**
  * Checkpoint:
* [ ] **Coding Dojo**

### Coding Dojo: 3's and 5's

```javascript
it('should have a `solution` function', function(){
  assert(solution);
  assert.equal(typeof solution, 'function');
});

it('should have a `solution` for (10, 20, 30)', function(){
  assert.equal(solution(10), 23);
  assert.equal(solution(20), undefined);
  assert.euqal(solution(30), undefined);
});

it('should have a `solution` for 50', function(){
  assert.equal(solution(50), undefined);
});

it('should have a solution for 100', function(){
  assert.equal(solution(100), undefined);
});

// What about 1000?
```

### Format for _Reading JavaScript: Lodash_

---
### [`_.every`](http://lodash.com/docs#every)

* _params:_
  * `Array`|`Object`|`String` `collection` to iterate over
  * `Function`|`Object`|`String` `predicate` considered for each iteration
    * a callback `Function`
      * is invoked with: `value`, `index`|`key`, `collection`
      * should return `Boolean` whether iteration passes `predicate`
    * an `Object` is compared like [`_.matches`](http://lodash.com/docs#matches)
    * a `String` is compared like [`_.property`](http://lodash.com/docs#property)
  * `thisArg` binding for `predicate`
* _returns:_
  * `Boolean` whether `predicate` passes for every `value` in `collection`
* _differences:_
  * not just for `Array`; can be run with `Object` and `String` as `collection`
  * `predicate` can be `Object` or `String`...?
---

### `print(board)` for _A Better Chessboard_

```javascript
function print(board){
  // Before any rows are printed, print the `<table>`...
  console.log('<table class="chessboard">');

  _.forEach(board, function(row, rank){

      // Before any cells are printed...

      _.forEach(row, function(square, file){

          // In here, we have `rank`, `file`, and `square`...

      }); // END foreach(row)

      // After all the cells are printed...

  }); // END foreach(board)

  // After all the rows are printed...
  console.log('</table> <!-- .chessboard -->');
} // END print
```

#### BEAST MODE

The HTML chessboard that we built used CSS rules to add pieces to the grid based on HTML classes. Replace the HTML entities with the same. **HINT:** You might consider another function that, given a representation of a chesspiece like `'Q'` or `'k'`, produces a list of appropriate class names.

## Additional Resources

* [_Abstract Data Types_ on Wikipedia](http://en.wikipedia.org/wiki/Abstract_data_type)
  * [_Dictionary_ data type on Wikipedia](http://en.wikipedia.org/wiki/Associative_array)
  * [_List_ data type on Wikipedia](http://en.wikipedia.org/wiki/List_%28abstract_data_type%29)
  * [_Queue_ data type on Wikipedia](http://en.wikipedia.org/wiki/Queue_(abstract_data_type))
  * [_Stack_ data type on Wikipedia](http://en.wikipedia.org/wiki/Stack_(abstract_data_type))
* [Lodash](http://lodash.com) vs [Underscore](http://underscorejs.org)
  * [Comparison on Stack Overflow](http://stackoverflow.com/questions/13789618/differences-between-lodash-and-underscore)
  * ["Say 'Hello' to Lo-Dash" by Kit Cambridge](http://kitcambridge.be/blog/say-hello-to-lo-dash/)
* [Glossary of Chess on Wikipedia](http://en.wikipedia.org/wiki/Glossary_of_chess)
  * [rank (row)](http://en.wikipedia.org/wiki/Glossary_of_chess#Rank)
  * [file (column)](http://en.wikipedia.org/wiki/Glossary_of_chess#file)
