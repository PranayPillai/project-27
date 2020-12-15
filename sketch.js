
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope;
var roofObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject = new Roof(0,250,800,20);

	rope = new Rope(bobObject1,roofObject,-bobDiameter*2,0);

	bobObject1 = new Ball(360,450,20);
	bobObject2 = new Ball(320,450,20);
	bobObject3 = new Ball(400,450,20);
	bobObject4 = new Ball(440,450,20);
	bobObject5 = new Ball(460,450,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roofObject.display();
  rope.display();
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(bobObject1.body,bobObject4.body.position,{x : 85, y : -85});
	}
  }