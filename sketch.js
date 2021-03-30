var starImg,bgImg, fairyAnimation;
var star, starBody, fairy;
var ground;
var joySound;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	//load animation for fairy here
	fairyAnimation= loadAnimation("fairyimage1.png");
	joySound= loadSound("JoyMusic.mp3")

}

function setup() {
	createCanvas(800, 750);
	//joySound.play()
	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
	fairy= createSprite(300, 500);
	fairy.addAnimation("fairy", fairyAnimation);
	fairy.scale= 0.3;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	var ground_options= {
		isStatic: true
	}

	ground= Bodies.rectangle(400, 740, 600, 100,ground_options);
	World.add(world, ground)

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 10);

  if(keyDown("down")){
	  starBody.isStatic= false;
  }

  if(keyDown("left")){
	  fairy.x -=  10 
  }
 
  if(keyDown("right")){
	fairy.x += 10 
	}

	//fairy.bounceOff(leftEdge);
	//fairy.bounceOff(rightEdge);

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(starBody.position.y > 470){
	  starBody.isStatic= true
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	
}
