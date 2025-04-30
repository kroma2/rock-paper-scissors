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
        console.log('Please choose rock, paper or scissors')
    }
}



function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playRound()
    }
    function playRound(humanChoice, computerChoice) {
        computerChoice = GetComputerChoice();
        humanChoice = GetHumanChoice();
        console.log('You chose:',humanChoice);
        console.log('The computer rolled:',computerChoice);
        
    
        if(humanChoice === computerChoice){
            console.log('It\'s a tie!')
        }
        else if (humanChoice === 'rock' & computerChoice === 'scissors' ||
                 humanChoice === 'paper' & computerChoice === 'rock'    ||
                 humanChoice === 'scissors' & computerChoice === 'paper'){
            console.log('You win!')
            humanScore++
        }
        else{
            console.log('You lose!')
            computerScore++
        }
    }
    
}

playGame()