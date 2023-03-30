// looping backwards

const jihun = [
  'jihun',
  'park',
  2022 - 1992,
  'programmer',
  ['jordan', 'lebron', 'kobe'],
];

for (let i = jihun.length - 1; i > 0; i--) {
    console.log(i, jihun[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log('--- starting exercise ---');
    console.log(`${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`lifting weight rep ${rep}`)
    }
}