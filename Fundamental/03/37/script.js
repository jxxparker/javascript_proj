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


// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// };

// const age1 = calcAge1(1992);
// console.log(age1);


// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };


// const age2 = calcAge2(1990);
// console.log(age1, age2);


// Arrow Fxn

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1989);
// console.log(age3);


// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1992, 'Jihun'));

// function cutFruitPieces (fruit) {
//   return fruit * 4;

// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces (apples);
//   const orangePieces = cutFruitPieces (oranges);

//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// };

// console.log(fruitProcessor(2, 3));

const calcAge = function(birthYear){
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return `${firstName} is retired`;
  }
  
}

console.log(yearsUntilRetirement(1992, 'Jihun'));
console.log(yearsUntilRetirement(1950, 'James'));