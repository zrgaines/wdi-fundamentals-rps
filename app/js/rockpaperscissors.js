////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict'
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;

    // If player does rock
    if (playerMove == 'rock') {
      if (computerMove == 'rock') {
        winner = 'tie';
      }
      else if (computerMove == 'paper') {
        winner = 'computer';
      }
      else {winner = 'player';}
    }

    // If player does paper
    else if (playerMove == 'paper') {
      if (computerMove =='paper') {
        winner = 'tie';
      }
      else if (computerMove == 'scissors') {
        winner = 'computer';
      }
      else {winner = 'player';}
    }

    // If player does scissors
    else{
      if (computerMove == 'scissors') {
        winner = 'tie';
      }
      else if (computerMove == 'rock') {
        winner = 'computer';
      }
      else {winner = 'player';}
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");

    var playerWins = 0;
    var computerWins = 0;

    while (playerWins < 5 && computerWins < 5) {
      var pMove = getPlayerMove();
      var cMove = getComputerMove();
      var winner = getWinner();

      if(winner == 'tie') {
        console.log('Tie! You and the computer played ' + pMove +  '!');
      }
      else if(winner == 'player') {
        console.log('Congrats! You outsmarted a computer!')
        playerWins += 1;
      }
      else {
        console.log('Oh no! The computer got lucky this time..')
        computerWins += 1;
      }
      console.log('Current score: ' + playerWins + ' for you, and ' + computerWins +
    ' for the computer!')
    }
    if (playerWins == 5) {
      console.log ('Good job! You won in a rock paper scissors exhibition against Mr. Roboto!');
    }
      else {
        console.log('You lost! Lets just say it was bad luck.');
        }
    return [playerWins, computerWins];
}
