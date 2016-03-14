function sumArray (array) {
  // storage array
  var storageArray = [];

  // loop through each index for a starting point
  for(var i = 0; i < array.length; i++){
    // calc the sum of each consecutive index and push to the sum storage array
    var contiguousSum = 0;
    for (var j = i; j < array.length; j++){
      // from that starting point iterate to the end of the array
      contiguousSum += array[j];
      storageArray.push(contiguousSum);
    }
  }

  var largestSum = -99999999999999999999999999;
  for(var k = 0; k < storageArray.length; k++){
    if(storageArray[k] > largestSum) largestSum = storageArray[k];
  }
  // return max in the sum storage array
  return largestSum;
}

console.log(sumArray([ 1, 2, 3 ]))//6
console.log(sumArray([ 4, -1, 5 ]))//8
console.log(sumArray([ 10, -11, 11 ]))//11
console.log(sumArray([ 1, 2, 3, -6, 4, 5, 6 ]))//15
console.log(sumArray([1,2,3,-4,5,-4,5,-4,-4]))// 8
