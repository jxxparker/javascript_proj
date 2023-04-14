'use strict';

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};


const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
    
};


// Higher order function
const transformer = function(str, fn) {
    console.log(`Original : ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by ${fn.name}`);
};


// transformer('Javascript is the best', upperFirstWord);
transformer('JAVASCRIPT SUCKS', oneWord);

const high5 = function() {
    console.log('WAVING');
}
document.body.addEventListener('click', high5)

['Jihun', 'James'].forEach(high5);