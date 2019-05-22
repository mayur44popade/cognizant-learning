const animal = {
  name: 'Bob',
  legs: 4,
  shell: true,
  type: 'amphibious',
  meal: 10,
  diet: 'berries'
}

function feed(){
  return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`;
}

console.log(feed());

function feed2(name, meal, diet){
  return `Feed ${name} ${meal} kilos of ${diet}`;
}

console.log(feed2('Mayur', 3, 'Apples'));

//Something different
function feed3(animal){
  const {name, meal, diet} = animal;
  return `Feed ${name} ${meal} kilos of ${diet}`;
}

console.log(feed3(animal));
