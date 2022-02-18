window.addEventListener('keydown', (e) => {
  if (e.keyCode === 40) {
    $('.top-div').fadeOut(200);

    setTimeout(() => {
      $('.bottom-div').fadeIn(200).removeClass('invisible');
    }, 200);
  } else if (e.keyCode === 38) {
    $('.bottom-div').fadeOut(200);

    setTimeout(() => {
      $('.top-div').fadeIn(200);
    }, 200);
  }
});

// Credits: https://stackoverflow.com/a/53452241
function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms)
    }, ms)
  })
}


// Credits: https://stackoverflow.com/a/2450976
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

let gamerNamer = require('gamer-namer');
let epithetGiver = require('epithet');

let names = [];
let epithets = [];
let images = [];

let champions = [0];
let wins = [0];

let playerSelection = '';

let nonParticipants = [...Array(63+1).keys()].slice(1);
let advancingParticipants = [];

let playerIsEliminated = false;

window.onload = () => {
  document.getElementById('name').placeholder = 'Name: ' + gamerNamer.generateName().match(/[A-Z][a-z]+/g).join(' ');
  document.getElementById('epithet').placeholder = 'Epithet: ' + epithetGiver.choose().split('-').map(elem => capitalizeFirstLetter(elem)).join(' ');

  console.log(nonParticipants);

  document.getElementById('player-rock').addEventListener("click", (e) => {
    document.getElementById('player-rock').classList.add('selected-card');
    document.getElementById('player-paper').classList.remove('selected-card');
    document.getElementById('player-scissors').classList.remove('selected-card');
    playerSelection = 'rock';
  });
  document.getElementById('player-paper').addEventListener("click", (e) => {
    document.getElementById('player-rock').classList.remove('selected-card');
    document.getElementById('player-paper').classList.add('selected-card');
    document.getElementById('player-scissors').classList.remove('selected-card');
    playerSelection = 'paper';
  });
  document.getElementById('player-scissors').addEventListener("click", (e) => {
    document.getElementById('player-rock').classList.remove('selected-card');
    document.getElementById('player-paper').classList.remove('selected-card');
    document.getElementById('player-scissors').classList.add('selected-card');
    playerSelection = 'scissors';
  });
}

document.getElementById('input-container').addEventListener('keydown', e => {
  if (e.keyCode === 13) {
    if (document.getElementById('name').value === '') names.push(document.getElementById('name').placeholder.replace('Name: ', ''));
    else names.push(document.getElementById('name').value);

    if (document.getElementById('epithet').value === '') epithets.push(document.getElementById('epithet').placeholder.replace('Epithet: ', ''));
    else epithets.push(document.getElementById('epithet').value);

    const imageURL = document.getElementById('image').value;

    if (imageURL !== '' && imageURL !== null) images.push(imageURL);
    else images.push('imgs/template_avatar.png');

    startMatching();
  }
});

const leftDiv = document.getElementsByClassName('left-div')[0];
const avatarCards = document.getElementsByClassName('avatar-cards')[0];

function addAvatarCards(index) {
  const avatarCard = document.createElement('div');
  avatarCard.classList.add("avatar-card");

  const avatarImg = document.createElement('img');
  avatarImg.src = images[index];
  avatarImg.alt = 'Avatar';
  avatarCard.appendChild(avatarImg);

  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');

  const h4 = document.createElement('h4');
  h4.style.margin = 2;
  h4.textContent = names[index];
  textContainer.appendChild(h4);

  const para = document.createElement('p');
  para.style.margin = 2;
  para.textContent = epithets[index];
  textContainer.appendChild(para);

  avatarCard.appendChild(textContainer);

  avatarCards.appendChild(avatarCard);
}

// Credits: https://stackoverflow.com/a/1026087
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Credits: https://stackoverflow.com/a/46774731
function weightedRandom(min, max) {
  return Math.round(max / (Math.random() * max + min));
}

