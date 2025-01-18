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
    address = 'milan',
  }) {
    console.log(
      `Hello! Your ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}will be available at ${address} by ${time} `
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
});

restaurant.orderDelivery({
  time: '1:30pm',
  starterIndex: 1,
  mainIndex: 0,
});

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

// console.log(h, z, others);
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
// rest2.numGuests = 11;
// console.log(rest2);
// rest1.numGuests = rest1.numGuests || 15;
// rest2.numGuests = rest2.numGuests || 15;s

// console.log(rest2);

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

// console.log(rest1, rest2);

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
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
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
