const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerbase, player, playerbase;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
  computerbase = new ComputerBase();
  playerbase = new PlayerBase(300,random(450,height -300),180,150);
  player = new Player(285,playerBase.body.position.y - 153,50,180);
   //Create Player Base and Computer Base Object


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  computerbase.display();
  playerbase.display();
  player.display();
   //Display Playerbase and computer base 


   //display Player and computerplayer


}
