function Player() {
    this.pos = createVector(width/2, height/2);
    this.velocity = createVector();
    this.acceleration = createVector();
    this.size = 30;
    this.rotation = 0;

    this.update = function() {
        this.control();
        this.move();
    }

    this.render = function() {
        translate(this.pos.x, this.pos.y);
        rotate(this.rotation);
        triangle(-this.size / 2, this.size / 2, this.size / 2, this.size / 2, 0, -this.size / 2);
    }

    this.control = function() {
        if (this.rotation >= PI * 2 || this.rotation <= - PI * 2) {
            this.rotation = 0;
        }
    }

    this.turn = function(angle) {
      this.rotation = this.rotation + angle;
    }

    this.move = function() {
      this.velocity.add(this.acceleration);
      this.pos.add(this.velocity);
      this.acceleration = createVector();
    }

    this.addVelocity = function(value) {

    }

    this.addAcceleration = function(value) {
      this.acceleration.x = cos(this.rotation - PI * 0.5)*value;
      this.acceleration.y = sin(this.rotation - PI * 0.5)*value;
      console.log(this.velocity.x + " " + this.velocity.y);
    }
}
