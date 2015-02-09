# 21 -- Night of the Living Chessboard

## Description

We're starting to focus less on single widgets and more on full-blown applications. As a baby-step in that direction, you're taking Ye Olde Chessboard to the next level. But first, we have to _raise it from the dead!_

### Night of the Living Chessboard, Part 1

Use [`git log`](http://git-scm.com/docs/git-log) to [hunt down the last commit](http://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History) to _your_ chessboard, _not_ the `TIY-Chessboard` that we did in pairs. Then use `git checkout` to _resurrect it to new, unholy life!_ If you find that it's missing some pieces, you're not crazy. I bet your jQuery Fu can take care of that.

### Attack of the Killer Prototypes

**NOTE:** _This assignment is due on Wednesday._

Using the documentation that we developed in class -- User Stories, Data Model, Feature Plan, Estimates -- build out and test the Constructors and Prototypes. Then refactor your chessboard to use _those_ instead of the literals and loose functions.

Your `Game` should have an internal list of moves, an `Array` of `Function` items that advance the state of the `Board` when invoked. Start with the [original move list](http://j.mp/1BSJj9W) but expand it to include [this slightly gory mid-game](http://j.mp/1zBsDGo), which has [captures](http://j.mp/1zBtaYR) and [castling](http://j.mp/1zBtdUO).

#### BEAST MODE

Chess is a sport! It has players _and a score!_ In it's simplest form, you can just add up [the point values for each piece](http://en.wikipedia.org/wiki/Chess_piece_relative_value) at the end of each turn:

|          | piece   | value   |
|----------|---------|---------|
| &#x265f; | pawn    | 1       |
| &#x265e; | knight  | 3       |
| &#x265d; | bishop  | 3       |
| &#x265c; | rook    | 5       |
| &#x265b; | queen   | 9       |

You should do that. Your `Game` class needs a `players()` method that returns an `Object` with two properties -- `white` and `black` -- that contain the `Number` score for each player.

### JavaScript is Fun!

You don't believe me? Try checking out [The Colour Clock](http://thecolourclock.co.uk) for inspiration. Can't you do the same... or better? You'll need to read about [the `setInterval()` browser API](http://en.wikipedia.org/wiki/Chess_piece_relative_value) and [the `Date` type in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) (I swear we've seen that before somewhere). Peeking at the source code for the reference implementation might help, too.

### Additional Practice as Necessary

If you're looking to brush up for the rest of the week, doing some **API Gymnastics** or tackling [another Project Euler problem](http://projecteuler.net/problems) would be a good start. If you're really brave, check out [Code Wars](http://codewars.com) for some daily warm-ups.

## Additional Resources

* [_Glossary of Chess_ on Wikipedia](http://en.wikipedia.org/wiki/Glossary_of_chess)
  * [_Middlegame_ (in-depth)](http://en.wikipedia.org/wiki/Chess_middlegame)
  * [_Castling_ (in-depth)](http://en.wikipedia.org/wiki/Castling)
  * [_En Passant_ (in-depth)](http://en.wikipedia.org/wiki/En_passant)
  * [_Piece Values_](http://en.wikipedia.org/wiki/Chess_piece_relative_value)

