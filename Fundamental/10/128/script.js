"use strict";

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5

  // numPassengers = numPassengers || 1;
  // price = price || 199;

  // --------------------------------

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("JP360");
createBooking("JP3601", 2, 800);
createBooking("JP36011", 5);
