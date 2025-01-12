"use strict";

const booking_s = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  booking_s.push(booking);
};

createBooking("JHP0306", 2);
createBooking("KGC1013", 3, 299);
createBooking("HJP", 5);
