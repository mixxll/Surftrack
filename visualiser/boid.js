class Boid {
  constructor() {
    this.position = createVector(random(width), random(height/2));
    this.velocity = p5.Vector.random2D();
    this.velocity.setMag(random(2, 4));
    this.acceleration = createVector();
    this.maxForce = 1;
    this.maxSpeed = .5;
  }

  edges() {
    if (this.position.x > width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }
    if (this.position.y > height - height/3) {
      this.velocity.y = -this.velocity.y;
    } else if (this.position.y < 0) {
      this.velocity.y = -this.velocity.y;
    }
  }

  

  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.acceleration.mult(0);
  }

  show() {

    //ellipse(this.position.x, this.position.y,10,10);
    push();
        fill(250);
    translate(this.position.x,this.position.y);
    rotate(HALF_PI);
    noStroke();
    rotate(this.velocity.heading());
    beginShape();
    curveVertex(5, 5);
    curveVertex(0, 20);
    curveVertex(-5, 5);
    curveVertex(-5, -5);
    curveVertex(0, -20);
    curveVertex(5, -5);
    curveVertex(5, 5);
    endShape(CLOSE);

    pop();
  }
}