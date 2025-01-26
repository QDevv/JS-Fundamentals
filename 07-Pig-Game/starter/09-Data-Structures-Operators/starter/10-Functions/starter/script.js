'use strict';

const bookings = [];
const createBooknFunc = (
  flightNum,
  passegerNum = 1,
  price = 199 * passegerNum
) => {
  const booking = {
    flightNum,
    passegerNum,
    price,
  };
  console.log(booking);
  bookings.push(booking);

  console.log(bookings);
};

createBooknFunc('LH132', undefined);

// HOW PASSING ARGUMENT WORKS; Value vs Reference Types
const flight = 'LH321';

const jonas = {
  name: 'Jonas green',
  passport: 2734599364,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH234';
  passenger.name = 'Mr' + passenger.name;
  passenger.passport === 2734599364
    ? alert('checkIn')
    : alert('wrong passport');
};

// checkIn(flight, jonas);

console.log(flight);
console.log(jonas);

// passing argument is same as doing

const flightNum = flight;
const passenger = jonas;

const newpassport = newPP => {
  newPP.passport = Math.trunc(Math.random() * 1000000);
};

newpassport(jonas);

// checkIn(flight, jonas);

// FirstClass VS HgherOrder Functions

// JS treats functions as first-class citizens
// -this means that they're simply values
// functions are another type of object
// it can be stored in variables
// can be used as an argument to other function
// has its own methods like string and array
// you can return function from function

// HIGHER ORDER FUNCTION

//- THIS IS A FUNCTION THAT RECEIVES ANOTHER FUNCTION AS AN ARGUMENT OR RETURNS A NEW FUNCTION OR BOTH
// -the function passed into an higher order function is a callback function

const oneWord = str => {
  return str.replace(/ /g, '');
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = (str, fn) => {
  console.log(`the original string:${str}`);

  console.log(`the transformed string: ${fn(str)}`);

  console.log(`transformed by: ${fn.name} `);
  //   console.log(`space removed: ${fn2('higher Order')}`);
};

transformer('javaScript is the best', upperFirstWord);
transformer('javaScript is the best', oneWord);

const high5 = () => {
  console.log('i am a callBack');
};

document.body.addEventListener('click', high5);

['john', 'musa', 'abel'].forEach(high5);
// using callbacks is very imortant
// it helps with abstraction(hiding major details of some code implementation. instead of the HO to perform all the function, it delegates it to other ReadableByteStreamController(callback func))
