var sea
var ship
function preload(){
  seaImg = loadImage("sea.png")
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,100,400,200)
  sea.addImage("sea",seaImg)
  sea.velocityX=-3
  sea.x = sea.width/2
  

 
  ship = createSprite(100,210,20,20)
  ship.addAnimation("ship",shipImg)
  ship.scale=0.2
}
function draw() {
  
  background("blue");

if (sea.x < 0){
  sea.x = sea.width/2
}


drawSprites();

}

 
  