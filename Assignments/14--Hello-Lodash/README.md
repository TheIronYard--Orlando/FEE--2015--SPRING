# 14 -- Hello... Wait.

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

## Additional Resources

* [_Abstract Data Types_ on Wikipedia](http://en.wikipedia.org/wiki/Abstract_data_type)
  * [_Dictionary_ data type on Wikipedia](http://en.wikipedia.org/wiki/Associative_array)
  * [_List_ data type on Wikipedia](http://en.wikipedia.org/wiki/List_%28abstract_data_type%29)
  * [_Queue_ data type on Wikipedia](http://en.wikipedia.org/wiki/Queue_(abstract_data_type))
  * [_Stack_ data type on Wikipedia](http://en.wikipedia.org/wiki/Stack_(abstract_data_type))

