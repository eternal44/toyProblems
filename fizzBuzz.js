function fizzBuzz(number){
  var result = '';
  if(number % 3 === 0) result += 'fizz';
  if(number % 5 === 0) result += 'buzz';
  return result ? result : number;
}

for(var i = 0; i < 100; i++){
  console.log(fizzBuzz(i));
}
