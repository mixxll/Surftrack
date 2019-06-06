var yoff = 0.0;
var waveNum = 10;
var c;

var offset = 0;
var time = 0;

function setup() {
  var canvas = createCanvas(windowWidth-28,windowHeight);
  canvas.parent('div');
  frameRate(10);
  noStroke();
  c = color(0,200,255,30);
}

function draw(){
  background(237, 201, 175,30);

  for(var y = 0; y < height - height/waveNum; y+= height/waveNum){
    Wave(y-offset, y/100);
    //offset+=0.1;
    offset = map(sin(time),0,1,0,100);
    if(y > height/2){
      c = color(237, 201, 175,30);
      fill(c);
    } else {
      c = color(0,200,255,30);
      fill(c);
    }
  }
  time += 0.05;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function Wave(yPos, _xoff){
  beginShape();

  var xoff =_xoff;

  for (var x = 0; x <= width; x += 10) {
    var y = map(noise(xoff, yoff), 0, 1, 70, -70);
    vertex(x, yPos - y);
    xoff += 0.05;
  }

  yoff += 0.001;

  vertex(width, 0);
  vertex(0, 0);
  endShape();
}