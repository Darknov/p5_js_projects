function Line(axis, pos) {
    this.pos = pos;
    this.axis = axis;
    this.velocity = random((velocityRandomness.value() === "") ? 5 : velocityRandomness.value());
    this.colorR = floor(random(255));
    this.colorG = floor(random(255));
    this.colorB = floor(random(255));
    this.update = function() {
        this.pos = this.pos + this.velocity;
        if (this.pos < 0 || this.pos > height - 1) {
            this.velocity = this.velocity * -1;
        }
    }

    this.render = function() {
        stroke(this.colorR, this.colorG, this.colorB);
        if (this.axis == "x") {
            line(0, this.pos, width, this.pos);
        } else if (this.axis == "y") {
            line(this.pos, 0, this.pos, height);
        }

    }
}
