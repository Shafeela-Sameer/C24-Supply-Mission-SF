
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, paperBall;

var dbLeft,dbBottom,dbRight;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = new Paper(100,500,25); 
	ground=new Ground (400,580,width,20);

	dbLeft=new Dustbin (590,500,20,100);
	dbRight=new Dustbin (750,500,20,100);
	dbBottom=new Dustbin (670,560,180,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 paperBall.display(); 
 dbLeft.display();

 dbRight.display();
 dbBottom.display();

ground.display();
  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:100,y:-100})

	}


}

