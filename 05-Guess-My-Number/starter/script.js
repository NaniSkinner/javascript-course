'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// handling the check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // No Number entered
  if (!guess) {
    displayMessage('No Number 🚫');
  } else if (guess === number) {
    displayMessage('Correct Number Lucas! 🏒');
    document.querySelector('body').style.backgroundColor = 'blue';
    document.querySelector('.number').style.width = '45rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // show the secret number//
    document.querySelector('.number').textContent = number;
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? 'Too High!☝🏼' : 'Too Low! 👎🏼');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!😫');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  let score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing 🤓');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  doc;
});
