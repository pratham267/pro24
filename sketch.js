

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);

    engine = Engine.create();
	world = engine.world;

    paper1=new paper(20,380);
	ground=new ground(400,height,800,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground.display();
  
  drawSprites();
 
}



