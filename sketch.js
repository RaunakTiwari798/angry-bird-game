const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1 , box2,box3 , box4,box5;
var ground;
var pig1,pig2
var log1,log2,log3,log4
var bird
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,500,70,70);
    box2 = new Box(940,500,70,70);
    ground = new Ground(600,590,1200,20);
    pig2 = new Pig(820,460);
    pig1 = new Pig(820,500);
    log1 = new Log(820,480,320,PI/2);
    box3 = new Box(705,460,70,70);
    box4 = new Box(940,460,70,70);
    log2 = new Log(820,430,320,PI/2);
    box5 = new Box(820,400,70,70);
    log3 = new Log(760,370,170,PI/7);
    log4 = new Log(870,370,170,-PI/7);
    bird = new Bird(200,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   ground.display();
   pig1.display();
   log1.display();
   box3 .display();
   box4.display();
   pig2.display();
   log2.display();
   box5.display(); 
   log3.display();
   log4.display();
   bird.display();
}