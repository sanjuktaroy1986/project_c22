const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG,packageIMG;
var packageBody,ground;
var myengine,myworld;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 600);
	myengine = Engine.create();
	myworld = myengine.world;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 580, width, 20 , {isStatic:true} );
 	World.add(myworld, ground);
	
	packageBody = Bodies.rectangle(width/2 , 200 , 5 , 5, {restitution:1, isStatic:true});
	World.add(myworld, packageBody);
	
}


function draw() {
	
  background(0);
  Engine.update(myengine);
  
  //draw ground
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,width,20);
  
  //draw package
  imageMode(CENTER);
  image(packageIMG,packageBody.position.x,packageBody.position.y,40,40)
  
  //draw helicopter
  image(helicopterIMG,width/2,200,250,150);

  if(keyDown("DOWN_ARROW")){
	Body.setStatic(packageBody,false);
  }

  }




