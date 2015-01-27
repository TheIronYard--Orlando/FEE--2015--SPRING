# 14 -- Hello... Well, almost Lodash.

## Description

### Coding Dojos

If you haven't completed your **Check Writing** kata refactored to `Array` lookup or your tests are still commented out, fix that first! If you've already completed that refactor, work your way up to `20`... then help the others get there.

Using the technique that I showed you in class, refactor your production code for **String Calculator** to use dictionary lookups. Make sure you've got tests for `"zero"` through `"ten"` for _both_ inputs and that _all_ the tests pass!

### API Gymnastics

So here we are again, learning to roll and flip. Don't hurt yourself and work as a team!

```javascript
function answer(){
  return {
    'total': ...,    // How many total events did you fetch?
    'PushEvent': {
      'total': ...,  // How many total events of type `PushEvent` are there?
      'perDay': ...  // On average, how many `PushEvent` entries per day?
    },
    'other': {
      'total': ...,  // How many _other_ events are in the data?
      'perDay': ...  // How many per day, on average?
    }
  };
} // END answer
```

Output your answers and paste them as a comment into your _WIP Issue_.  Then, update your `events.json` file with fresh data and run your code again. Then start working on _this_ set of answers:

```javascript
function answer(){
  return {
    'total': ... // `Number` of unique entries
    'types': [ ... ], // `Array` of `String`: unique type names across all entries
    'EVENT_TYPE': { // Results for each `EVENT_TYPE`, e.g. `"PushEvent"`
      'total': ..., // `Number` of entries of this type
      'perDay': { // breakdown by day...
        'avg': ..., // `Number`: average per day
        'max': ..., // `Number`: maximum per day
        'min': ..., // `Number`: minimum per day
      },
    },
    // . . .
  };
}
```

#### NIGHTMARE MODE

The data returned by `/users/:username/events/public` is [_paginated_](https://developer.github.com/v3/#pagination) by the API. How much data can you fetch? _Gotta fetch 'em all!_

### Tools on... Tomorrow

Tomorrow we'll review [the Lodash library](http://lodash.com) and cover our new tools.

## Deliverables

* _WIP Issue:_ `14 -- Almost Lodash` with:
  * link to your PR from your _WIP Branch_ to `master`
  * comment with at least two `answer()` results from `scripts/gymnastics.js`
* _WIP Branch:_ `feature/14--almost-lodash` with:
  * `scripts/check-writing.js`
    * using array lookups instead of `if`-`return` chains
    * tests covering up to `20`
  * `scripts/string-calculator.js`
    * using dictionary lookups instead of `if`-`return` chains
    * tests covering from `plus("zero", "zero")` to `plus("ten", "ten")`
  * commits to `scripts/gymnastics.js`
  * commits to `apis/github/users/USERNAME/events.json`
* PR in `TIY-Assignments` from `feature/14--almost-lodash` to `master`
  * with 2x :+1:'s from peers

## Additional Resources

* [_Abstract Data Types_ on Wikipedia](http://en.wikipedia.org/wiki/Abstract_data_type)
  * [_Dictionary_ data type on Wikipedia](http://en.wikipedia.org/wiki/Associative_array)
  * [_List_ data type on Wikipedia](http://en.wikipedia.org/wiki/List_%28abstract_data_type%29)
  * [_Queue_ data type on Wikipedia](http://en.wikipedia.org/wiki/Queue_(abstract_data_type))
  * [_Stack_ data type on Wikipedia](http://en.wikipedia.org/wiki/Stack_(abstract_data_type))
* [_Data Science_ on Wikipedia](http://en.wikipedia.org/wiki/Data_science)
* [_Getting Started with Data Science_ by Hilary Mason](http://www.hilarymason.com/blog/getting-started-with-data-science/)
