"use strict";

const jonas = {
  firstName: "Jihun",
  lastName: "Park",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas');
// console.log(interestedIn);
// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log('Wrong request');
// }

jonas.location = 'Korea';
jonas['instagram'] = '@jihunpark';
console.log(jonas);


//Challenge 
// Jonas has 3 friends, and his best friend is called Michael
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);