const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

/* Write your code below. Good luck! 🙂 */

const bills = [48, 75, 125, 310, 45, 220, 88, 150, 290, 95];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

console.log("Tips:", tips);
console.log("Totals:", totals);
