"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Student.prototype = Object.create(Person.prototype);

Student.prototype = Person.prototype;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course} `);
};

const mike = new Student("Mike", 2020, "Computer sci");
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);

console.log(mike.__proto__.proto__);

console.log(mike instanceof Student);
