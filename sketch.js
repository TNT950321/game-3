
var wall;

var bow , arrow,  scene;
var redB, pinkB, greenB ,blueB, boxB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;

var health=10;

var gameover;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  wall = createSprite(390,200,10,400)
   score = 0  
  health = 10
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group();
 boxB= new Group();
   
}

function draw() {
  background(0);
  if (scene.x < 0){
    scene.x = 300;
    }
  if (health>0){
    
  
  // moving ground
    scene.velocityX = -3 
    
    
  
  if (keyDown("space")){
    createArrow();
  }
 
  edges=createEdgeSprites();
  greenB.bounceOff(edges)
  redB.bounceOff(edges);
   blueB.bounceOff(edges);
   pinkB.bounceOff(edges);
   boxB.bounceOff(edges);
  //moving bow
  bow.y = World.mouseY

  if (arrowGroup.isTouching(boxB)){
    boxB.destroyEach();
    //arrowGroup.destroyEach();
    score = score+100;
    redBalloon();
    blueBalloon();
  blueBalloon();
  blueBalloon();
  blueBalloon();
  blueBalloon();
  pinkBalloon();
  pinkBalloon();
  pinkBalloon();
  pinkBalloon();
  pinkBalloon();
    greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
    greenBalloon();
    greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
  }
  
  if (arrowGroup.isTouching(blueB)){
    redBalloon();
    blueB.destroyEach();
    //arrowGroup.destroyEach();
    score = score+3
  }
    
  if (arrowGroup.isTouching(greenB)){
    blueBalloon();
    greenB.destroyEach();
    //arrowGroup.destroyEach();
    score = score+4
  }
  
  if (arrowGroup.isTouching(pinkB)){
    greenBalloon();
    pinkB.destroyEach();
    //arrowGroup.destroyEach();
    score = score+5
    greenBalloon();
    greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
    greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
    greenBalloon();
    greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
  greenBalloon();
  }
 if(score>100){
   arrowGroup.bounceOff(edges);
  
 }
if (wall.isTouching(blueB)){
    blueB.destroyEach();
    health = health-2;
  }
  if (wall.isTouching(greenB)){
    greenB.destroyEach();
    health = health-3;
  }
  if (wall.isTouching(redB)){
    redB.destroyEach();
    health = health+1;
  }
  if (wall.isTouching(pinkB)){
    pinkB.destroyEach();
    health = health-1;
  }
   if (wall.isTouching(boxB)){
    boxB.destroyEach();
    health = health-10;
   }
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 60 == 0){
    if (select_balloon == 1) {
      boxBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }   
  }  
  if (health>0){
    text("gameover"+gameover,200,200);
    blueB.setVelocityXEach=0;
    blueB.velocityY=0;
    greenB.velocityX=0;
    greenB.velocityY=0;
    redB.velocityX=0;
    redB.velocityY=0;
    pinkB.velocityX=0;
    pinkB.velocityY=0;
  }
  
  drawSprites();
    
  drawSprites();
  text("Score: "+ score, 300,50);
  text("Health: "+ health, 200,50);
}
function boxBalloon() {
 var box = createSprite(0,Math.round(random(20, 370)), 10, 10);
  box.velocityX = 0.5;
  box.velocityY = 0.5;
  boxB.add(box);
}

function redBalloon() {
  

  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 80;
  red.velocityY = 80;
  red.scale=0.1;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 2;
  blue.velocityY = 2;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(20,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX=3;
  green.velocityY=3;
  green.scale = 0.1;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 4;
  pink.velocityY = 4;
  pink.scale = 1.5
  pinkB.add(pink);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60,10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -50;
  arrow.scale = 0.1;
  
  arrowGroup.add(arrow);
   
}
