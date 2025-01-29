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
  // console.log('i am a callBack');
};

document.body.addEventListener('click', high5);

['john', 'musa', 'abel'].forEach(high5);
// using callbacks is very imortant
// it helps with abstraction(hiding major details of some code implementation. instead of the HO to perform all the function, it delegates it to other ReadableByteStreamController(callback func))

// function returning function
const greet = function (greeting) {
  return function nestedFunc(name) {
    console.log(`${greeting} ${name}`);
  };
};

let greeter = greet('hey');

greeter('jonas');

greet('hey')('evans');

const greet1 = greeting1 => name1 => console.log(`${greeting1} ${name1}`);

greet1('hello')('Talha');

const lufthansa = {
  Airline: 'Lufthansa',
  Iatacode: 'LH',

  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.Airline} flight ${this.Iatacode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.Iatacode}${flightNum}`, name });
  },
};

// CALL //

lufthansa.book('320', 'kudus');
const eurowings = {
  Airline: 'eurowings',
  Iatacode: 'EW',
  bookings: [],
};

lufthansa.book.call(eurowings, 23, 'tola');
console.log(eurowings);

lufthansa.book.call(lufthansa, 212, 'bimpe');
console.log(lufthansa);
const swiss = {
  Airline: 'swiss',
  Iatacode: 'LX',
  bookings: [],
};

lufthansa.book.call(swiss, 454, 'Fiona');
console.log(swiss);

// lufthansa.book.call({ Airline: });

// APPLY //
const flightData = [583, 'kudus'];
lufthansa.book.apply(swiss, flightData);

const flightData2 = [583, 'Habib'];

lufthansa.book.call(swiss, ...flightData2);

// BIND

const bookEw = lufthansa.book.bind(eurowings);

bookEw(765, 'francis');
console.log(eurowings);

const bookLH = lufthansa.book.bind(lufthansa);
bookLH(454, 'jide');

const bookLX = lufthansa.book.bind(swiss);

const bookEw23 = lufthansa.book.bind(eurowings, 23);
bookEw23('sodiq');
bookEw23('sola');
//partial application(a part of the original has already been applied/set)

// DIFFERENCE BTW BIND AND CALL: CALL CALLS THE METHOD IMMEDIATELY IT IS USED, BUT BIND DOES NOT IMMEDIATELY CALLS THE FUNCTION, IT RETURNS A NEW FUNCTION WHERE THE THIS KEYWORD IS BOUND

// THIS KEYWORDS IS ALWAYS ATTACHED TO THE OBJECT CALLING IT

lufthansa.planes = 300;

lufthansa.buyplanes = function () {
  console.log(this);
  // console.log(this.planes);
  // lufthansa.buyplanes.bind(document.querySelector('.buy'));

  this.planes++;

  console.log(this.planes);
};

// buyP();

// lufthansa.buyplanes();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyplanes.bind(lufthansa));

bookEw23('tega');

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
// console.log();

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));

// BIND PRODUCES A NEW FUNCTION

const addTax2 = function (rate) {
  return function addVAT2(value) {
    return value + value * rate;
  };
};

let addVATrate = addTax2(0.2);

let addvatt = addVATrate(100);
console.log(addvatt);

// CHALLENGE

const POLL = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

  answers: new Array(4).fill(0),

  registerNewAnswer() {
    // console.log(...this.options);
    let output = Number(
      prompt(`${[this.question, ...this.options].join('\n')}`)
    );
    // output ??= output;
    // console.log(output ?? output < this.answers.length);
    output === 0 || (output && output) < this.answers.length
      ? this.answers[output]++
      : console.log('Pls choose one of the options below');
    // console.log(this.answers);

    this.displayResults('string');
    this.displayResults();
  },
  displayResults(type = 'array') {
    type === 'array'
      ? console.log(this.answers)
      : console.log(`The poll results: ${this.answers.join(' ')}`);
  },
};

// POLL.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', POLL.registerNewAnswer.bind(POLL));

POLL.displayResults.call({ answers: [5, 2, 3] });
// console.log(POLL);

// newPOLL([5, 2, 3]);
// newPOLL([5, 1, 24, 86]);

// IMMEDIATELY INVOKED FUNCTION EXPRESSION
function runOnce() {
  console.log('i will only run once');
}
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// (function () {
//   console.log('this function will only run once');
// })();
////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// IIEF
// () => console.log('this function will only run once as well')();

{
  const isPrivate = 33;
}

// console.log(isPrivate

// CLOSURES///

// ANY FUNCTION WILL HAVE ACCESS TO THE VARIABLE ENVIRONMENT OF THE EXECUTION CONTEXT IN WHICH IT WAS CREATED
// A FUNCTION DOES NOT LOOSE CONNECTION WITH THE VARIABLES THAT EXISTS AT IT BIRTHPLACE(LIKE A PERSON DOES NOT LOOS CONNECTION TO THEIR HOMETOWN)

// A CLOSURE GIVES A FUNCTION ACCESS TO ALL VARIABLES OF ITS PARENT FUNCTION, EVEN AFTER THAT PARENT FUNCTION HAS RETURNED. THE FUNCTION KEEPS A REFERENCE TO ITS OUTER SCOPE WHICH PRESERVES THE SCOPE CHAIN THROUGHOUT TIME

// A CLOSURE IS LIKE A BACKPACK THAT A FUNCTION CARRIES AROUND WHEREVER IT GOES. THIS BACKPACK HAS ALL THE VARIABLES THAT WERE PRESENT IN THE ENVIRONMENT WHERE THE FUNCTION WAS CREATED

// QQQ: DIFFERENCE BTW EXECUTION CONTEXT, VARIABLE ENVIRONMENT, SCOPE

// A CLOSURE IS NOT A JS OBJECT
// CLOSED-OVER VARIABLES CANT BE ACCESSED

const securebooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = securebooking();

booker();
booker();

console.dir(booker); //this shows the varibles in the execution context booker func was created

// closure is the VE OF securebooking

// double brackets means an internal property which we cannot access with code

// We dont need to return a function from another function in order to create a closure

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 300;

  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// //////
h();
f();

console.dir(f);

//The reassigned F function was still able to access the the variables in g's excecution context, even when g has been executed and F was created in the global scope

const boardPassengers = function (n, wait) {
  let perGroup = n / 3;
  setTimeout(function () {
    console.log(`we are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);

// CLOSURE HAS PRIORITY OVER THE SCOPE CHAIN

// CHALLENGE ON CLOSURE

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  

  document.querySelector('body').addEventListener('click', function () {
  header.style.color = 'blue';
})();

