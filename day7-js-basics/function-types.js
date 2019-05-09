

//Pure function
//Output depends on two input arguments a and b
function add(a, b){
  return a+b;
}

//Impure function
//Output depends on
let num = 5;
function addNum(a){
  return num + a;
}

console.log(add(1, 3));
console.log(addNum(6));
