const age = 15;


if (age >= 18) {
    console.log('you can start driving')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`)
}

let century;
const birthYear = 1991;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);