function getComputerChoice(){
    let textArray = ["rock", "scissors", "paper"];
    let randomIndex = Math.floor(Math.random() * textArray.length); 
    let randomElement = textArray[randomIndex];
    console.log(randomElement);
    return randomElement;
}

function playRound(playerSelection, computerSelection){
    //playerSelection = playerSelection.toLowerCase();
    if(playerSelection == "rock" && computerSelection == "paper"){
        return "You Lose! Paper beats rock";
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        return "You Win! Rock beats scissors"
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        return "You Win! Scissors beats paper";
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        return "You Win! Paper beats rock";
    }
        
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        return "You Lose! Rock beats scissors";
    }
        
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        return "You Lose! Scissors beats paper";
    }
        
        
    else if(playerSelection === computerSelection){
        return "Tie!"
    }
    
        
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));