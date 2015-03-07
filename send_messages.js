var tinder = require('tinderjs');
var client = new tinder.TinderClient();
var _ = require('underscore')

var mesg = "This message is a test";


function getUpdates(){
  client.authorize(
    "YOU NEED YOUR ACCESS TOKEN HERE", 
    "YOU NEED YOUR FACEBOOK ID HERE",
    function() {
      //console.log("looking for updates");
      client.getHistory(function(error, data){
        //console.log(data);
        console.log(data.matches.length)
        for(var i =0; i<data.matches.length; i++){
           console.log("A MATCH!!");
            if(data.matches[i].messages.length == 0){
              console.log(data.matches[i]);
              console.log("Found One");
              client.sendMessage(data.matches[i]["_id"], mesg, function(error, data){
                console.log(data);
              });
            }
        }
    });
  });
}
//checkNow();
//setInterval(getUpdates, 100);
getUpdates();
