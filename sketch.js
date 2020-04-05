const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(455,360,240,100);
    box2  = new Box(765,360,240,100);
    box3 = new Box(614,260,550,100);

}

function draw(){
    background(0);
    Engine.update(engine);
    fill ("red");
    triangle(476,94,360,220,540,220);
    triangle(770,94,654,220,840,220);

    //triangle(375,180,360,210,390,210);
    //triangle(405,180,420,210,390,210);
    console.log(mouseX +","+mouseY)
    box1.display();
    box2.display();
    box3.display();
}  