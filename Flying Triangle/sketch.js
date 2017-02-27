var player;

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
  if (keyIsDown(UP_ARROW)) {
      player.addAcceleration(0.1);
  }

  if (keyIsDown(LEFT_ARROW)) {
      player.turn(-0.03);
      console.log(player.rotation);
  }

  if (keyIsDown(DOWN_ARROW)) {
      player.addAcceleration(-0.05);
  }

  if (keyIsDown(RIGHT_ARROW)) {
      player.turn(0.03);
      console.log(player.rotation);
  }
}

function keyPressed() {

}

function keyReleased() {

}
