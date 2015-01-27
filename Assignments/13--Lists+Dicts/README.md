# 13 -- Of Lists and Dictionaries

## Description

Coming off the weekend, you should be sick of typing `if`, `else`, and `return`, so let's try out our new `Array` and `Object` literals on those mean ole **String Calculator** and **Check Writing** katas. Before we do, though, **Take a Picture** of your logic for practice. You'll need to learn some more `Array` methods before we prep the floor for some **API Gymnastics**.

### Take a Picture

Using a diagramming tool of your choice -- Google Drawings, Gliphy, OmniGraffle, photos of pen and paper -- render a _clean_ drawing of the logic in the `toEnglish` function from **Check Writing**. Save a copy of the resultant image as `docs/toEnglish.png` and commit it into your branch.

### One More Time...

Think you've mastered the **String Calculator** and **Check Writing** katas? Not by a long-shot...! Refactor your "production" (i.e. not-"test") code to use `Array` ~~and `Object`~~ literals as Lists ~~and Dictionaries per the examples below.~~

### Reading JavaScript: Array Iterators

**Highly recommended BEFORE API Gymnastics**, document the _non-experimental_ [`Array` Iteration Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods) and attempt to re-implement _at least 3_ using `Array.prototype.forEach`. **BEAST MODE**: _Also include `find` and `findIndex`._ See **Requirements** below for an example of `every()`.

### API Gymnastics: Floor Routines

Use the `curl` command to get some crazy event data from the Github API and stick it in a file called `apis/github/users/USERNAME/events.json` where `USERNAME` is _your_ Github profile name, e.g. `apis/github/users/al-the-x/events.json` for moi: `al-the-x`. Yes, you'll have to create some empty directories along the way... Remember how to do it in one step? **Hint:** _Use the funnel, Luke!_ Following the **Requirements** below, use your iterator methods to pull some numbers from the data.

## Deliverables

* _WIP Issue_ named `13 -- Lists+Dicts` with tasks _and estimates!_
* PR in `TIY-Assignments` from `feature/13--lists+dicts` to `master` with:
    * diagram of `toEnglish()` from `scripts/check-writing.js` in `docs/toEnglish.png`
    * more documentation in `docs/JS.md` for _non-experimental_ [Iteration Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods)
    * JSON file in `apis/github/users/USERNAME/events.json` (where `USERNAME` is _you_)
    * new file in `scripts/` called `gymnastics.js` with a function called `answers` that meets **Requirements**

## Requirements

### Tasks

* [ ] **Yak Shaving**
    * Create your _WIP Issue_ named `13 -- Lists + Dicts` with tasks _and estimates!_
    * Merge your PR, update your local `master`, and open a new branch: `feature/13--lists+dicts`
    * Create a new file in `apis/github/users/USERNAME/events.json` where `USERNAME` is... you get it.
    * Use [`curl`](http://curl.haxx.se/docs/manpage.html) or [Postman](http://www.getpostman.com/) to fetch [your public events from the Github API](https://developer.github.com/v3/activity/events/#list-public-events-performed-by-a-user)
    * Commit, push, and open a PR!
* [ ] **Take a Picture**
* [ ] **One More Time...**
    * [ ] Checkpoint: **String Calculator** with `if` and `return` (no `else`)
    * [ ] Checkpoint: **Check Writing** refactored to `fromEnglish()`
    * [ ] Checkpoint: **Check Writing** refactored `fromEnglish()` to use _at least one_ lookup!
    * [ ] Checkpoint: **Check Writing** with 100% `Array` lookups instead of `if`
    * [ ] Mission Complete
* [ ] **Reading JavaScript**
    * [ ] Checkpoint: Let's talk about `forEach`... a lot.
    * [ ] Checkpoint: Here's that `every()` and `some()` crowd again.
    * [ ] Checkpoint: Who needs a `filter()` anyway?
    * [ ] Checkpoint: Can I get a `map()` over here?
    * [ ] Checkpoint: I wish I could `reduce()` this assignment...
    * [ ] Checkpoint: Am I `reduceRight()`...?
    * [ ] Mission Complete!
* [ ] **API Gymnastics**
    * [ ] Checkpoint: Got me some data...
    * [ ] Checkpoint: Count it up right...
    * [ ] Checkpoint: Filtering out just the `PushEvent` entries...
    * [ ] Checkpoint: Now doing the complete opposite...
    * [ ] Checkpoint: I have all the `answers` now!
    * [ ] Mission Complete

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
function answer(){
  return {
    'total': ...,    // How many total events did you fetch?
    'PushEvent': {
      'total': ...,  // How many total events of type `PushEvent` are there?
      'perDay': ...  // On average, how many`PushEvent` entries per day?
    },
    'other': {
      'total': ...,  // How many _other_ events are in the data?
      'perDay': ...  // How many per day, on average?
    }
  };
} // END answer
```

## Additional Resources

**COMING SOON!!**
