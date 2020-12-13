var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(450,100,50,80);
  gameObject1.shapeColor = "pink";

  gameObject2 = createSprite(150,100,50,80);
  gameObject2.shapeColor = "blue";

  gameObject3 = createSprite(300,100,50,80);
  gameObject3.shapeColor = "yellow";

  gameObject4 = createSprite(650,100,50,80);
  gameObject4.shapeColor = "white";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,gameObject1)){
  movingRect.shapeColor = "red";
  gameObject1.shapeColor = "red";
 } 
 else{
  movingRect.shapeColor = "green";
  gameObject1.shapeColor = "pink";
 }

 if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
 }
 else{
  fixedRect.shapeColor = "green";
 }

 if(isTouching(movingRect,gameObject2)){
  movingRect.shapeColor = "red";
  gameObject2.shapeColor = "red";
 } 
 else{
 
  gameObject2.shapeColor = "blue";
 }

 if(isTouching(movingRect,gameObject3)){
  movingRect.shapeColor = "red";
  gameObject3.shapeColor = "red";
 } 
 else{
 
  gameObject3.shapeColor = "yellow";
 }

 if(isTouching(movingRect,gameObject4)){
  movingRect.shapeColor = "red";
  gameObject4.shapeColor = "red";
 } 
 else{
 
  gameObject4.shapeColor = "white";
 }
  drawSprites();
}

function isTouching(object1,object2){
  //case1: object1=movingRect,object2=gameObject1;
  //case2: object1=movingRect,object2=fixedRect;
  //case3: object1=movingRect,object2=gameObject2;
  //case4: object1=movingRect,object2=gameObject3;
  //case5: object1=movingRect,object2=gameObject4;
  
  
  
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x -object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 +object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true;
}
else {
  return false;
}
}
