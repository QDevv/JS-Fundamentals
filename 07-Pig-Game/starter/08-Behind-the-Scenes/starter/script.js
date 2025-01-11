'use strict';
function calcAge(birthYear) {
  let Age = 2037 - birthYear;
  function summary() {
    let output = `You are ${Age}, and your birth year is ${birthYear}`;

    console.log(output);

    if (birthYear <= 1981 && birthYear >= 1996) {
      //   var millenial = true;
      const str = `${names} is a milennial`;
      console.log(str);
      output = 'New Output';
    }

    console.log(output);
    // console.log(str);
    // console.log(millenial);
  }
  summary();
  console.log(names);
  return Age;
}
let names = 'fredrick';
let newAge = calcAge(1995);

console.log(newAge);

// You can redeclare wit let in a different scope

// HOISTING

// Makes some type of variable accessible/usable in the code before they're actually declared. "Variable lifted to the top of their scope"

// Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the VARIABLE ENVIRONMENT OBJECT

// FUNCTION DECLARATION can be hoisted
// Var variables are also hoisted but the initial value is undefined
// let and const variables are not hoisted
// function expression and arrow function are hoisted if you create them with var only. hoisting wont take place if you use let and const

// TEMPORAL DEADZONE (TDZ)
// MAakes it easier to avoid and catch errors: accessing variables before declaration is bad practice and should be avoided

// HOISTING WITH VARIABLES
// console.log(me);
// console.log(job);
// console.log(year);

var me = 'qd';
let job = 'Software Engineer';
const year = 2026;

console.log(addDecl(3, 7));
// console.log(addExpress(2, 3));
// console.log(addArrow);

function addDecl(a, b) {
  return a + b;
}

let addExpress = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => {
  return a + b;
};

// NEVER USE VAR. ITS CAUSES ERRORS & BUGS

// console.log(numProduct);

if (!numProduct) deleteShoppingCart();

var numProduct = 70;

// console.log(numProduct);

function deleteShoppingCart() {
  console.log('delete shopping Cart');
}

// VAR IS WINDOW OBJECT

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// console.log(window);

// THIS KEYWORD

const Jesus = {
  year: 1994,
  calcAge: function () {
    console.log(this.year);
  },
};

Jesus.calcAge();

// Method borrowing

const matilda = {
  year: 1999,
};
matilda.calcAge = Jesus.calcAge;
matilda.calcAge();

const f = matilda.calcAge;
// console.log(f());
// f();

const Test = {
  year: 2011,
  calcYear: function () {
    console.log(this.year);
    let self = this;
    // const greet = function () {
    //   console.log(self.year - 10);
    // };
    // greet();

    const greet = () => {
      console.log(this.year - 4);
    };
    greet();
  },
};

Test.calcYear();

// Argument Keyword
const addEx = function (a, b) {
  console.log(arguments);
  return a + b;
};

addEx(2, 5, 6, 7);

const arr = (a, b) => {
  console.log(arguments);

  return a + b;
};
// arr(2, 5, 8);

// PRIMITVE & REFERENCE VALUES

// PRIMITIVE VALUES - Number, strings, Boolean, Bigint, undefined, null, symbol, NAN

// When primitive values are created, An identifier, Address & Values are created in the callstack;
// The Identifier holds the variable name, which comes with a distinct address. the value is then stored in this address

// an address is created and age points to that address
let age = 30;

// oldage is pointing to the address thats holding the value 30
let oldage = age;

// a new address is created to hold this value, and the age variable now points to thisnew address
age = 31;

// REFERENCE VALUES - Objects, functions etc

// When an object is created, an address and value is created both in the CALLSTACK and in the HEAP. When you assign a new variable to the previously created object(essentially copying the properties and values) and you change the value of any of the properties of the new variable, it also afeect the previous object.
const mee = {
  name: 'jonas',
  age: 40,
};

const friend = mee;

friend.age = 20;

friend.club = 'barcelona';

console.log('friend', friend);
console.log('mee', mee);

// copying Objects

const jessica = {
  lastName: 'williams',
  firstName: 'Jessica',
  age: 28,
  family: ['alice', 'tola'],
};

const Jessica2 = Object.assign({}, jessica);

Jessica2.lastName = 'Davis';

console.log(Jessica2, jessica);

Jessica2.family.push('joy');

console.log(Jessica2, jessica);
