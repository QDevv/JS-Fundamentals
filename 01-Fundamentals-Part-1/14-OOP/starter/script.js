'use strict';
const Person = function (name, birthyear) {
  this.name = name;
  this.birthyear = birthyear;
};

const james = new Person('james', 1996);

console.log(james);

// what happened behind the scene

// 1; New Object is created
// 2. function is called, this ={}
// 3. {} linked to prototype
//4. function automatically returns prototype
