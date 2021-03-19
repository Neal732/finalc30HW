const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, stand;
var b1, b2, b3, b4, b5, b6;
var c1, c2, c3, c4, c5, c6, stand2;
var hexagon, slingShot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    stand = new Ground(390,225,300,20);
    b1 = new block(360,195,30,40);
    b2 = new block(390,195,30,40);
    b3 = new block(420,195,30,40);
    b4 = new block(375,155,30,40);
    b5 = new block(405,155,30,40);
    b6 = new block(390,115,30,40);

    stand2 = new Ground(390+250,225-90,300,20);
    c1 = new block(360+250,195-90,30,40);
    c2 = new block(390+250,195-90,30,40);
    c3 = new block(420+250,195-90,30,40);
    c4 = new block(375+250,155-90,30,40);
    c5 = new block(405+250,155-90,30,40);
    c6 = new block(390+250,115-90,30,40);
    hexagon= new hexa(100,200,50,50);
    slingShot = new Slingshot(hexagon.body,{x:100, y:180});
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
    stand.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();

    stand2.display();
    c1.display();
    c2.display();
    c3.display();
    c4.display();
    c5.display();
    c6.display();
    hexagon.display(); 
    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingShot.attach(hexagon.body);
    }
}