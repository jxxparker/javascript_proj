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
const bookEw = book.bind(eurowings);
const bookLh = book.bind(lufthansa);
const bookSw = book.bind(swiss);
// bookEw(23, 'Mike Jordan');

const bookEw23 = book.bind(eurowings, 34);
// bookEw23('Jihun Park');
// bookEw23('James Park');


// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);

    this.planes++
    console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
// addVat = value => value + value * 0.23
console.log(addVat(100));

const addTaxRate = function(rate) {
    return function (value) {
        return value + value * rate;
    };
};

const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));
