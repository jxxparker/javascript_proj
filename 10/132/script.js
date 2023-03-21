'use strict';

const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet('Hey');
greeterHey('Jihun');
greeterHey('James');

greet('Hello')('Jordan');

// Challenge
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr('Wsup')('kobe');