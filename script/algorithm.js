/* 
Script for the game algorithm.
created by MrsMonkey95 on 09.04.2021 
*/

// Variables
let lastRenderTime = 0;
let gameOver = false;
const gameSpace = document.getElementById('game-space');
const body = document.getElementById('body');

// Imports
import { PAPA_SPEED, update as updatePapa, draw as drawPapa, getPapaHead, papaIntersection } from './papa.js';

import { update as updateMoonies, draw as drawMoonies } from './moonies.js';

import { outsideGrid } from './grid.js';

import { draw as drawScore, update as updateScore } from './highscore.js';

// import { playRagnarSong } from './audio.js';

// Game loop
function main(currentTime) { /* [Violation] 'requestAnimationFrame' handler took 3996ms  algorithm.js: 21 */
    /*  TO DO: Change the dialog box from default confirm function to a customized box using colors and buttontext matching the game. 
        i.e. with sweetalert / bootboxjs / jQuery UI dialog
    */
    if (gameOver) {
        // document.getElementById('ragnarSong').play();
        if (confirm('You papaer-handed! Press "ok" to collect more moonies.')) {
           return location.reload();
        }
        return window.location.replace("http://safemoon.net");

        //return alert('you paperhanded'); <- changed to restart game if wanted to play longer
    }

    
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    // Checking render time, how often rendering per second
    if (secondsSinceLastRender < 1 / PAPA_SPEED) return;

    lastRenderTime = currentTime;
    console.log('Render');
    /* Game logic starting here */

    update();
    draw();
    
}

window.requestAnimationFrame(main);

function update() {
    updatePapa();
    updateMoonies();
    checkDeath();
    updateScore();
}

function draw() {
    
    gameSpace.innerHTML = '';
    drawPapa(gameSpace);
    drawMoonies(gameSpace);
    drawScore(body);
    


}

function checkDeath() {
    gameOver = outsideGrid(getPapaHead()) || papaIntersection();
}

