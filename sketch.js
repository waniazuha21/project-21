var wall,thickness;

var bullet,speed, weight;

 



function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet.weight=random(30,52);
  bullet.speed=random(223,321);


  wall=createSprite(1200,200,thickness, height/2);
}

function draw() {
  background(255,255,255); 
  car.velocityX=speed;
  wall.shapeColor=color(80,80,80)

  if (bullet.isTouching(wall)) {
        bullet.velocityX=0;
        bullet.collide(wall);
    
  }

  
  if (wall.x-car.x < (car.width+wall.width)/2)
{ 
  car.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>12.43)
  { 
    car.shapeColor=color(255,0,0);
}

if(deformation<180 && deformation>100)
{ 
  car.shapeColor=color(230,230,0);
}
if (deformation<3.68)
{ 
   car.shapeColor=color(0,255,0)
}
}


  drawSprites();
}