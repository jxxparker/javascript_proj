'use strict';

function logger() {
  console.log('My name is Jihun');
}

// Calling the Function
// logger();

function fruitProcessor(fruit1, fruit2) {
  const juice = `Juice with ${fruit1} and ${fruit2}`;
  return juice;
}

fruitProcessor('Banana', 'Grapes');
fruitProcessor(5, 2);

const appleOrangeJuice = fruitProcessor('dragonfruit', 'sweetapples');
console.log(appleOrangeJuice);