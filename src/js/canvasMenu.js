import {canvas, canvasMenu, ctx} from './comman.js';

canvasMenu.insertAdjacentHTML('afterbegin', `
    Canvas size = <input type="number" id="canvasWidth" value="400">x
    <input type="number" id="canvasHeight" value="400">
    <button id="setCanvas">set-canvas</button>
`);



