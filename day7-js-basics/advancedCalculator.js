function calculate(operation){
  if(operation == '+'){
    return function add(a, b){
      return a+b;
    }
  }else if(operation == '-'){
    return function subtract(a, b){
      return a-b;
    }
  }else if(operation == '*'){
    return function multiply(a, b){
      return a * b;
    }
  }else if(operation == '/'){
    return function divide(a, b){
      return a/b;
    }
  }else{
    return 'Please pass valid operator';
  }
}

var add = calculate('+');
var sub = calculate('-');
var mul = calculate('*');
var div = calculate('/');
var invalid = calculate('%');

console.log("Addition of 2 and 3 is :", add(2, 3));
console.log("Subtraction of 2 and 3 is :", sub(2, 3));
console.log("Multiplication of 2 and 3 is :", mul(2, 3));
console.log("Division of 2 and 3 is :", div(2, 3));
console.log("Invalid operation of 2 and 3 is :", invalid);
