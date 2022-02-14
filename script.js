// let selections = ['rock', 'paper', 'scissors']

// let playerSelection = ''
// let computerSelection = ''

// let playerScore = 0;
// let computerScore = 0;

// window.onload = game

// function game() {
//     for (let i = 0; i < 5; i++) {
//         playerSelection = prompt('Rock, Paper, Scissors! Pick one! (Input nothing to get random)').trim().toLowerCase() || playerPlay()
//         computerSelection = computerPlay()

//         let result = playRound(playerSelection, computerSelection)
//         console.log(result)

//         result.includes('Win') ? playerScore++ : 
//             result.includes('Lose') ? computerScore++ : ''
//     }

//     console.log(`Player: ${playerScore} vs. Computer: ${computerScore}`)
//     if (playerScore > computerScore) console.log('Player Won!')
//     else if (playerScore < computerScore) console.log('Computer Won!')
//     else console.log('It\'s a Tie!')
// }

// function playRound(playerSelection, computerSelection) {
//     let result = ''

//     switch (playerSelection) {
//         case 'rock':
//             computerSelection === 'rock' ? result = 'It\'s a Tie! You\'re both Rocks!' :
//                 computerSelection === 'paper' ? result = 'You Lose! Paper beats Rock!' :
//                     result = 'You Win! Rock beats Scissors!'
//             break
//         case 'paper':
//             computerSelection === 'rock' ? result = 'You Win! Paper beats Rock!' :
//                 computerSelection === 'paper' ? result = 'It\s a Tie! You\'re both Papers!' :
//                     result = 'You Lose! Scissors beats Paper!'
//             break
//         case 'scissors':
//             computerSelection === 'rock' ? result = 'You Lose! Rock beats Scissors!' :
//                 computerSelection === 'paper' ? result = 'You Win! Scissors beats Paper!' :
//                     result = 'It\'s a Tie! You\'re both Scissors!'
//             break
//         default:
//             computerSelection === 'rock' ? result = 'It\'s a Tie! You\'re both Rocks!' :
//                 computerSelection === 'paper' ? result = 'You Lose! Paper beats Rock!' :
//                     result = 'You Win! Rock beats Scissors!'
//     }

//     return result
// }

// function playerPlay() {
//     return selections[Math.floor(Math.random() * 3)]
// }

// function computerPlay() {
//     return selections[Math.floor(Math.random() * 3)]
// }