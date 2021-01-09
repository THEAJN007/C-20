var car, wall;

var speed,weight,deformation;

function setup() {
createCanvas(1600,400);

car = createSprite(100,200,50,30);
wall = createSprite(1500,200,60,200);

speed = random(60,85);
weight = random(400,1500);

}

function draw() {
background("white");
car.velocityX = speed;

if(wall.x - car.x < wall.width/2 + car.width/2){
  car.velocityX = 0;
  deformation = speed * speed * weight * 0.5/22500;
}
if(deformation < 100)
{
car.shapeColor = color(0, 255, 0)
}

if(deformation > 100 && deformation < 180 )
{
car.shapeColor = color(230, 230, 0)

}

if(deformation > 180)
{
car.shapeColor = color(255, 0, 0);
}

drawSprites();
}
