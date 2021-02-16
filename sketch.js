
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var balld;
var ground;
var b1, b2, b3
var chain


function preload(){

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	balld = new Ball(200,200);
	ground = new Ground(200,height,1200,20);
	b1 = new Trash(400,650,50,100);
	chain = new Chain(balld.body,{x:200, y:300});

	Engine.run(engine);
}


function draw() {
	Engine.update(engine);
 	background(200);

  	balld.display();
  	ground.display();
	b1.display();
	chain.display();
}

function mouseDragged(){
    Matter.Body.setPosition(balld.body, {x: mouseX , y: mouseY}); 
}

function mouseReleased(){
    chain.FVH()
}


