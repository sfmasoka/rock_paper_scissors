function playRound(playerSelection, computerSelection){
    if(playerSelection=="rock" && computerSelection=="paper")
        {
            console.log("You lose! Paper beats Rock");
            computerScore += 1;
        }
    else if (playerSelection=="rock" && computerSelection=="scissors")
        {
            console.log("You win! rock beats scissors");
            playerScore += 1;
        }
    else if (playerSelection=="paper" && computerSelection=="rock")
        {
            console.log("You win! Paper beats Rock");
            playerScore += 1;
        }

    else if (playerSelection=="paper" && computerSelection=="scissors")
        {
            console.log("You lose! scissors beats paper");
            computerScore += 1;
        }
    else if (playerSelection=="scissors" && computerSelection=="paper")
        {
            console.log("You win! scissors beats paper");
            playerScore += 1;
        }
    else if (playerSelection=="scissors" && computerSelection=="rock")
        {
            console.log("You lose! rock beats scissors");
            computerScore += 1;
        }
    else if (playerSelection==computerSelection)
    {
        console.log("You've chosen the same weapon! Play Again!");
         j--;
    }
    else{
        console.log("Incorrect input! Play Again! (check your spelling)");
        j--;
    }
    
}

function getComputerChoice(){
    let randNum = Math.floor(Math.random()*3)+1;
    if(randNum == 1)
        return "rock";
    else if(randNum == 2)
        return "paper";
    else
        return "scissors";
}

function getPlayerChoice(){
    let choice = prompt("Rock Paper Scissors?");
    return choice;
}


let computerScore = 0;
let playerScore = 0;

let j=0;
while(j<5){
let computerSelection = getComputerChoice();

let playerSelection = getPlayerChoice();
if(playerSelection!=null) playerSelection = playerSelection.toLowerCase();


playRound(playerSelection, computerSelection);
j++;
}

console.log("Your Score: "+ playerScore+"\t\t Computer Score: "+computerScore);
if(playerScore>computerScore)
{
    console.log("Congratulation! You Won!");
}
else if(computerScore>playerScore)
    console.log("Sorry! You Lost!");