// adds up to a total of 64 avatar cards including the player
async function startMatching() {
  document.getElementsByClassName('avatar-card')[0].remove();

  await $.ajax({
    url: 'https://randomuser.me/api/?results=63',
    dataType: 'json',
    success: (data) => {
      for (elem in data.results) {
        names.push(`${capitalizeFirstLetter(data.results[elem].name.first)} ${capitalizeFirstLetter(data.results[elem].name.last)}`);
        images.push(data.results[elem].picture.large);
      }
    }
  });

  addAvatarCards(0);

  // # of joined contestants in the matching phase will start at this number
  let randNum = Math.floor(Math.random() * 23) + 25;

  for (let i = 1; i < randNum; i++) {
    epithets.push(epithetGiver.choose().split('-').map(elem => capitalizeFirstLetter(elem)).join(' '));
    champions.push(weightedRandom(0,64));
    wins.push(champions[i] * 5 + weightedRandom(0,32));

    if (names[i] === undefined) {
      epithets.pop();
      champions.pop();
      wins.pop();
      i--;
      continue;
    }

    addAvatarCards(i);
  }

  document.getElementById('left-div-title').textContent = `Waiting for Other Players... (${epithets.length}/64)`;

  for (let i = randNum; i < 64; i++) {
    epithets.push(epithetGiver.choose().split('-').map(elem => capitalizeFirstLetter(elem)).join(' '));
    champions.push(weightedRandom(0,64));
    wins.push(champions[i] * 5 + weightedRandom(0,32));

    if (names[i] === undefined) {
      epithets.pop();
      champions.pop();
      wins.pop();
      i--;
      continue;
    }
    addAvatarCards(i);

    // at times, more than 1 new contestants will join
    if (Math.floor((Math.random() * 3) + 1) % 2 != 0) await wait(Math.random() * 400);

    document.getElementById('left-div-title').textContent = `Waiting for Other Players... (${epithets.length}/64)`;
  }

  for (let i = 1; i <= 5; i++) {
    await wait(800);
    if (i % 2 != 0) {
      document.getElementById('left-div-title').textContent = 'Starting Game...';
    } else document.getElementById('left-div-title').textContent = 'Starting Game..';

    if (i === 5) startGame();
  }
}

// function setupGameLayout() {
//   const avatarCard = document.createElement('div');
//   avatarCard.classList.add("avatar-card");

//   const avatarImg = document.createElement('img');
//   avatarImg.src = images[index];
//   avatarImg.alt = 'Avatar';
//   avatarCard.appendChild(avatarImg);

//   const textContainer = document.createElement('div');
//   textContainer.classList.add('text-container');

//   const h4 = document.createElement('h4');
//   h4.style.margin = 2;
//   h4.textContent = names[index];
//   textContainer.appendChild(h4);

//   const para = document.createElement('p');
//   para.style.margin = 2;
//   para.textContent = epithets[index];
//   textContainer.appendChild(para);

//   avatarCard.appendChild(textContainer);
// }

function setupPlayer() {
  const roundLeftDiv = document.getElementsByClassName('round-left-div')[0];

  const leftContestantDetails = roundLeftDiv.querySelector('.left-contestant-details');

  leftContestantDetails.querySelectorAll('p')[0].innerHTML = '<b>Champions:</b> ' + champions[0];
  leftContestantDetails.querySelectorAll('p')[1].innerHTML = '<b>Wins:</b> ' + wins[0];
  
  const leftContestantCards = roundLeftDiv.querySelector('.left-contestant-cards');

  leftContestantCards.querySelector('img').src = images[0];

  const leftTextContainer = leftContestantCards.querySelector('.text-container');

  leftTextContainer.querySelector('b').textContent = names[0];
  leftTextContainer.querySelector('p').textContent = epithets[0];
}

function setupLeft(leftIndex) {
  const roundLeftDiv = document.getElementsByClassName('round-left-div')[0];

  const leftContestantDetails = roundLeftDiv.querySelector('.left-contestant-details');

  leftContestantDetails.querySelectorAll('p')[0].innerHTML = '<b>Champions:</b> ' + champions[leftIndex];
  leftContestantDetails.querySelectorAll('p')[1].innerHTML = '<b>Wins:</b> ' + wins[leftIndex];
  
  const leftContestantCards = roundLeftDiv.querySelector('.left-contestant-cards');

  leftContestantCards.querySelector('img').src = images[leftIndex];

  const leftTextContainer = leftContestantCards.querySelector('.text-container');

  leftTextContainer.querySelector('b').textContent = names[leftIndex];
  leftTextContainer.querySelector('p').textContent = epithets[leftIndex];
}

