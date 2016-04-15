function mergeSort(arr){
  if (arr.length === 1) return arr;

  var left = arr.slice(0, Math.floor(arr.length / 2 ));
  var right = arr.slice(Math.floor(arr.length / 2 ));

  return merge(mergeSort(left), mergeSort(right));
}

function merge(arr1, arr2){
  var result = [];
  var i = 0;
  var j = 0;

  while(i < arr1.length && j < arr2.length){
    result.push( arr1[i] < arr2[j] ? arr1[i++] : arr2[j++] );
  }
  return i < arr1.length ? result.concat(arr1.slice(i)) : result.concat(arr2.slice(j));
}

console.log(mergeSort([8,7,3,6,9,2,4,5,1]))
console.log(mergeSort([8]))
