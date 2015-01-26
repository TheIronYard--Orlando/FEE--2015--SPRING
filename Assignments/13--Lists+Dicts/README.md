# 13 == Of Lists and Dictionaries

## Description

Coming off the weekend, you should be sick of typing `if`, `else`, and `return`, so let's try out our new `Array` and `Object` literals on those mean ole **String Calculator** and **Check Writing** katas. Before we do, though, **Take a Picture** of your logic for practice. You'll need to learn some more `Array` methods before we prep the floow for some **API Gymnastics**.

### Take a Picture

Using a diagramming tool of your choice -- Google Drawings, Gliphy, OmniGraffle, photos of pen and paper -- render a _clean_ drawing of the logic in the `toEnglish` function from **Check Writing**. Save a copy of the resultant image as `docs/toEnglish.png` and commit it into your branch.

### One More Time...

Think you've mastered the **String Calculator** and **Check Writing** katas? Not by a long-shot...! Refactor your "production" (i.e. not-"test") code to use `Array` and `Object` literals as Lists and Dictionaries per the examples below.

### Reading JavaScript: Array Iterators

**Highly recommended BEFORE API Gymnastics**, document the _non-experimental_ [`Array` Iteration Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods) and attempt to re-implement _at least 3_ using `Array.prototype.forEach`. _Also include `find` and `findIndex`._ See **Requirements** below for an example of `every()`.

### API Gymnastics: Floor Routines

Use the `curl` command to get some crazy event data from the Github API and stick it in a file called `apis/github/users/USERNAME/events.json` where `USERNAME` is _your_ Github profile name, e.g. `apis/github/users/al-the-x/events.json` for moi: `al-the-x`. Yes, you'll have to create some empty directories along the way... Remember how to do it in one step? Following the **Requirements** below, use your iterator methods to pull some interesting numbers from the data.

## Deliverables

## Requirements

### Tasks

### Format for _Reading JavaScript_

----
### Literal: `Array`
. . .

#### Iterator Methods

##### `Array.prototype.every`

* _params:_
  * `callback`: `Function` to test each element against
    * _params:_
      * `item`: element to process
      * `index`: index of processed element
      * `all`: array instance
    * _returns:_ `Boolean`
  * `thisArg`: `Object` to which to bind `callback`
* _returns:_ `Boolean` whether `callback` returns `true` for _every_ element
* _example:_
```javascript
function every(anArray, callback){
  var hasFailed = false; // it hasn't has it?

  // iterate...
  anArray.foreach(function(item, index, all){
    if ( hasFailed ) return; // one failure ruins everything...

    hasFailed = !callback(item, index, all); // why invert here?
  });

  return !hasFailed; // Another inverse?
  // What if `anArray` is empty?
}
```
---

### API Gymnastics

Use `curl` to fetch data from [the Github API](http://developer.github.com/v3), specifically [the public Events for a specific user](https://developer.github.com/v3/activity/events/#list-public-events-performed-by-a-user): **YOU!** Capture that data into a file called `apis/github/users/USERNAME/events.json` where `USERNAME` is _your_ Github account name, of course. **Hint:** You'll have to create all the directories along the way before you can create the file. When you've got 'em, it's time to _use_ 'em.

Create a file called `scripts/gymnastics.js` and use the following incantation to get your cached API data into the file (again replacing `USERNAME`):

```javascript
var events = require('../apis/github/users/USERNAME/events.json'); // Replace USERNAME!
```

Next, use the methods of `Array` that you've documented to uncover some statistics about your progress. You can create as many functions as you like to help you derive the answers, but place the final invocations (not just the values) into a function called `answers` that returns the following:

```javascript
{
  'total': ...,    // How many total events did you fetch?
  'PushEvent': {
    'total': ...,  // How many total events of type `PushEvent` are there?
    'perDay': ...  // On average, how many`PushEvent` entries per day?
  },
  'other': {
    'total': ...,  // How many _other_ events are in the data?
    'perDay': ...  // How many per day, on average?
  }
}
```

## Additional Resources
