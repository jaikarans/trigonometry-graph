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
            <div id="sin"><button>sin(&#920&#176)</button></div>
            <div id="cos"><button>cos(&#920&#176)</button></div>
            <div id="tan"><button>tan(&#920&#176)</button></div>
        </div>
        <div class="funRowTwo">
            <div id="cot"><button>cot(&#920&#176)</button></div>
            <div id="sec"><button>sec(&#920&#176)</button></div>
            <div id="cosec"><button>csc(&#920&#176)</button></div>
        </div>
        <div class="rowThree">
            <div id="pause"><button>pause</button></div>
        </div>
    </div>
`);



