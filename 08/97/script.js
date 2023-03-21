'use strict';

console.log(this);

// ---
const calcAge = function(birthYear) {
  console.log(2022 - birthYear);
  // console.log(this);
};
calcAge(1992);

// ---
const calcAgeArrow = birthYear => {
  console.log(2022 - birthYear);
  // console.log(this);
};
calcAgeArrow(1980);

// ---
const jihun = {
  year: 1992,
  calcAge: function() {
    // console.log(this);
    console.log(2022 - this.year);
  }
}
jihun.calcAge();

// ---
const matilda = {
  year: 2017,
};

matilda.calcAge = jihun.calcAge;
matilda.calcAge();
