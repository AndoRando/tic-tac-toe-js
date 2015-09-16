describe('Player', function() {

  it('returns a players mark', function() {
    var testPlayer = new Player('X');
    expect(testPlayer.mark).to.equal('X');
  });
});
