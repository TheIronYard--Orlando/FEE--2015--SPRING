angular.module('chessboard', [ ])
  .controller('MainController', function(){
    this.ranks = '87654321';
    this.files = 'ABCDEFGH';

    this.board = board();

    this.classFor = classFor;

    this.moveRook = function(){
      this.board[7][0] = this.board[0][0];
      this.board[0][0] = ' ';
    }; // END moveRook()
  }) // END controller(MainController)
; // END module(chessboard)

function board(){
  return [
    ['R','N','B','Q','K','B','N','R'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p','p','p','p','p','p','p'],
    ['r','n','b','q','k','b','n','r'],
  ];
}

function classFor(piece){
  if ( piece === 'R' ){
    return 'piece black rook';
  }
  if ( piece === 'N' ){
    return 'piece black knight';
  }
  if ( piece === 'B' ){
    return 'piece black bishop';
  }
  if ( piece === 'Q' ){
    return 'piece black queen';
  }
  if ( piece === 'K' ){
    return 'piece black king';
  }
}
