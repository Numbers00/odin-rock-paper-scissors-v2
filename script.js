let gamerNamer = require('gamer-namer');
let epithetNamer = require('epithet');

window.onload = () => {
  console.log(gamerNamer.generateName(), epithetNamer.choose());
  document.getElementById('name').placeholder = gamerNamer.generateName();
  document.getElementById('epithet').placeholder = epithetNamer.choose();
}

let names = [];
let epithets = [];

document.getElementById('user-input-container').addEventListener('keydown', e => {
  if (e.keyCode === 13) {
    if (document.getElementById('name').value === '') names.push(document.getElementById('name').placeholder);
    else names.push(document.getElementById('name').value);

    if (document.getElementById('epithet').value === '') epithets.push(document.getElementById('epithet').placeholder);
    else epithets.push(document.getElementById('epithet').value);

    startMatching();
  }
})

function startMatching() {

}

let selections = ['rock', 'paper', 'scissors'];

let playerSelection = '';

let playerScore = 0;
let computerScore = 0;

function startGame() {
  
}

function playRound(playerSelection) {
  let result = '';

  let computerSelection = computerPlay();

  switch (playerSelection) {
    case 'rock':
      computerSelection === 'rock' ? result = 'It\'s a Tie! You\'re both Rocks!' :
          computerSelection === 'paper' ? result = 'You Lose! Paper beats Rock!' :
              result = 'You Win! Rock beats Scissors!';
      break;
    case 'paper':
      computerSelection === 'rock' ? result = 'You Win! Paper beats Rock!' :
          computerSelection === 'paper' ? result = 'It\s a Tie! You\'re both Papers!' :
              result = 'You Lose! Scissors beats Paper!';
      break;
    case 'scissors':
      computerSelection === 'rock' ? result = 'You Lose! Rock beats Scissors!' :
          computerSelection === 'paper' ? result = 'You Win! Scissors beats Paper!' :
              result = 'It\'s a Tie! You\'re both Scissors!';
      break;
    default:
      computerSelection === 'rock' ? result = 'It\'s a Tie! You\'re both Rocks!' :
          computerSelection === 'paper' ? result = 'You Lose! Paper beats Rock!' :
              result = 'You Win! Rock beats Scissors!';
  }

  return result;
}

function playerPlay() {
  return selections[Math.floor(Math.random() * 3)]
}

function computerPlay() {
  return selections[Math.floor(Math.random() * 3)]
}
