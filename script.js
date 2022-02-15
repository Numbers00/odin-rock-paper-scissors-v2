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

function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Done waiting");
      resolve(ms)
    }, ms )
  })
}

let gamerNamer = require('gamer-namer');
let epithetGiver = require('epithet');

window.onload = () => {
  document.getElementById('name').placeholder = 'Name: ' + gamerNamer.generateName();
  document.getElementById('epithet').placeholder = 'Epithet: ' + epithetGiver.choose();
}

let names = [];
let epithets = [];

document.getElementById('input-container').addEventListener('keydown', e => {
  if (e.keyCode === 13) {
    if (document.getElementById('name').value === '') names.push(document.getElementById('name').placeholder.replace('Name: ', ''));
    else names.push(document.getElementById('name').value);

    if (document.getElementById('epithet').value === '') epithets.push(document.getElementById('epithet').placeholder.replace('Epithet: ', ''));
    else epithets.push(document.getElementById('epithet').value);

    startMatching();
  }
});

const bottomDiv = document.getElementsByClassName('bottom-div')[0];
let avatarCards = document.getElementsByClassName('avatar-cards')[0];

function addAvatarCards(index) {
  const avatarCard = document.createElement('div');
  avatarCard.classList.add("avatar-card");

  const avatarImg = document.createElement('img');
  avatarImg.src = 'imgs/template_avatar.png';
  avatarImg.alt = 'Avatar';
  avatarCard.appendChild(avatarImg);

  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');

  const h4 = document.createElement('h4');
  h4.textContent = names[index];
  h4.fontWeight = 700;
  textContainer.appendChild(h4);

  const para = document.createElement('p');
  para.textContent = epithets[index];
  textContainer.appendChild(para);

  avatarCard.appendChild(textContainer);

  if (avatarCards.childElementCount === 4) {
    avatarCards = document.createElement('div');
    avatarCards.classList.add('avatar-cards');

    avatarCards.appendChild(avatarCard);

    bottomDiv.appendChild(avatarCards);
  } else avatarCards.appendChild(avatarCard);
}

// adds up to a total of 64 avatar cards including the player
async function startMatching() {
  document.getElementsByClassName('avatar-card')[0].remove();

  addAvatarCards(0);

  let randNum = Math.floor(Math.random() * 23) + 25;

  for (let i = 1; i < randNum; i++) {
    names.push(gamerNamer.generateName());
    epithets.push(epithetGiver.choose());

    if (names[i] === undefined) {
      names.pop();
      epithets.pop();
      i--;
      continue;
    }

    addAvatarCards(i);
  }

  document.getElementById('bottom-div-title').textContent = `Waiting for Other Players... (${names.length}/64)`;

  for (let i = randNum; i < 64; i++) {
    names.push(gamerNamer.generateName());
    epithets.push(epithetGiver.choose());

    if (names[i] === undefined) {
      names.pop();
      epithets.pop();
      i--;
      continue;
    }
    addAvatarCards(i);

    if (Math.floor((Math.random() * 3) + 1) % 2 != 0) await wait(Math.random() * 400);

    document.getElementById('bottom-div-title').textContent = `Waiting for Other Players... (${names.length}/64)`;
  }

  for (let i = 1; i <= 5; i++) {
    await wait(800);
    if (i % 2 != 0) {
      document.getElementById('bottom-div-title').textContent = 'Starting Game...';
    } else document.getElementById('bottom-div-title').textContent = 'Starting Game..';

    if (i === 5) startGame();
  }
}

