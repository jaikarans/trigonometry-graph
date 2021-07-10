import {drawXaxis, drawYaxis} from './src/js/canvas.js';
import {canvas, ctx} from './src/js/comman.js';
import * as draw from './src/js/draw.js';

export let notCancel = true;
export let x=0;

export var scaleX = function (){
    x=0;
    if (window.degreeFrom<0) x = +canvas.width/2 - +window.degreeFrom.value;
    else x = +(canvas.width/2)*3.33 + +window.degreeFrom.value;
    console.log(x);
}

export var incX = function (){
    return x++;
}
window.scale.addEventListener('click', () => {
    draw.scale();
});
addEventListener('load', () => {
    drawXaxis();
    drawYaxis();
});

window.setCanvas.addEventListener('click', () => {
    canvas.width = window.canvasWidth.value;
    canvas.height = window.canvasHeight.value;
    //draw Axis on Canvas size reset
    drawXaxis();
    drawYaxis();

    window.degreeFrom.value = 0;
});

window.pause.addEventListener('click', () => {
    notCancel = false;
});

window.reset.addEventListener('click', () => {
    
    window.degreeFrom.value = 0;
});

window.resetDrawing.addEventListener('click', () => {
    canvas.width = window.canvasWidth.value;
    canvas.height = window.canvasHeight.value;
    //draw Axis on Canvas size reset
    drawXaxis();
    drawYaxis();
    window.degreeFrom.value = 0;
});

window.sin.addEventListener('click', function () {
    //condition to terminate animation
    notCancel = true;
    ctx.beginPath();
    scaleX();
    draw.sin();
});

window.cos.addEventListener('click', function () {
    //condition to terminate animation
    notCancel = true;
    ctx.beginPath();
    scaleX();
    draw.cos();
});

window.tan.addEventListener('click', function () {
    //condition to terminate animation
    notCancel = true;
    ctx.beginPath();
    scaleX();
    draw.tan();
});

window.cot.addEventListener('click', function () {
    //condition to terminate animation
    notCancel = true;
    ctx.beginPath();
    scaleX();
    draw.cot();
});

window.sec.addEventListener('click', function () {
    //condition to terminate animation
    notCancel = true;
    ctx.beginPath();
    scaleX();
    draw.sec();
});

window.cosec.addEventListener('click', function () {
    //condition to terminate animation
    notCancel = true;
    ctx.beginPath();
    scaleX();
    draw.cosec();
});