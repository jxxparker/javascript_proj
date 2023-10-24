"use strict";

const runOnce = function () {
  console.log("This will never run again");
};

runOnce();

(function () {
  console.log("this will never runa gain");
})();

() => console.log("this will never runa gain")();
