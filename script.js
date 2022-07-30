// declare a function that gets the computer's choice
function getComputersChoice() {
  let items = ["Rock", "Paper", "Scissors"];
  return items[Math.floor(Math.random() * items.length)]
}
//declare a function that gets the user's choice via prompt
function getUsersChoice(){
  let playersChoice = prompt('What is your choice?', '');
  return playersChoice.charAt(0).toUpperCase() + playersChoice.slice(1).toLowerCase();
  }
  let userScore = 0;
  let computerScore = 0;
//declare a function that plays one game of rock-paper-scissors
function playRound(playerSelection, computerSelection){
  
  
  if (playerSelection == computerSelection){
    alert("It's a tie!")
   }
   else if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock"){
    computerScore = ++computerScore;
    alert(`Evil AI wins! ${computerSelection} beats ${playerSelection}! Computer's score is now ${computerScore}.`)
   }
   else {
    userScore = ++userScore;
    alert(`Congratulations human! ${playerSelection} beats ${computerSelection}! Your score is now ${userScore}.`)
   }
}

// declare a function that plays rock-paper-scissors until one of the players gets 5 wins
function game(){
  for (let i = 0; i < 10; i++){
    let playerSelection = getUsersChoice();
    let computerSelection = getComputersChoice();
    if (playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors"){
      alert("Oops! That's not a valid weapon!")
      i = --i;
    }
    else {
    playRound(playerSelection, computerSelection);
    }
    if (playerSelection == computerSelection){
      i = --i;
    }
   
    if (userScore == 5){
      alert("Congratulations human! You saved us from Evil AI!");
      break;
    }
    else if (computerScore == 5){
      alert("Oh no! We are all doomed!")
      break;
    }
  }
  alert("Wanna play again? Refresh the page!")
}
//run the function
game();