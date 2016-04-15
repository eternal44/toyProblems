var bubbleSort = function(array){
  var arrayCopy = Array.prototype.slice.call(array);
  var sort = true;

  while(sort){
    sort = false;
    arrayCopy.forEach(function(item, index, collection){
      if(collection[index] > collection[index + 1]) {
        var temp = collection[index];
        collection[index] = collection[index + 1];
        collection[index + 1] = temp;
        sort = true;
      }
    })
  }
  return arrayCopy;
}

console.log(bubbleSort([18, 30, 25, 28, 24, 19, 31, 20, 35, 24, 36, 26, 30, 29, 40, 36]))
