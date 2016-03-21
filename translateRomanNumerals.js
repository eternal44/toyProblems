function translateRomanNumeral (romanNumeral) {
  var DIGIT_VALUES = digits();

  // translate empty string
  if(romanNumeral === '') return 0;

  var regexp = /[I,V,X,L,C,D,M]/g;
  var matches = romanNumeral[0].match(regexp)

  // return null for invalid numeral
  if(matches === null) return null;

  var transcribed = [];
  for(var i = 0; i < romanNumeral.length; i++){
    transcribed.push(DIGIT_VALUES[romanNumeral[i]]);
  }

  var result = 0;
  for(var j = 0; j < transcribed.length; j++){
    if(transcribed[j + 1] === undefined){
      result += transcribed[j];
    } else if(transcribed[j] === transcribed[j+1] || transcribed[j] > transcribed[j + 1]){
      result += transcribed[j];
    } else {
      result -= transcribed[j];
    }
  }
  return result;
}


/*
 * # HELPERS #
 */

var digits = function(){
  return {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
}

// // add as tests!
// console.log(translateRomanNumeral("LX"));//60
// console.log(translateRomanNumeral("IV"));//4
// console.log(translateRomanNumeral("CCVII"));//207
// console.log(translateRomanNumeral("MLXVI"));//1066
// console.log(translateRomanNumeral("horse"));//"null"
// console.log(translateRomanNumeral(""));//0

