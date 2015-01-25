describe("getWinner()", function() {
  var playerMove;
  describe("when the player picks rock", function() {
    expect(getWinner(playerMove,'rock')).toEqual('tie');
    expect(getWinner(playerMove,'paper')).toEqual('computer');
    expect(getWinner(playerMove,'scissors')).toEqual('player');
  });
  describe("when the player picks paper", function() {
    expect(getWinner(playerMove,'rock')).toEqual('player');
    expect(getWinner(playerMove,'paper')).toEqual('tie');
    expect(getWinner(playerMove,'scissors')).toEqual('computer');
  });
  describe("when the player picks scissors", function() {
    expect(getWinner(playerMove,'rock')).toEqual('computer');
    expect(getWinner(playerMove,'paper')).toEqual('player');
    expect(getWinner(playerMove,'scissors')).toEqual('tie');
  });

});
