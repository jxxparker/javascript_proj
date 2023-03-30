'use strict';

// var firstName = 'Jordan';

const jihun = {
  firstName: 'Jihun',
  year: 1992,
  calcAge: function() {
    // console.log(this);
    console.log(2022 - this.year);

    // Solution 1
    // const self = this; // can be called self or that
    // const isMillenial = function() {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };


    // Solution 2
    const isMillenial = () => { // arrow function works with this.
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`)
  },

  // greet: function() {
  //   console.log(this);
  //   console.log(`Hey ${this.firstName}`);
  // },
};

// jihun.greet();
jihun.calcAge();


// Arguments keyword
const addExpr = function(a,b) {
  console.log(arguments);
  return a + b;
};
addExpr(30, 39);
addExpr(10,15, 11, 23);

var addArrow = (a,b) => { 
  console.log(arguments);
  return a + b;
};
addArrow(2,4,5);










