"use strict";

// var firstName = "Kobe";

const jordan = {
  firstName: "jordan",
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);

    // Solution 1
    const self = this; // self or that
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
      // console.log(this.year >= 1981 && this.year <= 1996);

      // Solutin 2
      // const isMillenial = function () {
      //   console.log(this);
      //   console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jordan.greet();
jordan.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(4, 6);

// var addArrow = (a, b) => a + b;
