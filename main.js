import {drawXaxis, drawYaxis} from './src/js/canvas.js';
import {canvas, ctx} from './src/js/comman.js';
import * as draw from './src/js/draw.js';

export let notCancel = true;
export let x = 0;

export var incX = function (){
    return x++;
}

addEventListener('load', () => {
    drawXaxis();
    drawYaxis();
});

window.setCanvas.addEventListener('click', () => {
    canvas.width = window.canvasWidth.value;
    canvas.height = window.canvasHeight.value;
    drawXaxis();
    drawYaxis();

    x=0;
    window.degreeFrom.value = 0;
});

window.sin.addEventListener('click', function () {
    notCancel = true;
    ctx.beginPath();
    draw.sin();
});

window.cancel.addEventListener('click', () => {
    notCancel = false;
});