// Sourced: HotRestaurant Class Activity
// Dependencies
// Series of npm packages that we will use to give our server useful functionality
var express = require("express");
//var path = require("path");

// Tells node that we are creating an "express" server
var app = express();


//Sets up the initial port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  
