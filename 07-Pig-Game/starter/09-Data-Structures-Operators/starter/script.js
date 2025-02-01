'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  Name: 'Classico Italiano',
  locations: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto', 'sss'],

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta! with${ing1},${ing2} and ${ing3}`
    );
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
  orderDelivery: function ({
    starterIndex,
    mainIndex,
    time,
    address,
    comments,
  }) {
    console.log(
      `Hello! Your ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}will be available at ${address} by ${time}. ${comments} `
    );

    console.log(starterIndex);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
restaurant.orderPizza('pepper', 'onion', 'salt', 'lettuce');

restaurant.orderDelivery({
  time: '4:30pm',
  address: 'Via Angelo Tavanti 23, Firenze, Italy',
  starterIndex: 2,
  mainIndex: 2,
  comments: 'Thanks for your patronage',
});

// restaurant.orderDelivery({
//   time: '1:30pm',
//   starterIndex: 1,
//   mainIndex: 0,
// });

restaurant.orderPasta();

// Destructuring

const numbers = [2, 4, 6];

const [a, b, c] = numbers;

console.log(a, b, c);

console.log(numbers);

let [main, , secondary] = restaurant.categories;

// swapping variable values
// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

[main, secondary] = [secondary, main];

console.log(main, secondary);

// lrestaurant.order(2, 0);

// lrestaurant.order(2, 0);
// console.log(restaurant.order(2, 0));

// const [start, maincourse] = restaurant.order(2, 0);

// console.log(start);

// const nested = [2, 4, [5, 6]];

// const [i, , [j, k]] = nested;

// console.log(i, j, k);

// Default Values
const [p = 9, q = 1, r = 1] = [3, 6];

console.log(p, q, r);

// Destructuring Objects

const { Name, categories, starterMenu, locations, openingHours } = restaurant;

console.log(Name, categories, starterMenu, locations);

const { Name: newName, categories: tags = [] } = restaurant;

console.log(newName, tags);

// Mutilating Variables?

// let ac = 111;
// let bc = 44;

// const points = { ac: 3, bc: 5 };

// ({ ac, bc } = points);

// console.log(ac, bc);

// const { fri } = openingHours;
// const {
//   fri: { open, close },
// } = openingHours;

// console.log(fri);
// console.log(open, close);

// You can change the variable name as in below

const {
  fri: { open: x, close: y },
} = openingHours;

console.log(x, y);

// const Person = {
//   name: 'boye',
//   age: '29',
// };

// SPREAD OPERATOR - useful when we want to write values seperated by comma / multiple values seperated by comma
// let arr = [7, 8, 9];

// let newArr = [1, 2, 3, ...arr];

// console.log(newArr);

// let add = [...newArr, 30];

// console.log(add);

// join two arrays

// let addPlusArr = [...add, ...arr];
// console.log(addPlusArr);

// iterables: arrays, strings, maps and sets. not object

// const str = 'abu';

// const letters = [...str, 'b'];

// console.log(letters);

const ingredient = [
  // prompt('lets make pasta: Ingredients1?'),
  // prompt('ingredients2'),
  // prompt('ingredient3'),
];
restaurant.orderPasta(...ingredient);
// console.log(ingredient);
// console.log(...ingredient);

const newRestraunt = { founder: 'tello', ...restaurant, foundedIn: 'spain' };

console.log(newRestraunt);

const newRestrauntCopy = {
  ...newRestraunt,
};
newRestrauntCopy.Name = 'roma restorante';

console.log(newRestraunt);

console.log(newRestrauntCopy);

// REST & spread

// spread
// on the RHS of =
const arrv = [1, 2, 3, ...[4, 5]];

// console.log(arrv);

// REST, cos its on the LHS of = ---used when you want to write variable names seperated by commas
const [h, z, ...others] = [1, 2, 3, 4, 5];

console.log(h, z, others);
// Merging occured here: ...restaurant.mainMenu and ...restaurant.starterMenu,
const [pza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pza, Risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;

// const { ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// function
function addFunc(...numbers) {
  console.log(numbers);
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}

// addFunc(2, 3);
// addFunc(4, 5, 6, 7, 8);

const g = [2, 6, 4];

addFunc(...g);

// SHORT CIRCUITING
// || and && operators
// they use any data types, return any data type

// when the || operator is used(like below) the first truthy value is returned/selected

console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);

// && is the opposite of ||

// when the && operator is used(like below) the first falsey value is returned

// console.log(4 && '');
// console.log(undefined && null);

// restaurant.numGuests = 23;

// const restaurant1 = restaurant.numGuests ? restaurant.numGuests : 10;

// const guest1 = restaurant.numGuests || 17;

// console.log(guest1);

// console.log(restaurant1);

console.log(0 && 'jon');
console.log(7 && 'jon');
console.log(true && 'njm');

if (restaurant.orderPizza) {
  // restaurant.orderPizza();
}

restaurant.order && restaurant.orderPizza('maggi', 'spinach', 'pepperoni');

console.log(
  (4 && 0) || 8 || (7 && 8 && null && true) || ('yes' && undefined) || (8 && '')
);

// Nullish Coalescence: NC only recognizes null & undefined as falsey value. '' & 0 are truthy in NC

restaurant.numGuests = 0;

// const restaurant1 = restaurant.numGuests ? restaurant.numGuests : 10;

const guest1 = restaurant.numGuests || 17;

console.log(guest1);

let guest2 = restaurant.numGuests ?? 11;
console.log(guest2);

const rest1 = {
  name: 'The Place',
  numGuests: 0,
};

const rest2 = {
  name: 'The Place',
  owner: 'Felix Dudgarden',
};
rest2.numGuests = 11;
console.log(rest2);
rest1.numGuests ||= 15;
rest2.numGuests = rest2.numGuests || 15;
console.log(rest1);

// OR ASSIGNMENT OPERATOR

// rest1.numGuests ||= 5;
// rest2.numGuests ||= 30;

// console.log(rest1, rest2);

// Nullish Assignment Operator
rest1.numGuests ??= 15;
rest2.numGuests ??= 30;

// AND ASSIGNMENT : if you want to REdefine a variable thats already truthy, you can use AND ASSIGNMENT
rest1.owner = rest1.owner && '<anon>';
// rest2.owner = rest2.owner && '<anon>';

// rest1.owner &&= '<anon>';
rest2.owner &&= '<anon>';

console.log(rest1, rest2);

console.log(rest1.owner, rest2.owner);

// Challenge on Data structures - Operators

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: [
    'Lewandowski',
    'gnarby',
    'Lewandowski',
    'hummels',
    'Lewandowski',
    'gnarby',
    'hummels',
    'gnarby',
  ],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    D: 3.25,
    team2: 6.5,
  },
};

// const { players } = game;

// console.log(players);
const { players } = game;

console.log(players);

const [players1, players2] = players;

console.log(players1);

console.log(players2);

const [gk, ...outfieldPlayers] = players1;

console.log(gk, outfieldPlayers);

const bothTeams = [...players1, ...players2];

console.log(bothTeams);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

console.log(players1Final);

// const { team1, D, team2 } = game.odds;

const {
  odds: { team1, D: draw, team2 },
} = game;
console.log(team1, draw, team2);

// console.log(odds);

// console.log(team1, D, team2);

function printGoals(...players) {
  console.log(players);
  console.log(players.length);
}
printGoals('davies', 'kimmich', 'muller', 'lewy');

console.log(game.odds.team1 || team2 || D);

game.odds.team1 < game.odds.team2 &&
  console.log(`${game.team1} has the lesser odds`);

// printGoals(...game.scored);

// FOR-OF LOOP
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const unit of menu) console.log(unit);

// console.log(unit);

for (const [iterator, tr] of menu.entries()) {
  // console.log(...menu.entries());

  console.log(iterator, tr);
  // console.log(it);
  // console.log(`${iterator}: ${tr}  `);
}

// console.log([...menu.entries()]);

// ES6 OBJECT LITERALSS
const books = {
  selfhelp: 'atomic habits',
  adventure: 'GOT',
};

const countries = {
  Asia: 'Japan',
  africa: 'togo',
  ...books,
};

console.log(countries);

const cars = ['volvo', 'benz', 'Honda'];

const Vehicles = {
  [cars[1]]: { price: '$5000' },
  [cars[1 + 1]]: { price: '$1000' },
};

console.log(Vehicles);

// OPTIONAL CHAININ

if (restaurant.openingHours && restaurant.openingHours.fri) {
  console.log(restaurant.openingHours.fri);
}

// instead of doing the above do this

console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

function closed(day) {
  console.log(`we are closed on ${day}`);
}

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on${day} we open at ${open} `);
  // console.log(restaurant.openingHours[day]?.open);

  // if (restaurant.openingHours[day]) {
  //   console.log(`we are open on${day}`);
  // } else {
  //   console.log(`we are closed on ${day}`);
  // }
}

