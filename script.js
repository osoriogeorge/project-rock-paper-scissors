const options = ['piedra', 'papel', 'tijeras'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const index = Math.floor(Math.random() * options.length);
  return options[index];
}
console.log('COMPUTER ' + getComputerChoice());

function getHumanChoice() {
  const message = prompt('Elija piedra, papel o tijeras');
  const messageElection = message.toLowerCase();

  return messageElection;
}

console.log('USER ' + getHumanChoice());

function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    console.log('The game is a tie!');
    return 'tie';
  }
  if (
    (humanSelection === 'piedra' && computerSelection === 'tijeras') ||
    (humanSelection === 'papel' && computerSelection === 'piedra') ||
    (humanSelection === 'tijeras' && computerSelection === 'papel')
  ) {
    console.log('You won!');
    humanScore++;
    return 'human';
  } else {
    console.log('You lost!');
    computerScore++;
    return 'computer';
  }
}
for (let i = 0; i < 5; i++) {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  console.log(
    `Round ${i + 1}: Human: ${humanChoice} - Computer: ${computerChoice}`
  );
}
console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
