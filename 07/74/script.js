'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1; // random number from 0 - 19
let score = 10;
document.querySelector('.number').textContent = secretNumber;


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '👻 No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '👍🏻 Correct Number';
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📈 Too High';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '☠️ You lost the game';
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '☠️ You lost the game';
    }
  } 
});