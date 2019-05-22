const orders = [500, 30, 99, 15, 223];

'Bad loops code 💩'
let total = 0;
let withTax = [];
let highValue = [];

for(let i = 0; i < orders.length; i++){
  //Reduce
  total += orders[i];

  //Map
  withTax.push(orders[i] * 1.1);

  //Filter
  if(orders[i] > 100){
    highValue.push(orders[i]);
  }
}

const newTotal = orders.reduce(function(total, current){
  return total+current;
});

const newWithTax = orders.map(function(current){
  return current * 1.1;
});

const newHighValue = orders.filter(function(current){
  return current > 100;
});

console.log(total == newTotal);
console.log(withTax == newWithTax);
console.log('withTax', withTax);
console.log('newWithTax', newWithTax);
console.log(highValue == newHighValue);
console.log('highValue', highValue);
console.log('newHighValue', newHighValue);