function setupRight(rightIndex) {
  const roundLeftDiv = document.getElementsByClassName('round-left-div')[0];

  const rightContestantDetails = roundLeftDiv.querySelector('.right-contestant-details');

  rightContestantDetails.querySelectorAll('p')[0].innerHTML = '<b>Champions:</b> ' + champions[rightIndex];
  rightContestantDetails.querySelectorAll('p')[1].innerHTML = '<b>Wins:</b> ' + wins[rightIndex];

  const rightContestantCards = roundLeftDiv.querySelector('.right-contestant-cards');

  rightContestantCards.querySelector('img').src = images[rightIndex];

  const rightTextContainer = rightContestantCards.querySelector('.text-container');

  rightTextContainer.querySelector('b').textContent = names[rightIndex];
  rightTextContainer.querySelector('p').textContent = epithets[rightIndex];
}

function startGame() {
  $('.avatar-cards').fadeOut(200);

  let roundDiv = document.querySelector('.round-div');
  roundDiv.classList.remove('invisible');

  startRound(1);
}

function startRound(roundNum) {
  document.getElementById('left-score').querySelector('b').textContent = 0;
  document.getElementById('right-score').querySelector('b').textContent = 0;

  advancingParticipants = [];

  let randNonParticipants = [];

  if (nonParticipants.includes(0)) {
    randNonParticipants.push(nonParticipants.shift());
    randNonParticipants = randNonParticipants.concat(shuffle(nonParticipants));
  } else {
    randNonParticipants = shuffle(nonParticipants);
  }

  console.log(randNonParticipants);

  startPlayerRound(roundNum, randNonParticipants.pop());

  for (let i = 0; i < (names.length/(2 ** roundNum))-1; i++) {
    startOtherRounds(roundNum, randNonParticipants.pop(), randNonParticipants.pop());
  }
}

function randomSelect() {
  return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
}

function compareSelect(leftSelection, rightSelection) {
  let result = '';

    switch (leftSelection) {
        case 'rock':
            rightSelection === 'rock' ? result = 'It\'s a Tie! You\'re both Rocks!' :
                rightSelection === 'paper' ? result = 'You Lose! Paper beats Rock!' :
                    result = 'You Win! Rock beats Scissors!';
            break;
        case 'paper':
            rightSelection === 'rock' ? result = 'You Win! Paper beats Rock!' :
                rightSelection === 'paper' ? result = 'It\s a Tie! You\'re both Papers!' :
                    result = 'You Lose! Scissors beats Paper!';
            break;
        case 'scissors':
            rightSelection === 'rock' ? result = 'You Lose! Rock beats Scissors!' :
                rightSelection === 'paper' ? result = 'You Win! Scissors beats Paper!' :
                    result = 'It\'s a Tie! You\'re both Scissors!';
            break;
        default:
            rightSelection === 'rock' ? result = 'It\'s a Tie! You\'re both Rocks!' :
                rightSelection === 'paper' ? result = 'You Lose! Paper beats Rock!' :
                    result = 'You Win! Rock beats Scissors!';
    }

    return result;
}

function cardsColorSwitch(result, playerSelection) {
  const playerRock = document.getElementById('player-rock');
  const playerPaper = document.getElementById('player-paper');
  const playerScissors = document.getElementById('player-scissors');

  const enemyRock = document.getElementById('enemy-rock');
  const enemyPaper = document.getElementById('enemy-paper');
  const enemyScissors = document.getElementById('enemy-scissors');

  if (result === 'win') {
    if (playerSelection === 'rock') {
      playerRock.classList.add('previous-win-card');
      enemyScissors.classList.add('previous-loss-card');
    } else if (playerSelection === 'paper') {
      playerPaper.classList.add('previous-win-card');
      enemyRock.classList.add('previous-loss-card');
    } else {
      playerScissors.classList.add('previous-win-card');
      enemyPaper.classList.add('previous-loss-card');
    }
  } else if (result === 'loss') {
    if (playerSelection === 'rock') {
      playerRock.classList.add('previous-loss-card');
      enemyPaper.classList.add('previous-win-card');
    } else if (playerSelection === 'paper') {
      playerPaper.classList.add('previous-loss-card');
      enemyScissors.classList.add('previous-win-card');
    } else {
      playerScissors.classList.add('previous-loss-card');
      enemyRock.classList.add('previous-win-card');
    }
  } else {
    if (playerSelection === 'rock') {
      playerRock.classList.add('previous-tie-card');
      enemyRock.classList.add('previous-tie-card');
    } else if (playerSelection === 'paper') {
      playerPaper.classList.add('previous-tie-card');
      enemyPaper.classList.add('previous-tie-card');
    } else {
      playerScissors.classList.add('previous-tie-card');
      enemyScissors.classList.add('previous-tie-card');
    }
  }
}

