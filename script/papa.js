/*
    Logic for the papa snake
    created by MrsMonkey95 on 09.04.2021
*/

import { getInputDirection } from "./input.js";

export var PAPA_SPEED = 5;
const papaSnake = [
    { x: 11, y: 11 }
];
let newSegments = 0;


export function update() {

    addSegments();

    const inputDirection = getInputDirection();
    for (let i = papaSnake.length - 2; i >= 0; i--) {
        papaSnake[i + 1] = { ...papaSnake[i] }
    }

    papaSnake[0].x += inputDirection.x;
    papaSnake[0].y += inputDirection.y;


    console.log('update my Papa');
}

export function draw(gameSpace) {
    papaSnake.forEach(segment => {
        const papaElement = document.createElement('div');
        papaElement.style.gridRowStart = segment.y;
        papaElement.style.gridColumnStart = segment.x;
        papaElement.classList.add('papa')
        gameSpace.appendChild(papaElement);
        console.log('draw me a Papa');
    })

}

export function expandPapa(amount) {
    newSegments += amount;
}

export function onPapa(position, { ignoreHead = false } = {}) {
    return papaSnake.some((segment, index) => {
        if (ignoreHead && (index === 0) ) { return false; }
        return equalPositions(segment, position);
    } )
}

export function getPapaHead() {
    return papaSnake[0];
}

export function papaIntersection() {
    return onPapa(papaSnake[0], { ignoreHead: true });
}


function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y ;
}

function addSegments(){
    for (let i = 0; i < newSegments; i++) {
        papaSnake.push( { ...papaSnake[papaSnake.length -1] });
    }

    newSegments = 0;

}