const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
let eventArr = [];
let setEvent = new Set([]);
let avgg = 0;
let num = [];
let numAvg = [];

console.log([...gameEvents.keys()]);

for (const [keys, val] of gameEvents) {
  num.push(keys);

  keys < 45
    ? console.log(`[FIRST HALF] ${keys} : ${val}`)
    : console.log(`[SECOND HALF] ${keys} : ${val}`);
  // numAvg.push(num[0]);

  // numAvg.push(num[i] - num[i + 1]);
  // console.log(num[i]);
  // console.log(keys);
  // const element = array[i];

  // console.log(numAvg);
  // num.push(keys);
  // console.log(num);

  // eventArr.push(val);
  // console.log(eventArr);

  setEvent.add(val);
  // console.log(setEvent);
  eventArr = [...setEvent];
  // console.log(eventArr);
}
// const events = [...gameEvents.get()];
console.log(eventArr);
// console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

for (let i = 0; i < num.length; i++) {
  console.log(numAvg);

  // numAvg = num.push(num[0]);

  if (num.length !== 0) {
    numAvg.push(num[i + 1] - num[i]);
    // console.log(num[i + 1] - num[i]);
    // num.shift();
    // console.log(numAvg);
  }
}

numAvg.unshift(num[0]);

numAvg.pop();

console.log(numAvg);

const sum = numAvg.reduce((accumulator, currentVal) => {
  return accumulator + currentVal;
}, 0);

console.log(sum / numAvg.length);

const airline = 'TAP Air Portugal';
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));

// console.log(NaN || 8);
