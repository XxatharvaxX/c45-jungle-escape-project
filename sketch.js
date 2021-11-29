var bgImg;
var max, maxImg;
var platform, platformImg;
var gorilla, gorillaImg;
var plant, plantImg;
var apple,banana, berry, appleImg, bananaImg, berryImg;
var bottle, bottleImg;

function preload()
{
  bgImg = loadImage("./Assets/Jungle.jpg");
  platformImg = loadImage("./Assets/platform.jpg");
  gorillaImg = loadImage("./Assets/Gorrilla.png");
  plantImg = loadImage("./Assets/Plant.png");
  appleImg = loadImage("./Assets/Apple.png");
  bananaImg = loadImage("./Assets/Banana.png");
  berryImg = loadImage("./Assets/Berry.jpg");
  bottleImg = loadImage("./Assets/Water bottle.jpg");
  maxImg = loadImage("./Assets/Max.jpg");
}

function setup() {
  createCanvas(800,400);
  
  max = createSprite(200,300);
  max.addImage(maxImg);
  max.scale = 0.1;

  plant = createSprite(400,300);
  plant.addImage(plantImg);
  plant.scale = 0.13;
}

function draw() {
  background(bgImg);  
  drawSprites();

  if(keyDown("right"))
  {
    max.x += 10;
  }
  max.bounceOff(plant);
}