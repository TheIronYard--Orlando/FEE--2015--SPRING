# 09 -- Hello, JavaScript!

## Description

Time to learn your _third_ new language: JavaScript. Like any [dialect](http://en.wikipedia.org/wiki/Dialect), JavaScript has a *vocabulary* of words and terms, a *grammar* of punctuation and syntax, and a *pronunciation* for every symbol and phrasing. The latter is harder to come by but an essential part of communicating with other programmers.

Tonight you'll start assembling your [lexicon](http://en.wikipedia.org/wiki/Lexicon) of JavaScript vocabulary, just like you did with HTML and CSS, and tomorrow we'll start working on your grammar and pronunciation. **Don't skip over this part of the assignment!**

### Reading JavaScript

There are [several different _literal_ expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Literals) in JavaScript: `Null`, `Boolean`, `Number`, `String`, `Object`, `Array`, and `RegExp` (or Regular Expression). The first 4 correspond to [the _primitive_ types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive). Additionally, there are [3 built-in values of interest](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects): `Infinity`, `NaN`, and `undefined`. Finally, there are [quite a few operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Operators) that can be combined with these literals and values to form expressions.

Using the [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) and the format provided in **Requirements**, document the first 4 literal or primitive types, those 3 important built-in values, and at least 10 _Arithmetic_ or _Assignment_ operators. Provide examples of each as simple expressions and include the result from the console, REPL, or Scratchpad.

Remember to link the title of each entry to a corresponding page in the documentation, as you'll be adding more to it later!

### What's in a Grid?

Finally, to keep your HTML and CSS skills fresh, let's build something simple... just an 8-by-8 grid. The cells in the grid should each be perfectly square and alternate in color between dark and light with a clearly discernable border between them. You decide which colors: blue, brown, black, purple, whatever. [I want to see your skills of an artist!](http://www.homestarrunner.com/sbemail58.html) Label the rows from "8" to "1" and the columns from "a" to "h"; cell "d8" should be dark. The grid should take up the entire width of the viewport at _any_ resolution. You're free to use whatever tags and styles you like.

## Deliverables

* A _WIP Issue_ named `09 -- Hello JavaScript!` with tasks and estimates
* A branch in `TIY-Assignments` named `feature/09--hello-javascript` with:
  * a _new_ file in `docs/` called `JS.md` with documentation matching **Requirements**
  * a commit resetting `pub/` to base HTML5 Boilerplate
  * an implementation in `pub/index.html` of:
    * a 8x8 grid of perfect squares
    * alternating dark and light colors in each square
    * distinct border between cells
    * rows labeled "8" to "1"
    * columns labeled "a" to "h"
    * cell "d8" as dark
* A PR in `TIY-Assignments` from `feature/09--hello-javascript` to `master` with:
  * a link to your _WIP Issue_
  * 2x peer review
* Links in your _WIP Issue_ to:
  * your PR in `TIY-Assignments`

## Requirements

**Note:** You _must_ provide the full set of **Deliverables** to avoid **Incomplete** on this assignment.

### Tasks

* **Yak Shaving**
  * [ ] Create a new _WIP Issue_ with tasks _and estimates!_
  * [ ] Create a new branch called `09--hello-javascript`
  * [ ] Create and commit a new file in `docs/` called `JS.md`
  * [ ] Push the branch to Github and open a PR
  * [ ] Name the PR _descriptively_...
* **Reading JavaScript**
  * [ ] Checkpoint: Created and committed `JS.md`!
  * [ ] Checkpoint: First Literal Documented!
  * [ ] Checkpoint: All Literals Documented!
  * [ ] Checkpoint: To Infinity and beyond!
  * [ ] Checkpoint: First Operator
  * [ ] Checkpoint: Five Operators
  * [ ] Checkpoint: All Ten Operators!
  * [ ] Mission Complete!
* **What's In A Grid?**
  * [ ] Checkpoint: Reset to Boilerplate!
  * [ ] Checkpoint: Basic HTML structure!
  * [ ] Checkpoint: Look at all the colors...
  * [ ] Checkpoint: Looks great in any viewport!
  * [ ] Mission Complete!
  
### Format for _Reading JavaScript_

----
### [Primative: Null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

* _symbol_: `null`
* _pronunciation_: "null", "null value", "is null"
* _examples_:
```javascript
null // how exciting
```

### [Operator: Addition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition_(.2B))

* _symbol_: `+`
* _pronunciation_: "plus", "added to"
* _examples_:
```javascript
1 + 2 + 3 // 6, of course
'1' + 2 + 3 // '123', obviously... WTF?
```
----

## Additional Resources

* [JavaScript Guide on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) (Beginners)
  * [Values, variables, and literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Values,_variables,_and_literals)
  * [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
* [JavaScript Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
  * [built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
  * [literal grammar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Literals)
  * [primitive values](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
  * [expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
* [JavaScript Garden](https://bonsaiden.github.io/JavaScript-Garden/) (Advanced)