// async function getNonParticipant() {
//   let randIndex;

//   while (randIndex !== undefined && nonParticipants.includes(randIndex)) {
//     randIndex = Math.floor(Math.random() * 64) + 1;
//   }
//   nonParticipants.push(randIndex);
// }

async function startPlayerRound(roundNum, enemyIndex) {

  setupPlayer();
  setupRight(enemyIndex);

  document.getElementById('left-div-title').textContent = `Round ${roundNum}`;

  const playerRock = document.getElementById('player-rock');
  const playerPaper = document.getElementById('player-paper');
  const playerScissors = document.getElementById('player-scissors');

  const enemyRock = document.getElementById('enemy-rock');
  const enemyPaper = document.getElementById('enemy-paper');
  const enemyScissors = document.getElementById('enemy-scissors');

  let playerScore = 0;
  let enemyScore = 0;

  let enemySelection = '';
  
  const leftScore = document.getElementById('left-score').querySelector('b');
  const rightScore = document.getElementById('right-score').querySelector('b');
  const roundHistory = document.querySelector('.round-history');

  const playerRoundHistory = roundHistory.querySelector('ul');
  let playerLi = document.createElement('li');

  const overarchingHistory = document.querySelector('.round-right-div ul');
  let overarchingLi = document.createElement('li');

  for (let i = 0; playerScore < 2 && enemyScore < 2; i++) {
    let selectTimer = Math.max(2, 11 - roundNum - i);

    let enemySelectDelay = Math.floor((Math.random() * ((11 - roundNum) * 0.7)) + 1);

    playerSelection = '';
    enemySelection = '';
    
    let result = '';

    do {
      document.getElementById('left-div-title').textContent = `Round ${roundNum}\r\nTimer: ${selectTimer}`;

      selectTimer--;
      enemySelectDelay--;

      enemySelectDelay = Math.min(selectTimer, enemySelectDelay);

      if (playerSelection === '' && selectTimer === 0) {
        playerSelection = randomSelect();
      }

      if (enemySelection === '' && enemySelectDelay === 0) {
        enemySelection = randomSelect();
      }

      if (playerSelection !== '' && enemySelection !== '') break;

      await wait(1000);
    } while (selectTimer > 0);

    if (playerSelection !== '' && enemySelection !== '') {
      result = compareSelect(playerSelection, enemySelection);
      
      playerLi.textContent = result;

      playerRock.classList = 'control-card player-card';
      playerPaper.classList = 'control-card player-card';
      playerScissors.classList = 'control-card player-card';

      enemyRock.classList = 'control-card enemy-card';
      enemyPaper.classList = 'control-card enemy-card';
      enemyScissors.classList = 'control-card enemy-card';

      if (result.includes('Win')) {
        playerScore++;
        leftScore.textContent = playerScore;

        playerLi.style.color = '#1e90ff';
        cardsColorSwitch('win', playerSelection);

        overarchingLi.textContent = `${names[0]} beats ${names[enemyIndex]} w/ ${capitalizeFirstLetter(playerSelection)}`;
        overarchingLi.style.color = '#1e90ff';
      } else if (result.includes('Lose')) {
        enemyScore++;
        rightScore.textContent = enemyScore;

        playerLi.style.color = '#dc143c';
        cardsColorSwitch('loss', playerSelection);

        overarchingLi.textContent = `${names[enemyIndex]} beats ${names[0]} w/ ${capitalizeFirstLetter(enemySelection)}`;
        overarchingLi.style.color = '#dc143c';
      } else {
        playerLi.style.color = '#3e3e3e';
        cardsColorSwitch('tie', playerSelection);
      }

      playerRoundHistory.prepend(playerLi);
      
      if (overarchingLi.textContent.length > 0) overarchingHistory.prepend(overarchingLi);
    }
  }

  if (playerScore === 2) {
    advancingParticipants.unshift(0);

    playerLi.textContent = `You eliminated ${names[enemyIndex]} w/ ${capitalizeFirstLetter(playerSelection)}!!`;
    playerLi.style.color = '#3e8e41';

    overarchingLi.textContent = `${names[0]} eliminates ${names[enemyIndex]} w/ ${capitalizeFirstLetter(playerSelection)}`;
    overarchingLi.style.color = '#3e8e41';

    waitForNextRound(roundNum);
  } else {
    playerIsEliminated = true;

    advancingParticipants.push(enemyIndex);

    playerLi.textContent = `${names[enemyIndex]} eliminated you w/ ${capitalizeFirstLetter(enemySelection)}....`;
    playerLi.style.color = '#dc143c';
    
    overarchingLi.textContent = `${names[enemyIndex]} eliminates ${names[0]} w/ ${capitalizeFirstLetter(enemySelection)}`;
    overarchingLi.style.color = '#dc143c';

    waitForNextRound(roundNum);
  }

  playerRoundHistory.prepend(playerLi);

  overarchingHistory.prepend(overarchingLi);
}

