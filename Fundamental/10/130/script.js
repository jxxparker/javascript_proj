"use strict";

const flight = "LH234";
const jihun = {
  name: "Jihun Park",
  passport: 246810,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 246810) {
    alert("Check in");
  } else {
    alert("wrong passport");
  }
};

// checkIn(flight, jihun);
// console.log(flight);
// console.log(jihun);

// const flightNum = flight;
// const passenger = jihun;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000);
};

newPassport(jihun);
checkIn(flight, jihun);
