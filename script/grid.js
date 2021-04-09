/* 
    Script for a random new Moonies Positioning on the grid.
    created by MrsMonky95 on 09.04.2021
*/

const GRID_SIZE = 21;
export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}