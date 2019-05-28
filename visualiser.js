var data;
var dataPoint;
var index=0;

function preload(){
  data = loadJSON("data.json");
}

function setup() {
  var canvas = createCanvas(700, 700);
  canvas.parent("div");
  frameRate(15);
}

function draw(){
  background(0);
  translate(width/2,height/2);
  //if(data){
    dataPoint = data[index];
  //}
  fill(255);
  //if(data){
  ellipse(dataPoint.x*20,dataPoint.y*20,dataPoint.z*10,dataPoint.z*10);
  index++;
  //}
}