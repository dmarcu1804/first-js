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

//selecting all buttons
const btns = document.querySelectorAll('button');
//creating a div element
const div = document.createElement('div');
//changing style of div so it can be visible in html
div.setAttribute('style', 'background-color: red; width:200px; height: 100px;'); 

//adding div to the body
document.body.appendChild(div);

//creating h1 element
const headerPlayer = document.createElement('h1');
const headerComp = document.createElement('h1');
const winner = document.createElement('h1');



//setting class of that div to counter-div
div.classList.add('counter-div');
const controller = new AbortController();


function disableButtons() {
    document.getElementById("rock").disabled = true; 
    document.getElementById("paper").disabled = true; 
    document.getElementById("scissors").disabled = true; 
};

function helperInput(){
    //taking id of button: rock, paper or scissors as playerSelection
    const playerSelection = this.id;
    console.log("playerSelection is " + playerSelection)
    //computer selection is here - every time a button is pressed, it generates another comp choice
    const computerSelection = getComputerChoice().toLowerCase();


    playRound(playerSelection, computerSelection);
    console.log("player is " + playerSelection);
    console.log("computer is " +computerSelection);

    //displaying player score to DOM
    headerPlayer.textContent = `Player score is ${counterPlayer}`;
    headerComp.textContent = `Computer score is ${counterComp}`;
    
    //adding the score to the div I initially created
    const headerScorePlayer = div.appendChild(headerPlayer);
    const headerScoreComp = div.appendChild(headerComp);
    
    
    if(counterPlayer >= 5){
        div.removeChild(headerScorePlayer);
        div.removeChild(headerScoreComp);
        winner.textContent = 'Player won';
        div.appendChild(winner);
        disableButtons();

    }else if(counterComp >= 5){
        div.removeChild(headerScorePlayer);
        div.removeChild(headerScoreComp);
        winner.textContent = 'Computer won';
        div.appendChild(winner);
        controller.abort();
        disableButtons();
        //btn.removeEventListener('click', playerInput);
        
    }
    //console.log(headerScorePlayer.textContent);
}

function playerInput(){
    //for each button that we press, we want to do something
    btns.forEach(btn => btn.addEventListener('click', helperInput));
    
}

playerInput();



function game(){
    
    //      Removed 5 round logic
    // for(let i = 0; i < 5; i++){
    //     const computerSelection = getComputerChoice().toLowerCase();
    //     let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();

    //     while(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
    //         playerSelection = prompt("Please re enter Rock, Paper or Scissors?").toLowerCase();
    //     }
    //     //console.log(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors");

    //     console.log("iteration is " + i + " " +playRound(playerSelection,computerSelection));
    //     console.log("computer said " + "iteration is " + i + " " + computerSelection);
    //     console.log(counterPlayer);
    //     console.log(counterComp);
    // }
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice().toLowerCase();
    playRound(playerSelection, computerSelection);
    if(counterPlayer > counterComp){
        console.log("Player Won!");
    }
    else if (counterPlayer === counterComp){
        console.log("Tie!");
    }else{
        console.log("Computer Won!");
    }
}





//game();
//console.log(playRound(playerSelection,computerSelection));
//console.log("Computer guess is " + computerSelection);
