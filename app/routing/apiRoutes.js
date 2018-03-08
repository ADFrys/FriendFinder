var path = require("path");

var friendData = require("../data/friends");


module.exports = function(app) {

// Get friend data from friend api
  app.get("/api/friends", function(req, res) {
  res.json(friendData);
  });

// Post matching friend to friend api
  app.post("/api/friends", function(req, res) {

    var friendArray = req.body['scores[]'];
    var closestMatch = 0;
    var scoresArray = [];
    var friendArrayInt = [];
    var friendDataArr = [];
    var totalDifferenceArr = []; 

// For loop to push user provided scores (quiz answers) that are currently strings into the friend Array and change them into integers. 
    for (var i=0; i<friendArray.length; i++) {
      friendArrayInt.push(parseInt(friendArray[i]));
    }

// Friend data (the data from the friend api), will be pushed into a temporary array (and ultimately into an object). 
    for (var j=0; j<friendData.length; j++) {
      var friendDataTemp = friendData[j];
      var friendDataInt = [];
// The for loop is adding every friend name (from the friend api) to the friend data object
      var friendDataObj = {
        name: friendDataTemp.name 
      }
// Friend data (data from friend api) is looped through, converted from strings to integers and pushed into an array (which will be pushed into an object)
      for (var k=0; k<friendDataTemp.scores.length; k++) {
        friendDataInt.push(parseInt(friendDataTemp.scores[k]));
      }
// The friendDataObj only contained friend names before, now it will contain the calculated difference between the users scores and the api friend scores. 
// This happens when the calculateDifference function is called (see details below). This is pushed into the friend data object (array pushed into the object)
      friendDataObj.totalDifferenceCalc = calculateDifference(friendArrayInt, friendDataInt);
      friendDataArr.push(friendDataObj);
      }

// This is the calculateDifference function mentioned above. This function subtracts the difference between the user scores and the friend api scores.
// It takes the absolute value of these scores. The scores are added to find the total difference.
    function calculateDifference(friendArrayInt, friendDataInt) {
      var totalDifference = 0;
      for (var l=0; l<friendArrayInt.length; l++) {
        var difference = Math.abs(friendArrayInt[l]-friendDataInt[l]);
        totalDifference += difference;
      }
// The total difference scores are pushed into an arry
      totalDifferenceArr.push(totalDifference);
      return totalDifference;
    }

// This function finds the minimum number in the total difference array. 
    function arrayMin(totalDifferenceArr) { 
        return Math.min.apply(Math, totalDifferenceArr); 
    };   

// set the closest match variable equal to the value returned from the arrayMin function. Now closest match contains the totalDifference that is closest to zero.
    closestMatch = arrayMin(totalDifferenceArr);

// The friendmatch function returns the name of the character that is the closest match (name that matches up with the scores data from the friend api that has
// the smallest total difference from the users scores)
    var friendmatch = function() {
      for (var m=0; m<friendDataArr.length; m++) {
        if (friendDataArr[m].totalDifferenceCalc === closestMatch) {
          console.log(friendDataArr[m].name);
          return friendDataArr[m].name;
        }
      }
    }; 
    friendmatch();

  });
};
