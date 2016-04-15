function firstNonRepeatedCharacter (string) {
  var stringMap = string.split('').reduce(function(letterMap, letter, index, array){
    letterMap[letter] ? letterMap[letter] += 1 : letterMap[letter] = 1;

    return letterMap;
  }, {})

  var nonRepeated = 'sorry';
  Object.keys(stringMap).some(function (letter){
    if(stringMap[letter] === 1) return nonRepeated = letter;
  });

  return nonRepeated;
}

console.log(firstNonRepeatedCharacter('ALABAMA'));
