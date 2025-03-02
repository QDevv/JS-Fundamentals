'use strict';
const Person = function (name, birthyear) {
  this.name = name;
  this.birthyear = birthyear;

  // NEVER DO THIS

  // calcAge = function () {
  //   console.log(2037 - birthyear);
  // };
};

const james = new Person('james', 1996);

console.log(james);

// what happened behind the scene

// 1; New Object is created
// 2. function is called, this ={}
// 3. {} linked to prototype
//4. function automatically returns prototype

const matilda = new Person('matilda', 1999);
const joe = new Person('joe', 1985);

console.log(joe, matilda);

console.log(matilda instanceof Person);

console.log(joe instanceof Person);

// PROTOTYPE
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthyear);
};

james.calcAge();

//calcage function could be called on James obj due to prototypal inheritance
console.log(james.__proto__);
console.log(Person.prototype.isPrototypeOf(matilda));

//prototypeOfLinkedProperties
console.log(james.hasOwnProperty('name'));

console.log(typeof [2, 4]);

// coding challenge //
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const BMW = new Car('BMW', 120);
const Mercedes = new Car('Mercedes', 95);

BMW.accelerate();
BMW.brake();
BMW.accelerate();

// Mercedes.accelerate();
// Mercedes.brake();

// ES6 CLASSES

const PersonCl = class {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Method will be added to the .prototype property of the PersonCl class
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('this is a static method');
  }
};

const jessica = new PersonCl('Jessica Davies', 1995);

console.log(jessica);
console.log(jessica.fullName);

//the calcage will be avilable on the object(jessica) prototype
//the method will be on the prototype of the obj and not the obj themself
jessica.calcAge();
console.log(jessica.age);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName} is ${2037 - this.birthYear} `);
};

jessica.greet();

const morton = new PersonCl('Morton Dave', 1987);

morton.calcAge();

console.log(morton._fullName);

//1. Classes are not hoisted
//2. Classes are firstClass citizens
//3. Classes are executed in strict mode

const acct = {
  owner: 'mason',
  movements: [20, 45, 33, 10],
  get Latest() {
    return this.movements.slice(-1)[0];
  },
  set Latest(mov) {
    this.movements.push(mov);
  },
};

acct.Latest = 70;
console.log(acct.movements);

PersonCl.hey = function (params) {
  console.log(`hey there ---`);
};
PersonCl.hey();

// Object.CREATE

const personProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.birthYear = birthYear;
    this.firstName = firstName;
  },
};

const steven = Object.create(personProto);

console.log(steven);

steven.name = 'steven banks';

steven.birthYear = 2000;

steven.calcAge();

const max = Object.create(personProto);
max.init('maxwell jones', 1993);
max.calcAge();

//////////////////

const Vehicle = class {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  get speedUS() {
    return this.speed;
    sss;
  }
  // constructor
  set speedUS(par) {
    this.speed = this.speed / 1.6;
  }
};

const ford = new Vehicle('ford', 120);

console.log(ford.speedUS);
