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

window.onload = () => {
  document.getElementById('name').placeholder = 'Name: ' + gamerNamer.generateName();
  document.getElementById('epithet').placeholder = 'Epithet: ' + epithetGiver.choose();
}

document.getElementById('input-container').addEventListener('keydown', e => {
  if (e.keyCode === 13) {
    if (document.getElementById('name').value === '') names.push(document.getElementById('name').placeholder.replace('Name: ', ''));
    else names.push(document.getElementById('name').value);

    if (document.getElementById('epithet').value === '') epithets.push(document.getElementById('epithet').placeholder.replace('Epithet: ', ''));
    else epithets.push(document.getElementById('epithet').value);

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

// adds up to a total of 64 avatar cards including the player
async function startMatching() {
  document.getElementsByClassName('avatar-card')[0].remove();

  let picsumImages = [];

  // Credits: https://stackoverflow.com/a/12460434
  await $.getJSON('https://picsum.photos/v2/list', (data) => {
    for (let i = 0; i < data.length; i++) {
      picsumImages.push(data[i]['download_url']);
    }
  });

  for (let i = 0, j = 0; i < 64; i++) {
    if (j <= 29) {
      if (Math.floor(Math.random() * 3) !== 0) {
        images.push(picsumImages[j]);
        j++;
      } else images.push('imgs/template_avatar.png');
    } else images.push('imgs/template_avatar.png');
  }

  addAvatarCards(0);

  // # of joined contestants in the matching phase will start at this number
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

  document.getElementById('left-div-title').textContent = `Waiting for Other Players... (${names.length}/64)`;

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

    // at times, more than 1 new contestants will join
    if (Math.floor((Math.random() * 3) + 1) % 2 != 0) await wait(Math.random() * 400);

    document.getElementById('left-div-title').textContent = `Waiting for Other Players... (${names.length}/64)`;
  }

  for (let i = 1; i <= 5; i++) {
    await wait(800);
    if (i % 2 != 0) {
      document.getElementById('left-div-title').textContent = 'Starting Game...';
    } else document.getElementById('left-div-title').textContent = 'Starting Game..';

    //if (i === 5) startGame();
  }
}

