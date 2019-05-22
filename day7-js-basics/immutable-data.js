//Second feature of functional programming is immutable data
//It can be implemented in Javascript using Freeze function

const data = [1, 2, 3, 4, 5, 6];

data.push(7);
console.log("data is: ", data);

const datum = Object.freeze([1, 2, 3, 4]);

//Following code throws error
//datum.push(5);
console.log("Datum is: ", datum);
