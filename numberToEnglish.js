function numberToEnglish (number) {
  var splitNum = number.toString().split('');

  // -break number into subsets of 3 digits
  var placeArray = [];
  while(splitNum.length > 3){
    placeArray.unshift(splitNum.splice(splitNum.length-3));
  }
  placeArray.unshift(splitNum);

  var onesMap = {
    '1' : 'one',
    '2' : 'two',
    '3' : 'three',
    '4' : 'four',
    '5' : 'five',
    '6' : 'six',
    '7' : 'seven',
    '8' : 'eight',
    '9' : 'nine',
  }

  var teensMap = {
    '1' : 'eleven',
    '2' : 'twelve',
    '3' : 'thirteen',
    '4' : 'fourteen',
    '5' : 'fifteen',
    '6' : 'sixteen',
    '7' : 'seventeen',
    '8' : 'eighteen',
    '9' : 'nineteen',
  }

  var tensMap = {
    '2' : 'twenty',
    '3' : 'thirty'
  }

  // -make function to transcribe subsets
  var transcribe = function(subset){
    var numLength = subset.length;

    var oneDigitTranscribe = function(subset){
      return onesMap[subset[0]]
    };

    // handling 2 digit cases
    var twoDigitsTranscribe = function(subset){
      if(subset[0] === '1'){
        return teensMap[subset[1]];
      } else if(subset[0] > 3) {
        return onesMap[subset[0]] + 'ty' + '-' + onesMap[subset[1]];
      } else {
        return tensMap[subset[0]] + '-' + onesMap[subset[1]];
      }
    }

    // handling 3 digit cases
    var threeDigitsTranscribe = function(subset){
      return onesMap[subset[0]] + ' hundred';
    }

    // transcribing
    if(numLength ===1){
      return oneDigitTranscribe(subset);
    }
    if(numLength === 2){
      return twoDigitsTranscribe(subset);
    }
    if(numLength === 3){
      var arrayMachine = [];
      var slicedArr = subset.slice(1);

      return (threeDigitsTranscribe(subset) +  ' ' + twoDigitsTranscribe(slicedArr));
    }
  }

  var subsetMap = {
    0 : '',
    1 : 'thousand',
    2 : 'million'
  }

  //   - concat the transcribed number to results string
  var transcribedResult = '';
  var subsetCount = placeArray.length;

  for(var x = 0; x < placeArray.length; x++){
    subsetCount--;
    transcribedResult += transcribe(placeArray[x]) + ' ' + subsetMap[subsetCount] + ' ';
  }

  return transcribedResult;
}
console.log(numberToEnglish(7));//"seven"
console.log(numberToEnglish(12));//"seven"
console.log(numberToEnglish(77));//"seventy seven"
console.log(numberToEnglish(26));//"seventy seven"
console.log(numberToEnglish(575));//"five hundred seventy-five"
console.log(numberToEnglish(78193512));//"seventy-eight million one hundred ninety-three thousand five hundredndred twelve"
