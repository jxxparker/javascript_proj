'use strict';

// let lastName = 'Park';
// let oldLastName = lastName;
// lastName = 'Kim';

// console.log(lastName, oldLastName);

// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before Marriage:', jessica);
// console.log('After Marriage:', marriedJessica);

// Copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  famliy: ['Kelly', 'Jihun'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.famliy = ['DeAndre'];
console.log(jessica2);
console.log(jessicaCopy);

