# 15 -- Hello Lodash! (I Hope)

## Description

### Coding Dojo

Tired of **String Calculator** yet? Great! Try a _new_ kata: **3's and 5's**. If you consider the natural numbers under 10 that are multiples of either 3 or 5, you get (3, 5, 6, 9). The sum of these nnumbers is 23. What is the sum of the multiples of 3 or 5 under 20? Under 30? Under 50? Under 100? 1000?

### Reading JavaScript: Lodash Edition

[The Lodash library](http://lodash.com/) provides a number of methods that appear to be duplicates of [the built-in `Array` methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_of_array_instances). Document them using the format in **Requirements** and specifically note the differences from the built-ins. Additionally, document the following, which we'll use a lot:

* [`_.reject`](http://lodash.com/docs#reject)
* [`_.where`](http://lodash.com/docs#where)

### A Better Chessboard

Now that we're all warmed up, let's put our JavaScript iteration skills to more productive use! The previous rendering of a chessboard in JavaScript leaves much to be desired... it's basically just a bunch of text that only looks good on the console. Don't we know HTML, though?

Use the _new_ `print(board)` function provided in **Requirements** as a starting point and add your own code to render a `<table>`-based HTML chessboard from the JavaScript version. Start by just printing the correct HTML, then display the chess piece with [the appropriate HTML entity](http://www.amp-what.com/unicode/search/chess)... If only there was a way to convert from the single characters used on the chessboard to a numeric value.

## Deliverables

## Requirements

### Tasks

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
