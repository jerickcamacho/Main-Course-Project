/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Defining Variables 
let activePlayer, gamePlaying, defaultScores, roundScore; 

// Initializing new game 
newGame(); 

// executing functions of newGame()
document.querySelector(".btn-new").addEventListener("click", newGame); 

// document.querySelector(".btn-hold").addEventListener("click" ,); 

/*********************** NEW GAME function ****************************/
function newGame() {   
    scores = [0 , 0]; // starting array defaultScores 
    activePlayer = 0; // Player 1
    roundScore = 0;  // hold button score 
    gamePlaying = true; // start game 

    // DOM selection  
    const Form = document.getElementById("form");  // Si getElementByID kunin nya elements from html 
     
    // DOM manipulation
    const Inputs = document.querySelectorAll(".btn-element"); 

    // Remove the image displaying none, mag show lang kapag nag roll dice (Dice Image display)
    document.querySelector(".dice-one").style.display = "none"; 
    document.querySelector(".dice").style.display = "none"; 

    // Right side "Player 2" 
    const Player1Panel = document.querySelector(".player-1-panel"); 
    document.querySelector("#score-1").textContent = '0'; // Change the text display of id = "score-1" from 72 to "0"
    document.querySelector('#name-1').textContent = 'Player 2'; // to remove 'winner' text for the new game
    document.querySelector('.player-1-panel').classList.remove('active'); // reset related line in function holdScore
    document.querySelector('.player-1-panel').classList.remove('winner'); // reset related line in function holdScore


    // Left side "Player 1" 
    const Player0Panel = document.querySelector(".player-0-panel"); 
    document.querySelector("#score-0").textContent = '0'; // Change the text display of id = "score-0" from 43 to "0"
    document.querySelector("#current-0").textContent = '0'; // Change the text display of id = "current-0" from 11 to "0" 
    document.querySelector('#name-0').textContent = 'Player 1'; // to remove 'winner' text for the new game
	document.querySelector('.player-0-panel').classList.remove('active'); // reset related line in function holdScore
    document.querySelector('.player-0-panel').classList.remove('winner'); // reset related line in function holdScore
    
    document.querySelector('.player-0-panel').classList.add('active'); // highlight on Player 1 by default

console.log(Form);
console.log(Player1Panel);
console.log(Player0Panel);
console.log(Inputs);  
}
//*********************** End of NEW GAME function Button ****************************/

// executing functions of rollDice()
document.querySelector(".btn-roll").addEventListener("click" , rollDice); 
//*********************** Roll Dice function Button ****************************/
function rollDice(){
    if(gamePlaying){
        
        let diceResult = Math.floor(Math.random() * 6) + 1; // Eto yung formula para makuha yung dice once na magrollDice
        
        let dice = document.querySelector(".dice"); // image class = dice // assigning variable
        dice.style.display = 'block'; // adjusting css 
        dice.src = `dice-${diceResult}.png`; // linking the picture to be used

        
         let diceOne = document.querySelector(".dice-one"); // image class = dice-one 
         diceOne.display = 'block'; 
         diceOne.src = `dice-${diceOne}.png`; 

        if(diceResult !== 1){
            roundScore += diceResult; // 
            document.querySelector(`#current-${activePlayer}`).textContent = roundScore; 
        }else{
            nextPlayer(); 
        }
    }
}


// for(let input of Inputs){
//     console.log(input);  
// }

//  // DOM manipulation 
 

