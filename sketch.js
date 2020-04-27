const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine, world;
var A,R,N,V,w,x,y,z;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

}

function draw() {
  background(180);
  Engine.update(engine);

  A = new a(Math.round(random(0,800)));
  R = new r(Math.round(random(0,800)));
  N = new n(Math.round(random(0,800)));
  V = new v(Math.round(random(0,800)));

  A.display();
  R.display();
  N.display();
  V.display();

  
}