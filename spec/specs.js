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
});
