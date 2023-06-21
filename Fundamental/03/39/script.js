'use strict';

const friend1 = 'Michael';
const friend2 = 'Jimmy';
const friend3 = 'Peter';

const friends = ['Michael', 'Jimmy', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);

friends[2] = 'Jay';
console.log(friends);

// friends = ['Bob', 'Alice']; // illegal

const firstName = 'Jihun';
const jihun = [firstName, 'Park', 2023 - 1992, 'friends'];
console.log(jihun);

// Exercise
const calcAge = function(birthYear) {
  return 2037 - birthYear;
}

const years2 = [1990, 1967, 2002, 2010, 2019];
const age3 = calcAge(years2[0]);
console.log(age3);