'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(typeof guess, guess);

  if (!guess) {
    document.querySelector('.message').textContent = '❌ No number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '👍 Correct Number';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Number is too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💀 You lost the game ';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Number is too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💀 You lost the game ';
      document.querySelector('.score').textContent = 0;
    }
  }
});
