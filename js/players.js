class Players{
    constructor(){
this.name = ""
this.distance = 0
this.index = 0
this.rank = 0
    }
    

        updateCarsAtTheEnd(){
            database
            .ref("/")
            .update({carsAtTheEnd:this.rank})
        }
        getRank(){
     database
     .ref("/carsAtTheEnd")
     .on("value",(data)=>{
     this.rank = data.val()
     })

        }

    
    getPlayerCount(){
        database
        .ref("/playerCount")
        .on("value", function(data){
            pCount = data.val()
        })
      
    }

    updatePlayerCount(){
       database
        .ref("/")
        .update({playerCount:pCount})
    }

    updatePlayerDetailes(){
        console,log(this.index)
        database
        .ref("player/player"+this.index)
        .update({name:this.name,distance:this.distance,rank:this.rank})

    }
    static getPlayerDetails(){
        database
        .ref("/player")
        .on("value", function(data){
allPlayers = data.val()

        })
    }
}