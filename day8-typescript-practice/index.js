//Typescript does not have a run environment
//Typescript code is compiled to Javascript file using tsc command
console.log("Hello world!");
//Typescript does not support asynchronous functions
//so when Typescript code is compiled it creates extra code in Javascript
//Extra code has __awaiter and __generator
//Compiler handles all this for you
//Developer doesn't have to worry about the settings for compiling
//These settings are configured in 'tsconfig.json'
async function hello() {
    return 'Hi';
}
let lucky = 23;
//You can't assign a number variable to a String
//Compilation error
// lucky = '23';
//Using annotation 'any'
//Below code compiles
let p = 5;
p = '23';
//If you declare a variable with no type
//it is explicitly considered as 'any' type
//Declaring variable with specific data type
let x;
let font;
font = 23;
const person1 = {
    first: "Mayur",
    last: "Popade"
};
const nation1 = {
    name: "India",
    population: 123,
    flag: true
};
const nation2 = {
    name: "USA",
    population: 12
};
const nation3 = {
    name: "Canada",
    population: 1,
    cold: -20
};
//Array of nations
const nationArray = [];
nationArray.push(nation1);
nationArray.push(nation2);
nationArray.push(nation3);
console.log("Printing from Nation Array: ", nationArray[2]["cold"]);
//Writing argumented functions in Typescript
function pow(x, y) {
    return Math.pow(x, y);
}
console.log(pow(3, 2));
//How to strong type an array
const arr = [];
arr.push(2);
arr.push(5);
const myList = [1, "Up", false];
const aList1 = ["Mayur", 27];
//Second element in array is optional
const aList2 = ["Popade"];
//Generics
//Classes with constructors
class Emoji {
    constructor(icon) {
        this.icon = icon;
    }
}
let sun = new Emoji("Sun");
console.log(sun.icon);
//Using private members of class
class Emoji2 {
    constructor(_icon) {
        this._icon = _icon;
    }
    //Get method to access private members of class
    //So that other members will be able to read
    //the value but cannot change it afterwards
    get icon() {
        return this._icon;
    }
}
const moon = new Emoji2("Moon");
