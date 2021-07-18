const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
var engine,world,box,ball;
function setup(){
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var box_options = {
    isStatic: true
  }
  box = Bodies.rectangle(200,350,400,20,box_options);
  World.add(world,box);

  var ball_options = {
    restitution: 0.7
  }
  ball = Bodies.circle(200,5,30,ball_options);
  World.add(world,ball);
}

function draw(){
background("black");
Engine.update(engine);
rectMode(CENTER);
ellipseMode(RADIUS);
rect(box.position.x, box.position.y,400,20);
ellipse(ball.position.x,ball.position.y,30);
}





