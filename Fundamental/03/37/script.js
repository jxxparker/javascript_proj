'use strict';

// const yearsRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

const calcAge = function (birthYear) {
  return 2022 - birthYear;
}

const yearsRetirement = function (birthYear, firstName) {
  const age = 2022 - birthYear;
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} retires in ${retirement} years`);
    return 'errors';
  }
}

console.log(yearsRetirement(1992, 'Jihun'));
console.log(yearsRetirement(2002, 'Jihunypark'));