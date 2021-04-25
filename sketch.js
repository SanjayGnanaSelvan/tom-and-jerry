
var tom, jerry
var garden

var tomImg, jerryImg
var tomImg1, jerryImg1
var tomImg2, jerryImg2
var gardenImg



function preload(){
  
  
  gardenImg = loadImage("garden.png");
  tomImg = loadAnimation("images/cat1.png");
  tomImg1 = loadAnimation("Img/cat2.png","Img/cat3.png");
  tomImg2 = loadAnimation("cat4.png");
  
  jerryImg = loadAnimation("mouse1.png");
  jerryImg1 = loadAnimation("mouse2.png", "mouse3.png");
  jerryImg2 = loadAnimation("mouse4.png");
  
}

function setup(){
  createCanvas(400, 400);
  
  // garden = createSprite(150,100, 400, 400);
  // garden.addImage(garden.png);


}


function draw() {
  background(220);
}