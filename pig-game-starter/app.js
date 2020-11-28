/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

// Assigning variables using array  
let activePlayer, globalScores, roundScore, gamePlay; 

// executing functions 
document.querySelector(".btn-new").addEventListener("click", newGame); 
document.querySelector(".btn-roll").addEventListener("click", rollDice); 
document.querySelector(".btn-hold").addEventListener("click", holdScore); 

/***** Targeting elements to manipulate and select by using Query Selector *****/  
console.log(document.querySelector(".wrapper ")); // Whole div 
console.log(document.querySelector(".btn-element")); // whole button includes = button, image and input 

/**************** PLAYER 1 **********************/
console.log(document.querySelector(".player-0-panel")); 
console.log(document.querySelector(".player-current-box")); 

/**************** PLAYER 2 **********************/
console.log(document.querySelector(".player-1-panel"));
console.log(document.querySelector(".player-current-box")); 

// Player 1 and Player 2 class = player-score change both value into '0' 
let playerScore = document.querySelectorAll(".player-score"); 

// Targeting class = player-current-score to change '0' once hit the newGame button 
let playerCurrentScore = document.querySelectorAll(".player-current-score"); 

// Targeting class = player-name  
let player1Name = document.querySelector("#name-0"); 
let player2Name = document.querySelector("#name-1"); 

// Targeting Player 1 class = player-0-panel and Player 2 class = player-1-panel// Targeting Player 1 class = player-0-panel and Player 2 class = player-1-panel
let player0Panel = document.querySelector(".player-0-panel"); 
let player1Panel = document.querySelector(".player-1-panel"); 

// Targeting Image dice from html and Threshold 
let threshold = document.querySelector("#threshold"); 
let imgDice = document.querySelector(".dice");  
 
/*********************** Start of NEW GAME function ****************************/
    function newGame(){
        globalScores = [0,0]; 
        roundScore = 0; 
        activePlayer = 0; 
        gamePlay = true; 

        // 
         threshold.addEventListener("keypress", function(){ // inserting the value of threshold 
             threshold.value;   
         })

         threshold.value = threshold.defaultValue; // Kapag nirefresh babalik sa dating value 
         imgDice.style.display = "none"; 

        // Player 1 and Player 2 class = player-score change both value into '0' 
        for(let globalScore of playerScore){
            console.log(globalScore.textContent = '0');  
        }
        // Targeting class = player-current-score to change '0' once hit the newGame button 
        for(let playerCurrentScores of playerCurrentScore){
            console.log(playerCurrentScores.textContent = '0'); 
        }
        // Kapag nag hit new Game mag rereset sa name below indicated value 
        player1Name.textContent = "Player 1"; 
        player2Name.textContent = "Player 2";  

        // Player 1 remove the active and winner 
        player0Panel.classList.remove('active'); 
        player0Panel.classList.remove('winner'); 

        // Player 2 remove the active and winner
        player1Panel.classList.remove('active'); 
        player1Panel.classList.remove('winner'); 

        // Highlithed the Panel Player 1 as active 
        player1Panel.classList.add('active');
        
    }
    newGame();
    console.log(threshold);      

//*********************** End of NEW GAME function Button ****************************/  

/*********************** ROLL DICE function Button **********************************/  
    function rollDice(){
        let currenRoundScores = document.querySelector(`#current-${activePlayer}`); // Assigning variable for the current scores

        if(gamePlay){
            let diceResult = Math.floor(Math.random() * 6) + 1; //  Getting dice output as dice result using this formula 
            imgDice.style.display = "block"; // adjusting the css display property into block
            imgDice.src = `dice-${diceResult}.png`; // the image display wil depends on the result of dice 

            if(diceResult === 1){  // statement condition once the roll dice hit number equal to  '1' switch turn to the ned Player
                nextPlayer(); // initiate next player turn 
                imgDice.style.display = "none"; // nothings will be displayed 
            
            } else {
                roundScore += diceResult; // to get the sum of rounScore by using this formula 
                currenRoundScores.textContent = roundScore; // then yung currenScore ididisplay nya yung roundScore 
            }
        }
    }
/*********************** End of ROLL DICE function Button ****************************/ 

/*********************** Start of Taking Turns ****************************/
    function nextPlayer(){
        if(activePlayer === 0){ // // kapag si Player 1 ay '0' active Player, tapos nextPlayer magiging Player 2 '1'
            activePlayer = 1; 
            roundScore = 0; // removing this would pass the accumulated score to the next player
        
        } else {
            activePlayer = 0; // kapag si Player 2 ay '1' vice versa with Player 1 
            roundScore = 0;   

            playerCurrentScore.textContent = '0';  // reset current score for the next player's turn  

            // toggling "active" adding if absent; removing if present 
            player0Panel.classList.toggle('active');
            player1Panel.classList.toggle('active'); 
        }
    }
    console.log(nextPlayer); 

/*********************** End of Taking Turns ****************************/ 

/*********************** Start of HOLD function Button ****************************/ 
    function holdScore(){
        
        // Assigning variables to target classes and id from html 
        let currentPlayerGlobalScore = document.querySelector(`#score-${activePlayer}`); 
        let currentPlayerScore = document.querySelector(`#current-${activePlayer}`); 
        let currentPlayerName = document.querySelector(`#name-${activePlayer}`); 
        let currentPlayerPanel = document.querySelector(`.player-${activePlayer}-panel`); 

        if(gamePlay){
            globalScores[activePlayer] += roundScore; // mag add yung roundScore at yung globalScores 
            currentPlayerGlobalScore.textContent = globalScores[activePlayer]; // ididisplay yung globalScores ni active player 

            if(globalScores[activePlayer] >= threshold.value){
                currentPlayerName.textContent = "Winner!"; // papalitan name into "Winner!" text
                currentPlayerScore.textContent = '0'; // reset to '0' current score 
                imgDice.style.display = "none"; 

                // Stop the game 
                currentPlayerPanel.classList.remove('active'); 
                currentPlayerPanel.classList.add('winner'); 
                gamePlay = false;     

            } else {
                nextPlayer(); // another game will begin 
            }
        }
    }

/*********************** End of HOLD function Button ****************************/    