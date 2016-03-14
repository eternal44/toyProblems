function numberToEnglish (number) {
  // import helper functions
  var maps = addMaps();
  var placeArray = arrayifyNumber(number);


  // make function to transcribe subsets
  var transcribe = function(subset){
    var numLength = subset.length;

    var transcribeOneDigit = function(subset){
      return maps.onesMap[subset[0]]
    };

    var transcribeTwoDigits = function(subset){
      var tensPlace = subset[0];
      var onesPlace = subset[1];

      if(tensPlace === '1'){
        return maps.teensMap[onesPlace];
      } else if(tensPlace > 3 && tensPlace != 8) {
        return maps.onesMap[tensPlace] + 'ty' + '-' + maps.onesMap[onesPlace];
      } else {
        return maps.tensMap[tensPlace] + '-' + maps.onesMap[onesPlace];
      }
    }

    var transcribeTreeDigits = function(subset){
      var hundredsPlace = subset[0];

      return maps.onesMap[hundredsPlace] + ' hundred';
    }

    // transcribing
    if(numLength === 1) return transcribeOneDigit(subset);
    if(numLength === 2) return transcribeTwoDigits(subset);
    if(numLength === 3){
      var arrayMachine = [];
      var slicedArr = subset.slice(1);

      return (transcribeTreeDigits(subset) +  ' ' + transcribeTwoDigits(slicedArr));
    }
  }

  // concat the transcribed number to results string
  var transcribedResult = '';
  var subsetCount = placeArray.length;

  for(var x = 0; x < placeArray.length; x++){
    subsetCount--;
    transcribedResult += transcribe(placeArray[x]) + ' ' + maps.subsetMap[subsetCount] + ' ';
  }

  return transcribedResult;
}

var arrayifyNumber = function (number){
  // break number into subsets of 3 digits
  var splitNum = number.toString().split('');
  var placeArray = [];

  while(splitNum.length > 3){
    placeArray.unshift(splitNum.splice(splitNum.length-3));
  }

  placeArray.unshift(splitNum);
  return placeArray;
}


var addMaps = function() {
  return {
    onesMap : {
      '1' : 'one',
      '2' : 'two',
      '3' : 'three',
      '4' : 'four',
      '5' : 'five',
      '6' : 'six',
      '7' : 'seven',
      '8' : 'eight',
      '9' : 'nine',
    },
    teensMap : {
      '1' : 'eleven',
      '2' : 'twelve',
      '3' : 'thirteen',
      '4' : 'fourteen',
      '5' : 'fifteen',
      '6' : 'sixteen',
      '7' : 'seventeen',
      '8' : 'eighteen',
      '9' : 'nineteen',
    },
    tensMap : {
      '2' : 'twenty',
      '3' : 'thirty',
      '8' : 'eighty'
    },
    subsetMap : {
      0 : '',
      1 : 'thousand',
      2 : 'million'
    }
  }
}

console.log(numberToEnglish(7));//"seven"
console.log(numberToEnglish(12));//"seven"
console.log(numberToEnglish(77));//"seventy seven"
console.log(numberToEnglish(26));//"seventy seven"
console.log(numberToEnglish(86));//"seventy seven"
console.log(numberToEnglish(575));//"five hundred seventy-five"
console.log(numberToEnglish(78193512));//"seventy-eight million one hundred ninety-three thousand five hundredndred twelve"
