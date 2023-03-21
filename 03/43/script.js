'use strict';

const jihun = {
  firstName: 'Jihun',
  lastName: 'Park',
  age: 2022 - 1992,
  job: 'programmer',
  friends: ['Jordan', 'Kobe', 'Steph'],
};

// console.log(jihun);
// console.log(jihun.lastName);
// console.log(jihun['lastName']);

const nameKey = 'Name';
console.log(jihun['first' + nameKey]);
console.log(jihun['last' + nameKey]);

const interestedIn = prompt('Wsup');

// if (jihun[interestedIn]) {
//   console.log(jihun[interestedIn])
// } else {
//   console.log('what did you type')
// }

jihun.location = 'Korea';
jihun['instagram'] = '@jihunypark';
console.log(jihun);

// Challenge 3 
console.log(`Jihun has ${jihun.friends.length} friends, and his best friend is called ${jihun.friends[0]}`)