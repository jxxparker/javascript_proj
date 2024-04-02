"use strict";

const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this);
};
// calcAge(1992);

const calcAgeArrow = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
// calcAgeArrow(2024);

const jihun = {
  year: 1992,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);
  },
};
// jihun.calcAge();

const jordan = {
  year: 2006,
};
jordan.calcAge = jihun.calcAge;
jordan.calcAge();
