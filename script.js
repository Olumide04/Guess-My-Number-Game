'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;

// document.querySelector('.message').textContent = 'Correct Answer!!!';

// let guessNumber = document.querySelector('.guess');

// guessNumber.value = 23;

let guessMyNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber);

  // When there is no input
  if (!guessNumber) {
    // document.querySelector('.message').textContent = '⛔No Number';
    displayMessage('⛔No Number');
  }
  // When player wins
  else if (guessNumber === guessMyNumber) {
    // document.querySelector('.message').textContent = '🎉Correct Answer!!!';
    displayMessage('🎉Correct Answer!!!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = guessMyNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  if (guessNumber !== guessMyNumber) {
    // document.querySelector('.message').textContent =
    //   guessNumber > guessMyNumber ? '📈Too High!!' : '📉Too Low!!';
    displayMessage(
      guessNumber > guessMyNumber ? '📈Too High!!' : '📉Too Low!!'
    );
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      // document.querySelector('.message').textContent = '💥You lost the game';
      displayMessage('💥You lost the game');
      document.querySelector('.score').textContent = score = 0;
    }
  }

  // When guess is too high
  // else if (guessNumber > guessMyNumber) {
  //   document.querySelector('.message').textContent = '📈Too High!!';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  //   if (score < 1) {
  //     document.querySelector('.message').textContent = '💥You lost the game';
  //     document.querySelector('.score').textContent = score = 0;
  //   }
  // }
  // // When guess is too low
  // else if (guessNumber < guessMyNumber) {
  //   document.querySelector('.message').textContent = '📉Too Low!!';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  //   if (score < 1) {
  //     document.querySelector('.message').textContent = '💥You lost the game';
  //     document.querySelector('.score').textContent = score = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  guessMyNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').textContent = '?';

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
