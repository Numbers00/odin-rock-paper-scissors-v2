let names = [];
let epithets = [];

document.getElementById('user-input-container').addEventListener('keydown', e => {
  if (e.keyCode === 13) {
    names.push(document.getElementById('name').value);
    epithets.push(document.getElementById('epithet').value);

    console.log(names[0], epithets[0]);
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
