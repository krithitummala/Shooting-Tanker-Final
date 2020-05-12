const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tanker,ground,ball1,ball2;
function setup(){
    var canvas = createCanvas(800,500);
    engine = Engine.create();
    world = engine.world;

    tanker = new Tanker(150,400,300,200);
    ground = new Ground(600,height,1200,20)
    
    ball1= new Ball(400,200,25);
    ball2= new Ball(500,150,25);
    
}

function draw(){
    background(280,280,280);
    Engine.update(engine);
    tanker.display();
    ground.display();
    
    ball1.display();
    ball2.display();
    

}