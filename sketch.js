const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;
   
   ground1 = new Ground(200,380,2000,20)
   box1 = new Box(223,70,30,55)
   box2 = new Box(230,60,20,45)
   box3 = new Box(200,80,50,80)
   pig1 = new Pig(280,50)
   bird1 = new Bird(220,40)
   log = new Log(300,50,80,PI/2)
}

function draw(){
    background(200);
    Engine.update(engine);
    ground1.display()
    box1.display();
    box2.display()
    box3.display()
    pig1.display()
    bird1.display()
    log.display()
}
