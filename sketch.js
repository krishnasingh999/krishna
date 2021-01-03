

function setup(){
    var canvas = createCanvas(800,600);
L=createSprite(195,580,200,30);
L.shapeColor="blue";
N=createSprite(415,580,200,30)
N.shapeColor="white";
Light=createSprite(640,580,220,30)
Light.shapeColor="red"
pradeep=createSprite(random(20,750),100,40,40)
pradeep.shapeColor="yellow"
pradeep.velocityX=1.8
pradeep.velocityY=3.6
   
}

function draw(){
    background(0);
  var Edges= createEdgeSprites();
   pradeep.bounceOff(Edges)
   if(pradeep.isTouching(L)&&pradeep.bounceOff(L)){
       pradeep.shapeColor=rgb(48,22,8)
   }
   if(pradeep.isTouching(N)){
       pradeep.velocityX=0.00000000000000000000001;
       pradeep.velocityY=0.0000000000000000000000000000001;
       pradeep.shapeColor="green";
   }
   if(pradeep.isTouching(Light)&&pradeep.bounceOff(Light)){
    pradeep.shapeColor="red"
}
drawSprites();
}

