// Get computer's choice - Rock/paper/scissors
let items = ['Rock', 'Paper', 'Scissors'];
let computerSelection = getComputersChoice(items);
let playersChoice = prompt('What is your choice?', '');
let playerSelection = playersChoice.charAt(0).toUpperCase() + playersChoice.slice(1);

function getComputersChoice(items) {
  return items[Math.floor(Math.random() * items.length)]
}
function gameOn(playerSelection, computerSelection) {
 if (playerSelection == computerSelection){
  return "It's a tie!"
 }
 else if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock"){
  return "Evil AI wins!"
 }
else {
  return "Congratulations human! Keep fighting!"
}
}

// Ask user for choice - Rock/paper/scissors
// Check who wins
// Print the outcome
// Repeat until one of the players scores 5 points
// Print the message to the winner