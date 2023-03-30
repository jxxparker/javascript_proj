// while loop

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6)

while (dice != 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) +1;
}