// Optional Chaining on method

console.log(restaurant.order?.(0, 1) ?? 'this function doesnt exist');

console.log(restaurant.orderRisotto?.(0, 1) ?? 'this function doesnt exist');

// Optional Chaining on ARRAYS
// const user = [{ name: 'joyce', age: 22 }];
const user = [];

console.log(user[0]?.name ?? 'empty array');

// lOOPING OVER AN OBJECT
const softwareDev = {
  designer: 'figma',
  frontend: 'javaScript',
  backend: 'Node Js',
  API: 'rest',
  browser: 'chrome',
};

let properties = Object.keys(softwareDev);
let openStr = `to build a website you need the following: `;

for (const unit of properties) {
  // console.log(unit);
  openStr += `${unit}, `;
  console.log(openStr);
}

// LOOPING OVER A VALUE
let value = Object.values(softwareDev);
console.log(value);

console.log(Object.entries(softwareDev));

for (const [iterator, tr] of Object.entries(softwareDev)) {
  console.log(iterator, tr);
}
const entries = Object.entries(openingHours);

for (const [key, { open, close }] of entries) {
  console.log(`on${key} we open by ${open} and close by ${close} `);
}

// Coding challenge

for (const [no, players] of Object.entries(game.scored)) {
  console.log(`goal ${Number(no) + 1}: ${players}

  `);
}
let avg = 0;
for (const odd of Object.values(game.odds)) {
  avg += odd;
}
console.log(avg / Object.values(game.odds).length);
// console.log(avg);

