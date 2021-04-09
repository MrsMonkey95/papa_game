
let lastRenderTime = 0;

function main(currentTime) {
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    window.requestAnimationFrame(main);
    lastRenderTime = currentTime;
    console.log(currentTime);
}

window.requestAnimationFrame(main);