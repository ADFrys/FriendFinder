var path = require("path");


var friendData = require("../data/friends");


module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
  res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {

    var friendArray = req.body;
    var difference;
    var totalDifference = 0;
    var closestMatch = 0;
    var scoresArray = [];

    console.log(friendArray);

    // for (var i=0; i<friendArray.length; i++) {
    //   difference = Math.abs(friendArray[i]-friendData[i]);
    //   totalDifference += difference;
    // }
    // scoresArray.push(totalDifference);
    // console.log(scoresArray);
    // console.log(totalDifference);

    // for (var i=0; i<scoresArray.length; i++) {
    //   if(scoresArray[i] <= scoresArray[closestMatch]) {
    //     closestMatch = i;
    //   }
    // }

    // var friendmatch = friendData[closestMatch];
    // res.json(friendmatch);
    // friendData.push(req.body);

  });
};

// var minimumDifference = Math.min.apply(null, differences);