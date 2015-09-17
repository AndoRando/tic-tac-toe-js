describe('Player', function() {
  it('returns a players mark', function() {
    var testPlayer = new Player('X');
    expect(testPlayer.mark).to.equal('X');
  });
});

describe('Space', function() {

  it('returns it\'s x-coordinate', function() {
    var testSpace = new Space(1, 2);
    expect (testSpace.xCoordinate).to.equal(1);
  });

  it('returns it\'s y-coordinate', function() {
    var testSpace = new Space(1, 2);
    expect (testSpace.yCoordinate).to.equal(2);
  });

  it('lets a player mark a space and returns the player', function() {
    var testPlayer = new Player('X');
    var testSpace = new Space(1,2);
    testSpace.setMark(testPlayer);
    expect(testSpace.markedBy()).to.equal(testPlayer);
  });
});

describe('Board', function() {
  it('creates 9 spaces when it is initialized', function() {
    var testBoard = new Board();
    expect(testBoard.board).to.eql([(0,2), (1,2), (2,2), (0,1), (1,1), (2,1), (0,0), (1,0), (2,0)]);
  });

  it("finds a specific space on the board", function()  {
    var testBoard = new Board();
    var testSpace = new Space(1,2);

    expect(testBoard.findSpace(testSpace)).to.equal(testSpace);
  });

  it("returns the player property for a Space", function()  {
    var testBoard = new Board();
    var testSpace = new Space(1,2);
    expect(testBoard.findSpace(testSpace).markedBy()).to.equal(null);
  });
});

describe('Game', function() {
  it('creates 1 board', function() {
    var testBoard = new Board();
    var testPlayer1 = new Player("X");
    var testPlayer2 = new Player("O");
    var testGame = new Game(testBoard, testPlayer1, testPlayer2);
    expect(testGame.board, testGame.player1, testGame.player2).to.equal(testBoard, testPlayer1, testPlayer2);
  });
});
