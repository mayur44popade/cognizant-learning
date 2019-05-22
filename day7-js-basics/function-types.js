

//Pure function
//Output depends on two input arguments a and b
function add(a, b){
  return a+b;
}

//Impure function
//Output depends on outside varibales and functionalities
let num = 5;
function addNum(a){
  return num + a;
}

console.log(add(1, 3));
console.log(addNum(6));

//Pure functions are easier to test
//Pure functions are easier to reason about because function does
//not depend on anything outside of it to procude the result
