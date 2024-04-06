"use strict";

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformer string: ${fn(str)}`);

  console.log(`Transformer by: ${fn.name}`);
};

transformer("Javascript is the best", upperFirstWord);
transformer("Javscript is the bestEST", oneWord);
