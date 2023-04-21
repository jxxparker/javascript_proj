'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'JH',
  bookings: [],

  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    this.bookings.push({ flight: `${this.iataCode}${flightNum}, name` });
  },
};
const book = lufthansa.book;

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss flight',
  iataCode: 'SW',
  bookings: [],
};

// Call Method
// lufthansa.book(239, 'Jihun Park');
// book.call(eurowings, 23, 'Sarah wills');
// book.call(lufthansa, 239, 'Jimmy Buttler');

// Apply method
// const flightData = [583, 'Geroge Cooper'];
// book.apply(swiss, flightData);

// Bind Method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

// bookEW(56, 'Steven Jackson');

const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jordan Deandre');
// bookEW23('Deandre Andre');


// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++
  console.log(this.planes);
};
// lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application

const addTax = (rate, value) => value + value * rate; 
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23; 

console.log(addVAT(100));
console.log(addVAT(23));