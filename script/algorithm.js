/* 
Script for the game algorithm.
created by MrsMonkey95 on 09.04.2021 
*/

// Variables
let lastRenderTime = 0;
let gameOver = false;
const gameSpace = document.getElementById('game-space');

// Imports
import { PAPA_SPEED, update as updatePapa, draw as drawPapa, getPapaHead,  papaIntersection} from './papa.js';

import { update as updateMoonies, draw as drawMoonies } from './moonies.js';

import { outsideGrid } from './grid.js';



// Game loop
function main(currentTime) {

    if (gameOver) {
        return alert('you paperhanded');
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
}

function draw() {
    gameSpace.innerHTML = '';
    drawPapa(gameSpace);
    drawMoonies(gameSpace);
}

function checkDeath() {
    gameOver = outsideGrid(getPapaHead()) || papaIntersection();
}