//datatype
//numeric,string,boolean,null,undefined
var a=13;
var b="isha";
var c = true;
var d = null;
var e;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

//array
arr = [12,"we",true,28,"abc"];
console.log(arr);
console.log(arr.length);
console.log(arr[4]);

arr.push("isha");
arr.push("garima");
console.log(arr);

arr.pop();
console.log(arr);

//array inside array
arr1 = [[12,true,"abc"],[12,false,"isha"],["garima",28],"mnb",[13]];
console.log(arr1);
console.log(arr1.length);
console.log(arr[1][1]);

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var gs="sling"
var score=0

function preload() {
   
    gettime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);
    

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});


  
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
 }

 textSize(30)
 text("score: "+score,1000,50)
 

 
 
   
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.scoress()
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.scoress()
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if(gs==="sling"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gs="notsling"
}




function keyPressed(){
    if(keyCode===32&& bird.body.speed<1){
    Matter.Body.setPosition(bird.body,{x:200,y:50})
    gs="sling";
    bird.path=[];    
     slingshot.attach(bird.body)
    }
}

async function gettime(){
 var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata") ;
 var format1=await response.json();
 var datetime1=format1.datetime
 var hour1=datetime1.slice(11,13);
 
 if(hour1>07 && hour1<19 ){
backgroundImg=loadImage("sprites/bg.png")
}

else {
   backgroundImg=loadImage("sprites/night image.jpg") 
}

console.log(hour1)
}