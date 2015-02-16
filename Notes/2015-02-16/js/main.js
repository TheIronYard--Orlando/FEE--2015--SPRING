var chessboard = new Vue({
  el: '#chessboard',
  data: {
    ranks: '87654321',
    files: 'ABCDEFGH',
    board: board()
  },
  methods: {
    classFor: classFor
  }
});

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


setTimeout(function(){
    var newBoard = board();

    newBoard[7][0] = newBoard[0][0];
    newBoard[0][0] = ' ';

    console.log(newBoard.join('\n'));

    chessboard.board = newBoard;
}, 5000);
