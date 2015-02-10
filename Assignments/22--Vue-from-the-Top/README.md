# 22 -- Vue from the Top

## Description

Using a [_declarative interface_](http://en.wikipedia.org/wiki/Declarative_programming) like [Vue JS](http://vuejs.org) seems a _lot_ more powerful than having to write all those transformations by hand. If you give it a whirl tonight on that Chessboard, you'll need a data model to bind the view elements to... see below.

### Attack of the Killer Prototypes

In `scripts/pieces.js`, implement the `Piece` Constructor and its Prototype according to the following specifications:

```javascript
/**
 * @constructor Piece
 * @param String color of Piece: "white" or "black"
 * @param String name of Piece, e.g. "queen", "rook", "knight"
 * @param String position of Piece, e.g. "a7", "d8"
 *
 * @method position
 * @returns String current position, e.g. "a8", "f3"
 *
 * @method color
 * @returns String color of Piece: "white" or "black"
 *
 * @method name
 * @returns String name of Piece, e.g. "queen", "rook", "knight"
 *
 * @method abbrev
 * @returns String abbreviation of Piece, e.g. "white queen" == 'q'
 *
 * @method toString()
 * @return String for printing / debugging, e.g. "black queen d8"
 *
 * @method toHTML()
 * @return String HTML entity, e.g. "black knight" == "&#x265e"
 *
 * @method toUTF8()
 * @return String UTF8 character, e.g. "black knight" == "\u265e"
 */
function Piece(color, name, position){
  // Constructor
}

Piece.prototype = {
} // END Piece.prototype
```

Include tests that cover all the possible input values for `color` and `name` and some various starting positions... Maybe even some incorrect ones!

Next, extend `Piece` into the following sub-types:

* `Pawn(color, position)`
* `Knight(color, queenside)`
* `Bishop(color, queenside)`
* `Rook(color, queenside)`
* `Queen(color)`
* `King(color)`

Where `color` and `position` are `String` as in `Piece` and `queenside` is a `Boolean` value indicating whether the `position` of the `Piece` belongs on the Queen's side of the board initially. For `Queen` and `King`, the initial `position` should be determined by `color` provided to those Constructors, since their positions are fixed.

_Without deleting your tests for `Piece`_, write tests that cover the `Piece` methods on each of the sub-types.

### Night of the Living Chessboard, Part 2

Have you got your Chessboard working with jQuery yet? Maybe some data modeling would help:

```javascript
/**
 * @constructor Board
 *
 * @method move(start, end) -- move `Piece` from `start` to `end`
 * @param String start position, e.g. "a7"
 * @param String end position, e.g. "a5"
 *
 * @method capture(position) -- capture `Piece` at `position`
 * @param String position of captured `Piece`, e.g. "d8"
 *
 * @method castle(rook) -- perform a castle maneuver
 * @param Boolean rook position to castle from
 * @uses move on `Rook` and `King` in one turn
 *
 * @method pieceAt(position) -- retrieve `Piece` at `position` or `null` if empty
 * @param String position to inspect, e.g. "a2", "c5"
 * @returns Piece|null if {row, col} is empty
 *
 * @method toString() -- simple representation of Board for debugging
 *
 * @method toArray() -- probably unnecssary
 */
function Board(){
  // Constructor
}

Board.prototype = {
} // END Board.prototype
```

#### BEAST MODE

Looking for more of a challenge, huh? Well, here you go. Implement _this_ bad boy:

```javascript
/**
 * @constructor Game
 * @param Function Board to represent game state
 *
 * @property Array[Function] _moves to apply
 * @property Number _move index of _moves to apply next
 *
 * @method reset() -- reset the game state
 *
 * @method next() -- apply the next move in the list
 *
 * @method end() -- apply all remaining moves
 *
 * @method score() -- return the score for both colors
 * @returns Object { "white": Number, "black": Number }
 *
 * @method pieceAt(position) -- retrieve `Piece` at `position` or `null` if empty
 * @return Piece|null
 *
 * @method toString() -- simple representation of Game state for debugging
 */
function Game(Board){
  // Constructor
}

Game.prototype = {
} // END Game.prototype
```

## Requirements

* _WIP Issue:_ `22 -- Vue from the Top`
* _WIP Branch:_ `feature/22--vue-from-the-top`
* _WIP Files:_
  * **Attack of the Killer Prototypes**
    * `scripts/pieces.js`
  * **Night of the Living Chessboard**
    * `pub/index.html`
    * `pub/js/main.js`
    * `pub/css/main.scss`
    * `pub/css/main.css`

## Additional Resources

* [Sass Compatibility Table](http://sass-compatibility.github.io/)

