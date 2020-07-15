
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var dustbin_side1, dustbin_side2;

function setup() {
	createCanvas(800, 700);

	dustbin_side1 = createSprite(440,652,30,140);
	dustbin_side1.shapeColor = color(255,0,92);	
	
	dustbin_side2 = createSprite(249,652,30,140);
	dustbin_side2.shapeColor = color(255,0,92);	

	engine = Engine.create();
	world = engine.world;

	ball = new Paper(200,200,29);
    ground = new Ground(100,699,1900,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  ground.display();
  
  if(keyPressed("UP_ARROW")){
	Matter.Body.applyForce(ball.body, ball.body.position,{x:85,y:85})
  }

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:85,y:85})
	}
}

