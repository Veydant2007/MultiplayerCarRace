
var database
var allPlayers
var position
var gState, pCount
var gameobj,formobj,playerobj
var car1,car3,car2,car4,cars,track,car1Image,car3Image,car2Image,car4Image
function preload(){
    car1Image = loadImage("images/car1.png")
    car2Image = loadImage("images/car2.png")
    car3Image = loadImage("images/car3.png")
    car4Image = loadImage("images/car4.png")
    track = loadImage("images/track.jpg")
}
function setup(){
    createCanvas(displayWidth,displayHeight);

    gState = 0;
    pCount = 0;
   
    gameobj = new Game();
    formobj = new Form();
    playerobj = new Players();

    database = firebase.database()
    gameobj.getGameState()
    gameobj.start()

}

function draw(){
    background("white");

 if (pCount == 4 && gState == 0){
     gState = 1
gameobj.updateGameState()
 }
 if(gState == 1 || gState==2 ){
    clear()
    gameobj.play()
    
 }
  if(gState == 2){
      formobj.showDivForRank("Congratulations, you have secured rank : " + playerobj.rank);
  }
}

