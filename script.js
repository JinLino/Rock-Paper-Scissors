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

const restart = document.querySelector('#restart');
restart.addEventListener('click', () => {
    //const remove = document.getElementById('game'); //because it will delete in a row, but not directly the last one
    const remove = document.querySelector('div:last-child');
    remove.parentElement.removeChild(remove)
    })



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
        return;
    }
}


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        //console.log(playRound(`${button.id}`, computerSelection));
        const result = document.createElement('div');
        result.setAttribute('id', 'game');
        result.textContent = playRound(`${button.id}`, computerSelection);  
        titleH1.appendChild(result);  
    })
})

const playerSelection = buttons;
const computerSelection = computerPlay();


//console.log(playRound(playerSelection, computerSelection));


//Five rounds exercise
/*
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }   
}
game(); 
*/
