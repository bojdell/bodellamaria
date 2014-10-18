var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient
	, assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/quotesdb';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	console.log("Connected correctly to server");

	db.close();
});

app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
	res.redirect("/index.html");
});

// app.get("/api/dailyquote", function (req, res) {
// 	res.send()
// });

app.listen(80);
console.log("Listening on port 80");

