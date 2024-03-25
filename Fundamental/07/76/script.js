'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 7;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number :(';

    // When Player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number :))';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // When Guess is too high
  } else if (guess > secretNumber) {
    if (score > 0) {
      score--;
      document.querySelector('.message').textContent = 'Too High';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game, sorry';
    }

    // When Guess is too low
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

document.querySelector('.again').addEventListener('click', function () {
  score = 7;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Playing again';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
