function robotPaths (n) {
  var board = makeBoard(n);
  var numberOfPaths = 0;
  var boardEnd = n - 1;
  var bottomRightCorner = [boardEnd, boardEnd];

  var withinBoard = function(long, lat){
    return ((long + 1 >= 0) &&
            (long - 1 <= n) &&
            (lat + 1 >= 0) &&
            (lat - 1 <= n));
  }

  var possibleMoves = function(long, lat){
  }

  //traverse until we get to bottomRight
  // recurse with possibleMoves

  return withinBoard(0,7);
}

function makeBoard(n) {
  var board = []
  for (var i = 0; i < n; i++) {
    board.push([])
    for (var j = 0; j < n; j++) {
      board[i].push(false)
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j]
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j]
  }
  return board
}

console.log(robotPaths(6));
