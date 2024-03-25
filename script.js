playGame();

function playGame(){
    for (let i = 0; i < 5; i++) {
        let playerInput = prompt("Make ur choice").toLowerCase();
        let computerInput = getComputerChoice();
        console.log("Computer played " + computerInput + ". You " + playRound(playerInput, computerInput));
    }
}

function getComputerChoice(){
    switch (Math.floor(Math.random() * 3)){
        case 0: 
            return 'rock'
        break;
        case 1: 
            return 'paper'
        break;
        case 2: 
            return 'scissor'
        break;
    }   
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection){
        case 'rock':
            return evaluateRock(computerSelection);
        case 'paper':
            return evaluatePaper(computerSelection);
            break;
        case 'scissor':
            return evaluatePaper(computerSelection);
            break;
        default:
            console.log('Invalid input');
    }
}

function evaluateRock(computerSelection){
    switch (computerSelection){
        case 'rock':
            return 'tie';
            break;
        case 'paper':
            return 'lose';
            break;
        case 'scissor':
            return 'win';
    }   
}

function evaluatePaper(computerSelection){
    switch (computerSelection){
        case 'rock':
            return 'win';
            break;
        case 'paper':
            return 'tie';
            break;
        case 'scissor':
            return 'lose';
    }   
}

function evaluateScissor(computerSelection){
    switch (computerSelection){
        case 'rock':
            return 'lose';
            break;
        case 'paper':
            return 'win';
            break;
        case 'scissor':
            return 'tie';
    }   
}