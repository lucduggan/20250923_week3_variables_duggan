//global variables:
let posX, posY, d;

function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(400, 400);

  posX = width/2;
  posY = height/2;
  d = 100;
}

function draw() {
 background(222,90,22,35);
 rectMode(CENTER);
 stroke('red');
 strokeWeight(3);
 fill(22,222,211,10);
  circle(posX,posY,d);
  fill('purple');
  noStroke();
  circle(posX,posY,d/2);
  stroke('green');
  strokeWeight(5);
noFill();
  rect(posX,posY,d/4);
  posX += 0.5;
  //posY += 1;
  //posX = posX-1; this is long way

}
