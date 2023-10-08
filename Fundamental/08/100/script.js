"use strict";

// Primitive Types

let lastName = "Park";
let oldLastName = lastName;
lastName = "Parker";
console.log(lastName, oldLastName);

// Reference types

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Parkers";
// console.log(`Before marriage:`, jessica);
// console.log(`After marriage:`, marriedJessica);

// Copying objects

const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

jessicaCopy.family.push("MarY");
jessicaCopy.family.push("Johny");

console.log(`Before marriage:`, jessica2);
console.log(`After marriage:`, jessicaCopy);
