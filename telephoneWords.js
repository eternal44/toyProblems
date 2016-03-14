function telephoneWords (digitString) {
  var result = '';
  var size = digitString.length;
  var padMap = {
    1 : [1],
    2 : ['a', 'b', 'c'],
    3 : ['d', 'e', 'f'],
    4 : ['g', 'h', 'i'],
    5 : ['j', 'k', 'l'],
    6 : ['m', 'n', 'o'],
    7 : ['p', 'q', 'r', 's'],
    8 : ['t', 'u', 'v'],
    9 : ['w', 'x', 'y', 'z'],
    0 : [0]
  };

  // like rock paper scissors

  // get all values of one digit
  var letterMap = function(digit){
    for (var i in padMap[digit]){
      result += padMap[digit][i];
    }
  };
  // for (var j = 0; j < digitString.length; j++){
  //   letterMap(digitString[j]);
  // }
  // recurse over the rest of the number
  letterMap(3);
  return result;
}

console.log(telephoneWords("0002"));//[ "000A", "000B", "000C" ]
// console.log(telephoneWords("1123"));//[ "digitString11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]
