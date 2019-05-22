const foo = {'name': 'Mayur', 'age': 27};
const bar = {'name': 'Pop', 'age': 100};
const pan = {'name': 'Temp', 'age': 2};

//See the changes in the browser or terminal
console.log(foo);
console.log(bar);
console.log(pan);

//Using computed property names for logging
console.log({foo});
console.log({foo, bar, pan});

//Using console.table for printing
console.table([foo, bar, pan]);

//Using console to maintain timers
console.time('looper');
let i = 0;
while(i < 1000000){
  i++;
}
console.timeEnd('looper');
