function Player() {
  this.mark = '';
}

function Space(xCoordinate, yCoordinate, player) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.player = player;
}

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

Game.prototype.victory = function(space) {
  var sameY = this.board.spaces.filter(function(el) {
    return space.yCoordinate == el.yCoordinate;
  });
  var sameX = this.board.spaces.filter(function(el) {
    return space.xCoordinate == el.xCoordinate;
  });


  if (sameY.length === 3 && sameY[0].player == sameY[1].player && sameY[1].player == sameY[2].player) {
    console.log("entered horizontal check");
    return "Horizontal Victory"; // Horizontal check
  } else if (sameX.length === 3 && sameX[0].player == sameX[1].player && sameX[1].player == sameX[2].player) {
    console.log("entered vertical check");
    return "Vertical Victory";   // Vertical check
  } else if ((this.board.spaces[0].player == this.board.spaces[4].player && this.board.spaces[4].player == this.board.spaces[8].player)
              ||
             (this.board.spaces[2].player == this.board.spaces[4].player && this.board.spaces[4].player == this.board.spaces[6].player)) {
    return "Diagonal Victory";   // Diagonal check
  }
}

$(document).ready(function(event) {
  var counter = 1; // This counter keeps track of the player turn

  var board = new Board();
  var playerO = new Player();
  var playerX = new Player();
  var game = new Game(board, playerX, playerO);

  $(".space").click(function() {
    var fetchSpace = game.board.spaces[parseInt($(this).attr("id"))]

    if (fetchSpace.player == null) {
      if (counter % 2 === 0) {
        game.playerXTurn(parseInt($(this).attr("id")));
        $(this).text(fetchSpace.player)
        $("#victory").append("<p>" + game.victory(fetchSpace) + "</p>");
      }
      else {
        game.playerOTurn(parseInt($(this).attr("id")));
        $(this).text(fetchSpace.player)
        $("#victory").append("<p>" + game.victory(fetchSpace) + "</p>");
      }
      counter ++; // Increments player turn
    }
  });

});
