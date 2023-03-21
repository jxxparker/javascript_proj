// Looping arrays, breaking and continuing

const jihun = [
    'Jihun',
    'Park',
    2022- 1992,
    'Programmer',
    ['Jihun', 'Jordan', 'Mike'],
    true,
];
const types = [];

for(let i = 0; i < jihun.length; i++) {
    // Reading from array
    console.log(jihun[i], typeof jihun[i]);

    // Filling types array
    // types[i] = typeof jihun[i];
    types.push(typeof jihun[i]);
};

console.log(types);

const years = [1991, 1992, 1993, 1994, 1995];
const ages = [];
for(let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i]);
}
console.log(ages);

// Continue and Break
console.log('========strings-=========')
for(let i = 0; i < jihun.length; i++) {
    if (typeof jihun[i] !== 'string') continue;
    console.log(jihun[i], typeof jihun[i]);
};

console.log('========number-=========')
for(let i = 0; i < jihun.length; i++) {
    if (typeof jihun[i] === 'number') break;
    console.log(jihun[i], typeof jihun[i]);
};
