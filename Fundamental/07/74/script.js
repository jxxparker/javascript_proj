'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 7;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number :(';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number :))';
  } else if (guess > secretNumber) {
    if (score > 0) {
      score--;
      document.querySelector('.message').textContent = 'Too High';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game, sorry';
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      score--;
      document.querySelector('.message').textContent = 'Too Low';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game, sorry';
    }
  }
});
