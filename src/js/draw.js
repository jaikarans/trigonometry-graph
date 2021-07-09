import {canvas, canvasMenu, ctx} from './comman.js'
import {notCancel, x, incX} from '../../main.js'

var v = 0;
//var x = 0;

var rectHeight = 3;
var rectWidth = 3;


export var sin = function() {
    v = Math.sin(window.degreeFrom.value * Math.PI / 180);
    v=v*100;
    v= canvas.height/2 - v;
    
    ctx.lineTo(x ,v );
    ctx.stroke();

    window.degreeFrom.value++;
    incX();
    notCancel ? requestAnimationFrame(sin): null;
    
};

export var cos = function() {
    v = Math.cos(window.degreeFrom.value * Math.PI / 180);
    v=v*100;
    v= canvas.height/2 - v;
    
    ctx.lineTo(x ,v );
    ctx.stroke();

    window.degreeFrom.value++;
    incX();
    notCancel ? requestAnimationFrame(cos): null;
    
};

export var tan = function() {
    v = Math.tan(window.degreeFrom.value * Math.PI / 180);
    v=v*100;
    v= canvas.height/2 - v;
    
    ctx.fillRect(x, v, rectWidth, rectHeight);

    window.degreeFrom.value++;
    incX();
    notCancel ? requestAnimationFrame(tan): null;
    
};

export var cot = function() {
    v = 1 / Math.tan(window.degreeFrom.value * Math.PI / 180);
    v=v*100;
    v= canvas.height/2 - v;
    
    ctx.fillRect(x, v, rectWidth, rectHeight);

    window.degreeFrom.value++;
    incX();
    notCancel ? requestAnimationFrame(cot): null;
    
};

export var sec = function() {
    v = 1 / Math.cos(window.degreeFrom.value * Math.PI / 180);
    v=v*100;
    v= canvas.height/2 - v;
    
    ctx.fillRect(x, v, rectWidth, rectHeight);

    window.degreeFrom.value++;
    incX();
    notCancel ? requestAnimationFrame(sec): null;
    
};

export var cosec = function() {
    v = 1 / Math.sin(window.degreeFrom.value * Math.PI / 180);
    v=v*100;
    v= canvas.height/2 - v;
    
    ctx.fillRect(x, v, rectWidth, rectHeight);

    window.degreeFrom.value++;
    incX();
    notCancel ? requestAnimationFrame(cosec): null;
    
};

