const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine, world;
var A,R,N,V;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

}

function draw() {
  background(180);
  Engine.update(engine);

  A = new a(Math.round(Math.random));
  R = new r(Math.round(Math.random));
  N = new n(Math.round(Math.random));
  V = new v(Math.round(Math.random));

  A.display();
  R.display();
  N.display();
  V.display();

  
}