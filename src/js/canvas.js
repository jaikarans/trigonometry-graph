import {canvas, ctx} from './comman.js';
import './canvasMenu.js'


export function drawXaxis(){
    ctx.beginPath();
    ctx.moveTo(0, canvas.height/2);
    ctx.lineTo(canvas.width, canvas.height/2);
    ctx.stroke();
}

export function drawYaxis(){
    ctx.beginPath();
    ctx.moveTo(canvas.width/2, 0);
    ctx.lineTo(canvas.width/2, canvas.height);
    ctx.stroke();
}

export function drawSmallAxisX(){
    for( let i=0; i<=canvas.height; i+=10){
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.lineWidth=0.25;
        ctx.stroke();
    }
}

export function drawSmallAxisY(){
    for( let i=0; i<=canvas.width; i+=10){
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.width);
        ctx.lineWidth=0.25;
        ctx.stroke();
    }
}