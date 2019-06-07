const flock = [];

var yoff = 0.0;
var waveNum = 10;
var colour;

var offset = 0;
var time = 0;
var speed = 0.05;

var tempW = 30; //controls wave colour
var windW = 5; // controls wave speed
var humidityW = 50; // controls wave number

var isMapped = false;

function setup() {
  var canvas = createCanvas(windowWidth - 28, windowHeight - 210);
  canvas.parent('div');
  frameRate(10);
  noStroke();
  //MapValues();

  var boidSum = 5;
  for (let i = 0; i < boidSum; i++) {
    flock.push(new Boid());
  }
}

function MapValues() {
  console.log(waveTemp);
  tempW = waveTemp;
  windW = waveWind;
  humidityW = waveHumidity;

  var cMax = color(0, 200, 255, 50);
  var cMin = color(78, 88, 104, 30);

  colour = lerpColor(cMin, cMax, map(tempW, 0, 40, 0, 1));

  speed = map(windW, 0, 100, 0.01, 0.07);

  isMapped = true;
}

function draw() {

  if (isMapped) {
    background(237, 201, 175);
    fill(colour);
    for (var y = 0; y < height - height / waveNum; y += height / waveNum) {
      Wave(y - offset, y / 100);
      offset = map(sin(time), 0, 1, 0, 100);
    }
    time += speed;
  } else {
    if (waveTemp != null) {
      MapValues();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function Wave(yPos, _xoff) {
  beginShape();
  fill(colour);
  noStroke();
  var xoff = _xoff;

  for (var x = 0; x <= width+10; x += 10) {
    var y = map(noise(xoff, yoff), 0, 1, 70, -70);
    vertex(x, yPos - y);
    xoff += 0.05;
  }

  yoff += 0.001;

  vertex(width, 0);
  vertex(0, 0);
  endShape();

  beginShape();
  noFill();
  stroke(250, map(yPos, 0, height, 0, 255));
  strokeWeight(map(yPos, 0, height, 0, 5));
  var xoff = _xoff;
  for (var x = 0; x <= width+10; x += 10) {

    var y = map(noise(xoff, yoff), 0, 1, 70, -70);
    vertex(x, yPos - y);
    xoff += 0.05;
  }
  yoff += 0.001;
  endShape();

  for (let boid of flock) {
    boid.edges();
    boid.update();
    boid.show();
  }

}