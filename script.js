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

let gamerNamer = require('gamer-namer');
let epithetGiver = require('epithet');

let names = [];
let epithets = [];
let images = [];

let champions = [0];
let victories = [0];

window.onload = () => {
  document.getElementById('name').placeholder = 'Name: ' + gamerNamer.generateName().match(/[A-Z][a-z]+/g).join(' ');
  document.getElementById('epithet').placeholder = 'Epithet: ' + epithetGiver.choose().split('-').map(elem => capitalizeFirstLetter(elem)).join(' ');
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
        images.push(data.results[elem].picture.large);
      }
    }
  });

  addAvatarCards(0);

  // # of joined contestants in the matching phase will start at this number
  let randNum = Math.floor(Math.random() * 23) + 25;

  for (let i = 1; i < randNum; i++) {
    names.push(gamerNamer.generateName().match(/[A-Z][a-z]+/g).join(' '));
    epithets.push(epithetGiver.choose().split('-').map(elem => capitalizeFirstLetter(elem)).join(' '));
    champions.push(weightedRandom(0,64));
    victories.push(champions[i] * 5 + weightedRandom(0,32));

    if (names[i] === undefined) {
      names.pop();
      epithets.pop();
      champions.pop();
      victories.pop();
      i--;
      continue;
    }

    addAvatarCards(i);
  }

  document.getElementById('left-div-title').textContent = `Waiting for Other Players... (${names.length}/64)`;

  for (let i = randNum; i < 64; i++) {
    names.push(gamerNamer.generateName().match(/[A-Z][a-z]+/g).join(' '));
    epithets.push(epithetGiver.choose().split('-').map(elem => capitalizeFirstLetter(elem)).join(' '));
    champions.push(weightedRandom(0,64));
    victories.push(champions[i] * 5 + weightedRandom(0,32));

    if (names[i] === undefined) {
      names.pop();
      epithets.pop();
      champions.pop();
      victories.pop();
      i--;
      continue;
    }
    addAvatarCards(i);

    // at times, more than 1 new contestants will join
    if (Math.floor((Math.random() * 3) + 1) % 2 != 0) await wait(Math.random() * 400);

    document.getElementById('left-div-title').textContent = `Waiting for Other Players... (${names.length}/64)`;
  }

  for (let i = 1; i <= 5; i++) {
    await wait(800);
    if (i % 2 != 0) {
      document.getElementById('left-div-title').textContent = 'Starting Game...';
    } else document.getElementById('left-div-title').textContent = 'Starting Game..';

    if (i === 5) startGame();
  }
}

function setupGameLayout() {
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
}

function setupGame(enemyIndex) {
  const leftDiv = document.getElementsByClassName('left-div')[0];

  const roundLeftDiv = document.getElementsByClassName('round-left-div')[0];

  const leftContestantDetails = roundLeftDiv.querySelector('.left-contestant-details');

  leftContestantDetails.querySelectorAll('p')[0].innerHTML = '<b>Champions:</b> ' + champions[0];
  leftContestantDetails.querySelectorAll('p')[1].innerHTML = '<b>Victories:</b> ' + victories[0];
  
  const leftContestantCards = roundLeftDiv.querySelector('.left-contestant-cards');

  leftContestantCards.querySelector('img').src = images[0];

  const leftTextContainer = leftContestantCards.querySelector('.text-container');

  leftTextContainer.querySelector('b').textContent = names[0];
  leftTextContainer.querySelector('p').textContent = epithets[0];

  const rightContestantDetails = roundLeftDiv.querySelector('.right-contestant-details');

  rightContestantDetails.querySelectorAll('p')[0].innerHTML = '<b>Champions:</b> ' + champions[enemyIndex];
  rightContestantDetails.querySelectorAll('p')[1].innerHTML = '<b>Victories:</b> ' + victories[enemyIndex];

  const rightContestantCards = roundLeftDiv.querySelector('.right-contestant-cards');

  rightContestantCards.querySelector('img').src = images[enemyIndex];

  const rightTextContainer = rightContestantCards.querySelector('.text-container');

  rightTextContainer.querySelector('b').textContent = names[enemyIndex];
  rightTextContainer.querySelector('p').textContent = epithets[enemyIndex];
}

function startGame() {
  $('.avatar-cards').fadeOut(200);

  let roundDiv = document.querySelector('.round-div');
  console.log(roundDiv);
  roundDiv.classList.remove('invisible');

  let enemyIndex = Math.floor(Math.random() * 64) + 1;

  setupGame(enemyIndex);
}

