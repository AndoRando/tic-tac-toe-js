function Player(mark) {
  this.mark = mark;
}

function Space(xCoordinate, yCoordinate, player) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.player = player;
}

Space.prototype.setMark = function(player) {
  this.player = player.mark;
}

function Board() {
  this.spaces = [];

  for (var y = 1; y < 4; y++) {
    for (var x = 1; x < 4; x++) {
      (this.spaces).push(new Space(x, y));
    };
  };
};

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

    // splitId = this.id.split(",");
    // var space = new Space(parseInt(splitId[0]),parseInt(splitId[1]));


      // Player 1
      console.log(counter);
      if(counter % 2 === 0) {
        $(this).addClass('canvas-color-2');
      }
      // Player 2
      else {
        $(this).addClass('canvas-color-1');
      }
      counter ++; // Increments player turn


  });

});
