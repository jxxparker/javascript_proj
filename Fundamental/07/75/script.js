'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1; // random number from 0 - 19
let score = 10;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

    // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '👻 No Number';

    // When Player Wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '👍🏻 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem';

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📈 Too High';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '☠️ You lost the game';
    }

    // When guess is too low
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
