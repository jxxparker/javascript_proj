// 'use strict';

// function logger () {
//   console.log('My name is Jihun');
// };

// // Calling the fxn
// logger();


// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// };

// const appleJuice = fruitProcessor(5, 3);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 4));


// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


function calcAge1(birthYear) {
  return 2023 - birthYear;
};

const age1 = calcAge1(1992);
console.log(age1);


const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};


const age2 = calcAge2(1990);
console.log(age1, age2);