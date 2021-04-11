/* 
    This Script is for the moonies to be eaten by papa.
    Created by MrsMonkey95 on 09.04.2021
*/
import { onPapa, expandPapa } from './papa.js';
import { randomGridPosition} from './grid.js';
import { playCoin } from './audio.js';

let moonies = getRandomMooniesPosition();
const EXPANSION_RATE = 1;
var count = 0;

export function update() {
    if (onPapa(moonies)) {
        playCoin();
        expandPapa(EXPANSION_RATE);
        moonies = getRandomMooniesPosition();
        count = count + 1;
        
    }
}

export function draw(gameSpace) {
    const mooniesElement = document.createElement('div');
    mooniesElement.style.gridRowStart = moonies.y;
    mooniesElement.style.gridColumnStart = moonies.x;
    mooniesElement.classList.add('moonies');
    gameSpace.appendChild(mooniesElement);
}

export function getRandomMooniesPosition() {
    let newMooniesPosition;
    while (newMooniesPosition == null || onPapa(newMooniesPosition)) {
        newMooniesPosition = randomGridPosition();
    }
    return newMooniesPosition;
}

export {count};