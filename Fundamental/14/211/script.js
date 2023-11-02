"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  this.calcAge = function () {
    console.log(2023 - this.birthYear);
  };
};

const jihun = new Person("Jihun", 1992);
// console.log(jihun);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const demar = new Person("Demar", 1993);
const james = new Person("James", 1935);
// console.log(demar, james);

// const jay = "Jay";
// console.log(jihun instanceof Person);
// console.log(jay instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jihun.calcAge();
demar.calcAge();

console.log(jihun.__proto__);
console.log(jihun.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jihun));
