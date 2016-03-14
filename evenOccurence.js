function evenOccurence (arr) {
  var occurenceMap = {};
  for(var i = 0; i < arr.length; i++){
    occurenceMap[arr[i]] === undefined ? occurenceMap[arr[i]] = 1 : occurenceMap[arr[i]] += 1;
  }

  var lastOccurence;

  for(var i = 0; i < arr.length; i++){
    if(occurenceMap[arr[i]] % 2 === 0){
      return lastOccurence = arr[i];
    }
  }
  return lastOccurence;
}

var arr1 = [ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]
var arr2 = [ "cat", "dog", "dig", "cat" ]
var arr3 = ["doublerainbow", "grumpycat", "grumpycat", "doublerainbow"];
console.log(evenOccurence(arr3));
