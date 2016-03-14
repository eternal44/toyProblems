function characterFrequency (string) {
  var charCount = {};
  for(var i=0; i < string.length; i++){
    (charCount[string[i]]++) || (charCount[string[i]] = 1)
  }

  var charArray = [];
  for(var count in charCount){
    charArray.push([count, charCount[count]]);
  }

  var charSort = function(array){
    array.sort(function(a,b){
      // return b[1] - a[1]; // my previous code
      if (a[1] > b[1]) return -1;
      else if(a[1] < b[1]) return 1;
      else if(a[0] < b[0]) return -1;
      else if(a[0] > b[0]) return 1;
    })
    return array;
  };

  // split array by count
  // sort split array by alphabetic order
    // reuse charSort with different index
  // join arrays

  return charSort(charArray);
}

console.log(characterFrequency("aaabbc"))//[ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
console.log(characterFrequency("mississippi"))//[ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
console.log(characterFrequency(""))//[ ]string

// results are currently not in alphabetic order within a character count subsection
console.log(characterFrequency("supercalifragilisticexpialidocious"));
