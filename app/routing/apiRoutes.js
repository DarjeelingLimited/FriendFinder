//Dependencies
// npm package that we will use to give our server useful functionality
//var path = require("path");

// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends 
// ===============================================================================
var friends = require("../data/friends.js");

module.exports = function (app) {
  // API GET Requests
  app.get("/api/friends", function (req, res) {
    console.log("Reading the API");
    res.json(friends);

  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // When a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a friends survey ... this data is then sent to the server...
  // Then the server saves the data to the array)
  // ---------------------------------------------------------------------------



  app.post("/api/friends", function (req, res) {


    //store the result of the req.body + friends input

    //loop thru friends array
    //loop thru the scores
    //example from TA like: response.user[i] - friends[j]

    //var score = 0;
    //var bestFriendMatch = 50;
    //highest score that you could get (10 questions * 5 points each)

    //var newFriend = req.body;


    //newFriends = name of array in server.js
    //for (var i=0; newfriends.length; i++){
    //score = 0;
  }

  );

  friends.push(req.body);
  res.json(true);
};//end of function 

