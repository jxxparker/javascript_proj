'use strict';

const flight = 'LH234';
const jihunpark = {
    name: 'Jihun Park',
    passport: 12345678,
};

const checkIn = function (flightNum, passenger) {
    passenger.name = 'Mr. ' + passenger.name
    flightNum = 'LH123'
    
    if (passenger.passport === 12345678) {
        alert('Checked In')
    } else {
        alert('WRONG PASSPORT')
    }

    console.log(passenger.name, flightNum);
};

checkIn(flight, jihunpark);
// console.log(jihunpark);

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 100);
};

newPassport(jihunpark);
checkIn(flight, jihunpark);










