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

const humanChoiceSpan = document.querySelector("#player-choice");
const pcChoiceSpan = document.querySelector("#pc-choice");
const playerScoreSpan = document.querySelector("#player-score")
const pcScoreSpan = document.querySelector ("#pc-score")
const announce = document.querySelector("#announce-winner");
const playedRound = document.querySelector('#played-round')

function resetGame() {
    announce.textContent = 'PICK ONE BELOW'
    announce.style.color = 'black'
    humanScore = 0;
    computerScore = 0;
    humanChoiceSpan.textContent = '—'
    pcChoiceSpan.textContent = '—'
    playerScoreSpan.textContent = '0'
    pcScoreSpan.textContent = '0'
}

    let humanScore = 0;
    let computerScore = 0; 

    function playRound(humanChoice, computerChoice) {

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

        playedRound.style.transform = 'scale(1.2)'; setTimeout(() => playedRound.style.transform = 'scale(1)', 150);
        if(humanScore === 5 || computerScore === 5)
        {
            humanScore === 5 ? alert('You won!') : alert('You lost')
            resetGame();
        }
    }


const buttonsDiv = document.querySelector('#play-buttons')

buttonsDiv.addEventListener('click', (event) => {
    playRound(event.target.id)
});
