"use strict";

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: "Jihun",
  age: 30,
};

const friend = me;
friend.age = 25;

console.log("Friend:", friend);
console.log("Me:", me);
