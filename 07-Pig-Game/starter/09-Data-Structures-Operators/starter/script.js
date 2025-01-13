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
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
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
console.log(restaurant.order(2, 0));

const [start, maincourse] = restaurant.order(2, 0);

console.log(start);

const nested = [2, 4, [5, 6]];

const [i, , [j, k]] = nested;

console.log(i, j, k);

// Default Values
const [p = 9, q = 1, r = 1] = [3, 6];

console.log(p, q, r);

// Destructuring Objects

const { Name, categories, starterMenu, locations, openingHours } = restaurant;

console.log(Name, categories, starterMenu, locations);

const { Name: newName, categories: tags = [] } = restaurant;

console.log(newName, tags);

// Mutilating Variables?

let ac = 111;
let bc = 44;

const points = { ac: 3, bc: 5 };

({ ac, bc } = points);

console.log(ac, bc);

const { fri } = openingHours;
const {
  fri: { open, close },
} = openingHours;

console.log(fri);
console.log(open, close);

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
let arr = [7, 8, 9];

let newArr = [1, 2, 3, ...arr];

console.log(newArr);

let add = [...newArr, 30];

console.log(add);

// join two arrays

let addPlusArr = [...add, ...arr];
console.log(addPlusArr);

// iterables: arrays, strings, maps and sets. not object

const str = 'abu';

const letters = [...str, 'b'];

console.log(letters);

const ingredient = [
  // prompt('lets make pasta: Ingredients1?'),
  // prompt('ingredients2'),
  // prompt('ingredient3'),
];

console.log(ingredient);
console.log(...ingredient);

const newRestraunt = { founder: 'tello', ...restaurant, foundedIn: 'spain' };

console.log(newRestraunt);

const newRestrauntCopy = {
  ...newRestraunt,
};
newRestrauntCopy.Name = 'roma restorante';

console.log(newRestraunt);

console.log(newRestrauntCopy);
