
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer;
var plane;
var stone;
var rubber;
var sand1, sand2, sand3, sand4;
var iron;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammer = new Hammer(100, 100);
plane = new Plane(800, 500, 1600,30);
stone = new Stone(500, 200);
rubber = new Rubber(500, 200, 40);
sand1 = new Sand(500, 200, 30);
sand2 = new Sand(520, 200, 30);
sand3 = new Sand(530, 200, 30);
sand4 = new Sand(540, 200, 30);
iron = new Iron(500, 200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  hammer.display();
  plane.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  iron.display();
  drawSprites();
 
}



