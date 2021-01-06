var harryPotter,harryPotterImg;
var fennir,fennirImg,fennirGroup;
var peter,peterImg,peterGroup;
var malfoy,malfoyImg,malfoyGroup;
var bellatrix,bellatrixImg,bellatrixGroup;
var backGround,backGround;
var prevent1;
var prevent2;
var introduction,introductionImg;
var PLAY=1;
var END=2;
var img1,img2;
var img1Img,img2Img;
var score=0;

function preload(){

  harryPotterImg=loadImage("harry potter.png");
  backGroundImg=loadImage("diagonAlley.png");
  malfoyImg=loadImage("malfoy.png");
  fennirImg=loadImage("fennir.png");
  bellatrixImg=loadImage("bellatrix.png")
  peterImg=loadImage("Peter.png");
  img1Img=loadImage("diagonAlley2.jpg");
  img2Img=loadImage("harry.jpg");
  
}

function setup() {
 createCanvas(600,450);
  

  
  backGround=createSprite(300,200);
  backGround.addImage(backGroundImg);
  //backGround.scale=0.98;
  backGround.velocityX=-2.5;
  
  prevent1=createSprite(300,0,600,5);
  
  prevent2=createSprite(300,450,600,5);
  
  harryPotter=createSprite(50,200,20,20);
  harryPotter.addImage(harryPotterImg);
  harryPotter.scale=0.3;
  
  fennirGroup=new Group();
  bellatrixGroup=new Group();
  malfoyGroup=new Group();
  peterGroup=new Group();
  
 gameState=PLAY;
  
}

function draw() {
 background("white");
  
  prevent1.visible=false;
  
  prevent2.visible=false;
    
    
  
  if(gameState===PLAY){
    
    if(backGround.x<0 ){
     backGround.x=backGround.width/2; 
     }
    
    if(keyDown("up_arrow")){
     harryPotter.y=harryPotter.y-3.5;
     }
    
    if(keyDown("down_arrow")){
     harryPotter.y=harryPotter.y+3.5;
     }
    
    if(harryPotter.isTouching(prevent1)){
    
    harryPotter.bounceOff(prevent1);
    
     }
    
    if(harryPotter.isTouching(prevent2)){
    
    harryPotter.bounceOff(prevent2);
    
     }
    
    
    score=score+Math.round(getFrameRate()/1)
    
  spawnMalfoy();
  spawnFennir();
  spawnBellatrix();
  spawnPettigrew();
    

   
    
  }

  if(gameState===END){
    
    background("red");
    
    img1=createSprite(150,300);
  img1.addImage(img1Img);
    img1.scale=0.1;
    
    img2=createSprite(350,250);
  img2.addImage(img2Img);
    img2.scale=0.3;
    
    harryPotter.visible=false;
    backGround.visible=false;
    malfoyGroup.destroyEach();
    fennirGroup.destroyEach();
    bellatrixGroup.destroyEach();
    peterGroup.destroyEach();
    
    fill("yellow");
    text("You failed to get harry out of diagon alley and save him from death Eaters",50,50);
    
    fill("yellow");
    text("If harry did escape out of diagon alley,then he  would have survived",50,100);
    
    fill("yellow");
    text("Now the chosen one had died and nothing can stop voldemort from capturing the world",50,150);
    
    fill("black");
    textFont("algerian");
    text("YOUR SCORE:"+score,300,300);
    
     }
  
  if(harryPotter.isTouching(malfoyGroup) || harryPotter.isTouching(peterGroup) ||
    harryPotter.isTouching(bellatrixGroup) ||
    harryPotter.isTouching(fennirGroup)){
     gameState=END;
     }
  
 drawSprites(); 
  
   fill("lightgreen");
   textSize(10);
   text("Score:"+score,520,20);
  
}

function spawnMalfoy(){
  if(frameCount%90===0){
  malfoy=createSprite(600,50);
  malfoy.y=Math.round(random(50,80));
  malfoy.addImage(malfoyImg);
  malfoy.velocityX=-2.9;
  malfoy.scale=0.08;
  malfoy.lifeTime=100;
  malfoyGroup.add(malfoy);
}
}

function spawnFennir(){
  if(frameCount%140===0){
   fennir=createSprite(700,120);
   fennir.y=Math.round(random(120,180));
   fennir.addImage(fennirImg);
   fennir.velocityX=-2.9;
   fennir.scale=0.1;
   fennir.lifeTime=100;
   fennirGroup.add(fennir); 
     }
}

function spawnBellatrix(){
  if(frameCount%190===0){
  
   bellatrix=createSprite(800,220);
   bellatrix.y=Math.round(random(220,280));
   bellatrix.addImage(bellatrixImg);
   bellatrix.velocityX=-2.9;
   bellatrix.scale=0.07;
   bellatrix.lifeTime=100;
   bellatrixGroup.add(bellatrix);
}
}

function spawnPettigrew(){
  if(frameCount%240===0){
  peter=createSprite(900,320);
  peter.y=Math.round(random(320,380));
  peter.addImage(peterImg);
  peter.velocityX=-2.9;
  peter.scale=0.1;
  peter.lifeTime=100;
  peterGroup.add(peter);  
}
}