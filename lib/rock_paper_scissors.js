// Provided functions - please do not edit these!
function randomPlay() {
    randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "Rock";
    } else if (randomNumber < 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
function getPlayerInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
///////////////////////////////////////////////////

function getWinner(playerMove,computerMove) {
    // This function should either give us back 'player', 'computer', or 'tie'.
    // The rules of the game are that rock beats scissors, scissors beats paper, and paper beats rock.
    // Assume that the only possible input values we can get are 'rock', 'paper', and 'scissors'.

}

function playGame() {
    console.log("Let's play Rock Paper Scissors");
    // This function should continue to play Rock Paper Scissors until either the player or the computer has won five times.
}

