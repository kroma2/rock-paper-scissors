

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

console.log(GetComputerChoice())



function GetHumanChoice() {
    let item = prompt('Rock, paper or scissors?')
    if (item.toLowerCase === 'rock'.toLowerCase){
        return 'You chose rock'
    }
    else if (item.toLowerCase === 'paper'.toLowerCase){
        return 'You chose paper'
    }
    else if (item.toLowerCase === 'scissors'.toLowerCase){
        return 'You chose scissors'
    }
    else{
        return 'Please choose rock, paper or scissors'
    }
}

console.log(GetHumanChoice())