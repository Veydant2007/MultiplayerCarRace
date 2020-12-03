class Game{
   constructor(){

   } 
   display(){

   }
   getGameState(){
       database
       .ref("/gameState")
       .on("value",function(data){
       gState = data.val()
       })
   }

 

   updateGameState(){
       database
       .ref("/")
       .update({gameState: gState})
   }
 async start(){
     car1 = createSprite(10,10,10,10)
     car3 = createSprite(10,10,10,10)
     car2 = createSprite(10,10,10,10)
     car4 = createSprite(10,10,10,10)
     car1.addImage(car1Image)
     car2.addImage(car2Image)
     car3.addImage(car3Image)
     car4.addImage(car4Image)
     cars=[car1,car2,car3,car4]
if(gState == 0){
    var playerCountRefer = 
    await
    database
    .ref("/playerCount")
    .once("value")
    if (playerCountRefer.exists()){
        pCount = playerCountRefer.val()
        playerobj.getPlayerCount()
        formobj.display()
    }

}
 }
 play(){
     playerobj.getRank()
Players.getPlayerDetails()
var x = 180;
var y = 0;
var index = 0;
formobj.hide();
image (track,0,-4*displayHeight,displayWidth,5*displayHeight)
if(allPlayers != undefined){
    for(var player in allPlayers){
      
        y = displayHeight- allPlayers[player].distance
        x = x+200
        cars[index].x = x
        cars[index].y = y
        if(index+1 == playerobj.index){
            camera.x = displayWidth/2
            camera.y = y
            fill (rgb(360,0,0))
            stroke ("yellow")
            strokeWeight (3)
            ellipse(x,y,60,60)
        }
        index = index+1
    }
    if(playerobj.index > 0 && gState == 1){
    if (keyDown(UP_ARROW)){
       playerobj.distance= playerobj.distance+50 
       playerobj.updatePlayerDetailes();
       
    }
}
if (playerobj.distance> 3700 && gState == 1){
    gState = 2
    playerobj.rank = playerobj.rank+1
    playerobj.updatePlayerDetailes()
    playerobj.updateCarsAtTheEnd()
}
    drawSprites();
}
 }
}