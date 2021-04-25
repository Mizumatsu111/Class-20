var fixedRectangle, movingRectangle
function setup() {
  createCanvas(800,400);
  fixedRectangle=createSprite(100,100,50,60);
  fixedRectangle.shapeColor="green";
  movingRectangle=createSprite(50,50,60,30);
  movingRectangle.shapeColor="blue";
}

function draw() {
  background(255,255,255); 
  movingRectangle.x=World.mouseX;
  movingRectangle.y=World.mouseY; 
  console.log(movingRectangle.x-fixedRectangle.x);
  if (movingRectangle.x-fixedRectangle.x<fixedRectangle.width/2+movingRectangle.width/2&&fixedRectangle.x-movingRectangle.x<fixedRectangle.width/2+movingRectangle.width/2&&movingRectangle.y-fixedRectangle.y<fixedRectangle.width/2+movingRectangle.width/2&&fixedRectangle.y-movingRectangle.y<fixedRectangle.width/2+movingRectangle.width/2){
    movingRectangle.shapeColor="red";
    fixedRectangle.shapeColor="red";
  }
  else {movingRectangle.shapeColor="green";
fixedRectangle.shapeColor="blue";}
  drawSprites();
}