async function startOtherRounds(roundNum, leftIndex, rightIndex) {

  if (playerIsEliminated) {
    setupLeft(leftIndex);
    setupRight(rightIndex);
  }

  let leftSelection = '';
  let rightSelection = '';
  
  let leftScore = 0;
  let rightScore = 0;

  const overarchingHistory = document.querySelector('.round-right-div ul');
  let overarchingLi = document.createElement('li');

  for (let i = 0; leftScore < 2 && rightScore < 2; i++) {
    let selectTimer = Math.max(2, 11 - roundNum - i);

    let leftSelectDelay = Math.floor((Math.random() * ((11 - roundNum) * 0.7)) + 1);
    let rightSelectDelay = Math.floor((Math.random() * ((11 - roundNum) * 0.7)) + 1);

    leftSelection = '';
    rightSelection = '';
    
    let result = '';

    do {
      selectTimer--;
      leftSelectDelay--;
      rightSelectDelay--;

      leftSelectDelay = Math.min(selectTimer, leftSelectDelay);
      rightSelectDelay = Math.min(selectTimer, rightSelectDelay);

      if (leftSelection === '' && leftSelectDelay === 0) {
        leftSelection = randomSelect();
      }

      if (rightSelection === '' && rightSelectDelay === 0) {
        rightSelection = randomSelect();
      }

      if (leftSelection !== '' && rightSelection !== '') break;

      await wait(1000);
    } while (selectTimer > 0);

    if (leftSelection !== '' && rightSelection !== '') {
      result = compareSelect(leftSelection, rightSelection);

      if (result.includes('Win')) {
        leftScore++;

        overarchingLi.textContent = `${names[leftIndex]} beats ${names[rightIndex]} w/ ${capitalizeFirstLetter(leftSelection)}`;
      } else if (result.includes('Lose')) {
        rightScore++;

        overarchingLi.textContent = `${names[rightIndex]} beats ${names[leftIndex]} w/ ${capitalizeFirstLetter(rightSelection)}`;
      }
      
      if (overarchingLi.textContent.length > 0) overarchingHistory.prepend(overarchingLi);
    }
  }

  if (leftScore === 2) {
    advancingParticipants.push(leftIndex);

    overarchingLi.textContent = `${names[leftIndex]} eliminates ${names[rightIndex]} w/ ${capitalizeFirstLetter(leftSelection)}`;
  } else {
    advancingParticipants.push(rightIndex);

    overarchingLi.textContent = `${names[rightIndex]} eliminates ${names[leftIndex]} w/ ${capitalizeFirstLetter(rightSelection)}`;
  }

  overarchingLi.style.color = 'orange';
  overarchingHistory.prepend(overarchingLi);
}

async function waitForNextRound(roundNum) {
  while (advancingParticipants.length < names.length/(2 ** roundNum)) {
    document.getElementById('left-div-title').textContent = `Waiting for Other Players... (${advancingParticipants.length}/${names.length/(2 ** roundNum)})`;
    //console.log(advancingParticipants);
    await wait(300);
  }

  console.log(advancingParticipants);

  nonParticipants = [...advancingParticipants];
  
  startRound(++roundNum);
}
