// handle edge cases
// decimals
// leading zeros

function numberToEnglish (number) {
  // import helper functions
  var placeArray = arrayifyNumber(number);
  var transcribe = tscribe();
  var maps = addMaps();

  // concat the transcribed number to results string
  var transcribedResult = '';
  var subsetCount = placeArray.length;
  var transcribedSegment;

  for(var x = 0; x < placeArray.length; x++){
    subsetCount--;
    transcribedSegment = transcribe(placeArray[x]);
    if(transcribedSegment.length !== 0){
      transcribedResult += transcribedSegment + ' ' + maps.subsetMap[subsetCount] + ' ';
    }
  }

  if(number == 0) return 'zero'; 
  if(number == 10) return 'ten'; 

  return transcribedResult.trim();
}

/*
 * ####################
 * # HELPER FUNCTIONS #
 * ####################
 */

// make function to transcribe subsets
var tscribe = function(){
  return function(subset){
    var maps = addMaps();
    var numLength = subset.length;

    var transcribeOneDigit = function(subset){
      return maps.onesMap[subset[0]]
    };

    var transcribeTwoDigits = function(subset){
      var tensPlace = subset[0];
      var onesPlace = subset[1];
      var tensDash = '';

      if(onesPlace != 0) tensDash = '-';


      if(tensPlace === '1'){
        return maps.teensMap[onesPlace];
      } else if(tensPlace > 5 && tensPlace != 8) {
        return maps.onesMap[tensPlace] + 'ty' + tensDash + maps.onesMap[onesPlace];
      } else {
        if(tensPlace == 0){
          return maps.onesMap[onesPlace];
        } else if(onesPlace == 0){
          return maps.tensMap[tensPlace];
        } else {
          return maps.tensMap[tensPlace] + '-' + maps.onesMap[onesPlace];
        }
      }
    }

    var transcribeTreeDigits = function(subset){
      var hundredsPlace = subset[0];
      var tensPlace = subset[1];

      var tensHundredsSpace;
      tensPlace != 0 ? tensHundredsSpace = ' ' : tensHundredsSpace = '';

      // if the hundreds place is 0 we don't want to include it's suffix
      return hundredsPlace == 0 ? '' : maps.onesMap[hundredsPlace] + ' hundred' + tensHundredsSpace;
    }

    // transcribing
    if(numLength === 1) return transcribeOneDigit(subset);
    if(numLength === 2) return transcribeTwoDigits(subset);
    if(numLength === 3){
      var arrayMachine = [];
      var slicedArr = subset.slice(1);

      return (transcribeTreeDigits(subset) + transcribeTwoDigits(slicedArr));
    }
  }
}

var addMaps = function() {
  return {
    // 355,003
    onesMap : {
      '0' : '',
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
      '0' : '',
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
      '0' : '',
      '2' : 'twenty',
      '3' : 'thirty',
      '4' : 'forty',
      '5' : 'fifty',
      '8' : 'eighty'
    },
    subsetMap : {
      0 : '',
      1 : 'thousand',
      2 : 'million',
      3 : 'billion',
      4 : 'trillion',
      5 : 'quadrillion',
      6 : 'quintillion'
    }
  }
}

var arrayifyNumber = function(number){
  // break number into subsets of 3 digits
  var splitNum = number.toString().split('');
  var placeArray = [];

  while(splitNum.length > 3){
    placeArray.unshift(splitNum.splice(splitNum.length-3));
  }

  placeArray.unshift(splitNum);
  // console.log(placeArray);
  return placeArray;
}

// // add as tests!
console.log(numberToEnglish(540));
console.log(numberToEnglish(0));
console.log(numberToEnglish(112));
console.log(numberToEnglish(12));
console.log(numberToEnglish(10));
console.log(numberToEnglish(122));
console.log(numberToEnglish(355003));
console.log(numberToEnglish(9007199254740992));// 9,007,199,254,740,992
console.log(numberToEnglish(1000000000000000000));//
console.log(numberToEnglish(17490));//
console.log(numberToEnglish(78193512));//
console.log(numberToEnglish(2385024582));//
console.log(numberToEnglish(973563700353));//

