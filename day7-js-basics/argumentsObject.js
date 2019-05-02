function calculateSum(){
  /*
  //Sum by iterating over arguments array
  var sum = 0;
  for(i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
  */
  console.log("arguments is: ", arguments);
  console.log("Object.keys returns: ", Object.keys(arguments));
  var keyArray = Object.keys(arguments);
  var valArray = keyArray.map(x => arguments[x]);
  console.log("Value array is: ", valArray);
  //Another way to ger values from Arguments object is
  console.log("Using Array.from: ", Array.from(arguments));
  return valArray.reduce(function(accumulator, current){
    return accumulator += current;
  }, 0);
}

console.log(calculateSum(1, 2, 3, 10));
