(function() {

    angular.module('chessboard', [])
        .factory('Chess', function() {
            return {
                board: [
                    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
                    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
                    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
                    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
                ],
                currentMove: 0,
                nextMove: function() {
                    var move = this.moves[this.currentMove];

                    this.movePiece(move.from, move.to);

                    console.log(this.board.join('\n'));

                    if (this.currentMove < this.moves.length) {
                        this.currentMove++;
                    }
                },
                movePiece: function(from, to) {
                    this.board[to[0]][to[1]] = this.board[from[0]][from[1]];
                    this.board[from[0]][from[1]] = ' ';
                },
                moves: [
                    // Move QRP (7A) +2 (5A)
                    { from: [1, 0], to: [3, 0] },

                    // Move qrp (2A) +1 (3A)
                    { from: [6, 0], to: [5, 0] },

                    // TODO: Use "H7" instead of [1, 7]...?
                    { from: [1, 7], to: [3, 7] }
                ]
            } // END return
        }) // END factory(Board)
        .controller('BoardController', [ 'Chess', function(Chess) {
            this.ranks = '87654321';

            this.files = 'ABCDEFGH';

            this.rows = Chess.board;

            this.classFor = function classFor(piece) {
                var pieces = {
                    'R': 'black rook',
                    'N': 'black knight',
                    'B': 'black bishop',
                    'Q': 'black queen',
                    'K': 'black king',
                    'P': 'black pawn',

                    'r': 'white rook',
                    'n': 'white knight',
                    'b': 'white bishop',
                    'q': 'white queen',
                    'k': 'white king',
                    'p': 'white pawn'
                };

                if (pieces[piece])
                    return 'piece ' + pieces[piece];
            } // END classFor
        } ])
        .controller('MoveController', [ 'Chess', function(Chess) {
            this.next = function(){
                Chess.nextMove();
            };
        } ]); // END module(chessboard)
})();
