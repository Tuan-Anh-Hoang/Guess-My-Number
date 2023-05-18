'use strict';

//khai báo biến
let secretNumber = generateSecretNumber();
let score = 20;
let highscore = 0;

//hàm
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

//hàm để tạo số bí mật
function generateSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

//hàm kiểm tra số được người chơi đoán
function checkGuess() {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔ No number');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈To high!' : '📉To low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
}

function restartGame() {
  score = 20;
  secretNumber = generateSecretNumber();
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}

document.querySelector('.check').addEventListener('click', checkGuess);
document.querySelector('.again').addEventListener('click', restartGame);
