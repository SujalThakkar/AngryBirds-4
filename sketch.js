//namespacing or nicknaming
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//declaring global variables
var engine, world;
var box1, pig1;
var backgroundImg;
var platform;
var slingShot;

var box2,log1;
var box3;
var box4;
var pig2;
var box5;
var log2;
var log3;
var log4;
var log5;


function preload() {
    //to load the image
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    //to create the base for the game
    var canvas = createCanvas(1200,400);

    //created small engine for the ABG from the Matter.Engine class
    engine = Engine.create();
    //ABG's world is same as engine's world
    world = engine.world;

    //creating objects for the ABG
    ground = new Ground(600,height,1200,20)
    
    platform = new Ground(150,305,300,170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);

  

    //created chain from the Chain class
    slingShot = new SlingShot(bird.body,{x:200,y:100});

}

function draw(){
    //to add a background image
    background(backgroundImg);

    //to keep the engine updated
    Engine.update(engine);

    // to display all the objects
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();

    platform.display();

    slingShot.display();
}

function mouseDragged(){
 Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
   slingShot.fly()
}