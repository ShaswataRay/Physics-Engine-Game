const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var batsman, stumps;
var ground;
var ball, sling;
var bowlerImg;

var bgImg;
var score = 0;
var wickets = 0;
var MaxWickets = 30;

var gameState = "play";

function preload(){
  // FOR PRELOADING BACKGROUND AND BOWLER IMG
bgImg = loadImage("IMAGES/stadium.jpg");
bowlerImg = loadImage("IMAGES/bowler.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
engine = Engine.create();
world = engine.world;

ground = new Ground(windowWidth/2, 600, windowWidth, 50);
batsman = new Batsman(1100, 550, 65, 100);
stumps = new Wickets(1350, 550, 40, 150);
ball = new Ball(200, 450, 20, 20);
sling = new Sling(ball.body, {x: 240, y: 455});

// PLEASE READ README.MD FOR THE IDEA OF WHAT THIS IS
}

function draw() {
  background(bgImg);  

  // FOR THE TEXT OF RUNS WICKETS AND MAX WICKETS
  fill("yellow");
  textSize(25);
  text("Runs: " + score, 50,50);
  text("Wickets: " + wickets, 50, 100);
  text("MAX WICKETS: " + MaxWickets, 1200, 50);
  text("Press spacebar to get back ball", 600, 50);

Engine.update(engine);

  ground.display();
  image(bowlerImg, 200, 400, 80, 200);
  batsman.display();
  stumps.display();
  sling.display();
  ball.display();
  
detectcollision();
detectcollision2();

if(wickets >= MaxWickets){
gameState = "end";
textSize(40);
text("GAME OVER", 680, 300);
text("Runs: "+ score, 680, 350);

}


console.log(ball.body.velocity.x);
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
sling.fly();
}

//SO THAT IF THE BALL TOUCHES THE BATSMAN THEN SCORE WILL BE + 1
function detectcollision(){
var distance = dist(ball.body.position.x, ball.body.position.y, batsman.body.position.x, batsman.body.position.y);

if((distance <= ball.width + batsman.width) && ball.body.velocity.x > 20){
score = score + 1
}
}

//SAME HERE AS WELL BUT WICKETS WILL BE + 1
function detectcollision2(){
  var distance = dist(ball.body.position.x, ball.body.position.y, stumps.body.position.x, stumps.body.position.y);
  
  if((distance < ball.width + stumps.width) && ball.body.velocity.x >5){
  wickets = wickets + 1;
  }
  }

  // TO MAKE THE BALL RETURN TO THE BOWLERS HAND
  function keyPressed(){
    if(keyCode === 32){
      Matter.Body.setPosition(ball.body, {x: 240, y: 455});
      sling.attach(ball.body);
    }
  }