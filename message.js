var tinder = require('tinderjs');
var client = new tinder.TinderClient();
var _ = require('underscore')

var mesg = "Hey, you shuold check out this cool new _____";
function getUpdates(){
  client.authorize(    
    "YOU NEED YOUR ACCESS TOKEN HERE", 
    "YOU NEED YOUR FACEBOOK ID HERE",
    function() {
      var defaults = client.getDefaults()
      var recs_size = defaults.globals.recs_size;
      //console.log("looking for updates");
      client.getUpdates(function(error, data){
        if(data != null && data.matches != [] && data.matches.length != 0){
          var res = data.matches;
          for(var i=0; i < res.length; i++){
            if(res[i].messages == null || res[i].messages == [] || res[i].messages.length == 0){
                console.log(data.matches[i]);
                client.sendMessage(res[i].id, mesg, function(){});
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
setInterval(getUpdates, 5000);
