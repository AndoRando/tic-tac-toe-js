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




// check board, if 3 marks all have matching xCoordinates or matching yCoordinates or matching xCoordiantes and yCoordinates, then player wins

$(document).ready(function(event) {
  var counter = 1; // This counter keeps track of the player turn

  $("canvas.boxes").click(function() {
    // event.preventDefault();

    splitId = this.id.split(",");
    var space = new Space(parseInt(splitId[0]),parseInt(splitId[1]));


      //Player 1
      console.log(counter);
      if(counter % 2 === 0) {
        $(this).addClass('canvas-color-2');
      }
      //Player 2
      else {
        debugger
        $(this).addClass('canvas-color-1');
      }
      counter ++; // Increments player turn


  });

});
