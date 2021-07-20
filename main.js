import {drawXaxis, drawYaxis} from './src/js/canvas.js';
import {canvas, ctx} from './src/js/comman.js';
import * as draw from './src/js/draw.js';
import './src/js/menus.js'
export let notCancel = true;
export let x=0;

//menu-bar(icon) animation and visibility of menuOverlay
window.bar.addEventListener('click', function(){
    document.getElementById('bar').classList.toggle('change');
    if (document.getElementById('menuOverlay').style.display == "block"){
        document.getElementById('menuOverlay').style.display = "none";
    }
    else{
        document.getElementById('menuOverlay').style.display = "block";
    }
});

export var scaleX = function (){
    x=0;
    if (window.degreeFrom<0) x = +canvas.width/2 - +window.degreeFrom.value;
    else x = +canvas.width/2 + +window.degreeFrom.value;
    console.log(x);
}

export var incX = function (){
    return x++;
}

addEventListener('load', () => {
    drawXaxis();
    drawYaxis();
});

var dragging = false;
var lastX;
var marginLeft = 0;

//adding scrolling of canvas on moblie
canvas.addEventListener('touchstart', function(e) {
    var evt = e;
    dragging = true;
    lastX = evt.touches[0].clientX;
    e.preventDefault();
}, {passive: false});

window.addEventListener('touchmove', function(e) {
    var evt = e;
    if (dragging) {
        var delta = evt.touches[0].clientX - lastX;
        lastX = evt.touches[0].clientX;
        marginLeft += delta;
        canvas.style.marginLeft = marginLeft + "px";
    }
    e.preventDefault();
}, {passive :false});

window.addEventListener('touchend', function() {
    dragging = false;
}, {passive: false});

//adding canvas scrolling to Desktop devices
canvas.addEventListener('mousedown', function(e) {
    var evt = e;
    dragging = true;
    lastX = evt.clientX;
    e.preventDefault();
}, false);

window.addEventListener('mousemove', function(e) {
    var evt = e;
    if (dragging) {
        var delta = evt.clientX - lastX;
        lastX = evt.clientX;
        marginLeft += delta;
        canvas.style.marginLeft = marginLeft + "px";
    }
    e.preventDefault();
}, false);

window.addEventListener('mouseup', function() {
    dragging = false;
}, false);


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