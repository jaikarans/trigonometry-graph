import {drawXaxis, drawYaxis} from './src/js/canvas.js';
import {canvas, canvasHeight, canvasWidth, setCanvas} from './src/js/comman.js';
addEventListener('load', () => {
    drawXaxis();
    drawYaxis();
});

window.setCanvas.addEventListener('click', () => {
    canvas.width = window.canvasWidth.value;
    canvas.height = window.canvasHeight.value;
    drawXaxis();
    drawYaxis();
});