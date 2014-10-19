var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient
	, assert = require('assert');

// Connection URL
var url = 'mongodb://bodecker.me:27017/quotesdb';
var connection = null;
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	console.log("Connected correctly to server");
	connection = db;
});

app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
	res.redirect("/index.html");
});

app.get("/quotes", function (req, res) {
	res.redirect("/quotes.html");
});

app.get("/api/quotes", function (req, res) {
    var quotes = connection.get('quotes');
	res.send(quotes.find({}))
});

app.listen(80);
console.log("Listening on port 80");

