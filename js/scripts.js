function Player(mark) {
  this.mark = mark;
}

function Space(xCoordinate, yCoordinate) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.player = null;
}

Space.prototype.setMark = function(player) {
  this.player = player;
}

Space.prototype.markedBy = function() {
  return this.player;
}

function Board() {
  this.board = [ (0, 2), (1, 2), (2, 2), (0, 1), (1, 1), (2, 1), (0, 0), (1, 0), (2, 0) ];

}

Board.prototype.findSpace = function (space) {
   for( var i = 0; i < this.board.length; i++ ) {
     if ( this.board[i] === (space.xCoordinate, space.yCoordinate) )
       return space;
   }

}

function Game(board, player1, player2) {
  this.board = board;
  this.player1 = player1;
  this.player2 = player2;


}


// for(var i = 0; i <= 3; i++){
//   if(0,i)
// }

// check board, if 3 marks all have matching xCoordinates or matching yCoordinates or matching xCoordiantes and yCoordinates, then player wins

$(document).ready(function(event) {


  $("canvas.boxes").click(function() {
    
    // event.preventDefault();
    $(this).addClass('canvas-color-2');

  });

});
