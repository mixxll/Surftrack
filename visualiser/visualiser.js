var surfData;
var dataPoint;
var index=1;

var maxX, maxY, maxZ; 
var minX, minY, minZ; 

var prevX, prevY = 0;

var mover;
var zoff = 0;

function setup() {
  getData();
  var canvas = createCanvas(windowWidth,windowHeight);
  canvas.parent('vis');
  frameRate(10);
  //angleMode(DEGREES);

  mover = new Mover();
}

function draw(){
  var multiplierFactor = 50;
  background(240);
  //translate(0,height/2);
  translate(width/2,height/2);
  fill(40,100);
  //ellipse(0,0,width/2,width/2);
  var circleNum = 10;
  for(var i = 0; i<circleNum; i ++){
    NoiseCircle(width/10 +20*i);
  }

  stroke(251, 255, 229);
  if(accX){
    var x = accX[index].innerHTML;
    var y = accY[index].innerHTML;
    var z = accZ[index].innerHTML;

    minX = CalculateMin(accX);
    minY = CalculateMin(accY);
    minZ = CalculateMin(accZ);

    maxX = CalculateMax(accX);
    maxY = CalculateMax(accY);
    maxZ = CalculateMax(accZ);
  }
  fill(255);
  if(accX){

    mover.update(x,y,z);
    mover.display();

    //rotate(z);

    //ellipse(0 - x*multiplierFactor,0 - y*multiplierFactor,z*5);

    // stroke(255);
    // strokeWeight(5);
    // line(prevX*multiplierFactor,prevY*multiplierFactor,x*multiplierFactor,y*multiplierFactor);
    // prevX = x;
    // prevY = y;

    //ellipse(x*30,0,100,100);
    //ellipse(0,y*30,100,100);
    //ellipse(0,z*30,100,100);

  // rect(width/3, 0,0, x*40);
  
  // rect(width/2,0,0, y*40);
 
  // rect(2/3*width,0,0, z*40);
  
  // push();
  //   noStroke();

  // text('x', width/3 + 10, 0);
  // text('y', width/2 + 10, 0);
  // text('z', 2/3*width + 10, 0);

  // pop();

  index++;
    if(index > accX.length-1){
      index=1;
      mover.reset();
    }
  }
}

function CalculateMax(array){
  var max = -100;
  //console.log(array[i].innerHTML);
  for(var i = 0; i <= array.length; i++){
    if(array[i] > max){
      max = array[i];
    }
  }
  return(max); 
}

function CalculateMin(array){
  var min = 100;
  for(var i = 0; i <= array.length; i++){
    if(array[i] < min){
      min = array[i];
    }
  }
  return(min); 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
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

// function draw(){
//   //translate(width/2,height/2);
//   orbitControl();
//   if(start){
//     DrawData();
//   }
//   //start = false;


// }

// function DrawData(){
//   background(240);
//     noStroke();
//       ellipse(0,0,10,10);


//   for(var i = 0; i < 100; i++){
//     var x = dataArray[i].x;
//     var y = dataArray[i].y;
//     var z = dataArray[i].z;
//     //console.log(map(x,0,width/2, 220,50));
//     fill(2, 72, 115, map(abs(x*20),0,width/2, 220,50));

//     translate(x,y,z);
//     sphere(x*2);
//       }
// }


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

/*function draw(){
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
}*/

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

function NoiseCircle(radius){
  var noiseMax = 7;

  push();
  noStroke();
  fill(133,156,160,150);
  beginShape();

  for(var a = 0; a < TWO_PI; a+= 0.1){
    var xoff = map(cos(a),-1,1,0,noiseMax);
    var yoff = map(sin(a),-1,1,0,noiseMax);

    var r = map(noise(xoff,yoff,zoff),0,1,radius - height/15,radius + height/15);
    var xPos = r * cos(a);
    var yPos = r * sin(a);

    vertex(xPos,yPos);


  }
      endShape(CLOSE);

  zoff += 0.001;
  pop();
}
