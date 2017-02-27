var lines = [];
var numberOfLines;
var velocityRandomness;
var PnumberOfLines;
var PvelocityRandomness;
var submit;
var mySound;
var canvas;
var rectanglesEnabledCheckbox;

function preload() {
    mySound = loadSound('music.mp3');
}

function setup() { // setup() runs once
    mySound.setVolume(0.01);
    mySound.play();
    canvas = createCanvas(600, 600);
    canvas.parent("strona");
    PnumberOfLines = createP('Number of lines on each axis');
    PnumberOfLines.position(620, 130).parent("strona");
    numberOfLines = createInput();
    numberOfLines.position(620, 170).parent("strona");
    PvelocityRandomness = createP('Velocity Randomness');
    PvelocityRandomness.position(620, 190).parent("strona");
    velocityRandomness = createInput();
    velocityRandomness.position(620, 230).parent("strona");
    rectanglesEnabledCheckbox = createCheckbox('Rectangles', false);
    rectanglesEnabledCheckbox.position(620, 270).parent("strona");
    submit = select('#submit');
    submit.position(620, 310).parent("strona");
    submit.mousePressed(createLines);
}

function draw() { // draw() loops forever, until stopped
    background(204);
    for (var i = 0; i < lines.length; i++) {
        lines[i].update();
        lines[i].render();
        fill(lines[i].colorR, lines[i].colorG, lines[i].colorB);
        if (rectanglesEnabledCheckbox.checked()) {
            renderRectangles(lines[i], lines[i].axis);
        }
    }

    if (!mySound.isPlaying()) {
        mySound.play();
    }

}



function createLines() {
    lines = [];
    for (var i = 0; i < numberOfLines.value(); i++) {
        lines.push(new Line("x", 0));
        lines.push(new Line("y", 0));

    }
}

function renderRectangles(line, axis) {
    var closestLine;
    if (axis == "x")
        closestLine = {
            pos: height
        };
    else {
        closestLine = {
            pos: width
        };
    }
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].axis == axis && (lines[i].pos - line.pos) > 0 && (lines[i].pos - line.pos) < closestLine.pos) {
            closestLine = lines[i];
        }
    }
    if (axis == "x") {
        rect(0, line.pos, width, closestLine.pos - line.pos);
    } else {
        rect(line.pos, 0, closestLine.pos - line.pos, height);
    }

}
