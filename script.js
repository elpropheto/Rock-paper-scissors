// Get computer's choice - Rock/paper/scissors
let items = ['rock', 'paper', 'scissors'];
function getComputersChoice(items) {
  return items[Math.floor(Math.random() * items.length)]
}
console.log(getComputersChoice(items));
// Ask user for choice - Rock/paper/scissors
// Check who wins
// Print the outcome
// Repeat until one of the players scores 5 points
// Print the message to the winner