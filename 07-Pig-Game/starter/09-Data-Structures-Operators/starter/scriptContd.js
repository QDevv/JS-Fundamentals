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
console.log(airline.slice(0, airline.lastIndexOf(' ') + 1));
console.log(airline.slice(0, -1));

const checkMiddleSeat = seat => {
  seat.slice(-1) === 'B' || seat.slice(-1) === 'e'
    ? console.log('You got the middle seat')
    : console.log('You are lucky');
};

checkMiddleSeat('23B');
checkMiddleSeat('4d');
checkMiddleSeat('7e');

// console.log(NaN || 8);

// STRINGS CONT'D //

console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

// console.log(airline.capitalize());

let testName = 'jOnAs';

let capitalize =
  testName.toLowerCase()[0].toUpperCase() + testName.toLowerCase().slice(1);

console.log(capitalize);

const email = 'hello@jonas.io';
const loginEmail = ' Hello@jonas.io \n';

const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(normalizedEmail);

console.log(normalizedEmail === email);
const priceGB = '288,97E';
const priceUS = priceGB.replace('E', '$').replace(',', '.');

console.log(priceUS);

const announcement =
  'all passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('Air'));
console.log(plane.includes('A'));
console.log(plane.includes('Air'));
console.log(plane.startsWith('Airbus'));

if (plane.startsWith('Air') && plane.endsWith('neo')) {
  console.log('we are using the new models of A320');
}

function CheckPassengers(items) {
  items.toLowerCase().includes('knife') || items.toLowerCase().includes('gun')
    ? console.log('you are not allowed on board')
    : console.log('welcome aboard');
}

CheckPassengers('i am with a Knife for protection');
CheckPassengers('i am with a Gun for protection');
CheckPassengers('i am with a camera and laptop');

// SPLIT //

console.log('this+is+a+nice+string'.split('+'));

console.log('kudus Lawal'.split(' '));

const [firstName, LastName] = 'kudus Lawal'.split(' ');

console.log(firstName, LastName);

// JOIN //

const fullName = ['Mr', firstName, LastName.toUpperCase()].join(' ');

// console.log(fullName);

let newCap;

function capitalized(name) {
  let newUpper = [];
  const eachName = name.split(' ');
  for (let i = 0; i < eachName.length; i++) {
    // newUpper.push(
    //   eachName[i][0].toUpperCase() + eachName[i].toLowerCase().slice(1)
    // );
    newUpper.push(
      eachName[i].replace(eachName[i][0], eachName[i][0].toUpperCase())
    );
  }
  console.log(newUpper);
}

capitalized('ann jessica thomas phillip');

capitalized('kudus lawal');

capitalized('abu talha');

// PADDING //

const message = 'Go to 23!';

console.log(message.padStart(30, '-').padEnd(40, '+'));
console.log(message);

function maskCreditCard(number) {
  const str = number + '';
  let masked = str.slice(str.length - 4).padStart(str.length, '*');
  console.log(masked);
}

maskCreditCard(368299277367373);
maskCreditCard('676383736366368');

const message2 = 'bad weather.. there will be a delay  ';

console.log(message2.repeat(4));

function planeWaiting(n) {
  console.log(`there are ${n} planes waiting${'-> '.repeat(n)}`);
}

planeWaiting(7);
planeWaiting(4);
planeWaiting(2);

const textArea = document.createElement('textarea');

document.body.append(textArea);

const textA = document.querySelector('textarea');

console.log(textA.value);

textA.placeholder = 'enter';
const button = document.createElement('button');
document.body.append(button);

const btn = document.querySelector('button');
console.log(btn);

function btnn(params) {
  console.log(`i'm working`);
}

console.log();

const text = document.querySelector('textarea').value;

console.log(textA);
let rtxt = textA.value;

function camelCase() {
  const wordArr = textA.value.split('\n');

  console.log(wordArr);

  for (let i = 0; i < wordArr.length; i++) {
    let res = wordArr[i].trim().toLowerCase();
    // console.log(res);
    // console.log(textA.value);
    let ccv =
      res.slice(0, wordArr[i].indexOf('_')) +
      res.toUpperCase()[wordArr[i].indexOf('_') + 1] +
      res.slice(wordArr[i].indexOf('_') + 2) +
      `  ${'@'.repeat([i + 1])}`;
    // res.toUpperCase()[input.toLowerCase()[]]
    console.log(ccv);
  }
  // console.log(wordArr);

  // console.log('yyyy');
  // console.log(res);
  // console.log(input.indexOf('_'));
}

// btn.addEventListener('click', camelCase);

// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

function revertToCamelCase() {
  let textArea = document.querySelector('textarea').value;
  let columnize = textArea.split('\n');

  for (const [i, column] of Object.entries(columnize)) {
    const [first, second] = column.toLowerCase().trim().split('_');

    let output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'%'.repeat(i + 1)}`);
  }
}

btn.addEventListener('click', revertToCamelCase);

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.split('+')) {
  let semiColumnSplitting = flight.split(';');
  // console.log(semiColumnSplitting);
  const [status, from, to, time] = semiColumnSplitting;

  // console.log();
  // status.includes('Delayed') ? `!! ${status}` : `${status}`;

  // console.log(status);

  // console.log();

  // console.log(to.slice(0, 3));
  // console.log(status);

  let reslt = `${status.includes('_Delayed') ? '!!' : ''}${status
    .split('_')
    .join(' ')} from ${from.slice(0, 3)} to ${to.slice(0, 3)}  (${time.replace(
    ':',
    'h'
  )})`;

  // console.log(reslt);

  // reslt.includes('Delayed')
  //   ? console.log(`!! ${reslt.padStart(50)}`)
  //   : console.log(reslt.padStart(50));

  // console.log(reslt);

  console.log(reslt.padStart(50));
  // console.log(
  //   `${status.split('_').join(' ')} from ${from.slice(0, 3)} to ${to.slice(
  //     0,
  //     3
  //   )} (${time.replace(':', 'hr')})`
  // );
}
