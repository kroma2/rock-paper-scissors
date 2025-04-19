let humanScore = 0;
let computerScore = 0;

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
    let item = prompt('Rock, paper or scissors?')
    if (item.toLowerCase === 'rock'.toLowerCase){
        return 'rock'
    }
    else if (item.toLowerCase === 'paper'.toLowerCase){
        return 'paper'
    }
    else if (item.toLowerCase === 'scissors'.toLowerCase){
        return 'scissors'
    }
    else{
        console.log('Please choose rock, paper or scissors')
    }
}

function playRound(humanChoice, computerChoice) {
    computerChoice = GetComputerChoice();
    humanChoice = GetHumanChoice();
    console.log('The computer rolled:',computerChoice);
    console.log('You chose:',humanChoice);

    if(humanChoice === computerChoice){
        console.log('It\'s a tie!')
    }

}

playRound();