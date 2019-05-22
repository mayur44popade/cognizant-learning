'Method called random that returns a promise'
'that resolves to a random number asynchronously'
const random = () => {
  return Promise.resolve(Math.random());
}

'Now we want to retrieve 3 numbers'
'asynchronously, one after the other and return their sum'

const sumAsyncRandomNums = () => {
  let first;
  let second;
  let third;

  return random()
          .then(v => {
            first = v;
            return random();
          })
          .then(v => {
            second = v;
            return random();
          })
          .then(v => {
            third = v;
            return first + second + third;
          })
          .then(v => {
            console.log(`Result ${v}`);
          })
}

console.log(sumAsyncRandomNums);


'Better coding practices'
'Adding async in front of the fuction will force it to'
'return the promise'
'Write await in front of your promises'
'and have them resolve to actual value'
"So instead of using 'then' callbacks"
"We can directly call random method with await"
const sum = async() => {
  const first = await random();
  const second = await random();
  const third = await random();

  console.log(`Result ${first + second + third}`);
}

console.log(sum);
