"use strict";

const greet = function (greeting) {
  return function (name) {
    console.log(` ${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Jihuny");
greeterHey("Jordan");

greet("Hello")("Kevin");

// Challenge

const greetArr = (greeting) => (name) => console.log(` ${greeting} ${name}`);
greetArr("What it do")("Steve");
