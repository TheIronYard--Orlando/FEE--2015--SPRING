# 14 -- Hello Lodash

## Description

* Reading JS: Lodash vs Array Methods
  * [`_.slice`](http://lodash.com/docs#slice)
  * [`_.every`](http://lodash.com/docs#every)
  * [`_.some`](http://lodash.com/docs#some)
  * [`_.filter`](http://lodash.com/docs#filter)
  * [`_.reject`](http://lodash.com/docs#reject)
  * [`_.where`](http://lodash.com/docs#where)
  * etc
* Coding Dojo: Check Writing + Array
  * Rewrite production code, continue to 20
* Coding Dojo: String Calculator + Dicts
  * Refactor production code, use dict lookup
* API Gymnastics
* Chessboard + Lodash Templates

## Deliverables

## Requirements

### Tasks

### API Gymnastics

update `events.json`
```javascript
function answer(){
  return {
    'total': ... // Number of entries
    'types': [ ... ], // Array of String unique type names in all entries
    'PushEvent': { // Results for "PushEvent"
      'total': ..., // Number of "PushEvent" entries
      'perDay': { // breakdown by day...
        'avg': ..., // Number average per day
        'max': ..., // Number maximum per day
        'min': ..., // Number minimum per day
      },
    },
    // BEAST MODE: Calculate stats for each event type as per "PushEvent"
    'EVENT-TYPE': { ... }
  };
}
```

#### BEAST MODE

The data returned by `/users/:username/events/public` is [_paginated_](https://developer.github.com/v3/#pagination) by the API. How much data can you fetch? _Gotta fetch 'em all!_

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
