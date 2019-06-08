// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for the html
// ===============================================================================
var path = require("path");

module.exports = function(app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------
  
    app.get("/", function(req, res) {f
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  
    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    // app.get("/data", function(req, res) {
    //   res.sendFile(path.join(__dirname + "/../data/friends.js"));

    //   //I have tried changing this path multiple times and can't get the friends JSON to load anymore
    // });
  
    // // If no matching route is found default to home
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  };