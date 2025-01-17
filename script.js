const message = prompt('Elija piedra, papel o tijeras');
const messageElection = message.toLowerCase();

const options = ['piedra', 'papel', 'tijeras'];

const rdm = Math.random() * options.length;
const index = Math.floor(rdm);
const computerChoix = options[index];

function getComputerChoice() {
  return computerChoix;
}

console.log(computerChoix);

function getHumanChoice() {
  return messageElection;
}

console.log('USER ' + messageElection);
/*
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(getHumanChoice, getComputerChoice) {
  let humanScore = 0;
  let computerScore = 0;

  if (getHumanChoice == getComputerChoice) {
    console.log(
      'Empate,' + computerSelection + ' es igual a ' + humanSelection
    );
  } else if (getHumanChoice !== getComputerChoice) {
    computerScore++;
    console.log('Perdiste,' + computerSelection + ' gana a ' + humanSelection);
  } else {
    humanScore++;
    console.log('Ganaste,' + humanSelection + ' gana a ' + computerSelection);
  }
}

playRound(humanSelection, computerSelection);
*/

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanSelection, computerSelection) {
  let humanScore = 0;
  let computerScore = 0;

  if (humanSelection === computerSelection) {
    return console.log('The game is a tie!');
  }

  if (humanSelection === 'piedra') {
    if (computerSelection === 'papel') {
      return console.log('Has perdido!');
    } else {
      return console.log('Has ganado!');
    }
  }

  if (humanSelection === 'papel') {
    if (computerSelection === 'tijeras') {
      return console.log('Has perdido!');
    } else {
      return console.log('Has ganado!');
    }
  }

  if (humanSelection === 'tijeras') {
    if (computerSelection === 'piedra') {
      return console.log('Has perdido!');
    } else {
      return console.log('Has ganado!');
    }
  }
}

playRound(humanSelection, computerSelection);
