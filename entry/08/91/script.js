"use strict";

function calcAge(birthYear) {
  const age = 2025 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && 1996) {
      var millenial = true;
      const firstName = "Steven";
      const str = `You are millenial, ${firstName}`; // this is printing steven because its in same block
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      //   output = "new output";
    }
    // console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = "Jihun";
calcAge(1992);
