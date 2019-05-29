var data;

var dataArray = [];

var index = 0;
var previousPointX = 0;
var previousPointY = 0;

var multiplierFactor = 15;

function preload(){
  data = loadJSON("data.json");
}

function setup() {
  var canvas = createCanvas(700, 700);
  canvas.parent("div");
  frameRate(15);
  dataArray = data.data;
  console.log(data.data.length);
  translate(width/2,height/2);
  //DrawData();
  DrawDataM2();
}

function DrawData(){
  background(240);
    noStroke();
      ellipse(0,0,10,10);

  
  for(var i = 0; i < dataArray.length; i++){
    var x = dataArray[i].x;
    var y = dataArray[i].y;
    var z = dataArray[i].z;
    console.log(map(x,0,width/2, 220,50));
    fill(2, 72, 115, map(abs(x*20),0,width/2, 220,50));

    ellipse(x*15,y*15,z*2,z*2);
      }
}

// function draw(){
//   background(240,2);
//     noStroke();
//       ellipse(0,0,10,10);
// translate(width/2,height/2);
//     var x = dataArray[index].x;
//     var y = dataArray[index].y;
//     var z = dataArray[index].z;
//     fill(2, 72, 115, map(abs(x*20),0,width/2, 220,50));

//     ellipse(x*15,y*15,z*2,z*2);    
//     index++;  
//     if(index >= dataArray.length){
//       noLoop();
//     }
// }

// function draw(){
//   background(240,2);
//     //noStroke();
//       //ellipse(0,0,10,10);
// translate(width/2,height/2);
//     var x = dataArray[index].x * multiplierFactor;
//     var y = dataArray[index].y * multiplierFactor;
//     var z = dataArray[index].z * 2;
//     fill(2, 72, 115, map(abs(x*20),0,width/2, 220,50));
//     line(x,y,previousPointX,previousPointY);
//     previousPointX = x;
//     previousPointY = y;
//     //ellipse(x,y,z,z);    
//     index++;  
//     if(index >= dataArray.length){
//       noLoop();
//     }
// }

function DrawDataM2(){
  background(240);
  var c = 5;

noStroke();
fill(255);
  ellipse(0,0,300,300);

    stroke(2, 72, 115,c);
    strokeWeight(2);
    noFill();

    curveTightness(-2);


  beginShape();
  for(var i = 0; i < dataArray.length; i++){
    var x = dataArray[i].x;
    var y = dataArray[i].y;
    var z = dataArray[i].z;
    //console.log(map(x,0,width/2, 220,50));
    //fill(2, 72, 115, map(abs(x*20),0,width/2, 220,50));

    curveVertex(x*15,y*15);

stroke(0,c);
strokeWeight(1);
    ellipse(x*15,y*15, 5,5);
    stroke(2, 72, 115, c);
    strokeWeight(2);

    if(i%10 == 0){
      endShape();
      c+= 5;
stroke(2, 72, 115, c);
beginShape();
curveVertex(x*15,y*15);

    }
      }
}