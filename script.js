const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock"
rockBtn.setAttribute("id", "rockBtn");

const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper"
paperBtn.setAttribute("id", "paperBtn");

const scissorBtn = document.createElement("button");
scissorBtn.textContent = "Scissor"
scissorBtn.setAttribute("id", "scissorBtn");

const resultsDiv = document.createElement("div");

const container = document.querySelector("#container");
container.appendChild(rockBtn)
container.appendChild(paperBtn)
container.appendChild(scissorBtn)
container.appendChild(resultsDiv)


container.addEventListener("click", (event) => {
    switch (event.target.id){
        case 'rockBtn':
            resultsDiv.textContent = playRound ('rock', getComputerChoice());
            break;
        case 'paperBtn':
            playRound ('paper', getComputerChoice());
            break;
        case 'scissorBtn':
            playRound ('scissor', getComputerChoice());
            break;
    }
  });

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
    console.log(playerSelection + 'VS' + computerSelection);
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