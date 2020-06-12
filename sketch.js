var bob1, roof, rope1


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
function setup() {

	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
}


function draw() {

  background(255);

  rectMode(CENTER);
 // var Text=text(mouseX+","+mouseY,mouseX,mouseY)

  bob1 = new Bob(200, 600);
  bob2 = new Bob(300, 600);
  bob3 = new Bob(400, 600);
  bob4 = new Bob(500, 600);
  bob5 = new Bob(600, 600);

  roof = new Roof();

  rope1 = new Rope(bob1.body, roof.body, -200, 500);
  rope2 = new Rope(bob2.body, roof.body, -100, 500);
  rope3 = new Rope(bob3.body, roof.body, 0, 500);
  rope4 = new Rope(bob4.body, roof.body, 100, 500);
  rope5 = new Rope(bob5.body, roof.body, 200, 500);


 /* rope1=new rope(bob1.body,roof.body,-bobDiameter*2, 0)

	rope2=new rope(bob2.body,roof.body,-bobDiameter*1, 0)
	rope3=new rope(bob3.body,roof.body,0, 0)
	rope4=new rope(bob4.body,roof.body,bobDiameter*1, 0)
	rope5=new rope(bob5.body,roof.body,bobDiameter*2, 0)

*/
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed() {

	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
  }
}
