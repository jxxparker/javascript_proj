'use strict';

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'JH',
    bookings: [],

    // book: function() {}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
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
lufthansa.book(239, 'Jihun Park');
book.call(eurowings, 23, 'Sarah wills')
book.call(lufthansa, 239, 'Jimmy Buttler');


// Apply method
const flightData = [583, 'Geroge Cooper'];
book.apply(swiss, flightData);