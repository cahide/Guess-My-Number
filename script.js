'use strict';

//This game is for guessing the secret number which assigned by computer. The starting score is 20 and each guessing costs 1 score. The maximum score is held until refresh the page or achieved a new max score.

//Set a random number
let secretNumber = getRandom();
let highScore = 0;
//Get the number entered by user
let score = Number(document.querySelector('.score').textContent);

//Whenever user click to check button, compare the entered number with random secret number
//If entered number is higher or smaller than random number print a message that guide user for finding the exact number and set the score.
//if entered number is equal to random number, then end the game of guess
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // If there is no input
    setMessage('No number!');
  } else if (guess === secretNumber) {
    // If the user wins
    document.querySelector('.number').textContent = secretNumber;
    setMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    //If input is too high

    if (score > 1) {
      //If score is enough to play
      if (guess > secretNumber) {
        setMessage('Too high!');
      } else {
        setMessage('Too low!');
      }
    } else {
      //If score is not enough to play
      setMessage('You lost the game!');
    }
    score = score - 1;
    document.querySelector('.score').textContent = score;
  }
});
//If user click the again button, reset the game.
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = getRandom();
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  setMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
});

function setMessage(message) {
  document.querySelector('.message').textContent = message;
}
function getRandom() {
  return Math.trunc(Math.random() * 20) + 1;
}
