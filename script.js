// Ask user for choice - Rock/paper/scissors
function playerSelection(){
let playersChoice = prompt('What is your choice?', '');
return playersChoice.charAt(0).toUpperCase() + playersChoice.slice(1);
}
let userScore = 0;
// Get computer's choice - Rock/paper/scissors
let items = ["Rock", "Paper", "Scissors"];
let computerSelection = getComputersChoice(items);
let computerScore = 0;

function getComputersChoice(items) {
  return items[Math.floor(Math.random() * items.length)]
}
// Check who wins
function gameOn(playerSelection, computerSelection) {
  console.log(playerSelection);
  
 if (playerSelection == computerSelection){
  return "It's a tie!"
 }
 else if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock"){
  computerScore = ++computerScore;
  return `Evil AI wins! ${computerSelection} beats ${playerSelection}! Computer's score is now ${computerScore}.`
  
 }
else {
  userScore = ++userScore;
  return `Congratulations human! ${playerSelection} beats ${computerSelection}! Your score is now ${userScore}.`
  
}
}
function game(){
  for (let i = 0; i < 5; i++){
    playerSelection();
    gameOn(playerSelection, computerSelection);
    if (userScore == 5){
      alert("Congratulations human! You saved us from Evil AI!");
    }
    else if (computerScore == 5){
      alert("Oh no! We are all doomed!")
    }
  }
}



