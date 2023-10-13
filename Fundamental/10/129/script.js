"use strict";

const flight = "JP360";
const jihun = {
  name: "Jihun Park",
  passport: 36036092,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "ABC123";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 36036092) {
    alert("Checked In");
  } else {
    alert("Wrong Passport");
  }
};

checkIn(flight, jihun);
console.log(flight);
console.log(jihun);

//Is the same as doing ...
const flightNum = flight;
const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(jihun);
checkIn(flight, jihun);
