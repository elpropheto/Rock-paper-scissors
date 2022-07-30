// declare a function that gets the computer's choice
function getComputersChoice() {
  let items = ["Rock", "Paper", "Scissors"];
  return items[Math.floor(Math.random() * items.length)]
}
//declare a function that gets the user's choice via prompt
function playerSelection(){
  let playersChoice = prompt('What is your choice?', '');
  return playersChoice.charAt(0).toUpperCase() + playersChoice.slice(1).toLowerCase();
  }
//declare a function that plays one game of rock-paper-scissors
// declare a function that plays rock-paper-scissors until one of the players gets 5 wins
//run the function