// console.log(Object.values(game));

// for (const [prop, val] of Object.entries(game.odds)) {
//   // `${game[prop][{ prop }]}`;
//   console.log(
//     `Odd of ${game[prop] || 'draw'} ${
//       game[prop] === 'Bayern Munich' || game[prop] === 'Borrussia Dortmund'
//         ? 'winning'
//         : ''
//     } is ${val}`
//   );
// }

// for (const [prop, val] of Object.entries(game.odds)) {
//   // `${game[prop][{ prop }]}`;
//   let draw = game[prop] ?? '';
// }

for (const [key, val] of Object.entries(game.odds)) {
  let oddStr = `odd of ${
    key === 'D' ? 'draw' : `victory ${game[key]}`
  } ${val} `;

  console.log(oddStr);
}

// const scorers = { ...game.scored };

// console.log(scorers);

let counter = 0;
let multipleKeys = [];

function str({ Lewandowski, gnarby, hummels }) {
  let scorers = { Lewandowski, gnarby, hummels };
  // console.log(scorers);
  return scorers;
}

let gSCorers = str(game.scored);

// console.log(gSCorers);

for (const [key, val] of Object.entries(gSCorers)) {
  let arr = [];
  let multipleOcurrence = [];
  for (let i = 0; i < game.scored.length; i++) {
    !arr.includes(game.scored[i])
      ? arr.push(game.scored[i])
      : multipleOcurrence.push(game.scored[i]);

    // console.log([i]);

    // console.log(counter);

    // let add;
    // console.log(game.scored.indexOf(game.scored[i]));

    if (
      game.scored[counter] === game.scored[i] &&
      !multipleKeys.includes(game.scored[i])
    ) {
      // let count;
      // console.log(arr)
      // console.log(game.scored);
      multipleKeys.push(game.scored[i]);
      console.log(multipleKeys);
    }
    if (i === game.scored.length - 1) {
      counter++;
    }
    // count++;

    // console.log();
    // console.log(game.scored);

    // const scorers = { key };
    // console.log(scorers);
  }
  // console.log(multipleOcurrence);
  // console.log(key);
  // console.log(val);
  gSCorers[key] = !multipleOcurrence.includes(key)
    ? 1
    : // console.log(arr);
      console.log(multipleOcurrence);
  console.log(gSCorers);

  // console.log(multipleOcurrence[0]);
}

