// Basic Array operations ( Methods )

// Add Elements
const friends = ['Jihun', 'Jordan', 'Mike'];
const newFriends = friends.push('Jay');
console.log(friends);
console.log(newFriends);

friends.unshift('John'); // Puts it on first
console.log(friends);


// Remove elements
const popped = friends.pop(); // Last
console.log(popped);
console.log(friends);

friends.shift(); //removes unshift
console.log(friends);

console.log(friends.indexOf('Jihun')); // shows where they are placed

console.log(friends.includes('Jordan'));