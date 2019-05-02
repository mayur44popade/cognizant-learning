//1) Write 3 functions
//2) The first two functions will be math operations (eg sum())
//    - They will accept two parameters (always numbers)
//    - Return the result of that operation on the numbers
//3) The third function will be called calculator
//    -accepts three parameters. one function and two numbers
//    -It returns the result of the function passed in, executed on the two numbers

function sum(a, b){
  return a + b;
}

function multiply(a, b){
  return a * b;
}

function calculator(func, a, b){
  return func(a, b);
}

console.log(sum(2, 3));
console.log(multiply(2, 3));
console.log(calculator(sum, -1, 1));
console.log(calculator(multiply, -1, 1));
