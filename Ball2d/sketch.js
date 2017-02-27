var player;
var terrain;

function preload() {

}

function setup() { // setup() runs once
    canvas = createCanvas(800, 600);
    player = new Player();
}

function draw() { // draw() loops forever, until stopped
  background(70);
  keyDown();
  player.update();
  player.render();

}


function keyDown() {


  if (keyIsDown(LEFT_ARROW)) {
      player.velocity.x = -10;
  }


  if (keyIsDown(RIGHT_ARROW)) {
      player.velocity.x = 10;
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
      player.addVelocity({x:0, y:-20});
  }


    if (keyCode === DOWN_ARROW) {

    }
}

function keyReleased() {

}
