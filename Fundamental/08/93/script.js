"use strict";

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age} born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true; // var is function scoped
      const firstName = "JamesP";
      const str = `${firstName} is MILLENIAL`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      output = "newoutput";
    }
    console.log(output);
    // add(2, 3);
  }
  printAge();
  return age;
}

const firstName = "Jihun";
calcAge(1991);
// console.log(age);
// printAge();
