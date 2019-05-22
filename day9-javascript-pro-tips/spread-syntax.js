const pikachu = {name: 'Pikachu'};
const stats = {
  hp: 40,
  attack: 60,
  defense: 45
};

'Bad Object Code 💩'
pikachu['hp'] = stats.hp;
pikachu['attack'] = stats.attack;
pikachu['defense'] = stats.defense;

//OR
//Merging two objects together
let newObject = Object.assign(pikachu, stats);
let anotherObject = Object.assign(pikachu, stats.attack);

console.log({newObject});
console.log({anotherObject});

'Using Spreading'
'It will create a new object starting from left to right'
let spreadObject = {...pikachu, ...stats};

'Using Spread syntax on arrays'
let pokemon = ['Arbok', 'Raichu', 'Sandshrew'];

'Bad array code 💩'
pokemon.push('Bulbasaur');
pokemon.push('Metapod');
pokemon.push('Weedle');

'Another way of doing it'
//Doing push
pokemon = [...pokemon, 'Hiran', 'Kutta', 'Billi'];

''
//Doing unshift()
pokemon = ['Kasav', 'Sasa', ...pokemon];

console.log({pokemon});
