"use strict";

const jonas = {
  firstName: "Jihun",
  lastName: "Park",
  birthYear: 1992,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function (birthYear) {
    return 2023 - birthYear;
  },

  calcAge2: function () {
    console.log(this);
    return 2024 - this.birthYear;
  },
};

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

console.log(jonas.calcAge(1990));
console.log(jonas.calcAge2());
