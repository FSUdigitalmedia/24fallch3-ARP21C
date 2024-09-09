let x1 = 100;     // x position of the ball
let y1 = 0;       // y position of the ball
let x1Speed = 3;  // speed in X direction
let y1Speed = 7; // speed in Y direction
let d1 = 20;      // diameter of the ball
let x2 = 50;     // x position of the ball
let y2 = 0;       // y position of the ball
let x2Speed = 10;  // speed in X direction
let y2Speed = 10; // speed in Y direction
let d2 = 40;      // diameter of the ball
let x3 = 80;     // x position of the ball
let y3 = 2;       // y position of the ball
let x3Speed = 1;  // speed in X direction
let y3Speed = 1; // speed in Y direction
let d3 = 40;      // diameter of the ball


function setup() {
  createCanvas(400, 400,);

 
}

function draw() {
  background(255, 141, 161); // try commenting this out!
 
  // if x hits the right side or the left side of the canvas,
  // switch directions...
  if (x1 > width || x1 < 0) {
    x1Speed = x1Speed * -1;  
  }
  x1 = x1 + x1Speed; // adding a negative xSpeed *decreases* x, right?
  
  // same as above, but for the top and bottom of the canvas
  if (y1 > width || y1 < 0) {
    y1Speed = y1Speed * -1;  
  }
  y1 = y1 + y1Speed;

  ellipse(x1, y1, d1);

 
  // if x hits the right side or the left side of the canvas,
  // switch directions...
  if (x2 > width || x2 < 0) {
    x2Speed = x2Speed * -1;  
  }
  x2 = x2 + x2Speed; // adding a negative xSpeed *decreases* x, right?
  
  // same as above, but for the top and bottom of the canvas
  if (y2 > width || y2 < 0) {
    y2Speed = y2Speed * -1;  
  }
  y2 = y2 + y2Speed;

  rect(x2, y2, 10, 20)
   // if x hits the right side or the left side of the canvas,
  // switch directions...
  if (x3 > width || x3 < 0) {
    x3Speed = x3Speed * -1;  
  }
  x3 = x3 + x3Speed; // adding a negative xSpeed *decreases* x, right?
  
  // same as above, but for the top and bottom of the canvas
  if (y3 > width || y3 < 0) {
    y3Speed = y3Speed * -1;  
  }
  y3 = y3 + y3Speed;
strokeWeight (4) ;
stroke (51);
if (mouseIsPressed == true ){
  fill (255); //white
}
else {
  fill (0); //black
}
  rect(x3, y3, 80, 80)
  
//draws ellipse if mouse is pressed
if (mouseIsPressed) {
  ellipse(200, 200, 180, 180);
}


  //the ellipse's x and y positions follow the mouse
  ellipse(mouseX, mouseY, 100, 100);
}
