'use strict';

// Variable
console.log(me);

var me = 'Jihun';
let job = 'teacher';
const year = 1992;

// Function 
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3)); // doesn't work
// console.log(addArrow(2, 3)); // doesnt work

function addDecl(a,b) {
    return a + b;
};

const addExpr = function(a,b) {
    return a + b;
};

const addArrow = (a,b) => a + b;

// Example

console.log(undefined);
if (!numProducs) deleteShoppingCart();

var numProducs = 10;

function deleteShoppingCart() {
    console.log("all products deleted");
};

var x = 1;
var y = 2;
const z = 3;

console.log(x === window.x);

