var rockPaperPermutation = function(roundCount){
  var plays = ['r', 'p', 's'];
  var results = [];
  var findPerms = function(roundCount, playedSoFar){
    if(roundCount === 0){
      return results.push(playedSoFar);
    }
    for(var i = 0; i < plays.length; i++){
      findPerms(roundCount - 1, playedSoFar + plays[i]);
    }
  };
  findPerms(roundCount, '');
  return roundCount === 0? []: results;
};

console.log(rockPaperPermutation(2));
