function getComputerChoice(){
    // multiplied by 3 to get choice of 3 numbers : 0, 1 or 2
    let randomChoice = Math.floor(Math.random()*3);
    
    switch(randomChoice){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return "Wrong Value"
    }
}

let counterPlayer = 0;
let counterComp = 0;
function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            counterComp++;
            return "You Lost! Paper beats Rock line 24";
        }else if(computerSelection == "scissors"){
            counterPlayer++;
            return "You Won! Rock beats Scissors line 26";
        }else{
            counterPlayer++;
            counterComp++;
            return "Tie! line 28";
        }
    }
    if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            counterPlayer++;
            return "You Won! Paper beats Rock line 31";
        }else if(computerSelection == "scissors"){
            counterComp++;
            return "You Lost! Scissors beats Paper line 33"
        }else{
            counterPlayer++;
            counterComp++;
            return "Tie! Line 34";
        }
    }
    if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            counterComp++;
            return "You Lost! Rock beats Scissors line 38";
        }else if(computerSelection == "paper"){
            counterPlayer++;
            return "You Won! Scissors beats Paper line 40";
        }else{
            counterPlayer++;
            counterComp++;
            return "Tie! Line 43";
        }
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice().toLowerCase();
        let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();

        while(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
            playerSelection = prompt("Please re enter Rock, Paper or Scissors?").toLowerCase();
        }
        //console.log(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors");

        console.log("iteration is " + i + " " +playRound(playerSelection,computerSelection));
        console.log("computer said " + "iteration is " + i + " " + computerSelection);
        console.log(counterPlayer);
        console.log(counterComp);
    }
    if(counterPlayer > counterComp){
        console.log("Player Won!");
    }
    else if (counterPlayer === counterComp){
        console.log("Tie!");
    }else{
        console.log("Computer Won!");
    }
}





game();
//console.log(playRound(playerSelection,computerSelection));
//console.log("Computer guess is " + computerSelection);
