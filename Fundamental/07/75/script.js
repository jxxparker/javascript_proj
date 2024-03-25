'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 7;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number :(';

    // When Player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number :))';
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
