class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
   Player.getPlayerInformation()
   if(allPlayers!==undefined)
   {
     var display_position=100
     for(var plr in allPlayers)
     {
       if(plr==="player"+player.index)
       fill("blue")
       else
       fill("red")
     }
    display_position=display_position+15
    textSize(20)
    text(allPlayers[plr].name +":"+allPlayers[plr].distance,120,display_position)
   }
   if(keyDown(UP_ARROW) && player!==null)
{
  player.distance=player.distance+100
  player.update()
}
}}

