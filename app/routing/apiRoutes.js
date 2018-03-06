var path = require("path");

var friendData = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
  res.json(friendData);
  });

    app.post("/api/friends", function(req, res) {
  	friendData.push(req.body);
  	res.json(friendData);
  });
};

// Convert results into an array of numbers
var newFriendArray = [5, 1, 4, 4, 5, 1, 2, 5, 4, 1];
var testArray = [3, 2, 6, 4, 5, 1, 2, 5, 4, 1];
var difference = [];
var totalDifference;

for (var i=0; i<newFriendArray.length; i++) {
	difference = Math.abs(newFriendArray[i]-testArray[i]);
	// totalDifference += i;
	// console.log(totalDifference);
	// console.log(sum(difference));
}
	// console.log(difference[0]);
	// var totalDifference = difference.reduce((total, amount) => total + amount);
	// console.log(totalDifference)


