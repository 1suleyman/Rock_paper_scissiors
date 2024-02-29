// Rock paper scissors
const prompt = require("prompt-sync")();

// write a function called getComputer choice that will randomly return either rock, paper or scissors
function getComputerChoice(){   
    var randomnum = Math.floor(Math.random() * 3);
    if (randomnum === 0){
        return "ROCK";
    } else if (randomnum === 1){
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}
// console.log(getComputerChoice());

// write a function that plays a single round of rock paper scissors
// the function should take 2 parameters - the 'playerSelection' and 'computerSelection' 
// it should then return a string that decleares the winnner or tie of the round
// i.e "You lose! Paper beats Rocks"
// Make your function’s playerSelection parameter case-insensitive 
// (so users can input rock, ROCK, RocK or any other variation
function playRound(playerSelection,computerSelection){
    if (playerSelection == "ROCK" & computerSelection == "SCISSORS"){
        return "You Won! ROCK beats SCISSORS!";
    } else if (playerSelection == "SCISSORS" & computerSelection == "PAPER"){
        return "You Won! SCISSORS beats PAPER!";
    } else if (playerSelection == "PAPER" & computerSelection == "ROCK"){
        return "You Won! PAPER beats ROCK";
    } else if (playerSelection == "SCISSORS" & computerSelection == "ROCK"){
        return "You Lose! ROCK beats SCISSORS!";
    } else if (playerSelection == "PAPER" & computerSelection == "SCISSORS"){
        return "You Lose! SCISSORS beats PAPER!";
    } else if (playerSelection == "ROCK" & computerSelection == "PAPER"){
        return "You Lose! PAPER beats ROCK";
    } else {
        return "Its a TIE!";
    }
}
// console.log(playRound(playerSelection,computerSelection));
// Write a NEW function called playGame() play a five round game that keeps score and reports a winner or loser at the end
function playGame(){
    var score = 0;
    for (var round = 0; round < 5; round++){
        var playerSelection = prompt("Enter your choice: Rock, Paper or Scissors! ");
        var computerSelection = getComputerChoice();
        var result = playRound(playerSelection.toUpperCase(),computerSelection);
        console.log(result);

        if (result.includes("You Won")) {
            score++;
        }
    } console.log("The Final Score: " + score);
}
playGame();
