function GetComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
 
    if (randomNumber === 0)
    {
        return 'rock'
    }
  
    else if (randomNumber === 1)
    {
        return 'paper'
    }

    else
    {
        return 'scissors'
    }
}


function GetHumanChoice() {
    let item = prompt('Rock, paper or scissors?').toLowerCase()

    if (item === 'rock'){
        return 'rock'
    }
    else if (item === 'paper'){
        return 'paper'
    }
    else if (item === 'scissors'){
        return 'scissors'
    }
    else{
        console.log('A typo, you lose a point lol')
    }
}



function playGame(){
    let humanScore = 0;
    let computerScore = 0;
   
    console.log('Score:',humanScore,':',computerScore)
    if (humanScore>computerScore) {
        console.log('Congrats! You won the game.')
    }
    else if(computerScore>humanScore) {
        console.log('You lost the game.')
    }
    else if(computerScore=humanScore)
    {
        console.log('The game ended in a tie!')
    }
    
    function playRound(humanChoice, computerChoice) {
        humanChoice = GetHumanChoice();
        computerChoice = GetComputerChoice();
        console.log('You chose:',humanChoice);
        console.log('The computer rolled:',computerChoice);
        if(humanChoice === computerChoice){
            console.log('Round tied')
        }
        else if (humanChoice === 'rock' & computerChoice === 'scissors' ||
                 humanChoice === 'paper' & computerChoice === 'rock'    ||
                 humanChoice === 'scissors' & computerChoice === 'paper'){
            console.log('Round won')
            humanScore++
        }
        else{
            console.log('Round lost')
            computerScore++
        }
    }
    
}

playGame()