
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
const Body = Matter.Body;

var bob1,bob2,bob3,bob3,bob4,bob5
var holder
var rope1,rope2,rope3,rope4,rope5

function preload()
{
	
}

function setup() {
	createCanvas(1350, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(500,500,20)
	bob2 = new Bob(550,500,20)
	bob3 = new Bob(600,500,20)
	bob4 = new Bob(650,500,20)
	bob5 = new Bob(700,500,20)

	holder = new Roof(600,100,600,100)
	
	rope1 = new Rope(bob1.body,holder.body,-bobDiameter*2,0)
	rope2 = new Rope(bob2.body,holder.body,-bobDiameter*2,0)
	rope3 = new Rope(bob3.body,holder.body,-bobDiameter*2,0)
	rope4 = new Rope(bob4.body,holder.body,-bobDiameter*2,0)
	rope5 = new Rope(bob5.body,holder.body,-bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  holder.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



