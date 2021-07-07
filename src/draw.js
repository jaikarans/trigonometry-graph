var canvas = document.getElementById('canvas');
var degree = 0;
var theta = 0;
var d = 0;
var max_degree = 720;
function drawSin(){
    if (canvas.getContext){
        var pt = canvas.getContext('2d');

        theta = Math.sin(degree * Math.PI / 180);
        //theta = 1-theta;

        pt.fillRect(d, theta*100+100, 2, 2);

        degree++;
        d++;
        degree<720 ? requestAnimationFrame(drawSin): null;
        
    }
}


function drawCos(){
    if (canvas.getContext){
        var pt = canvas.getContext('2d');

        theta = Math.cos(degree * Math.PI / 180);
        //theta = 1-theta;

        pt.fillRect(d, theta*100+100, 2, 2);

        degree++;
        d++;
        degree<720 ? requestAnimationFrame(drawCos): null;
        
    }
}

function drawTan(){
    if (canvas.getContext){
        var pt = canvas.getContext('2d');

        theta = Math.tan(degree * Math.PI / 180);
        //theta = 1-theta;

        pt.fillRect(d, theta*100+100, 3, 3);

        degree++;
        d++;
        degree<720 ? requestAnimationFrame(drawTan): null;
        
    }
}

function drawCot(){
    if (canvas.getContext){
        var pt = canvas.getContext('2d');

        theta = Math.cos(degree * Math.PI / 180) 
                    / Math.sin(degree * Math.PI / 180);
        //theta = 1-theta;

        pt.fillRect(d, theta*100+100, 3, 3);

        degree++;
        d++;
        degree<720 ? requestAnimationFrame(drawCot): null;
        
    }
}

function drawCosec(){
    if (canvas.getContext){
        var pt = canvas.getContext('2d');

        theta = 1 / Math.sin(degree * Math.PI / 180);
        //theta = 1-theta;
        if (theta<0) theta = 1-theta*-1;

        pt.fillRect(d, theta*100+100, 2, 2);

        degree++;
        d++;
        degree<720 ? requestAnimationFrame(drawCosec): null;
        
    }
}


function drawSec(){
    if (canvas.getContext){
        var pt = canvas.getContext('2d');

        theta = 1 / Math.cos(degree * Math.PI / 180);
        //theta = 1-theta;
        if (theta<0) theta = 1-theta*-1;

        pt.fillRect(d, theta*100+100, 2, 2);

        degree++;
        d++;
        max_degree--;

        max_degree>0 ? requestAnimationFrame(drawSec): null;
        
    }
}


drawSec();