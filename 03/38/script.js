
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));


// Test 1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);


// Create fxn checkWinner
const checkWinner = function(a, b) {
    if (a > b) {
        console.log(`${a} wins`);
    } else if (b > a) {
        console.log(`${b} wins`)
    } else {
        console.log('Draw');
    }
};

checkWinner(scoreDolphins, scoreKoalas);