import {drawSmallAxisX, drawSmallAxisY, drawXaxis, drawYaxis} from './src/js/canvas.js';
import {canvas, ctx, menuBar} from './src/js/comman.js';
import * as draw from './src/js/draw.js';
import './src/js/menus.js'
export let notCancel = true;
export let x=0;

//setting canvas size according to device width
if (window.screen.width<=480){
    canvas.width = 1000;
    canvas.height = 300;
}else{
    canvas.width = 1600;
    canvas.height = 600;
}

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

//menuBar clear butoon
window.clearCanvasMenuBar.addEventListener('click',() => {
    //pause graph drawing
    notCancel = false;
    //clear everythig which draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    window.degreeFrom.value = 0;
    if (window.screen.width<=480){
        canvas.width = 1000;
        canvas.height = 300;
    }else{
        canvas.width = 1600;
        canvas.height = 600;
    }
    //draw Axis on Canvas size reset
    drawXaxis();
    drawYaxis();
    drawSmallAxisX();
    drawSmallAxisY();
});

window.aboutDeveloper.addEventListener('click', ()=>{
    window.open('https://github.com/jaikarans', '_blank');
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
    drawSmallAxisX();
    drawSmallAxisY();
});
/***********************************************
 *  adding touch events for mobile devices.
 * 
 ***********************************************
 * */ 

var dragging = false;
var lastX;
var marginLeft = 0;
//putting canvas on center (mobile) 
if (window.screen.width <= 480){
    marginLeft = -800;
    canvas.style.marginLeft = marginLeft + "px";
}

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




window.setCanvas.addEventListener('click', () => {
    canvas.width = window.canvasWidth.value;
    canvas.height = window.canvasHeight.value;
    //draw Axis on Canvas size reset
    drawXaxis();
    drawYaxis();
    drawSmallAxisX();
    drawSmallAxisY();
    window.degreeFrom.value = 0;
});

window.pause.addEventListener('click', () => {
    notCancel = false;
});



window.resetDrawing.addEventListener('click', () => {
    canvas.width = window.canvasWidth.value;
    canvas.height = window.canvasHeight.value;
    //draw Axis on Canvas size reset
    drawXaxis();
    drawYaxis();
    drawSmallAxisX();
    drawSmallAxisY();
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