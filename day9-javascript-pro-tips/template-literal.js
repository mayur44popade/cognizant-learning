const horse = {
  name: 'Topher',
  size: 'large',
  skills: ['jousting', 'racing'],
  age: 7
}

'Bad String code'

//You have to manage all the string with spaces in between
let bio = horse.name + ' is a ' + horse.size + ' horse skilled in ' + horse.skills.join(' & ');

//Good habits
const {name, size, skills} = horse;
let updatedBio = `${name} is a ${size} horse skilled in ${skills.join(' & ')}`;

console.log(bio);
console.log(updatedBio);
