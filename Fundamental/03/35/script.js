
// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow Function
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1992);
console.log(age3);


const yearRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearRetirement(1960, 'james'));