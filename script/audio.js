/* This file will contain come music and / or sound effects to play along.
    created by MrsMonkey95 on 10.04.2021
*/



// var ragnarSong = new Audio('audio/Flymetothemoon-Ragnar.mp3');
var coin = new Audio('./audio/coin.mp3');


/* export function playRagnarSong(){
    //ragnarSong.play();
    new Audio('./audio/Flymetothemoon-Ragnar.mp3').play();
} */

// coin is working in edge but doesn't work in chrome...  -> fixed in chrome settings
// TO DO: figure out how to fix this shit without turning off hardware acceleration in chrome manually <- probably fixed, could have been a sound glitch on my pc
export function playCoin(){
    coin.play();
}