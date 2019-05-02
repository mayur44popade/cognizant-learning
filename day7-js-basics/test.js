//1) Write a function that accepts any parameter, and console.logs "The parameter [the parameter] type is [parameter type]."
//2) Call the function as many times as you need to, passing in every primative type once

var logInput = function functionName(a) {
  console.log(a, " type is : ", typeof(a));
}

logInput(1);
logInput('a');
logInput(undefined);
logInput(10.2);
logInput(null);
logInput(true);
logInput("Mayur");
logInput({});
logInput({"add":1});
logInput(Infinity);
logInput(-Infinity);
logInput(Symbol('a'));
