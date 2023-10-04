"use strict";

// var firstName = "Jordan";

const jihun = {
  firstName: "Jihun",
  year: 1992,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);

    const isMillenial = function () {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jihun.greet();
jihun.calcAge();
