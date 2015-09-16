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

  // var testSpace = new Space(1,2);
  // expect(testBoard.findSpace((1,2)).to.equal(testSpace);
});
