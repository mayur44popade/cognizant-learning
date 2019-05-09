//Typescript does not have a run environment
//Typescript code is compiled to Javascript file using tsc command

console.log("Hello world!");

//Typescript does not support asynchronous functions
//so when Typescript code is compiled it creates extra code in Javascript
//Extra code has __awaiter and __generator
//Compiler handles all this for you

//Developer doesn't have to worry about the settings for compiling
//These settings are configured in 'tsconfig.json'
async function hello(){
  return 'Hi';
}

let lucky = 23;
//You can't assign a number variable to a String
//Compilation error
// lucky = '23';

//Using annotation 'any'
//Below code compiles
let p: any = 5;
p = '23';

//If you declare a variable with no type
//it is explicitly considered as 'any' type

//Declaring variable with specific data type
let x: number;

//Creating your own type in Typescript
//Very similar to Enumeration in Java
type Style = "bold" | "italic" | 23;
let font: Style;
font = 23;
//Throws error
// font = "";

//You can declare shape of an object in Typescript
//using interface
//Easy way to create strongly type Objects
interface Person {
  first: string;
  last: string;
}

const person1: Person = {
  first: "Mayur",
  last: "Popade"
}

//To add any additional property to the object
interface Nation {
  name: string,
  population: number,
  //Additional property defined while declaring the object
  [key: string]: any
}

const nation1: Nation = {
  name: "India",
  population: 123,
  flag: true
}

const nation2: Nation = {
  name: "USA",
  population: 12
}

const nation3: Nation = {
  name: "Canada",
  population: 1,
  cold: -20
}

//Array of nations
const nationArray: Nation[] = [];
nationArray.push(nation1);
nationArray.push(nation2);
nationArray.push(nation3);

console.log("Printing from Nation Array: ", nationArray[2]["cold"]);

//Writing argumented functions in Typescript
function pow(x: number, y: number): number{
  return Math.pow(x, y);
}

console.log(pow(3, 2));

//How to strong type an array
const arr: number[] = [];
arr.push(2);
arr.push(5);
//Throws error
// arr.push('')

//Tuple in Typescript
//Tuples are fixed length array where each element has its own
//data type
type MyList = [number, string, boolean];
const myList: MyList = [1, "Up", false];

//You can make arguments optional with '?'
type AnotherList = [string, number?];
const aList1: AnotherList = ["Mayur", 27];
//Second element in array is optional
const aList2: AnotherList = ["Popade"];

//Generics
