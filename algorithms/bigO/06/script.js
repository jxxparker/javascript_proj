function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
    console.log(total);
  }
  return total;
}
let t1 = performance.now();
addUpTo(5);
let t2 = performance.now();
console.log(`Time elapsed : ${(t2 - t1) / 1000} seconds`);

// Another way
function addUpTo2(n) {
  console.log((n * (n + 1)) / 2);
}
// addUpTo2(5);
