# 14 -- Hello Lodash

## Description

### Coding Dojo

If you haven't finished the **Check Writing** refactor with `Array` lookup from last night, complete that.If you _have_, delete your production code and start over. Then continue with that kata up to `20`. It should be significantly easier with lookups than it was with those `if`+`return` blocks. Now the only tedious part is writing the tests! How can we improve that?

Using what we covered in class today about `Object` literals and dictionary lookups, _refactor_ your production code to use a dictionary instead of all those `if`+`returns`... If you don't have full test coverage up to `plus("ten", "ten")`, catch up!

### Reading JavaScript: Lodash Edition

[The Lodash library](http://lodash.com/) provides a number of methods that appear to be duplicates of [the built-in `Array` methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_of_array_instances). Document them using the format in **Requirements** and specifically note the differences from the built-ins. Additionally, document the following, which we'll use a lot:

* [`_.reject`](http://lodash.com/docs#reject)
* [`_.where`](http://lodash.com/docs#where)

### API Gymnastics

Update your `events.json` file from the API using `curl`, Postman, a Chrome tab... whatever. Then filter the results to provide the following data:

```javascript
function answer(){
  return {
    'total': ... // `Number` of total entries
    'types': [ ... ], // `Array` of `String`: unique type names across all entries
    'dates': [ ... ], // `Array` of `String`: unique dates across all entries
    'PushEvent': { // Results for "PushEvent"
      'dates': [ ... ], // `Array` of `String`: unique dates across all entries
      'total': ..., // `Number` of "PushEvent" entries
      'perDay': { // breakdown by day...
        'avg': ..., // `Number` average per day
        'max': ..., // `Number` maximum per day
        'min': ... // `Number` minimum per day
      }
    } // END PushEvent
  }; // END return
} // END answer
```

#### BEAST MODE

There are more events in that data than just the `PushEvent` entries. Collect the same stats for each of the other types that you did for `PushEvent`.

#### NIGHTMARE MODE

The data returned by `/users/:username/events/public` is [_paginated_](https://developer.github.com/v3/#pagination) by the API. How much data can you fetch? _Gotta fetch 'em all!_

### A Better Chessboard



## Deliverables

## Requirements

### Tasks

### Format for _Reading JavaScript: Lodash_

---
### [`_.every`](http://lodash.com/docs#every)

* _params:_
* _returns:_
* _differences:_ ???
---

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
