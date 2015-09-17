describe('Player', function() {
  it('returns a players mark', function() {
    var testPlayer = new Player();
    testPlayer.mark = "X";
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
    var testPlayer = new Player();
    testPlayer.mark = "X"; // {mark: 'X'}
    var testSpace = new Space(1,2); // {xCoordinate: 1, yCoordinate: 2, player: null}
    testSpace.setMark(testPlayer); // {xCoordinate: 1, yCoordinate: 2, player: 'X'}
    expect(testSpace.player).to.equal('X');
  });
});

describe('Board', function() {
  it ('creates a board object constructed of nine spaces with specific coordinates', function() {
    var testBoard = new Board();
    expect(testBoard.spaces[5].xCoordinate).to.eql(3);
  });

describe('Game', function() {
  it('create a game object that includes a board and two players', function() {
    var testBoard = new Board();
    var testPlayerX = new Player();
    var testPlayerO = new Player();
    var testGame = new Game(testBoard, testPlayerX, testPlayerO);
    expect(testGame.board.spaces[5].xCoordinate,testGame.playerX.mark, testGame.playerO.mark).to.equal(3, "X", "O");
  });
});
  // it('creates 9 spaces when it is initialized', function() {
  //   var testBoard = new Board();
  //   expect(testBoard.board).to.eql([(0,2), (1,2), (2,2), (0,1), (1,1), (2,1), (0,0), (1,0), (2,0)]);
  // });
  //
  // it("finds a specific space on the board", function()  {
  //   var testBoard = new Board();
  //   var testSpace = new Space(1,2);
  //
  //   expect(testBoard.findSpace(testSpace)).to.equal(testSpace);
  // });
  //
  // it("returns the player property for a Space", function()  {
  //   var testBoard = new Board();
  //   var testSpace = new Space(1,2);
  //   expect(testBoard.findSpace(testSpace).markedBy()).to.equal(null);
  // });
});
