
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paperObject = new Paper(100,590,25);
	side1 = new Trashcan(650,590,90,10);
	side2 = new Trashcan(605,570,10,40);
	side3 = new Trashcan(695,570,10,40);

	ground =  new Ground(400,600,800,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  //textSize(40)
  text("Press different button here!", 300, 200);
  
  drawSprites();

  keyPressed();
 
  paperObject.display();
  side1.display();
  side2.display();
  side3.display();
  ground.display();

}


function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:1,y:-5});
	}
}



