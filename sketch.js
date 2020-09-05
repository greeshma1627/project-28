
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 1600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
mango1 = new mango(100,200,30,20);
mango2 = new mango(250,250,30,10);
mango3 = new mango(200,300,10,10);
tree = new tree(400,500,30,45);
ground = new ground(450,500,800,700);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  mango1.display();
  mango2.display();
  mango3.display();
  tree.display();
  ground.display();
 
}
  function keyPressed(){
	  if(keycode === 32){
		  Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
		  launcherObject.attach(stoneObj.body);
	  }
  }

  function detectCollision(stone,mango){
mangoBodyPositioin=mango.body.position
stoneBodyPositioin=stone.body.position

var distance=dis(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=mango.r+stone.r)
{
Matter.Body.setStatic(mango.body,false);
}
  }



