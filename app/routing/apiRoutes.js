var path = require("path");

var friendData = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
  res.json(friendData);
  });

    app.post("/api/friends", function(req, res) {
      var newFriendSurvey = req.body;

  	  friendData.push(newFriendSurvey);
  	  res.json(friendData);


  });
};

// Convert results into an array of numbers
var friendArray = [5, 1, 4, 4, 5, 1, 2, 5, 4, 1];
var userArray = [3, 2, 6, 4, 5, 1, 2, 5, 4, 1];
var difference;
var totalDifference = 0;
var closestMatch = 0;

for (var i=0; i<friendArray.length; i++) {
  difference = Math.abs(friendArray[i]-userArray[i]);
  totalDifference += difference;
}
console.log(totalDifference);

// If the total difference (for all questions) is closest to zero
// then disply the friend
// if (totalDifference === closestMatch) {
  
// }


// var array = [];

// function closest(array,num){
//     var i=0;
//     var minDiff=1000;
//     var ans;
//     for(i in array){
//          var m=Math.abs(num-array[i]);
//          if(m<minDiff){ 
//                 minDiff=m; 
//                 ans=array[i]; 
//             }
//       }
//     return ans;
// }

// /*call array name and desired value to be closet */
// alert(closest(array,88));