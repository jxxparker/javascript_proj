"use strict";

var firstName = "Kobe";

const jordan = {
  firstName: "jordan",
  year: 1998,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jordan.greet();
