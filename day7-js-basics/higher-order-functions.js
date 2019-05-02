//Use map() to refactor

function looper(array){
  let newArray = []
  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i]*2)
  }
  return newArray
}

function modifiedLooper(array){
  return array.map(x => x*2);
}

console.log(modifiedLooper([1, 2, 3]));

function filter(array){
 let newArray = []
 for (var i = 0; i < array.length; i++) {
   if(array[i] > 10){
     newArray.push(array[i])
   }
 }
 return newArray
}

function modifiedFilter(array){
  return array.filter(function(input){
    return input > 10;
  });
}

console.log(modifiedFilter([10, 20, 3, 7]));
