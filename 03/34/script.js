
// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
  
}
const age1 = calcAge1(1992);


// Function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1993);


console.log(age1, age2);