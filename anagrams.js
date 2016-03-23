function allAnagrams (string) {
  var splitStr = string.split('');
  var strLength = splitStr.length;
  var results = [];

  var perm = function(roundCount, playedSoFar){
    if(roundCount === 0){
      return results.push(playedSoFar)
    }
    for(var i = 0; i < strLength; i++){
      perm(roundCount - 1, playedSoFar + splitStr[i])
    }
  }
  perm(strLength, '')

  return results;
}

console.log(allAnagrams('abc'));
