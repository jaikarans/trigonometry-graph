import {menuBar} from './comman.js'

// drawing menu-icon
menuBar.insertAdjacentHTML('afterbegin', `
        <div class="bars" id="bar">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
        </div>
        
        <div id="title-menuBar">Graph</div>
        <div class="buttons">
                <div class="button-container">
                        <div id="clearCanvasMenuBar"><p>Clear</p></div>
                        <div id="aboutDeveloper"><p>About</p></div>
                <div>
        </div>

`);