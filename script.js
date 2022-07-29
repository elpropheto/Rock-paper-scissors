// Ask user for choice - Rock/paper/scissors
function playerSelection(){
let playersChoice = prompt('What is your choice?', '');
return playersChoice.charAt(0).toUpperCase() + playersChoice.slice(1);
}
// Get computer's choice - Rock/paper/scissors
let items = ['Rock', 'Paper', 'Scissors'];
let computerSelection = getComputersChoice(items);

function getComputersChoice(items) {
  return items[Math.floor(Math.random() * items.length)]
}
// Check who wins
function gameOn(playerSelection, computerSelection) {
 if (playerSelection == computerSelection){
  return "It's a tie!"
 }
 else if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock"){
  return `Evil AI wins! ${computerSelection} beats ${playerSelection}!`
 }
else {
  return `Congratulations human! ${playerSelection} beats ${computerSelection}!`
}
}
function game(){
  for (let i = 0; i < 5; i++){

  }
}



