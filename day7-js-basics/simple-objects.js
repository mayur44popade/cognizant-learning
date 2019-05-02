//1) Write an object, with the properties name and age
//2) Write a function that accepts an object, and logs it's
//age and name
//3) Write a function that accepts an object and a string.
//The string will be the property of the object
//you want to access, and your function will log the
//value of that property

object = {
    "name": "Mayur",
    "age": 27
}
//console.log(object);

function printObject(object){
  if(null != object){
    if(null != object.name){
      console.log("Object name is : ", object.name);
    }
    if(null != object.age){
      console.log("Object age is : ", object.age);
    }
  }
}

printObject(object);

function getProperty(object, property){
  if(null != object){
    if(null != object[property]){
      console.log(property, " value is :", object[property]);
    }
  }
}

getProperty(object, "age");
