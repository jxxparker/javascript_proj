'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('No Number. Enter Number please');

    // When Player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number! You Win');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When Guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost sorry. Press play again');
    }
  }
});

// again button
document.querySelector('.again').addEventListener('click', function () {
  score = 7;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Play Again !!!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
