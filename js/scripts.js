function Player() {
  this.mark = '';
}

function Space(xCoordinate, yCoordinate, player) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.player = player;
}

// AB / JJ - Revisit later for second approach
//
// Space.prototype.setMark = function(player) {
//   this.player = player.mark;
// }

function Board() {
  this.spaces = [];

  for (var y = 1; y < 4; y++) {
    for (var x = 1; x < 4; x++) {
      this.spaces.push(new Space(x, y));
    };
  };
}

function Game(board, playerX, playerO) {
  this.board = board;
  this.playerX = playerX;
  this.playerX.mark = "X";
  this.playerO = playerO;
  this.playerX.mark = "O";
}

Game.prototype.playerXTurn = function(space) {
  this.board.spaces[space].player = "X";
}

Game.prototype.playerOTurn = function(space) {
  this.board.spaces[space].player = "O";
}

// check board, if 3 marks all have matching xCoordinates or matching yCoordinates or matching xCoordiantes and yCoordinates, then player wins

$(document).ready(function(event) {
  var counter = 1; // This counter keeps track of the player turn

  var board = new Board();
  var playerO = new Player();
  var playerX = new Player();
  var game = new Game(board, playerX, playerO);

  $(".space").click(function() {
    console.log(parseInt($(this).attr("id")));
    if (game.board.spaces[parseInt($(this).attr("id"))].player == null) {
      if (counter % 2 === 0) {
        game.playerXTurn(parseInt($(this).attr("id")));
        $(this).text(game.board.spaces[parseInt($(this).attr("id"))].player)
      }
      else {
        game.playerOTurn(parseInt($(this).attr("id")));
        $(this).text(game.board.spaces[parseInt($(this).attr("id"))].player)
      }
      counter ++; // Increments player turn
    } else {
      console.log("Space already marked");
      console.log(counter);
    }


  });
});
