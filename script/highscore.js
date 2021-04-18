/*  This script will (hopefully) display the highscore in the game.
    created by MrsMonkey95 on 11.04.2021
    */


// i have no clue and am so tired.... zZz zZz zZz



import { count } from './moonies.js';



var highscoreElement = document.getElementById('highscore');



/*  I hate myself and its 5 am...
*/
export function update() {
    count;
    console.log(count);
    
    
}



export function draw(highscore) {
        
    highscoreElement.innerHTML = 'Score: ' + count;
    highscoreElement.classList.add('highscore');
    //highscore.appendChild(highscoreElement);
}