var data;

var dataArray = [];

var index = 0;
var previousPointX = 0;
var previousPointY = 0;

var pointX = 0;
var pointY = 0;

var x = 0;
var y = 0;
var start = true;

var multiplierFactor = 15;
var tightness = 0;

function preload(){
  data = loadJSON("data.json");
}

function setup() {
  var canvas = createCanvas(700, 700,WEBGL);
  canvas.parent("div");
 // frameRate(15);
  dataArray = data.data;
  frameRate(20);
  translate(width/2,height/2);
  //DrawData();
  //DrawDataM2();
  background(240);


  console.log(pointX);
}

// function draw(){
//   translate(width/2, height/2);
//   background(20,2);

//   noStroke();

//   if( pointX <= (x + x * 0.1) && pointX >= (x - x * 0.1)){
//     if( pointY <= (y + y * 0.1) && pointY >= (y - y * 0.1)){

//     pointX = x;
//     pointY = y;

//     x = dataArray[index].x * 15;
//     y = dataArray[index].y * 15;

//     index++;
//     if(index > dataArray.length - 1){
//       noLoop();
//     }
//   }
// }

//   console.log(index);

//   pointX = lerp(pointX, x, 0.2);
//   pointY = lerp(pointY, y, 0.12);

//   ellipse(pointX,pointY,10,10);
// }

// function DrawData(){
//   background(240);
//     noStroke();
//       ellipse(0,0,10,10);

  
//   for(var i = 0; i < dataArray.length; i++){
//     var x = dataArray[i].x;
//     var y = dataArray[i].y;
//     var z = dataArray[i].z;
//     console.log(map(x,0,width/2, 220,50));
//     fill(2, 72, 115, map(abs(x*20),0,width/2, 220,50));

//     ellipse(x*15,y*15,z*2,z*2);
//       }
// }

// function draw(){
//   //translate(width/2,height/2);'
//   noStroke();
//   orbitControl();
//   if(start){
//     var x = dataArray[index].x;
//     var y = dataArray[index].y;
//     var z = dataArray[index].z;
//     //console.log(map(x,0,width/2, 220,50));
//     fill(2, 72, 115, map(abs(x*20),0,width/2, 220,50));
//     index++;
//     translate(x,y,z);
//     sphere(x*2);
//     translate(-x,-y,-z);
//   }
//   //start = false;
  

// }

function draw(){
  //translate(width/2,height/2);
  orbitControl();
  if(start){
    DrawData();
  }
  //start = false;
  

}

function DrawData(){
  background(240);
    noStroke();
      ellipse(0,0,10,10);

  
  for(var i = 0; i < 100; i++){
    var x = dataArray[i].x;
    var y = dataArray[i].y;
    var z = dataArray[i].z;
    //console.log(map(x,0,width/2, 220,50));
    fill(2, 72, 115, map(abs(x*20),0,width/2, 220,50));

    translate(x,y,z);
    sphere(x*2);
      }
}


// function draw(){
//   //translate(width/2,height/2);
//   DrawDataM2();
//   curveTightness(map(cos(tightness/10), 0, 1, -3 ,3));
//   tightness++;
// }

// function draw(){
//   background(240,1);
//   orbitControl();
//     noStroke();
//       //ellipse(0,0,10,10);
// translate(width/2,height/2);
//     var x = dataArray[index].x;
//     var y = dataArray[index].y;
//     var z = dataArray[index].z;
//     fill(2, 72, 115, map(abs(x*20),0,width/2, 220,50));

//     translate(0-x,0-y, 0-z)
//     sphere(x*5);    
//     index++;  
//     if(index >= dataArray.length){
//       noLoop();
//     }
// }

function draw(){
  background(240,2);
    //noStroke();
      //ellipse(0,0,10,10);
translate(width/2,height/2);
    var x = dataArray[index].x * multiplierFactor;
    var y = dataArray[index].y * multiplierFactor;
    var z = dataArray[index].z * 2;
    fill(2, 72, 115, map(abs(x*20),0,width/2, 220,50));
    line(x,y,previousPointX,previousPointY);
    previousPointX = x;
    previousPointY = y;
    //ellipse(x,y,z,z);    
    index++;  
    if(index >= dataArray.length){
      noLoop();
    }
}

// function DrawDataM2(){
//   background(240);
//   var c = 5;

// noStroke();
// fill(255);
//   ellipse(0,0,300,300);

//     stroke(2, 72, 115,c);
//     strokeWeight(2);
//     noFill();

//     //curveTightness(-2);


//   beginShape();
//   for(var i = 0; i < dataArray.length; i++){
//     var x = dataArray[i].x;
//     var y = dataArray[i].y;
//     var z = dataArray[i].z;
//     //console.log(map(x,0,width/2, 220,50));
//     //fill(2, 72, 115, map(abs(x*20),0,width/2, 220,50));

//     curveVertex(x*15,y*15);

// stroke(0,c);
// strokeWeight(1);
//     ellipse(x*15,y*15, 5,5);
//     stroke(2, 72, 115, c);
//     strokeWeight(2);

//     if(i%10 == 0){
//       endShape();
//       c+= 5;
// stroke(2, 72, 115, c);
// beginShape();
// curveVertex(x*15,y*15);

//     }
//       }
// }

// function DrawDataM2(){
//   background(240);
//   var c = 5;

// noStroke();
// fill(255);
//   ellipse(0,0,300,300);

//     stroke(2, 72, 115,c);
//     strokeWeight(2);
//     noFill();

//     curveTightness(-2);


//   beginShape();
//   for(var i = 0; i < dataArray.length; i++){
//     var x = dataArray[i].x;
//     var y = dataArray[i].y;
//     var z = dataArray[i].z;
//     //console.log(map(x,0,width/2, 220,50));
//     //fill(2, 72, 115, map(abs(x*20),0,width/2, 220,50));

//     line(x*15,y*15,0,0);

// stroke(0,c);
// strokeWeight(1);
//     ellipse(x*15,y*15, 5,5);
//     stroke(2, 72, 115, c);
//     strokeWeight(2);

//     if(i%10 == 0){
//       endShape();
//       c+= 5;
// stroke(2, 72, 115, c);
// beginShape();
// curveVertex(x*15,y*15);

//     }
//       }
// }