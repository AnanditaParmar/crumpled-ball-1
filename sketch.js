
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin1;
var dustbin2;
var dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    paper=new Paper(100,500);
	ground=new Ground(600,690,1200,20);
	dustbin1=new Dustbin(800,630,20,100);
	dustbin2=new Dustbin(890,670,200,20);
	dustbin3=new Dustbin(980,630,20,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin3.display();
  dustbin2.display();
  drawSprites();
  
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-45})
	}
}

