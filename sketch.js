
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3;
var ground;
var ball;
var dustbin_image;

function preload()
{
	dustbin_image = loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Box2(650, 685, 100, 10);
	box2 = new Box(605, 665, 10, 100);
	box3 = new Box(695, 665, 10, 100);

	ground = new Ground(400, 695, 800, 10);

	ball = new Ball(100, 600, 20);

}


function draw() {
  background(220);
  Engine.update(engine);
  box2.display();
  box3.display();
  box1.display();
  ground.display();
  ball.display();
  //keyPressed();
  
 
}


function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position,{x:60, y:-60});
	}
}
