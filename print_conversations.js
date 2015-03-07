var tinder = require('tinderjs');
var client = new tinder.TinderClient();
var _ = require('underscore')

var mesg = "Hey, you shuold check out this cool new _____";
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
            if(data.matches[i].messages.length != 0){
              //console.log(data.matches[i])
              console.log("--------------------------> " + data.matches[i].messages.length);
              for(var j=0; j<data.matches[i].messages.length; j++){
                if(data.matches[i].messages[j].from == "YOUR TINDER ID"){
                  console.log('\t\t\t' +data.matches[i].messages[j].message);
                }else{
                  console.log(data.matches[i].messages[j].message);
                }
              }
              //console.log(JSON.stringify(data.matches[i].messages, null, '\t'));
            }
        }
    });
  });
}
//checkNow();
//setInterval(getUpdates, 100);
getUpdates();
