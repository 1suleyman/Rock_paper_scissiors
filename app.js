// Rock paper scissors

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
// // console.log(playRound(playerSelection,computerSelection));
// // Write a NEW function called playGame() play a five round game that keeps score and reports a winner or loser at the end
// function playGame(){
//     var score = 0;
//     for (var round = 0; round < 5; round++){
//         var playerSelection = prompt("Enter your choice: Rock, Paper or Scissors! ");
//         var computerSelection = getComputerChoice();
//         var result = playRound(playerSelection.toUpperCase(),computerSelection);
//         console.log(result);

//         if (result.includes("You Won")) {
//             score++;
//         }
//     } console.log("The Final Score: " + score);
// }
// playGame();

// 1. For now, remove the logic that plays exactly five rounds
// 2. Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
// 3. Add a div for displaying results and change all of your console.logs into DOM methods
// 4. Display the running score, and announce a winner of the game once one player reaches 5 points


const buttonR = document.getElementById('buttonR');
const buttonP = document.getElementById('buttonP');
const buttonS = document.getElementById('buttonS');
const results = document.getElementById('results');
const scoretext = document.getElementById('scoretext');
const winner = document.getElementById('winner');
const scoreClass = document.getElementsByClassName('score')[0];
const buttonReset = document.createElement('button');
buttonReset.textContent = "Click me to Reset the Game!"

function playGame() {
    var score = 0;

    buttonR.addEventListener('click', function() {
        var computerSelection = getComputerChoice();
        results.textContent = playRound('ROCK', computerSelection);
        if (results.textContent === "You Won! ROCK beats SCISSORS!"){
            score ++;
            scoretext.textContent = `The score is ${score}`;
        }
        if (score === 5) {
            winner.textContent = "You have Won the Game!"
            scoreClass.appendChild(buttonReset);
            buttonReset.addEventListener('click', function(){
                winner.textContent = "";
                results.textContent = "";
                score = score - score;
                scoretext.textContent = "";
                scoreClass.removeChild(buttonReset);
            })
        }
    });

    buttonP.addEventListener('click', function() {
        var computerSelection = getComputerChoice();
        results.textContent = playRound('PAPER', computerSelection);
        if (results.textContent === "You Won! PAPER beats ROCK"){
            score ++;
            scoretext.textContent = `The score is ${score}`;
        }
        if (score === 5) {
            winner.textContent = "You have Won the Game!"
            scoreClass.appendChild(buttonReset);
            buttonReset.addEventListener('click', function(){
                winner.textContent = "";
                results.textContent = "";
                score = score - score;
                scoretext.textContent = "";
                scoreClass.removeChild(buttonReset);
            })
        }
    });

    buttonS.addEventListener('click', function() {
        var computerSelection = getComputerChoice();
        results.textContent = playRound('SCISSORS', computerSelection);
        if (results.textContent === "You Won! SCISSORS beats PAPER!"){
            score ++;
            scoretext.textContent = `The score is ${score}`;
        }
        if (score === 5) {
            winner.textContent = "You have Won the Game!"
            scoreClass.appendChild(buttonReset);
            buttonReset.addEventListener('click', function(){
                winner.textContent = "";
                results.textContent = "";
                score = score - score;
                scoretext.textContent = "";
                scoreClass.removeChild(buttonReset);
            })
        }
    });
}

playGame();