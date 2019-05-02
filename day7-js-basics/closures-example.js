function taxCalculator(taxRate){
  let multiplier = 0.01;
  return function(income){
    console.log(income * taxRate * multiplier);
    return income * taxRate * multiplier;
  }
}

let northCarolinaTax = taxCalculator(5);
//Passing income as argument
//To call inner function
//Inner function still has access to members of parent function
//
northCarolinaTax(1000);
