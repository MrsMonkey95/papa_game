/*
    Logic for the papa snake
    created by MrsMonkey95 on 09.04.2021
*/

import { getInputDirection } from "./input.js";

export const PAPA_SPEED = 1;
const papaSnake = [
    { x: 10, y: 11 }
];



export function update() {
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