var tinder = require('tinderjs');
var client = new tinder.TinderClient();
var _ = require('underscore')

// https://www.facebook.com/dialog/oauth?client_id=464891386855067&redirect_uri=https://www.facebook.com/connect/login_success.html&scope=basic_info,email,public_profile,user_about_me,user_activities,user_birthday,user_education_history,user_friends,user_interests,user_likes,user_location,user_photos,user_relationship_details&response_type=token

var liked = 0;
var likes = 0;
function checkNow(){
  console.log('Number liked: ' + liked);
  console.log('Number likes: ' + likes);
  client.authorize(
    "YOU NEED YOUR ACCESS TOKEN HERE", 
    "YOU NEED YOUR FACEBOOK ID HERE",
    function(error, data) {
      //console.log(error, data);
      var defaults = client.getDefaults()
      var recs_size = defaults.globals.recs_size;
      
      client.getRecommendations(recs_size, function(error, data){
        if(data != null && data.results != undefined){
          var res = data.results;
          for(var i=0; i < res.length; i++){
            //console.log(res[i].name + " : "+ res[i]["_id"]);
            //console.log(JSON.stringify(res[i].photos));
            client.like(res[i]["_id"], function(error, data) {
                if(data == null){
                  //
                }else if(error != null) {
                  console.log(error);
                }else{
                  if(data.match == true || data.match == "true"){
                    likes = likes + 1;
                    //client.sendMessage(res[i]["_id"], "Hey, did you wanna talk for a bit?", function(error, data){
                      //console.log(data);
                    //});
                  }else{
                    //console.log("noped");
                  }
                  liked = liked + 1;
                }
            });
          }
        }else{
          console.log("No results");
        }
    });
  });
}
//checkNow();
setInterval(checkNow, 1000);
