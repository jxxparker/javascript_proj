'use strict';

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    },
};

lufthansa.book(234, 'Jihun park');
lufthansa.book(635, 'Jimmy Butler');
// console.log(lufthansa);

const euroWings = {
    airline: 'Eurowings',
    iataCode: 'EURO',
    bookings: [],

};

const bookReal = lufthansa.book;

bookReal.call(euroWings, 23, 'Mike Jordan');
bookReal.call(lufthansa, 123, 'abc');

const swiss = {
    airline: 'Swiss Airlines',
    iataCode: 'SW',
    bookings: []
};

bookReal.call(swiss, 567, 'SWALLISON');


const flightData = [583, 'George Lucas'];
bookReal.apply(swiss, flightData);
console.log(swiss);