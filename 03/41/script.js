// Coding Challenge # 2

'use strict'; 

const calcTip = function(billTotal) {
    let tipValue;
    let newBill; 
    if (billTotal > 50 && billTotal < 300) {
        tipValue = billTotal * 0.15;
        newBill = billTotal + tipValue
        console.log(`Tip will be 15%. So new Bill is ${newBill}`)
    } else {
        tipValue = billTotal * 0.20;
        newBill = billTotal + tipValue;
        console.log(`Tip will be 20%. So new Bill is ${newBill}`);
    };
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
