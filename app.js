const display = document.querySelector('#display');

function getComputerChoice() {
   //debugger
   let randomNumber = Math.floor(Math.random() * 3);
   switch (randomNumber) {
      case 0:
         return 'Rock'
      case 1:
         return 'Paper'
      case 2:
         return 'Scissors'
   }
}
//console.log(getComputerChoice());
display.innerHTML = getComputerChoice();



// function playRound(playerSelection, computerSelection) {
//    // your code here!
//    }
