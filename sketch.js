var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime= 0 ;

function preload(){
monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
bananaImage = loadImage("banana.png");
obstaceImage = loadImage("obstacle.png");
  
obstacleGroup = new Group();
FoodGroup = new Group();
}

function setup() {
 createCanvas(600,500) 
ground  = createSprite(550,480,1200,10)
ground.velocityX = -5;
  
monkey = createSprite(50,430,50,50)
monkey.addAnimation("running",monkey_running) 
monkey.scale = 0.2 
}

function draw() {
background("lightblue")
 
banana();
obstacles();
 
textSize(20) 
fill("red")
survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time:"+survivalTime,370,50) 
   
if(ground.x<0){
ground.x = ground.width/2; 
}
  
monkey.velocityY = monkey.velocityY + 0.8;
  
if(keyDown("space")&& monkey.y >= 235){
monkey.velocityY = -15 ;  
 }
 
if(monkey.isTouching(obstacleGroup)){
FoodGroup.destroyEach();
ground.velocityX = 0;
obstacle.velocityX = 0;

}
  
monkey.collide(ground);
drawSprites();
}

function banana(){
if(frameCount%60===0){
var banana = createSprite(600,10,20,20); 
banana.y = Math.round(random(100,300));
banana.velocityX = -5;
banana.addImage(bananaImage)
banana.scale = 0.1;
FoodGroup.add(banana) 
}
}

function obstacles(){
if(frameCount%200===0){
obstacle = createSprite(300,440,50,50) 
obstacle.addImage(obstaceImage)
obstacle.scale = 0.2
obstacle.velocityX = -5;  
obstacleGroup.add(obstacle) 
}  
  
}








