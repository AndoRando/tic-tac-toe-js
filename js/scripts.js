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


}

// function Game() {
//
//
// }
