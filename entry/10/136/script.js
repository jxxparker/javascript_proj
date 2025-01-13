"use strict";

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// higher order function
const transformer = function (str, fn) {
  console.log(`1: original string: ${str}`);
  console.log(`2: transformed string: ${fn(str)}`);
  console.log(`3: transformed by: ${fn.name}`);
};

// transformer("Javascript is the best", upperFirstWord);
// transformer("Javascript is the best", oneWord);

const high5 = function () {
  console.log("HIGH");
};

document.body.addEventListener("click", high5);

["Jihun", "Jordan", "Kobe"].forEach(high5);
