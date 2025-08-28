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

    let humanScore = 0;
    let computerScore = 0; 

    function playRound(humanChoice, computerChoice) {
        const humanChoiceSpan = document.querySelector("#player-choice")
        const pcChoiceSpan = document.querySelector("#pc-choice")
        computerChoice = GetComputerChoice();
        humanChoiceSpan.textContent = humanChoice;
        pcChoiceSpan.textContent = computerChoice;
        if(humanChoice === computerChoice){
            console.log('Round tied')
        }
        else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
                 humanChoice === 'paper' && computerChoice === 'rock'    ||
                 humanChoice === 'scissors' && computerChoice === 'paper'){
            console.log('Round won')
            humanScore++
        }
        else{
            console.log('Round lost')
            computerScore++
        }
        console.log(humanScore)
    }


const buttonsDiv = document.querySelector('#play-buttons')

buttonsDiv.addEventListener('click', (event) => {
    playRound(event.target.id)
});
