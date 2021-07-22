import {canvasMenu} from './comman.js';

canvasMenu.insertAdjacentHTML('afterbegin', `
    <div>
        Graph size = <input type="number" id="canvasWidth" value="1000">x
        <input type="number" id="canvasHeight" value="300">
        <button id="setCanvas">set-canvas-size</button>
        <button id="resetDrawing">Reset Drawing</button>
    </div>
`);

canvasMenu.insertAdjacentHTML('beforeend', `
    <div>
        Enter degree (default is 0) = <input type="number" id="degreeFrom">
        <button id="reset">Reset degree</button>
    </div>
`);

canvasMenu.insertAdjacentHTML('beforeend', `
    <div>
        <button id="sin">sin</button>
        <button id="cos">cos</button>
        <button id="tan">tan</button>
        <button id="cot">cot</button>
        <button id="sec">sec</button>
        <button id="cosec">cosec</button>
    </div>
`);

canvasMenu.insertAdjacentHTML('beforeend', `
    <div>
        <button id="pause">pause</button>
    </div>
`);


