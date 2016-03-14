function reverseString(string){
  var strLength = string.length;
  var midPoint = Math.ceil(strLength / 2);
  var splitStr = string.split('');

  for(var i = 0; i < midPoint; i++){
    var inverseIndex = strLength - 1 - i;
    var temp = splitStr[i];

    splitStr[i] = splitStr[inverseIndex];
    splitStr[inverseIndex] = temp;
  }

  return splitStr.join('');
}

console.log(reverseString('parameter'));
console.log(reverseString('mississippi'));
