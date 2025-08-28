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
        const humanChoiceSpan = document.querySelector("#player-choice");
        const pcChoiceSpan = document.querySelector("#pc-choice");
        const playerScoreSpan = document.querySelector("#player-score")
        const pcScoreSpan = document.querySelector ("#pc-score")
        const announce = document.querySelector("#announce-winner");

        computerChoice = GetComputerChoice();
        humanChoiceSpan.textContent = humanChoice;
        pcChoiceSpan.textContent = computerChoice;

        

        if(humanChoice === computerChoice){
            announce.textContent = 'Round tied';
            announce.style.color = 'gray'
        }
        else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
                 humanChoice === 'paper' && computerChoice === 'rock'    ||
                 humanChoice === 'scissors' && computerChoice === 'paper'){
            announce.textContent = 'Round won';
            announce.style.color = 'green'
            humanScore++;
            playerScoreSpan.textContent = humanScore;
        }
        else{
            announce.textContent = 'Round lost';
            announce.style.color = 'red'
            computerScore++;
            pcScoreSpan.textContent = computerScore;
        }

    }


const buttonsDiv = document.querySelector('#play-buttons')

buttonsDiv.addEventListener('click', (event) => {
    playRound(event.target.id)
});
