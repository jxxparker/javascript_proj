'use strict';

const bookings = [];

const createBooking = function(
  flightNum, 
  numPassengers = 1, 
  price = 199 * numPassengers
  ) 
{
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  
  const booking = {
    flightNum,
    numPassengers,
    price,
  }
  console.log(booking);
  bookings.push(booking);
};

createBooking('ABC123');
createBooking('ABCD123', 2, 900);
createBooking('ABCD123', 2);