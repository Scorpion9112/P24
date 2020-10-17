
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
	box1=new Bin(500,650,200,20)
	box2=new Bin(610,610,20,100)
	box3=new Bin(390,610,20,100)
	ground=new Ground(400,670,800,20)
	ball=new Paper(20,660,25,25)
	Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  box1.display()
  box2.display()
  box3.display()
  ground.display()
  ball.display()
}
function keyPressed(){
if (keyCode===38){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
}
}
function keyPressed1(){
	if (keyCode===40){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:-85,y:-85})
	}
	}


