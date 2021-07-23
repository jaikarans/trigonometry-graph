import {canvasMenu} from './comman.js';

canvasMenu.insertAdjacentHTML('afterbegin', `
    <div class="toHide">
        Graph size = <input type="number" id="canvasWidth" value="1000">x
        <input type="number" id="canvasHeight" value="300">
        <button id="setCanvas">set-canvas-size</button>
        <button id="resetDrawing">Reset Drawing</button>
    </div>
`);

canvasMenu.insertAdjacentHTML('beforeend', `
    <div class="theta">
        &#920&#176 = <input type="number" id="degreeFrom">
    </div>
`);

canvasMenu.insertAdjacentHTML('beforeend', `
    <div class="functionButtons">
        <div class="funRowOne">
            <div><button id="sin">sin(&#920&#176)</button></div>
            <div><button id="cos">cos(&#920&#176)</button></div>
            <div><button id="tan">tan(&#920&#176)</button></div>
        </div>
        <div class="funRowTwo">
            <div><button id="cot">cot(&#920&#176)</button></div>
            <div><button id="sec">sec(&#920&#176)</button></div>
            <div><button id="cosec">csc(&#920&#176)</button></div>
        </div>
        <div class="rowThree">
            <div id="pause"><button>pause</button></div>
        </div>
    </div>
`);



