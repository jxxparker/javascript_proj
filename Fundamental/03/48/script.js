"use strict";

const jonasArray = [
  "Jonas",
  "Park",
  2023 - 1992,
  "teacher",
  ["Jimmy", "Peter", "Jason"],
];

// 0, 1 ..., 4
// 4, 3 ..., 0

for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---- starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`lifting weights repitittion ${rep}`);
  }
}
