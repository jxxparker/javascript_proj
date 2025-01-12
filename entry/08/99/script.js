"use strict";

console.log(this);

const calcAge = function (birthYear) {
  const age = 2025 - birthYear;
  console.log(this);
};
calcAge(1992);