// if (!arr.includes(game.scored[i])) {
//   arr.push(game.scored[i]);
// } else {
//   console.log(multipleOcurrence.push(game.scored[i]));
//   return multipleOcurrence;
// }

for (const [key, val] of Object.entries(gSCorers)) {
  let arr = [];
  let multipleOcurrence = [];
}

function MultipleInstance() {}

let cg = 1;

cg ||= 0;

console.log(cg);

let gh = [2, 4, 5, 6];
let add = 0;
// for (let i = 0; i < bb.length; i++) {
//   // const element = array[index];
//   if (bb[add] === bb[i]) {
//     console.log(bb[i]);
//     add++;
//   }
// }

// SETS //

// A collection of unique values i.e that means sets doesnt have any duplicate
// - sets can hold different data types

const orderSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'rizotto',
  'pasta',
  'pizza',
]);

console.log(orderSet.size);

console.log(orderSet);

console.log(new Set('jonas'));

console.log(orderSet.has('pasta'));
console.log(orderSet.has('potato'));

console.log(orderSet.add('bread'));
orderSet.add('bread');
orderSet.delete('pasta');
console.log(orderSet);

// SET are iterable

for (const order of orderSet) console.log(order);

const staff = ['accountant', 'Engineer', 'HR', 'HR'];

const staffunique = [...new Set(staff)];

console.log(staffunique);
console.log(new Set(['a', 'b', 'r', 'q', 'b']).size);

console.log(new Set('kuddus').size);

// MAP //

// this is a javascript data structure that map values to keys

// Difference btw map and obj; keys in map can be any type of data(array, obj or other maps but in obj keys are string)

const rest = new Map();
rest.set('name', 'classico italiano');
rest.set(1, 'foggia', 'Italy');
rest.set(true, 'we are open');
rest.set(false, 'we are close');
console.log(
  rest
    .set('age', 29)
    .set('job', 'software Dev')
    .set('open', 12)
    .set('close', 23)
);

console.log(rest.get(1));

console.log();

const time = 2;

let available = rest.get(time >= rest.get('open') && time < rest.get('close'));

console.log(available);

console.log(rest.has('age'));

console.log(rest.delete(true));
console.log(rest.size);
console.log(rest.clear());
console.log(rest);

const arr = [1, 2];

rest.set(arr, 'test');
rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);
console.log(rest.get(arr));

const question1 = new Map([
  ['question', 'what is the best programming language'],
  [1, 'c'],
  [2, 'Java'],
  [3, 'javaScript'],
  ['correct', 3],
  [true, 'correct!'],
  [false, 'try again'],
]);

console.log(question1);
console.log(Object.entries(openingHours));

let newHours = new Map(Object.entries(openingHours));

console.log(newHours);

for (const [key, val] of question1) {
  typeof key === 'number' ? console.log(`answer ${key} ${val}`) : '';
}

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question1.get(answer === question1.get('correct')));

// Convert MAP TO ARRAY

console.log(...question1);

// Coding Challenge //

// const gameEvents = new Map([]);
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

for (const [keys, val] of gameEvents) {
  num.push(keys);

  // numAvg.push(num[i] - num[i + 1]);
  // console.log(num[i]);
  // console.log(keys);
  // const element = array[i];

  console.log(numAvg);
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
  numAvg = num.push(num[0]);

  console.log(numAvg);

  if (num.length !== 0) {
    // numAvg.push(num[i + 1] - [i]);
    console.log(num[i + 1] - num[i]);
    // num.shift();
    console.log(numAvg);
  }
}
