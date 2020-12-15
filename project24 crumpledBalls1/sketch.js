var paperImg, dustbinImg;
var packageBody, ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine, world;

/*function preload(){
   dusbinImg = loadImage("sprites/dustbin.png");
    papaerImg = loadImage("sprites/paper.jpg");
}*/

function setup(){
    createCanvas(1600,700);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2, 670, width, 20);

    ball = new Ball(200,450,70);

    rectangle1 = new dustbin(1470,580);
    //rectangle2 = new Rectangle(550,319,30,40);
    //rectangle3 = new Rectangle(650,319,30,40);
    
    //var Render = Render.create(
       // {element: document.body,
       // engine: engine,
   // options: {width: 1600, height: 700, wireframes:false}}
   // );

    Engine.run(engine);
    //Render.run(render);
}

function draw(){
    rectMode(CENTER);
    background("white");
    ground.display();
    ball.display();
    rectangle1.display();
 
    drawSprites();
}

function keyPressed(){
    if(keyCode === "UP_ARROW"){
     Matter.Body.applyForce(ball.body,ball.body.position,
        {x: 130, y: -145});
    }
}