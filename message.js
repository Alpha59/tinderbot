var tinder = require('tinderjs');
var client = new tinder.TinderClient();
var _ = require('underscore')

var mesg = "Hey, you shuold check out this cool new _____";
function getUpdates(){
  client.authorize(
   
       function() {
         "YOU NEED YOUR ACCESS TOKEN HERE", 
         "YOU NEED YOUR FACEBOOK ID HERE",
      var defaults = client.getDefaults()
      var recs_size = defaults.globals.recs_size;
      //console.log("looking for updates");
      client.getUpdates(function(error, data){
        if(data != null && data.matches != []){
          //console.log(data.matches);
          var res = data.matches;
          for(var i=0; i < res.length; i++){
            if(data.matches[i].messages == []){
                console.log(data.matches[i]);
                //client.sendMessage(data.matches[i].messages[data.matches[i].messages.length-1].from, mesg, function(){});
            }else{
              console.log("No new updates");
            }
          }
        }else{
          console.log("No results");
        }
    });
  });
}
//checkNow();
setInterval(getUpdates, 1000);
