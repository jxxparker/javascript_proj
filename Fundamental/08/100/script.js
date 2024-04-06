"use strict";

//Primitve types
let lastName = "williams";
let oldLastName = lastName;
lastName = "Davis";
// console.log(lastName, oldLastName);

//Refernce types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log(`Before marriage: `, jessica);
console.log(`After marriage: `, marriedJessica);

marriedJessica = {};
