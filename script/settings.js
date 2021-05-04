/* 
    This script contains settings for the gameplay.
    created by MrsMonkey95 on 18.04.2021
 */



/* 
    IMPORTANT NOTE: Radio buttons are still taking "keydown" inputs, so at the moment one must click on the page somewhere to use the arrow keys for the game,
                    otherwise the arrow keys will switch through the radio buttons and cause a terrible mess...
*/



/*  Function to set focus back on the game space instead to the
    radio group when selecting difficulty. */
export function setFocusToGameSpace(){
    document.getElementById('game-space').focus();
}





     // fuck this I wrote it directly into algorithm.js  

     /* useless piece of code */
    /* export function difficulty() {
        var difficulty = parseInt(document.querySelector('input[name="difficulty"]:checked').value);
        return difficulty;
       
        
        
    } */
    
    