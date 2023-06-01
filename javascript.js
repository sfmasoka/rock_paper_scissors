let winner = false;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
//let counter = 0;


const player_textarea = document.querySelector("#player-score-textarea");
const computer_textarea = document.querySelector("#computer-score-textarea");
const result_textarea = document.querySelector("#result-textarea");

//initialize score
computer_textarea.textContent = "0";
player_textarea.textContent = "0";


const rock = document.querySelector("#rock");
rock.addEventListener("click", () =>{
    if (!winner){
       
        playerSelection = "rock";
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        getWinner();
    }
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () =>{
    if (!winner){
       
        playerSelection = "paper";
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        getWinner();
    }
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () =>{
    if (!winner){
       
        playerSelection = "scissors";
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        getWinner();
    }
});

const play_again = document.querySelector(".play-again");
play_again.addEventListener("click", () =>{
    winner = false;
    result_textarea.textContent = "";
    computer_textarea.textContent = "0";
    player_textarea.textContent = "0";
    computerScore = 0;
    playerScore = 0;
});

function getComputerChoice(){
    let randNum = Math.floor(Math.random()*3)+1;
    if(randNum == 1)
        return "rock";
    else if(randNum == 2)
        return "paper";
    else
        return "scissors";
}

const getWinner =function (){
    if ( computerScore == 5 )
    {
        result_textarea.textContent = "Sorry! You Lost The Game!";
        winner = true;
    }
    else if ( playerScore == 5 )
    {
        result_textarea.textContent = "Congratulation! You Won!";
        winner = true;
    }
};

function playRound(playerSelection, computerSelection){
    if(playerSelection=="rock" && computerSelection=="paper")
        {
            result_textarea.textContent = "You lose! Paper beats Rock";
            computerScore += 1;
            computer_textarea.textContent = computerScore;
        }
    else if (playerSelection=="rock" && computerSelection=="scissors")
        {
            result_textarea.textContent = "You win! rock beats scissors";
            playerScore += 1;
            player_textarea.textContent = playerScore;
        }
    else if (playerSelection=="paper" && computerSelection=="rock")
        {
            result_textarea.textContent ="You win! Paper beats Rock";
            playerScore += 1;
            player_textarea.textContent = playerScore;
        }

    else if (playerSelection=="paper" && computerSelection=="scissors")
        {
            result_textarea.textContent ="You lose! scissors beats paper";
            computerScore += 1;
            computer_textarea.textContent = computerScore;
        }
    else if (playerSelection=="scissors" && computerSelection=="paper")
        {
            result_textarea.textContent = "You win! scissors beats paper";
            playerScore += 1;
            player_textarea.textContent = playerScore;
        }
    else if (playerSelection=="scissors" && computerSelection=="rock")
        {
            result_textarea.textContent = "You lose! rock beats scissors";
            computerScore += 1;
            computer_textarea.textContent = computerScore;
        }
    else if (playerSelection==computerSelection)
    {
        result_textarea.textContent = "You've both chosen the same weapon! Choose weapon again!";
        
    }

    
}

