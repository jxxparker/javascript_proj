"use strict";

var me = "Jihun";
let job = "support engineer";
const year = 1992;

// function
// console.log(addDecl(1, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(3, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("all products deleted");
}

var x = 1;
let y = 2;
const x = 3;

console.log(x === window.x);
