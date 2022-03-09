function getRandom(max) {
    return Math.floor(Math.random() * max);
}


function computerPlay(){
    const number = getRandom(3);
    
    if(number === 0) {
        return "rock";
    }
    else if(number === 1) {
        return "scissors";
    }
    else {
        return "paper";
    }
}


function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        return "Player: " + playerSelection + '\n' + "Computer: " + computerSelection + '\n' + "Ah, that's a draw!";
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        return "Player: " + playerSelection + '\n' + "Computer: " + computerSelection + '\n' + "The player has won!";
    }
    else if(playerSelection === "rock" && computerSelection === "paper") {
        return "Player: " + playerSelection + '\n' + "Computer: " + computerSelection + '\n' +"The computer has won!";
    }
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        return "Player: " + playerSelection + '\n' + "Computer: " + computerSelection + '\n' + "The computer has won!";
    }
    else if(playerSelection === "paper" && computerSelection === "rock") {
        return "Player: " + playerSelection + '\n' + "Computer: " + computerSelection + '\n' +"The player has won!";
    }
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        return "Player: " + playerSelection + '\n' + "Computer: " + computerSelection + '\n' + "The computer has won!";
    }
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        return "Player: " + playerSelection + '\n' +"Computer: " + computerSelection + '\n' + "The player has won!";
    }
    else {
        return "I'm overwhelmed";
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));

/*
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }   
}
game(); 
*/
