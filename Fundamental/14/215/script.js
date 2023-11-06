"use strict";

// class express
const PersonCl1 = class {};

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Method will be added to .prototype property
  calcAge() {
    console.log(2023 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl("Jessica", 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

// 1. Classes are not hoisted
// 2. Classes are first class citizens
// 3. Classes are executed in strict mode

const account = {
  owner: "jihun",
  movements: [200, 530, 120, 340],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

PersonCl.hey = function () {
  console.log("Hello there ---");
  console.log(this);
};

PersonCl.hey();

const PersonProto = {};
