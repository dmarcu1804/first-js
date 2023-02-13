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


function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "It's a tie!";
    }
    
    return "Invalid";
}




const computerSelection = getComputerChoice().toLowerCase();
const playerSelection = "rock".toLowerCase();
console.log(playRound(playerSelection,computerSelection));
console.log("Computer guess is " + getComputerChoice());