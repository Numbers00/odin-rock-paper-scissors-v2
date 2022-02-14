const introDiv = document.querySelector('.intro-div');
const inputDiv = document.querySelector('.input-div');

let lastScrollTop = 0;

// credits: https://stackoverflow.com/a/31223774
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
  var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  if (st > lastScrollTop) {
    introDiv.style.visibility = 'hidden';
    inputDiv.style.visibility = 'visible';
  } else {
    inputDiv.style.visibility = 'hidden';
    introDiv.style.visibility = 'visible';
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

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
