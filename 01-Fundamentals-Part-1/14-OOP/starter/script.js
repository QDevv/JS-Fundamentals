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

Mercedes.accelerate();
Mercedes.brake();
