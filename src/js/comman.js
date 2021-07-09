const canvas = document.getElementById('canvas');
const canvasMenu = document.getElementById('canMenu');

const canvasWidth = document.getElementById('canvasWidth');
const canvasHeight = document.getElementById('canvasHeight');

const setCanvas = document.getElementById('setCanvas');

//let notCancel = true;


if (canvas.getContext){
    var ctx = canvas.getContext('2d');
}

export {canvas, ctx, canvasMenu, canvasWidth, canvasHeight, setCanvas};