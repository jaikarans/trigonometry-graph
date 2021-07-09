import {canvas, canvasMenu, ctx} from './comman.js'
import {notCancel, x, incX} from '../../main.js'

var v = 0;
//var x = 0;
var dt = window.degreeTo.value;



export var sin = function() {
    v = Math.sin(window.degreeFrom.value * Math.PI / 180);
    v=v*100;
    v= canvas.height/2 - v;
    
    ctx.lineTo(x + canvas.width/2 ,v );
    ctx.stroke();
    
    window.degreeFrom.value++;
    incX();

    notCancel ? requestAnimationFrame(sin): null;
    
};
