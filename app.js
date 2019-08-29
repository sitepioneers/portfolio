/*
============================================
; Title:  Personal Portfolio
; Author: April Auger
; Date:   24 August 2019
; Description: Server configurations for routing
; 			   and navigation using Express
;===========================================
*/

// Required modules
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

// Start program

// Variable storing a new Express application
var app = express();

// Sets up path to assets directory
var assets = path.resolve(__dirname, "assets");

// Sends static files from the assets directory
app.use('/assets', express.static(assets));

// Set the location for the views folder
app.set("views", path.resolve(__dirname, "views"));

// Set app to use the EJS templating engine
app.set("view engine", "ejs");

// Use the logger
app.use(logger("short"));

// Get a request and return a response to index.ejs
app.get("/", function(request, response) {
	response.render("index", {
		title: "Hello, I'm April Auger",
		subtitle: "Web Developer & Graphic Designer"
	});
});

// Create a server and listen on port 8080
http.createServer(app).listen(8080, function() {
	console.log("Application started on port %s", 8080);
});

