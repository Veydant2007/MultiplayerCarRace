class Form{
    constructor(){
this.button = createButton("Register")
this.input = createInput("name")
this.title = createElement("h1")
this.greetings = createElement("h3")
this.resetButton = createButton("reset")
this.div= createDiv("")

    }

    hide(){
        this.input.hide()
this.button.hide()
this.greetings.hide()
    }
    display(){
this.title.position(200,10)
this.title.html("multiplayerCarGame")
this.input.position(200,130)
this.button.position(250,180)
this.resetButton.position(displayWidth - 200,50)
this.resetButton.mousePressed(()=>{
pCount = 0
playerobj.updatePlayerCount()
gState = 0
gameobj.updateGameState()
playerobj.rank = 0;
playerobj.updateCarsAtTheEnd()
})
this.button.mousePressed(()=> {
    playerobj = new Players() 

this.greetings.position(30,250)
var name= this.input.value()
this.greetings.html("Welcome " + name + " to this multiplayer car game. Waiting for other players")
pCount = pCount +1
playerobj.name = name
playerobj.index = pCount
playerobj.updatePlayerDetailes()
playerobj.updatePlayerCount()



})

    }

     showDivForRank(content){
        this.div.position(displayWidth/2,displayHeight/2)
        this.div.html(content)
        this.div.style("font-size","24px")
        this.div.style("color","red")
        console.log("veydant",content)
}


}