const options = ['rock','paper','scissor'];



function computerChoice() { 
    const randomIndex = Math.floor(Math.random()* options.length)
    return options[randomIndex]
   
}

function checkWinner(player, computer) { 
    if (player === computer) { 
       document.getElementById("tie-sound").play(); 
       return "It's a tie! 😲";
       
    }
    
    else if (
        (player === 'rock' && computer === "scissor" ) ||
        (player === 'paper' && computer === "rock" ) ||
        (player === 'scissor' && computer === "paper" )
    ){

        document.getElementById("win-sound").play(); 
        return "You Win 🥳";
        
    }

    else {
        document.getElementById("lose-sound").play(); 
        return "You loss 🫵🤣";
        
    }
}

       
function playerChoice(playerSelection){
    const computerSelection = computerChoice();
    const result = checkWinner(playerSelection, computerSelection)
    document.getElementById('result').innerText = `You =>${playerSelection} 
                              Computer =>${computerSelection}
                                         ${result}`
}



// function toggleMute() {
//   if (isMuted) {
 
//     document.getElementById("win-sound").muted = false;
//     document.getElementById("lose-sound").muted = false;
//     document.getElementById("tie-sound").muted = false;
//     isMuted = false; 
//   } else {
    
//     document.getElementById("win-sound").muted = true;
//     document.getElementById("lose-sound").muted = true;
//     document.getElementById("tie-sound").muted = true;
//     isMuted = true; 
//   }
// }

function credit(){
  document.getElementById('crdt').innerText = "This Game is made by Aliakbarshk"
}
