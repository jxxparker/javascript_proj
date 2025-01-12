"use strict";

const flight = "JHP0306";
const jihun = {
  name: "jihun park",
  passport: 361992,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "JHP0306Changed";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 361992) {
    alert("check in ");
  } else {
    alert("wrong passport");
  }
};

checkIn(flight, jihun);
console.log(flight);
console.log(jihun);

const flightNum = flight;
const passenger = jihun;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000);
};

newPassport(jihun);
checkIn(flight, jihun);
