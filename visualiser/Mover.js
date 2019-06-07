class Mover {
  constructor() {
    this.position = createVector(0, 0);
    this.velocity = p5.Vector.random2D();
    this.velocity.setMag(random(2, 4));
    this.acceleration = createVector();
    this.maxForce = 1;
    this.maxSpeed = .5;
    this.r = 20;

    this.previousPosition = createVector(0, 0);
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

  reset(){
    this.position = createVector(0, 0);
    this.previousPosition = createVector(0, 0);
  }

  

  update(x,y,z) {
    //this.position.add(this.velocity);
    //this.acceleration = createVector(float(x),float(y));
    console.log(float(y));
    //this.velocity.add(this.acceleration);
    //this.velocity.limit(this.maxSpeed);
    //this.acceleration.mult(0);

    this.position = createVector(x*5,y*5);
    this.r = float(z) * 2;
  }

  display() {

    //ellipse(this.position.x, this.position.y,10,10);
    push();
        fill(250);
    translate(this.position.x,this.position.y);
        ellipse(0,0,this.r,this.r);
    rotate(HALF_PI);
    noStroke();


    pop();
  }
}