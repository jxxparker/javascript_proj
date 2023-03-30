const dolphins = (96 + 108 + 89) / 3
const koalas = (88 + 91 + 110) / 3

console.log(dolphins, koalas);

if (dolphins == koalas) {
    console.log('Score is tied');
} else if (dolphins > koalas) {
    console.log('Dolphins win');
} else if (dolphins < koalas ) {
    console.log('Koalas win');
}
