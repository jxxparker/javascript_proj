'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; 
console.log(secretNumber)

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // When no number is inserted
    if (!guess) {
       displayMessage('☠️ No Number');
    
    // When you guess the number right
    } else if (guess === secretNumber) {
        displayMessage('👍🏻 Correct Number');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess != secretNumber) {
        if (score > 1) {
          displayMessage(guess > secretNumber ? "📈 Too High" : "📉 Too Low");
          score -= 1;
          document.querySelector(".score").textContent = score;
        } else {
          displayMessage("☠️ You lost the game");
          document.querySelector(".score").textContent = 0;
        }
    }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start Guessing . . .";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "??";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});