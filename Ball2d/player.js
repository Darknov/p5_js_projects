function Player() {
    this.pos = createVector(width/2, height/2);
    this.velocity = createVector();
    this.acceleration = createVector();
    this.size = 30;
    this.rotation = 0;
    this.isInAir = true;

    this.update = function() {
        this.control();
        this.move();

        this.rotation += this.velocity.x / this.size;
    }

    this.render = function() {
        translate(this.pos.x, this.pos.y);
        rotate(this.rotation);
        console.log(this.velocity.y);
        ellipse(0,0,this.size*2,this.size*2);
        beginShape();
          //color(255,55,0);
          ellipse(0,this.size/2,this.size/4,this.size/4);
          ellipse(0,-this.size/2,this.size/4,this.size/4);
          ellipse(this.size/2,0,this.size/4,this.size/4);
          ellipse(-this.size/2,0,this.size/4,this.size/4);
        endShape();
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
      this.acceleration.add(0,0.05);
      if(this.pos.y >= height - this.size)
      {
        this.pos.y = height - this.size;
        this.acceleration.mult(0);
        this.velocity.y = this.velocity.y * (-0.3);
        this.velocity.x = this.velocity.x * (0.5);
        this.isInAir = false;
      } else {
        this.isInAir = true;
      }

      if(this.pos.x > width)
      {
        this.pos.x = -this.size;
      }

      if(this.pos.x < 0 - this.size)
      {
        this.pos.x = width;
      }
    }

    this.addVelocity = function(value) {
        this.velocity.add(value.x,value.y);
    }

    this.addAcceleration = function(value) {
      this.acceleration.add(value.x, value.y);
    }
}
