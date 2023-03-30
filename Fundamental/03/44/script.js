

const jihun1 = {
  firstName: 'Jihun',
  lastName: 'Park',
  birthYear: 1992,
  job: 'Programmer',
  friends: ['Jordan', 'Mike', 'Shaq'],
  hasDrivers: true,

  // calcAge: function(birthYear) {
  //     return 2022 - birthYear;
  // }

  calcAge: function() {
    console.log(this);
    return 2022 - this.birthYear; 
  },

  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jihun.job}, and he has ${this.hasDrivers ? 'a' : 'no'} driver's license`
  }
};

console.log(jihun1.calcAge());
// console.log(jihun.calcAge(1992));
// console.log(jihun['calcAge'](1992));

// Challenge 
// Jonas is 46 year old teacher and he has driver's license

console.log(jihun1.getSummary());




