import {canvas, canvasMenu, ctx} from './comman.js';

canvasMenu.insertAdjacentHTML('afterbegin', `
    <div>
        Canvas size = <input type="number" id="canvasWidth" value="900">x
        <input type="number" id="canvasHeight" value="800">
        <button id="setCanvas">set-canvas</button>
    </div>
`);

canvasMenu.insertAdjacentHTML('beforeend', `
    <div>
        Range in degree = <input type="number" id="degreeFrom"> to 
        <input type="number" id="degreeTo">
    </div>
`);

canvasMenu.insertAdjacentHTML('beforeend', `
    <div>
        <button id="sin">sin</button>
    </div>
`);

canvasMenu.insertAdjacentHTML('beforeend', `
    <div>
        <button id="cancel">Cancel</button>
    </div>
`);


